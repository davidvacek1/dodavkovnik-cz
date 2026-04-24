import { faq } from "@/lib/data/faq";
import { IconPlus } from "../ui/Icons";
import { FadeIn } from "../ui/Motion";

export default function Faq() {
  return (
    <section id="faq" className="section">
      <div className="container-site grid lg:grid-cols-[0.8fr_1.2fr] gap-12">
        <FadeIn>
          <span className="eyebrow">Nejčastější otázky</span>
          <h2 className="text-[clamp(1.8rem,3.5vw,2.5rem)] font-bold">
            Na co se nás nejčastěji ptáte.
          </h2>
          <p className="mt-4 text-[var(--ink-muted)] text-lg leading-relaxed">
            Nenašli jste odpověď? Zavolejte nebo napište — rádi poradíme.
            Nejsme automat a každý případ umíme probrat individuálně.
          </p>
          <div className="mt-8 bg-[var(--brand-navy-soft)] rounded-xl p-5 border border-[var(--border)]">
            <div className="text-[13px] uppercase tracking-wider font-semibold text-[var(--brand-orange)]">
              Zavolejte
            </div>
            <a href="tel:+420777066284" className="mt-1 block text-2xl font-[family-name:var(--font-display)] font-bold text-[var(--brand-navy)]">
              +420 777 066 284
            </a>
            <p className="mt-2 text-[14px] text-[var(--ink-muted)]">Otevřeno 7 dní v týdnu.</p>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="bg-white rounded-2xl border border-[var(--border)] divide-y divide-[var(--border)]">
            {faq.map((item, i) => (
              <details
                key={item.question}
                className="faq-item group px-6 py-5"
                {...(i === 0 ? { open: true } : {})}
              >
                <summary className="flex items-start justify-between gap-4 cursor-pointer list-none">
                  <span className="font-[family-name:var(--font-display)] font-semibold text-[var(--brand-navy)] text-[17px] leading-snug">
                    {item.question}
                  </span>
                  <span className="faq-icon shrink-0 w-8 h-8 rounded-full bg-[var(--brand-orange-soft)] text-[var(--brand-orange)] flex items-center justify-center transition-transform">
                    <IconPlus className="w-4 h-4" />
                  </span>
                </summary>
                <p className="mt-3 text-[15px] text-[var(--ink-muted)] leading-relaxed">
                  {item.answer}
                </p>
              </details>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
