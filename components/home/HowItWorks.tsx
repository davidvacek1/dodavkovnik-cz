import { FadeIn, Stagger, StaggerItem } from "../ui/Motion";

const steps = [
  {
    n: 1,
    title: "Vyberte si termín a typ vozu",
    text: "Zvolte datum, dobu a vozidlo, které vám vyhovuje.",
  },
  {
    n: 2,
    title: "Rezervujte online",
    text: "Jednoduchá rezervace během pár minut.",
  },
  {
    n: 3,
    title: "Převezměte, jezděte, vraťte",
    text: "Rychlé předání vozu a jednoduché vrácení.",
  },
];

export default function HowItWorks() {
  return (
    <section id="jak-to-funguje" className="section">
      <div className="container-site">
        <FadeIn className="text-center max-w-2xl mx-auto">
          <span className="eyebrow">Jak to funguje</span>
          <h2 className="text-[clamp(1.8rem,3.5vw,2.5rem)] font-bold">
            Tři kroky k vaší dodávce.
          </h2>
        </FadeIn>

        {/* Steps row with connecting dashed line */}
        <div className="mt-14 max-w-5xl mx-auto relative">
          {/* Dashed connector behind the bubbles — covers center 2/3 */}
          <div
            aria-hidden
            className="hidden md:block absolute top-9 left-[16.66%] right-[16.66%] h-0 border-t-2 border-dashed border-[var(--brand-orange)]/40"
          />
          <Stagger className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-6 relative">
            {steps.map((s) => (
              <StaggerItem key={s.n} className="text-center">
                <div className="flex justify-center mb-5">
                  <span className="relative inline-flex items-center justify-center w-[72px] h-[72px] rounded-full bg-[var(--brand-navy)] text-white font-[family-name:var(--font-display)] font-bold text-2xl shadow-[0_10px_30px_-10px_rgba(15,41,68,0.5)] ring-4 ring-white">
                    {s.n}
                  </span>
                </div>
                <h3 className="font-[family-name:var(--font-display)] font-bold text-[var(--brand-navy)] text-lg md:text-xl mb-2 max-w-[18rem] mx-auto leading-snug">
                  {s.title}
                </h3>
                <p className="text-[15px] text-[var(--ink-muted)] leading-relaxed max-w-[18rem] mx-auto">
                  {s.text}
                </p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>

        <FadeIn className="mt-12 text-center">
          <p className="inline-block text-[15px] italic text-[var(--brand-navy)] font-semibold border-t-2 border-dashed border-[var(--brand-orange)]/30 pt-4">
            Jednoduché, rychlé a bez zbytečných papírů!
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
