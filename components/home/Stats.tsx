import { FadeIn } from "../ui/Motion";

const stats = [
  {
    value: "21",
    label: "typů vozidel",
    detail: "dodávky, minibusy, nákladní vozy a přívěsy",
  },
  {
    value: "< 1 h",
    label: "do předání",
    detail: "většinu rezervací potvrdíme a auto předáme ještě týž den",
  },
  {
    value: "7 / 7",
    label: "dní v týdnu",
    detail: "otevřeno včetně víkendů a státních svátků",
  },
  {
    value: "10+",
    label: "let v Praze 9",
    detail: "vlastní servis, stabilní vozový park, zkušený tým",
  },
];

export default function Stats() {
  return (
    <section className="relative overflow-hidden bg-[var(--brand-navy)] text-white">
      {/* Subtle radial accent + diagonal lines */}
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <div
          className="absolute -top-32 -right-40 w-[520px] h-[520px] rounded-full opacity-25 blur-3xl"
          style={{ background: "radial-gradient(circle, #eb6a2c 0%, transparent 60%)" }}
        />
        <svg
          className="absolute inset-0 w-full h-full opacity-[0.06]"
          viewBox="0 0 1920 320"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <pattern id="stats-stripes" width="100" height="100" patternUnits="userSpaceOnUse" patternTransform="rotate(35)">
              <line x1="0" y1="0" x2="0" y2="100" stroke="#fff" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="1920" height="320" fill="url(#stats-stripes)" />
        </svg>
      </div>

      <div className="container-site relative py-16 md:py-24">
        <FadeIn className="grid grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-6 lg:gap-x-10">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className={`relative px-2 ${i > 0 ? "lg:border-l lg:border-white/15 lg:pl-10" : ""}`}
            >
              <div className="font-[family-name:var(--font-display)] font-bold leading-[0.95] tabular-nums text-white text-[clamp(3rem,5.5vw,4.75rem)] tracking-tight">
                {s.value}
              </div>
              <div className="mt-3 text-[12px] md:text-[13px] uppercase tracking-[0.18em] font-semibold text-[var(--brand-orange)]">
                {s.label}
              </div>
              <div className="mt-2 text-[14px] md:text-[15px] leading-relaxed text-white/70 max-w-xs">
                {s.detail}
              </div>
            </div>
          ))}
        </FadeIn>
      </div>
    </section>
  );
}
