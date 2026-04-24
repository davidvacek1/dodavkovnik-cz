import { FadeIn } from "../ui/Motion";

const stats = [
  { value: "21", label: "typů vozidel", detail: "dodávek, minibusů, nákladních aut a přívěsů" },
  { value: "< 1 h", label: "čas na předání", detail: "většinu rezervací potvrdíme a vozy předáme ještě týž den" },
  { value: "7 / 7", label: "dní v týdnu", detail: "otevřeno včetně víkendů a svátků" },
  { value: "10 let+", label: "na pražském trhu", detail: "zkušený tým, vlastní servis, stabilní vozový park" },
];

export default function Stats() {
  return (
    <section className="section-tight relative overflow-hidden">
      {/* Decorative topographic-style background */}
      <div aria-hidden className="absolute inset-0 -z-10">
        <svg viewBox="0 0 1920 520" preserveAspectRatio="xMidYMid slice" className="w-full h-full">
          <defs>
            <linearGradient id="stats-bg" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor="#FDFCFA" />
              <stop offset="100%" stopColor="#F3F1ED" />
            </linearGradient>
            <pattern id="stats-topo" x="0" y="0" width="320" height="160" patternUnits="userSpaceOnUse">
              <path
                d="M 0 80 Q 40 40 80 80 T 160 80 T 240 80 T 320 80"
                stroke="#E8E1D1"
                strokeWidth="1"
                fill="none"
                opacity="0.6"
              />
              <path
                d="M 0 130 Q 50 90 100 130 T 200 130 T 320 130"
                stroke="#ECE5D6"
                strokeWidth="1"
                fill="none"
                opacity="0.5"
              />
            </pattern>
          </defs>
          <rect width="1920" height="520" fill="url(#stats-bg)" />
          <rect width="1920" height="520" fill="url(#stats-topo)" opacity="0.85" />
          {/* Subtle radial accents */}
          <circle cx="220" cy="90" r="180" fill="#eb6a2c" opacity="0.035" />
          <circle cx="1720" cy="430" r="240" fill="#0f2944" opacity="0.04" />
        </svg>
      </div>

      <div className="container-site relative">
        <FadeIn className="grid grid-cols-2 lg:grid-cols-4 gap-5">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className="relative bg-white/85 backdrop-blur-sm rounded-2xl border border-[var(--border)] p-6 md:p-7 flex flex-col"
            >
              {/* Number badge */}
              <div className="flex items-start justify-between">
                <div className="font-[family-name:var(--font-display)] font-bold text-[var(--brand-navy)] text-[clamp(2.25rem,4vw,3.25rem)] leading-none tabular-nums">
                  {s.value}
                </div>
                <span className="text-[10px] font-semibold text-[var(--ink-soft)] uppercase tracking-wider tabular-nums">
                  0{i + 1}
                </span>
              </div>
              <div className="mt-4 text-[13px] uppercase tracking-[0.14em] font-semibold text-[var(--brand-orange)]">
                {s.label}
              </div>
              <div className="mt-2 text-[14px] text-[var(--ink-muted)] leading-relaxed">
                {s.detail}
              </div>
              {/* Orange corner accent */}
              <span
                aria-hidden
                className="absolute top-0 left-0 h-1 w-10 rounded-br bg-[var(--brand-orange)] rounded-tl-2xl"
              />
            </div>
          ))}
        </FadeIn>
      </div>
    </section>
  );
}
