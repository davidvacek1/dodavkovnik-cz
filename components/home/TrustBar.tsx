import { IconBolt, IconCalendar, IconShield, IconWallet } from "../ui/Icons";
import { Stagger, StaggerItem } from "../ui/Motion";

const items = [
  {
    icon: IconWallet,
    title: "Férové ceny",
    text: "Žádné skryté poplatky, platíte jen za to, co využijete.",
  },
  {
    icon: IconBolt,
    title: "Rychlá rezervace",
    text: "Online rezervace během pár minut.",
  },
  {
    icon: IconShield,
    title: "Kvalitní vozy",
    text: "Pravidelně servisované dodávky v perfektním stavu.",
  },
  {
    icon: IconCalendar,
    title: "Flexibilní doba pronájmu",
    text: "Od pár hodin až po několik dní.",
  },
];

export default function TrustBar() {
  return (
    <section aria-labelledby="trust-bar" className="relative z-10 pt-2 md:pt-4">
      <div className="container-site">
        <h2 id="trust-bar" className="sr-only">
          Proč s námi
        </h2>
        <Stagger className="bg-white rounded-2xl border border-[var(--border)] shadow-[0_24px_60px_-30px_rgba(15,41,68,0.35)] grid grid-cols-2 lg:grid-cols-4 divide-x divide-y lg:divide-y-0 divide-[var(--border)]">
          {items.map((it) => (
            <StaggerItem
              key={it.title}
              className="flex items-start gap-4 p-5 md:p-6"
            >
              <span className="shrink-0 inline-flex items-center justify-center w-12 h-12 rounded-full bg-[var(--brand-orange-soft)] text-[var(--brand-orange)] ring-1 ring-[var(--brand-orange)]/15">
                <it.icon className="w-6 h-6" strokeWidth={1.8} />
              </span>
              <div className="min-w-0">
                <div className="font-[family-name:var(--font-display)] font-bold text-[var(--brand-navy)] text-[15px] leading-tight">
                  {it.title}
                </div>
                <div className="mt-1 text-[13px] leading-snug text-[var(--ink-muted)]">
                  {it.text}
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
