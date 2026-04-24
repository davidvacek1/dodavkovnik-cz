import type { Metadata } from "next";
import { company } from "@/lib/data/company";
import { IconLocation, IconMail, IconPhone } from "@/components/ui/Icons";

export const metadata: Metadata = {
  title: "Kontakt — Praha 9, Černý Most",
  description:
    "Půjčovna dodávek — Bryksova 940/35, Praha 9 Černý Most. Tel. +420 777 066 284, mecarent@seznam.cz. Otevřeno 7 dní v týdnu.",
  alternates: { canonical: "/kontakt" },
};

export default function KontaktPage() {
  return (
    <div>
      <section className="section-tight">
        <div className="container-site grid lg:grid-cols-[1fr_1.2fr] gap-12 items-start">
          <div>
            <span className="eyebrow">Kontakt</span>
            <h1 className="text-[clamp(2rem,4vw,3rem)] font-bold">Přijďte si pro dodávku</h1>
            <p className="mt-5 text-[var(--ink-muted)] text-lg leading-relaxed">
              Najdete nás v Praze 9 na Černém Mostě — hned u stanice metra B. Otevřeno máme
              každý den, vozy přebíráme i vracíme po domluvě.
            </p>

            <div className="mt-10 space-y-6">
              <ContactRow icon={<IconLocation className="w-5 h-5" />} title="Adresa">
                <address className="not-italic">
                  {company.name}
                  <br />
                  {company.address.street}
                  <br />
                  {company.address.zip} {company.address.city}
                </address>
              </ContactRow>

              <ContactRow icon={<IconPhone className="w-5 h-5" />} title="Telefony">
                <ul className="space-y-1.5">
                  {company.phones.map((p) => (
                    <li key={p.number}>
                      <a href={p.href} className="font-semibold text-[var(--brand-navy)] hover:text-[var(--brand-orange)]">
                        {p.number}
                      </a>
                      <span className="text-[14px] text-[var(--ink-soft)] ml-2">{p.label}</span>
                    </li>
                  ))}
                </ul>
              </ContactRow>

              <ContactRow icon={<IconMail className="w-5 h-5" />} title="E-mail">
                <a
                  href={`mailto:${company.email}`}
                  className="font-semibold text-[var(--brand-navy)] hover:text-[var(--brand-orange)] break-all"
                >
                  {company.email}
                </a>
              </ContactRow>

              <div className="pt-6 border-t border-[var(--border)] grid grid-cols-3 gap-3 text-[13px] text-[var(--ink-muted)]">
                <div>
                  <div className="uppercase text-[11px] tracking-wider text-[var(--ink-soft)] mb-1">IČO</div>
                  <div className="font-semibold text-[var(--ink)]">{company.legal.ico}</div>
                </div>
                <div>
                  <div className="uppercase text-[11px] tracking-wider text-[var(--ink-soft)] mb-1">DIČ</div>
                  <div className="font-semibold text-[var(--ink)]">{company.legal.dic}</div>
                </div>
                <div>
                  <div className="uppercase text-[11px] tracking-wider text-[var(--ink-soft)] mb-1">Dat. schránka</div>
                  <div className="font-semibold text-[var(--ink)]">{company.legal.datovaSchranka}</div>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-2xl overflow-hidden border border-[var(--border)] bg-[var(--surface-alt)] aspect-[4/3] lg:aspect-auto lg:h-[560px]">
            <iframe
              title="Mapa — Bryksova 940/35, Praha 9"
              src="https://www.google.com/maps?q=Bryksova+940%2F35%2C+Praha+9+-+%C4%8Cern%C3%BD+Most&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </section>
    </div>
  );
}

function ContactRow({
  icon,
  title,
  children,
}: {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex gap-5">
      <div className="w-11 h-11 rounded-lg bg-[var(--brand-orange-soft)] text-[var(--brand-orange)] flex items-center justify-center shrink-0">
        {icon}
      </div>
      <div>
        <div className="text-xs uppercase tracking-wider font-semibold text-[var(--ink-soft)] mb-1">
          {title}
        </div>
        <div className="text-[15px] text-[var(--ink)]">{children}</div>
      </div>
    </div>
  );
}
