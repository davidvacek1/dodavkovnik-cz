import { NextResponse } from "next/server";
import { z } from "zod";
import { company } from "@/lib/data/company";
import { vehicleBySlug } from "@/lib/data/vehicles";

export const runtime = "nodejs";

// Lazy-init Resend — not at module scope (would break during Next.js static build).
type ResendLike = {
  emails: {
    send: (args: {
      from: string;
      to: string | string[];
      subject: string;
      html: string;
      reply_to?: string;
    }) => Promise<unknown>;
  };
};

let _resend: ResendLike | null = null;

async function getResend(): Promise<ResendLike | null> {
  if (_resend) return _resend;
  const key = process.env.RESEND_API_KEY;
  if (!key) return null;
  const { Resend } = await import("resend");
  _resend = new Resend(key) as unknown as ResendLike;
  return _resend;
}

const bodySchema = z.object({
  pickupDate: z.string().min(1),
  pickupTime: z.string().min(1),
  returnDate: z.string().min(1),
  returnTime: z.string().min(1),
  vehicleSlug: z.string().optional().or(z.literal("")),
  name: z.string().min(2).max(120),
  phone: z.string().min(6).max(40),
  email: z.string().email(),
  note: z.string().max(1000).optional().or(z.literal("")),
  hp: z.string().optional().or(z.literal("")),
});

// Very simple in-process rate limit by IP (resets on restart).
const hits = new Map<string, number[]>();
function allow(ip: string): boolean {
  const now = Date.now();
  const arr = (hits.get(ip) ?? []).filter((t) => now - t < 60_000);
  if (arr.length >= 5) return false;
  arr.push(now);
  hits.set(ip, arr);
  return true;
}

export async function POST(req: Request) {
  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    req.headers.get("x-real-ip") ||
    "unknown";

  if (!allow(ip)) {
    return NextResponse.json(
      { error: "Příliš mnoho pokusů, zkuste to prosím za minutu znovu." },
      { status: 429 },
    );
  }

  let raw: unknown;
  try {
    raw = await req.json();
  } catch {
    return NextResponse.json({ error: "Neplatný formát požadavku." }, { status: 400 });
  }

  const parsed = bodySchema.safeParse(raw);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Zkontrolujte prosím vyplněné údaje." },
      { status: 400 },
    );
  }

  const d = parsed.data;

  // Honeypot
  if (d.hp && d.hp.length > 0) {
    return NextResponse.json({ ok: true }); // silently succeed
  }

  const vehicle = d.vehicleSlug ? vehicleBySlug(d.vehicleSlug) : undefined;

  const subject = `Nová poptávka – ${d.name} (${d.pickupDate} ${d.pickupTime})`;
  const html = `
    <div style="font-family: system-ui, -apple-system, Arial, sans-serif; color:#1a1a1a; max-width:560px;">
      <h2 style="color:#0f2944;">Nová poptávka z dodavkovnik.cz</h2>
      <table style="border-collapse: collapse; width:100%; font-size:14px;">
        <tr><td style="padding:6px 0; color:#6b6b6b; width:170px;">Jméno</td><td style="padding:6px 0;"><strong>${escapeHtml(d.name)}</strong></td></tr>
        <tr><td style="padding:6px 0; color:#6b6b6b;">Telefon</td><td style="padding:6px 0;"><a href="tel:${escapeAttr(d.phone)}">${escapeHtml(d.phone)}</a></td></tr>
        <tr><td style="padding:6px 0; color:#6b6b6b;">E-mail</td><td style="padding:6px 0;"><a href="mailto:${escapeAttr(d.email)}">${escapeHtml(d.email)}</a></td></tr>
        <tr><td style="padding:6px 0; color:#6b6b6b;">Vyzvednutí</td><td style="padding:6px 0;">${escapeHtml(d.pickupDate)} v ${escapeHtml(d.pickupTime)}</td></tr>
        <tr><td style="padding:6px 0; color:#6b6b6b;">Vrácení</td><td style="padding:6px 0;">${escapeHtml(d.returnDate)} v ${escapeHtml(d.returnTime)}</td></tr>
        <tr><td style="padding:6px 0; color:#6b6b6b;">Typ vozu</td><td style="padding:6px 0;">${vehicle ? escapeHtml(vehicle.name) : "Nevybráno"}</td></tr>
        ${d.note ? `<tr><td style="padding:6px 0; color:#6b6b6b; vertical-align:top;">Poznámka</td><td style="padding:6px 0; white-space:pre-line;">${escapeHtml(d.note)}</td></tr>` : ""}
      </table>
      <p style="margin-top:20px; font-size:12px; color:#6b6b6b;">IP: ${escapeHtml(ip)}</p>
    </div>
  `;

  const resend = await getResend();
  if (!resend) {
    // No API key — log server-side and still respond OK so dev/preview works.
    console.warn("[poptavka] RESEND_API_KEY missing, printing payload:", d);
    return NextResponse.json({ ok: true, note: "Poptávka přijata (v preview režimu bez odeslání e-mailu)." });
  }

  try {
    await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL || "Dodavkovnik.cz <poptavky@dodavkovnik.cz>",
      to: process.env.POPTAVKA_TO || company.email,
      subject,
      html,
      reply_to: d.email,
    });
  } catch (e) {
    console.error("[poptavka] Resend failed:", e);
    return NextResponse.json(
      { error: "E-mail se nepodařilo odeslat, zavolejte prosím na " + company.phones[0].number },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}
function escapeAttr(s: string): string {
  return s.replace(/"/g, "%22");
}
