import { FadeIn } from "../ui/Motion";

const stats = [
  { value: "21", label: "typů vozidel" },
  { value: "<1h", label: "do předání" },
  { value: "7/7", label: "dní v týdnu" },
  { value: "10+", label: "let v Praze 9" },
];

export default function Stats() {
  return (
    <section className="relative bg-[var(--brand-navy)] text-white">
      <div
        aria-hidden
        className="absolute inset-y-0 right-0 w-[40%] opacity-15 blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(circle at right, #eb6a2c 0%, transparent 70%)" }}
      />
      <div className="container-site relative py-7 md:py-9">
        <FadeIn className="grid grid-cols-2 lg:grid-cols-4 gap-y-5 gap-x-2">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className={`flex items-baseline gap-3 px-3 ${i > 0 ? "lg:border-l lg:border-white/15" : ""}`}
            >
              <span className="font-[family-name:var(--font-display)] font-bold tabular-nums text-white text-[clamp(2rem,3.4vw,2.75rem)] leading-none tracking-tight">
                {s.value}
              </span>
              <span className="text-[12px] md:text-[13px] uppercase tracking-[0.16em] font-semibold text-[var(--brand-orange)]">
                {s.label}
              </span>
            </div>
          ))}
        </FadeIn>
      </div>
    </section>
  );
}
