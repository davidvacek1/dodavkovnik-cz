import type { Metadata } from "next";
import { company } from "@/lib/data/company";

export const metadata: Metadata = {
  title: "Obchodní podmínky",
  description: "Obchodní podmínky pronájmu vozidel dodavkovnik.cz.",
  alternates: { canonical: "/obchodni-podminky" },
};

export default function OpPage() {
  return (
    <div className="section-tight">
      <div className="container-site max-w-3xl prose">
        <h1 className="text-[clamp(2rem,4vw,2.8rem)] font-bold">Obchodní podmínky</h1>
        <p className="mt-6 text-[var(--ink-muted)] leading-relaxed">
          Úplné znění obchodních podmínek obdržíte při převzetí vozidla. Základní
          pravidla pronájmu:
        </p>
        <ul className="mt-6 space-y-3 text-[var(--ink-muted)] leading-relaxed list-disc pl-6">
          <li>
            Pronajímatel: <strong>{company.name}</strong>, IČO {company.legal.ico},
            sídlo {company.address.full}.
          </li>
          <li>Při převzetí vozidla je nutné předložit 2 doklady totožnosti a řidičský průkaz.</li>
          <li>
            Minimální věk řidiče je 21 let a minimálně 2 roky praxe v řízení.
          </li>
          <li>
            Kauce se platí při převzetí a vrací se ihned po kontrole vozu v původním stavu.
          </li>
          <li>V ceně pronájmu je havarijní pojištění, silniční asistence a dálniční známka.</li>
          <li>
            Případné škody nad rámec havarijního pojištění (pneumatiky, interiér, podvozek)
            jsou k tíži nájemce.
          </li>
          <li>
            Vozidlo se vrací s plnou nádrží, vyčištěné; jinak účtujeme servisní poplatek.
          </li>
        </ul>
        <p className="mt-8 text-[var(--ink-muted)] leading-relaxed">
          Úplné znění vám na vyžádání zašleme e-mailem na{" "}
          <a href={`mailto:${company.email}`} className="text-[var(--brand-orange)] underline">
            {company.email}
          </a>
          .
        </p>
      </div>
    </div>
  );
}
