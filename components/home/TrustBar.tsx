import {
  IconBolt,
  IconCalendar,
  IconCheck,
  IconShield,
  IconTool,
  IconWallet,
} from "../ui/Icons";
import { Stagger, StaggerItem } from "../ui/Motion";

const items = [
  {
    icon: IconWallet,
    title: "Férové ceny",
    text: "Žádné skryté poplatky. Platíte to, co vidíte v nabídce.",
  },
  {
    icon: IconBolt,
    title: "Rychlá rezervace",
    text: "Online rezervace během pár minut, potvrzení obvykle do hodiny.",
  },
  {
    icon: IconTool,
    title: "Servisované vozy",
    text: "Vlastní servisní zázemí, pravidelné kontroly.",
  },
  {
    icon: IconCalendar,
    title: "Flexibilní pronájem",
    text: "Od tří hodin až po dlouhodobý pronájem na měsíce.",
  },
  {
    icon: IconShield,
    title: "Pojištění a asistence",
    text: "Havarijní pojištění, asistence a dálniční známka v ceně.",
  },
  {
    icon: IconCheck,
    title: "Kauce zpět ihned",
    text: "Kauci vrátíme ihned po převzetí a kontrole vozu.",
  },
];

export default function TrustBar() {
  return (
    <section aria-labelledby="trust-bar" className="relative z-10 -mt-10 md:-mt-16">
      <div className="container-site">
        <div className="bg-white rounded-2xl border border-[var(--border)] shadow-[0_24px_60px_-30px_rgba(15,41,68,0.35)]">
          <h2 id="trust-bar" className="sr-only">
            Proč s námi
          </h2>
          <Stagger className="grid grid-cols-2 lg:grid-cols-6 divide-x divide-y lg:divide-y-0 divide-[var(--border)]">
            {items.map((it) => (
              <StaggerItem
                key={it.title}
                className="flex flex-col items-start gap-2 p-5 md:p-6 text-left"
              >
                <it.icon className="w-7 h-7 text-[var(--brand-orange)]" />
                <div className="font-[family-name:var(--font-display)] font-bold text-[var(--brand-navy)] text-[15px] leading-tight">
                  {it.title}
                </div>
                <div className="text-[13px] leading-snug text-[var(--ink-muted)]">
                  {it.text}
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  );
}
