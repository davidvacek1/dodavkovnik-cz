import {
  IconBolt,
  IconCheck,
  IconLifebuoy,
  IconRoute,
  IconShield,
  IconSnowflake,
  IconTool,
  IconWallet,
} from "../ui/Icons";
import { FadeIn, Stagger, StaggerItem } from "../ui/Motion";

const items = [
  {
    icon: IconShield,
    title: "Havarijní pojištění",
    text: "Havarijka i pojištění odpovědnosti je u každého vozu součástí ceny.",
  },
  {
    icon: IconLifebuoy,
    title: "Silniční asistence",
    text: "Non-stop pomoc na cestě v případě poruchy nebo nehody.",
  },
  {
    icon: IconRoute,
    title: "Dálniční známka",
    text: "Platná česká dálniční známka — nic dalšího si nekupujete.",
  },
  {
    icon: IconTool,
    title: "Pravidelný servis",
    text: "Vlastní servisní zázemí, pravidelně kontrolované vozy.",
  },
  {
    icon: IconSnowflake,
    title: "Zimní příprava",
    text: "V zimě vozy na zimních pneumatikách, s funkční topením a škrabkou.",
  },
  {
    icon: IconWallet,
    title: "Žádné skryté poplatky",
    text: "Cena na webu je konečná. Jediné navíc je případná kauce vratná po vrácení.",
  },
];

export default function Included() {
  return (
    <section className="section">
      <div className="container-site">
        <FadeIn className="text-center max-w-2xl mx-auto">
          <span className="eyebrow">Co máte v ceně</span>
          <h2 className="text-[clamp(1.8rem,3.5vw,2.5rem)] font-bold">
            Férově. Bez hvězdiček v ceníku.
          </h2>
          <p className="mt-4 text-[var(--ink-muted)] text-lg">
            Cena, kterou vidíte, je cena, kterou zaplatíte. Všechno důležité je v&nbsp;ceně pronájmu.
          </p>
        </FadeIn>

        <Stagger className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((it) => (
            <StaggerItem
              key={it.title}
              className="flex gap-4 card p-6 items-start"
            >
              <div className="w-11 h-11 rounded-lg bg-[var(--brand-orange-soft)] text-[var(--brand-orange)] flex items-center justify-center shrink-0">
                <it.icon className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-[family-name:var(--font-display)] font-bold text-[var(--brand-navy)] text-[17px] mb-1">
                  {it.title}
                </h3>
                <p className="text-[14px] text-[var(--ink-muted)] leading-relaxed">{it.text}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>

        <FadeIn delay={0.1} className="mt-10 rounded-2xl bg-[var(--brand-navy-soft)] border border-[var(--border)] p-6 md:p-8 flex flex-col md:flex-row items-start gap-5">
          <div className="w-12 h-12 rounded-xl bg-[var(--brand-navy)] text-white flex items-center justify-center shrink-0">
            <IconCheck className="w-6 h-6" />
          </div>
          <div>
            <h3 className="font-[family-name:var(--font-display)] font-bold text-[var(--brand-navy)] text-lg mb-1">
              Volné kilometry
            </h3>
            <p className="text-[15px] text-[var(--ink-muted)] leading-relaxed">
              Volné kilometry jsou součástí ceny. Při víkendovém pronájmu máte{" "}
              <strong>400 km</strong>, při pronájmu 1–3 dny <strong>300 km / den</strong>,
              při pronájmu 4–7 dní <strong>250 km / den</strong>. Další kilometry dle sazebníku.
            </p>
          </div>
          <IconBolt className="w-5 h-5 text-[var(--brand-orange)] shrink-0 ml-auto hidden md:block" />
        </FadeIn>
      </div>
    </section>
  );
}
