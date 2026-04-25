"use client";
import Image from "next/image";
import { useState } from "react";
import DividerMountains from "../dividers/DividerMountains";
import { company } from "@/lib/data/company";
import { categoryMeta, vehicles, type Category } from "@/lib/data/vehicles";
import {
  IconArrowRight,
  IconBolt,
  IconCalendar,
  IconPhone,
  IconShield,
  IconWallet,
} from "../ui/Icons";

function todayIso(offsetDays = 0) {
  const d = new Date();
  d.setDate(d.getDate() + offsetDays);
  return d.toISOString().slice(0, 10);
}

export default function Hero() {
  const primary = company.phones.find((p) => p.primary)!;
  const [state, setState] = useState<"idle" | "loading" | "ok" | "err">("idle");
  const [err, setErr] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("loading");
    setErr(null);
    const fd = new FormData(e.currentTarget);
    const payload = {
      pickupDate: fd.get("pickupDate"),
      pickupTime: fd.get("pickupTime"),
      returnDate: fd.get("returnDate"),
      returnTime: fd.get("returnTime"),
      vehicleSlug: fd.get("vehicleSlug"),
      name: fd.get("name"),
      phone: fd.get("phone"),
      email: fd.get("email"),
      note: fd.get("note"),
      hp: fd.get("hp"),
    };
    try {
      const res = await fetch("/api/poptavka", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json?.error ?? "Chyba při odeslání");
      setState("ok");
      (e.currentTarget as HTMLFormElement).reset();
    } catch (e: unknown) {
      setState("err");
      setErr(e instanceof Error ? e.message : "Zkuste to prosím znovu");
    }
  }

  return (
    <section className="relative isolate overflow-hidden bg-[var(--brand-navy)] text-white pb-16 md:pb-24">
      {/* Hero background */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/fotky/hero-background.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          quality={85}
          className="object-cover object-[center_60%] opacity-[0.65]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--brand-navy)] via-[var(--brand-navy)]/75 to-[var(--brand-navy)]/10" />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--brand-navy)]/95 via-[var(--brand-navy)]/30 to-transparent" />
        {/* Subtle radial orange glow */}
        <div
          aria-hidden
          className="absolute right-[-10%] top-[20%] w-[700px] h-[700px] rounded-full blur-[120px] opacity-25"
          style={{ background: "radial-gradient(circle, #eb6a2c 0%, transparent 60%)" }}
        />
      </div>

      <div className="container-site relative pt-14 pb-28 lg:pt-24 lg:pb-40 grid lg:grid-cols-[1.15fr_1fr] gap-10 lg:gap-16 items-center">
        {/* Left column */}
        <div>
          <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-semibold text-[var(--brand-orange)]">
            <span className="inline-block w-8 h-px bg-[var(--brand-orange)]" />
            Půjčovna dodávek Praha
          </span>
          <h1 className="mt-5 text-white font-[family-name:var(--font-display)] font-bold text-[clamp(2.2rem,5vw,3.8rem)] leading-[1.05] tracking-tight">
            Půjčte si dodávku v Praze{" "}
            <span className="text-[var(--brand-orange)]">snadno</span> a bez stresu.
          </h1>
          <p className="mt-6 text-white/80 text-lg max-w-xl leading-relaxed">
            Rychlé potvrzení rezervace, často předání vozu do hodiny. 21 typů vozidel
            od malé dodávky po chladicí skříň — vše z jedné pobočky v Praze 9.
          </p>

          <ul className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-xl">
            {[
              { icon: IconBolt, label: "Rychlé vyzvednutí", sub: "Často do 1 hodiny" },
              { icon: IconWallet, label: "Platba při převzetí", sub: "Nic neplatíte předem" },
              { icon: IconShield, label: "Pojištění v ceně", sub: "Havarijní + asistence" },
            ].map((it) => (
              <li
                key={it.label}
                className="flex items-start gap-3 rounded-lg bg-white/5 border border-white/10 px-4 py-3 backdrop-blur-sm"
              >
                <it.icon className="w-5 h-5 shrink-0 text-[var(--brand-orange)] mt-0.5" />
                <span className="text-[13px] leading-tight">
                  <span className="block text-white font-semibold">{it.label}</span>
                  <span className="block text-white/65">{it.sub}</span>
                </span>
              </li>
            ))}
          </ul>

          <div className="mt-9 flex flex-wrap gap-4 items-center">
            <a href="#hero-form" className="btn-primary">
              Rezervovat online
              <IconArrowRight className="w-4 h-4" />
            </a>
            <a
              href={primary.href}
              className="inline-flex items-center gap-2 text-white font-semibold hover:text-[var(--brand-orange)]"
            >
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/10 border border-white/20">
                <IconPhone className="w-4 h-4" />
              </span>
              {primary.number}
            </a>
          </div>
        </div>

        {/* Right column — booking form */}
        <div id="hero-form" className="relative">
          <div className="absolute -inset-3 bg-gradient-to-br from-[var(--brand-orange)]/25 via-transparent to-transparent rounded-3xl blur-2xl -z-10" />
          <form
            onSubmit={onSubmit}
            className="bg-white text-[var(--ink)] rounded-2xl shadow-2xl p-6 sm:p-8 space-y-5"
          >
            <header className="flex items-start justify-between gap-3">
              <div>
                <div className="text-xs uppercase tracking-[0.16em] font-semibold text-[var(--brand-orange)]">
                  Rezervace
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-[var(--brand-navy)] mt-1">
                  Zjistěte dostupnost
                </h2>
                <p className="text-sm text-[var(--ink-muted)] mt-1">
                  Odpovíme většinou do 1 hodiny. Rezervace vás k ničemu nezavazuje.
                </p>
              </div>
              <div className="shrink-0 hidden sm:flex items-center justify-center w-12 h-12 rounded-full bg-[var(--brand-orange-soft)] text-[var(--brand-orange)]">
                <IconCalendar className="w-6 h-6" />
              </div>
            </header>

            <div className="grid grid-cols-2 gap-3">
              <Field label="Vyzvednutí" name="pickupDate" type="date" defaultValue={todayIso(1)} required />
              <Field label="Čas" name="pickupTime" type="time" defaultValue="08:00" required />
              <Field label="Vrácení" name="returnDate" type="date" defaultValue={todayIso(2)} required />
              <Field label="Čas" name="returnTime" type="time" defaultValue="18:00" required />
            </div>

            <SelectField label="Typ vozu" name="vehicleSlug" defaultValue="">
              <option value="">— Vyberu později / poraďte mi —</option>
              {Object.entries(categoryMeta)
                .sort(([, a], [, b]) => a.order - b.order)
                .map(([key, meta]) => (
                  <optgroup key={key} label={meta.label}>
                    {vehicles
                      .filter((v) => v.category === (key as Category))
                      .map((v) => (
                        <option key={v.slug} value={v.slug}>
                          {v.shortName}
                        </option>
                      ))}
                  </optgroup>
                ))}
            </SelectField>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <Field label="Jméno" name="name" type="text" required autoComplete="name" />
              <Field label="Telefon" name="phone" type="tel" required autoComplete="tel" />
            </div>
            <Field label="E-mail" name="email" type="email" required autoComplete="email" />
            <TextareaField label="Poznámka (nepovinné)" name="note" rows={2} />

            {/* Honeypot */}
            <input type="text" name="hp" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />

            <button
              type="submit"
              disabled={state === "loading"}
              className="btn-primary w-full text-[15px] h-12 disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {state === "loading" ? "Odesílám…" : "Zkontrolovat dostupnost"}
            </button>

            {state === "ok" && (
              <div className="flex items-start gap-2 text-sm text-[var(--success)] bg-green-50 border border-green-200 rounded-lg px-3 py-2.5">
                <IconShield className="w-4 h-4 mt-0.5" />
                Odesláno. Ozveme se vám obvykle do 1 hodiny.
              </div>
            )}
            {state === "err" && (
              <div className="text-sm text-red-700 bg-red-50 border border-red-200 rounded-lg px-3 py-2.5">
                {err ?? "Odeslání se nezdařilo — zavolejte prosím na "}
                <a href={primary.href} className="font-semibold underline">
                  {primary.number}
                </a>
              </div>
            )}

            <p className="text-xs text-[var(--ink-soft)] text-center">
              Odesláním souhlasíte se{" "}
              <a href="/gdpr" className="underline">
                zpracováním osobních údajů
              </a>
              .
            </p>
          </form>
        </div>
      </div>
      <DividerMountains fill="var(--surface)" height={140} className="absolute inset-x-0 bottom-0" />
    </section>
  );
}

function Field({
  label,
  name,
  type,
  defaultValue,
  required,
  autoComplete,
}: {
  label: string;
  name: string;
  type: string;
  defaultValue?: string;
  required?: boolean;
  autoComplete?: string;
}) {
  return (
    <label className="block">
      <span className="block text-xs font-semibold uppercase tracking-wider text-[var(--ink-muted)] mb-1">
        {label}
      </span>
      <input
        type={type}
        name={name}
        defaultValue={defaultValue}
        required={required}
        autoComplete={autoComplete}
        className="w-full h-11 rounded-lg border border-[var(--border)] px-3 text-[15px] bg-white focus:outline-none focus:ring-2 focus:ring-[var(--brand-orange)]/40 focus:border-[var(--brand-orange)]"
      />
    </label>
  );
}

function SelectField({
  label,
  name,
  defaultValue,
  children,
}: {
  label: string;
  name: string;
  defaultValue?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="block text-xs font-semibold uppercase tracking-wider text-[var(--ink-muted)] mb-1">
        {label}
      </span>
      <select
        name={name}
        defaultValue={defaultValue}
        className="w-full h-11 rounded-lg border border-[var(--border)] px-3 text-[15px] bg-white focus:outline-none focus:ring-2 focus:ring-[var(--brand-orange)]/40 focus:border-[var(--brand-orange)]"
      >
        {children}
      </select>
    </label>
  );
}

function TextareaField({
  label,
  name,
  rows = 3,
}: {
  label: string;
  name: string;
  rows?: number;
}) {
  return (
    <label className="block">
      <span className="block text-xs font-semibold uppercase tracking-wider text-[var(--ink-muted)] mb-1">
        {label}
      </span>
      <textarea
        name={name}
        rows={rows}
        className="w-full rounded-lg border border-[var(--border)] px-3 py-2 text-[15px] bg-white focus:outline-none focus:ring-2 focus:ring-[var(--brand-orange)]/40 focus:border-[var(--brand-orange)]"
      />
    </label>
  );
}
