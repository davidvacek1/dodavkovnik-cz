"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  categoryMeta,
  vehicles,
  type Category,
  type Vehicle,
} from "@/lib/data/vehicles";
import { IconArrowRight, IconBox, IconPhone, IconRoute, IconShield } from "../ui/Icons";
import { FadeIn, Stagger, StaggerItem } from "../ui/Motion";

type Tab = Category | "all";

function fmtKc(n: number) {
  return n.toLocaleString("cs-CZ");
}

function dayPrice(v: Vehicle): number | null {
  const t = v.prices.find((p) => p.label === "1–3 dny" || p.label === "Cena za den");
  return t && typeof t.price === "number" ? t.price : null;
}

function weekPrice(v: Vehicle): number | null {
  const t = v.prices.find((p) => p.label === "4–7 dní" || p.label === "Cena za týden");
  return t && typeof t.price === "number" ? t.price : null;
}

function monthPrice(v: Vehicle): number | null {
  const t = v.prices.find((p) => p.label === "1 měsíc");
  return t && typeof t.price === "number" ? t.price : null;
}

export default function PriceTable() {
  const [tab, setTab] = useState<Tab>("all");
  const list = vehicles.filter((v) => tab === "all" || v.category === tab);

  return (
    <section id="cenik" className="section bg-[var(--surface-alt)]">
      <div className="container-site">
        <FadeIn className="text-center max-w-2xl mx-auto">
          <span className="eyebrow">Ceník</span>
          <h2 className="text-[clamp(1.9rem,3.8vw,2.7rem)] font-bold">
            Transparentní ceník všech 21 vozů.
          </h2>
          <p className="mt-4 text-[var(--ink-muted)] text-lg">
            Čím delší pronájem, tím nižší sazba. V ceně je havarijní pojištění,
            silniční asistence a dálniční známka.
          </p>
        </FadeIn>

        <div className="mt-10 flex flex-wrap gap-2 justify-center" role="tablist" aria-label="Kategorie ceníku">
          <TabButton active={tab === "all"} onClick={() => setTab("all")}>
            Všechny vozy
            <span className="ml-2 text-xs opacity-70 font-normal">{vehicles.length}</span>
          </TabButton>
          {Object.entries(categoryMeta)
            .sort(([, a], [, b]) => a.order - b.order)
            .map(([key, meta]) => {
              const count = vehicles.filter((v) => v.category === (key as Category)).length;
              return (
                <TabButton
                  key={key}
                  active={tab === (key as Category)}
                  onClick={() => setTab(key as Category)}
                >
                  {meta.label}
                  <span className="ml-2 text-xs opacity-70 font-normal">{count}</span>
                </TabButton>
              );
            })}
        </div>

        <Stagger className="mt-10 grid md:grid-cols-2 xl:grid-cols-3 gap-5">
          {list.map((v) => (
            <StaggerItem key={v.slug}>
              <PriceCard v={v} />
            </StaggerItem>
          ))}
        </Stagger>

        <FadeIn className="mt-14 rounded-2xl bg-[var(--brand-navy)] text-white p-6 md:p-10 flex flex-col md:flex-row items-start md:items-center gap-6">
          <div className="w-12 h-12 rounded-xl bg-[var(--brand-orange)] flex items-center justify-center shrink-0">
            <IconRoute className="w-6 h-6 text-white" />
          </div>
          <div className="flex-1">
            <h3 className="font-[family-name:var(--font-display)] font-bold text-white text-lg md:text-xl mb-1">
              Volné kilometry máte v ceně
            </h3>
            <p className="text-white/75 text-[15px] leading-relaxed">
              Víkendový pronájem: <strong className="text-white">400 km</strong> ·
              Pronájem 1–3 dny: <strong className="text-white">300 km / den</strong> ·
              Pronájem 4–7 dní: <strong className="text-white">250 km / den</strong>.
              Další kilometry dle sazebníku — dlouhodobé pronájmy řešíme individuálně.
            </p>
          </div>
          <Link href="#hero-form" className="btn-primary text-[14px] shrink-0">
            Nezávazná rezervace
            <IconArrowRight className="w-4 h-4" />
          </Link>
        </FadeIn>

        <FadeIn className="mt-4 text-[13px] text-[var(--ink-soft)] text-center max-w-3xl mx-auto">
          * U vozů označených „Cenu potvrdíme" vám přesnou cenu pošleme obratem po odeslání poptávky.
          Minibusy, nákladní vozy a vozy s hydraulickým čelem mají vyšší kauci (uvedeno u každého vozu).
        </FadeIn>
      </div>
    </section>
  );
}

function TabButton({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      role="tab"
      aria-selected={active}
      onClick={onClick}
      className={`px-5 h-10 rounded-full font-semibold text-[14px] transition-colors border inline-flex items-center ${
        active
          ? "bg-[var(--brand-navy)] text-white border-[var(--brand-navy)]"
          : "bg-white text-[var(--brand-navy)] border-[var(--border)] hover:border-[var(--brand-navy)]"
      }`}
    >
      {children}
    </button>
  );
}

function PriceCard({ v }: { v: Vehicle }) {
  const day = dayPrice(v);
  const week = weekPrice(v);
  const month = monthPrice(v);
  const tiers = [
    { label: "3 h", val: v.prices.find((p) => p.label === "3 hodiny")?.price },
    { label: "6 h", val: v.prices.find((p) => p.label === "6 hodin")?.price },
    { label: "1–3 dny", val: day ?? v.prices.find((p) => p.label === "1–3 dny")?.price },
    { label: "4–7 dní", val: week },
    { label: "8–14 dní", val: v.prices.find((p) => p.label === "8–14 dní")?.price },
    { label: "1 měsíc", val: month },
  ].filter((t) => t.val !== undefined && t.val !== null);

  return (
    <article className="card overflow-hidden flex flex-col h-full group">
      <div className="flex items-stretch gap-0">
        <div className="relative aspect-[4/3] w-36 sm:w-40 shrink-0 bg-[var(--surface-alt)] overflow-hidden">
          <Image
            src={v.image}
            alt={v.name}
            fill
            sizes="160px"
            className="object-cover group-hover:scale-[1.05] transition-transform duration-500"
          />
        </div>
        <div className="flex-1 p-4 sm:p-5 flex flex-col justify-between min-w-0">
          <div>
            <span className="inline-block text-[10px] uppercase tracking-wider font-semibold text-[var(--brand-orange)]">
              {v.categoryLabel}
            </span>
            <h3 className="mt-1 font-[family-name:var(--font-display)] font-bold text-[var(--brand-navy)] text-[17px] leading-tight line-clamp-2">
              {v.shortName}
            </h3>
          </div>
          <div className="mt-3 flex flex-wrap gap-3 text-[12px] text-[var(--ink-muted)]">
            {v.size.cargoM3 && (
              <span className="inline-flex items-center gap-1">
                <IconBox className="w-3.5 h-3.5 text-[var(--brand-orange)]" />
                {v.size.cargoM3} m³
              </span>
            )}
            {v.size.loadKg && (
              <span className="inline-flex items-center gap-1">
                <IconRoute className="w-3.5 h-3.5 text-[var(--brand-orange)]" />
                {v.size.loadKg} kg
              </span>
            )}
            {v.size.seats && (
              <span className="inline-flex items-center gap-1">{v.size.seats} míst</span>
            )}
          </div>
        </div>
      </div>

      <div className="px-5 pt-4 pb-5 border-t border-[var(--border)] bg-[var(--surface-soft)] flex-1 flex flex-col">
        {tiers.length > 0 ? (
          <div className="grid grid-cols-3 gap-2">
            {tiers.slice(0, 6).map((t) => (
              <div
                key={t.label}
                className="rounded-md bg-white border border-[var(--border)] px-2 py-2 text-center"
              >
                <div className="text-[10px] uppercase tracking-wide text-[var(--ink-soft)] font-semibold">
                  {t.label}
                </div>
                <div className="mt-0.5 text-[13px] font-[family-name:var(--font-display)] font-bold text-[var(--brand-navy)] tabular-nums">
                  {typeof t.val === "number" ? `${fmtKc(t.val)} Kč` : t.val}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center text-[13px] text-[var(--ink-muted)] py-5">
            Cena vám bude potvrzena po odeslání poptávky.
          </div>
        )}

        <div className="mt-4 flex items-end justify-between gap-3">
          <div>
            <div className="text-[11px] uppercase tracking-wider text-[var(--ink-soft)] font-semibold">
              {v.priceFrom ? "od" : "Cena"}
            </div>
            <div className="font-[family-name:var(--font-display)] text-xl font-bold text-[var(--brand-navy)] leading-tight">
              {v.priceFrom
                ? <>{fmtKc(v.priceFrom)} <span className="text-sm font-medium text-[var(--ink-muted)]">Kč/den</span></>
                : "Na dotaz"}
            </div>
            {v.deposit && (
              <div className="mt-1 inline-flex items-center gap-1 text-[11px] text-[var(--ink-soft)]">
                <IconShield className="w-3 h-3" />
                Kauce {fmtKc(v.deposit)} Kč
              </div>
            )}
          </div>
          <div className="flex flex-col gap-2">
            <Link
              href={`/vozy/${v.slug}`}
              className="inline-flex items-center justify-center gap-1 h-9 px-3 rounded-md bg-white border border-[var(--border)] text-[var(--brand-navy)] font-semibold text-[13px] hover:border-[var(--brand-navy)]"
            >
              Detail
            </Link>
            <Link
              href={`/#hero-form?vozidlo=${v.slug}`}
              className="inline-flex items-center justify-center gap-1 h-9 px-3 rounded-md bg-[var(--brand-orange)] text-white font-semibold text-[13px] hover:bg-[var(--brand-orange-hover)]"
            >
              <IconPhone className="w-3.5 h-3.5" />
              Zarezervovat
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
