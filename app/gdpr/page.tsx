import type { Metadata } from "next";
import { company } from "@/lib/data/company";

export const metadata: Metadata = {
  title: "Zpracování osobních údajů (GDPR)",
  description: "Informace o zpracování osobních údajů dodavkovnik.cz v souladu s GDPR.",
  alternates: { canonical: "/gdpr" },
};

export default function GdprPage() {
  return (
    <div className="section-tight">
      <div className="container-site max-w-3xl">
        <h1 className="text-[clamp(2rem,4vw,2.8rem)] font-bold">Zpracování osobních údajů</h1>
        <p className="mt-6 text-[var(--ink-muted)] leading-relaxed">
          Správcem osobních údajů je společnost <strong>{company.name}</strong>,
          IČO {company.legal.ico}, se sídlem {company.address.full}.
        </p>
        <h2 className="mt-10 text-xl font-bold font-[family-name:var(--font-display)]">
          Jaké údaje zpracováváme
        </h2>
        <p className="mt-3 text-[var(--ink-muted)] leading-relaxed">
          Údaje nezbytné pro uzavření smlouvy o pronájmu vozu: jméno, příjmení, adresa,
          telefon, e-mail, číslo občanského průkazu a řidičského průkazu. Z formuláře
          na webu zpracováváme pouze jméno, telefon, e-mail a vaše požadavky.
        </p>
        <h2 className="mt-10 text-xl font-bold font-[family-name:var(--font-display)]">
          Za jakým účelem
        </h2>
        <p className="mt-3 text-[var(--ink-muted)] leading-relaxed">
          Vyřízení poptávky, uzavření a plnění nájemní smlouvy, účetní a daňová evidence
          a v nezbytném rozsahu řešení pojistných událostí.
        </p>
        <h2 className="mt-10 text-xl font-bold font-[family-name:var(--font-display)]">
          Vaše práva
        </h2>
        <p className="mt-3 text-[var(--ink-muted)] leading-relaxed">
          Máte právo na přístup ke svým údajům, jejich opravu, výmaz, omezení zpracování
          nebo přenositelnost. Pro uplatnění práv nás kontaktujte na{" "}
          <a href={`mailto:${company.email}`} className="text-[var(--brand-orange)] underline">
            {company.email}
          </a>
          .
        </p>
        <p className="mt-10 text-[13px] text-[var(--ink-soft)]">
          Aktualizováno: 2026. Úplné znění politiky zasíláme e-mailem na vyžádání.
        </p>
      </div>
    </div>
  );
}
