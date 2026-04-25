import Image from "next/image";
import { FadeIn } from "../ui/Motion";
import { company } from "@/lib/data/company";
import {
  IconCalendar,
  IconCheck,
  IconClock,
  IconLocation,
  IconShield,
  IconTruck,
} from "../ui/Icons";

const stats = [
  {
    Icon: IconTruck,
    value: "21",
    label: "typů vozidel",
    detail: "malá dodávka, skříň, valník i hydraulické čelo",
  },
  {
    Icon: IconClock,
    value: "≤ 1 h",
    label: "do předání",
    detail: "u dostupných vozů po potvrzení rezervace",
  },
  {
    Icon: IconCalendar,
    value: "7 / 7",
    label: "dní v týdnu",
    detail: "vyzvednutí i vrácení o víkendech a svátcích",
  },
  {
    Icon: IconLocation,
    value: "10+",
    label: "let v Praze 9",
    detail: "jedna pobočka, lokální tým, vlastní zázemí",
  },
];

const trustPills = [
  {
    Icon: IconLocation,
    label: "Praha 9 – Černý Most",
    detail: company.address.street,
  },
  {
    Icon: IconCalendar,
    label: "Od roku 2014",
    detail: "stabilní lokální půjčovna",
  },
  {
    Icon: IconShield,
    label: `IČO ${company.legal.ico}`,
    detail: "ověřená firma, zapsaná v ARES",
  },
  {
    Icon: IconCheck,
    label: "Pojištění v ceně",
    detail: "havarijní + asistence + dálniční známka",
  },
];

export default function Stats() {
  return (
    <section
      className="relative overflow-hidden bg-[var(--brand-navy)] text-white"
      aria-labelledby="stats-trust-heading"
    >
      {/* Background image — subtle van + dark navy overlay */}
      <Image
        src="/fotky/stats/stats-trust-bg.png"
        alt=""
        fill
        priority={false}
        quality={75}
        sizes="100vw"
        className="object-cover opacity-40"
      />
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg, rgba(15,41,68,0.96) 0%, rgba(15,41,68,0.82) 50%, rgba(15,41,68,0.94) 100%)",
        }}
      />
      <div
        aria-hidden
        className="absolute -top-32 right-[-10%] w-[520px] h-[520px] rounded-full opacity-20 blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(circle, #eb6a2c 0%, transparent 60%)" }}
      />

      <div className="container-site relative py-10 md:py-12">
        <h2 id="stats-trust-heading" className="sr-only">
          Důvěryhodnost půjčovny dodávek
        </h2>

        {/* Trust pills row */}
        <FadeIn>
          <ul className="flex flex-wrap items-center gap-2 text-[12.5px] leading-none text-white/75">
            {trustPills.map(({ Icon, label, detail }) => (
              <li
                key={label}
                className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.07] px-3 py-2"
              >
                <Icon className="w-3.5 h-3.5 shrink-0 text-[var(--brand-orange)]" strokeWidth={2.2} />
                <span className="font-semibold text-white">{label}</span>
                <span className="hidden md:inline text-white/55">— {detail}</span>
              </li>
            ))}
          </ul>
        </FadeIn>

        {/* Stat cards */}
        <FadeIn>
          <dl className="mt-5 grid grid-cols-2 lg:grid-cols-4 overflow-hidden rounded-xl border border-white/12 bg-white/[0.05] backdrop-blur-sm shadow-[0_24px_60px_-20px_rgba(0,0,0,0.5)]">
            {stats.map(({ Icon, value, label, detail }, i) => (
              <div
                key={label}
                className={[
                  "relative p-5 md:p-6",
                  i % 2 === 0 ? "border-r border-white/12" : "",
                  i < 2 ? "border-b border-white/12 lg:border-b-0" : "",
                  i < 3 ? "lg:border-r lg:border-white/12" : "",
                ].join(" ")}
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <dt className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--brand-orange)]">
                      {label}
                    </dt>
                    <dd className="mt-1.5 font-[family-name:var(--font-display)] font-bold text-white text-[clamp(1.85rem,3.4vw,2.6rem)] leading-none tabular-nums">
                      {value}
                    </dd>
                  </div>
                  <span
                    className="flex w-9 h-9 shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/[0.08] text-[var(--brand-orange)]"
                    aria-hidden
                  >
                    <Icon className="w-[18px] h-[18px]" strokeWidth={2} />
                  </span>
                </div>
                <p className="mt-3 text-[13.5px] leading-snug text-white/65">{detail}</p>
              </div>
            ))}
          </dl>
        </FadeIn>
      </div>
    </section>
  );
}
