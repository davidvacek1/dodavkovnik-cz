import type { Metadata } from "next";
import PriceTable from "@/components/home/PriceTable";
import { kmLimits } from "@/lib/data/company";

export const metadata: Metadata = {
  title: "Ceník pronájmu — dodávky, minibusy, nákladní vozy",
  description:
    "Kompletní ceník pronájmu dodávek v Praze. Všechna cenová pásma od 3 hodin po 1 měsíc, včetně kauce a limitů volných kilometrů.",
  alternates: { canonical: "/cenik" },
};

export default function CenikPage() {
  return (
    <div>
      <section className="section-tight">
        <div className="container-site max-w-3xl">
          <span className="eyebrow">Ceník</span>
          <h1 className="text-[clamp(2rem,4vw,3rem)] font-bold">Ceník pronájmu</h1>
          <p className="mt-5 text-[var(--ink-muted)] text-lg leading-relaxed">
            Ceny jsou uvedeny <strong>za celé období</strong> (nikoliv za den), a to včetně havarijního
            pojištění, silniční asistence a dálniční známky. Čím delší pronájem, tím nižší sazba.
          </p>
        </div>
      </section>

      <PriceTable />

      <section className="section-tight bg-[var(--surface-alt)]">
        <div className="container-site max-w-3xl">
          <h2 className="text-2xl font-bold font-[family-name:var(--font-display)] mb-5">
            Volné kilometry a dlouhodobý pronájem
          </h2>
          <ul className="space-y-3 text-[var(--ink-muted)] text-[15px] leading-relaxed">
            <li>• {kmLimits.weekend}</li>
            <li>• {kmLimits.days1to3}</li>
            <li>• {kmLimits.days4to7}</li>
            <li>• {kmLimits.longer}</li>
          </ul>
          <p className="mt-6 text-[14px] text-[var(--ink-soft)]">
            Další kilometry nad rámec limitu se účtují dle sazebníku. Pro konkrétní kalkulaci nás
            kontaktujte — ozveme se většinou ještě téhož dne.
          </p>
        </div>
      </section>
    </div>
  );
}
