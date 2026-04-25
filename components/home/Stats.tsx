import { FadeIn } from "../ui/Motion";
import { company } from "@/lib/data/company";
import { IconCalendar, IconLocation, IconShield, IconClock } from "../ui/Icons";

const stats = [
  {
    value: "21",
    unit: "vozidel",
    desc: "dodávky, minibusy, valníky a sklápěče",
  },
  {
    value: "10+",
    unit: "let na trhu",
    desc: "vlastní servis, stabilní vozový park",
  },
  {
    value: "7 / 7",
    unit: "dní",
    desc: "otevřeno včetně víkendů a svátků",
  },
  {
    value: "≤ 1 h",
    unit: "do předání",
    desc: "většinu rezervací potvrdíme týž den",
  },
];

export default function Stats() {
  return (
    <section className="relative bg-[var(--brand-navy)] text-white">
      {/* Background pattern + radial accent */}
      <div aria-hidden className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute -top-32 right-[-15%] w-[640px] h-[640px] rounded-full opacity-20 blur-3xl"
          style={{ background: "radial-gradient(circle, #eb6a2c 0%, transparent 60%)" }}
        />
        <svg
          className="absolute inset-0 w-full h-full opacity-[0.05]"
          viewBox="0 0 1920 360"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <pattern id="stats-mesh" width="64" height="64" patternUnits="userSpaceOnUse">
              <path d="M 64 0 L 0 0 0 64" fill="none" stroke="#fff" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="1920" height="360" fill="url(#stats-mesh)" />
        </svg>
      </div>

      <div className="container-site relative py-12 md:py-14">
        {/* Top label */}
        <FadeIn className="flex items-center gap-3 mb-7">
          <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-[var(--brand-orange)]/15 text-[var(--brand-orange)]">
            <IconShield className="w-4 h-4" strokeWidth={2.2} />
          </span>
          <span className="text-[12px] uppercase tracking-[0.18em] font-semibold text-[var(--brand-orange)]">
            Ověřená pražská půjčovna od roku 2014
          </span>
        </FadeIn>

        {/* Stats row */}
        <FadeIn className="grid grid-cols-2 lg:grid-cols-4 gap-y-7 gap-x-2">
          {stats.map((s, i) => (
            <div
              key={s.unit}
              className={`relative px-4 ${i > 0 ? "lg:border-l lg:border-white/15" : ""}`}
            >
              <div className="flex items-baseline gap-2">
                <span className="font-[family-name:var(--font-display)] font-bold tabular-nums text-white text-[clamp(2rem,3.6vw,3.1rem)] leading-none tracking-tight">
                  {s.value}
                </span>
                <span className="text-[13px] md:text-[14px] font-semibold text-white/80">
                  {s.unit}
                </span>
              </div>
              <div className="mt-2 text-[13px] md:text-[13.5px] text-white/55 leading-snug max-w-[20rem]">
                {s.desc}
              </div>
            </div>
          ))}
        </FadeIn>

        {/* Bottom trust strip */}
        <FadeIn className="mt-10 pt-6 border-t border-white/10 flex flex-wrap items-center gap-x-7 gap-y-3 text-[12.5px] text-white/55">
          <span className="inline-flex items-center gap-2">
            <IconLocation className="w-4 h-4 text-[var(--brand-orange)]/80" strokeWidth={2} />
            {company.address.city}
          </span>
          <span className="inline-flex items-center gap-2">
            <IconClock className="w-4 h-4 text-[var(--brand-orange)]/80" strokeWidth={2} />
            {company.openingHours}
          </span>
          <span className="inline-flex items-center gap-2">
            <IconCalendar className="w-4 h-4 text-[var(--brand-orange)]/80" strokeWidth={2} />
            Provozováno od roku 2014
          </span>
          <span className="inline-flex items-center gap-2">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-[var(--brand-orange)]" aria-hidden />
            IČO {company.legal.ico} · zapsáno v ARES
          </span>
        </FadeIn>
      </div>
    </section>
  );
}
