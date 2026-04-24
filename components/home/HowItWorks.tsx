import { IconArrowRight } from "../ui/Icons";
import { FadeIn, Stagger, StaggerItem } from "../ui/Motion";

const steps = [
  {
    n: "01",
    title: "Vyberte termín a vůz",
    text: "Vyplňte datum vyzvednutí, dobu pronájmu a typ vozu. Pokud nevíte, jaký zvolit, rádi poradíme.",
  },
  {
    n: "02",
    title: "Rezervujte online",
    text: "Potvrzení rezervace dostanete obvykle do hodiny e-mailem nebo telefonem. Platbu řešíte až u nás.",
  },
  {
    n: "03",
    title: "Převezměte a jeďte",
    text: "Vyzvednete si vůz na naší adrese v Praze 9, složíte kauci a vyrazíte. Vracíte, kdy se s vámi domluvíme.",
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
          <p className="mt-4 text-[var(--ink-muted)] text-lg">
            Žádné zbytečné papírování. Celý proces máte hotový během pár minut.
          </p>
        </FadeIn>

        <Stagger className="mt-14 grid lg:grid-cols-3 gap-5 relative">
          {steps.map((s, i) => (
            <StaggerItem key={s.n} className="relative">
              <div className="card p-8 h-full">
                <div className="flex items-center gap-4 mb-5">
                  <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[var(--brand-navy)] text-[var(--brand-orange)] font-bold text-lg font-[family-name:var(--font-display)]">
                    {s.n}
                  </span>
                  {i < steps.length - 1 && (
                    <span className="hidden lg:block absolute right-[-22px] top-1/2 -translate-y-1/2 z-10">
                      <IconArrowRight className="w-7 h-7 text-[var(--brand-orange)]/40" />
                    </span>
                  )}
                </div>
                <h3 className="font-[family-name:var(--font-display)] font-bold text-[var(--brand-navy)] text-xl mb-3">
                  {s.title}
                </h3>
                <p className="text-[15px] text-[var(--ink-muted)] leading-relaxed">{s.text}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
