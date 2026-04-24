import { FadeIn } from "../ui/Motion";

const stats = [
  { value: "21", label: "typů vozidel", detail: "dodávek, minibusů, nákladních aut a přívěsů" },
  { value: "< 1 h", label: "čas na předání", detail: "většinu rezervací potvrdíme a vozy předáme ještě týž den" },
  { value: "7 / 7", label: "dní v týdnu", detail: "otevřeno včetně víkendů a svátků" },
  { value: "10 let+", label: "na pražském trhu", detail: "zkušený tým, vlastní servis, stabilní vozový park" },
];

export default function Stats() {
  return (
    <section className="section-tight">
      <div className="container-site">
        <FadeIn className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-[var(--border)] rounded-2xl overflow-hidden border border-[var(--border)]">
          {stats.map((s) => (
            <div key={s.label} className="bg-white p-6 md:p-8 flex flex-col">
              <div className="font-[family-name:var(--font-display)] font-bold text-[var(--brand-navy)] text-[clamp(2rem,4vw,3rem)] leading-none">
                {s.value}
              </div>
              <div className="mt-3 text-[13px] uppercase tracking-wider font-semibold text-[var(--brand-orange)]">
                {s.label}
              </div>
              <div className="mt-2 text-[13px] text-[var(--ink-muted)] leading-relaxed">
                {s.detail}
              </div>
            </div>
          ))}
        </FadeIn>
      </div>
    </section>
  );
}
