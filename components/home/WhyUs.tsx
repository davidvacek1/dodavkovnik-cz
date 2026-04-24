import Image from "next/image";
import { IconBolt, IconCheck, IconTool, IconWallet } from "../ui/Icons";
import { FadeIn, Stagger, StaggerItem } from "../ui/Motion";

const reasons = [
  {
    icon: IconBolt,
    title: "Předání obvykle do 1 hodiny",
    text: "Neztrácíte čas čekáním. Jakmile rezervaci potvrdíme, připravíme vám vůz hned — ve špičce i večer, 7 dní v týdnu.",
  },
  {
    icon: IconTool,
    title: "Vlastní servis a technika",
    text: "Vozy nedáváme do externího servisu — staráme se o ně sami. Každý vůz má pravidelné kontroly a ostrý hygienický standard.",
  },
  {
    icon: IconWallet,
    title: "Kauce zpět ihned",
    text: "Žádné týdenní čekání. Po kontrole vozu vám kauci vracíme okamžitě — hotovostí, kartou nebo převodem, podle preference.",
  },
];

export default function WhyUs() {
  return (
    <section className="section">
      <div className="container-site grid lg:grid-cols-[1fr_1.1fr] gap-12 lg:gap-16 items-center">
        <FadeIn className="relative">
          <div className="aspect-[5/6] rounded-3xl overflow-hidden relative border border-[var(--border)] bg-[var(--surface-alt)]">
            <Image
              src="/fotky/vozy/master-l2h2.jpg"
              alt="Střední dodávka Renault Master L2H2"
              fill
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-[var(--brand-navy)]/35 via-transparent to-transparent" />
          </div>
          {/* Floating badge */}
          <div className="hidden sm:block absolute -bottom-6 -right-6 bg-white rounded-2xl p-5 shadow-[0_30px_60px_-30px_rgba(15,41,68,0.35)] border border-[var(--border)] max-w-[240px]">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-wider font-semibold text-[var(--brand-orange)]">
              <IconCheck className="w-3.5 h-3.5" />
              Férově
            </div>
            <p className="mt-2 text-[14px] text-[var(--ink)] leading-snug">
              Nepoužíváme drobné písmo a skryté poplatky. Cena na webu je <strong>konečná</strong>.
            </p>
          </div>
        </FadeIn>

        <div>
          <FadeIn>
            <span className="eyebrow">Proč zrovna my</span>
            <h2 className="text-[clamp(1.9rem,3.8vw,2.7rem)] font-bold">
              Pronajímání dodávek umíme dělat lidsky.
            </h2>
            <p className="mt-5 text-[var(--ink-muted)] text-lg leading-relaxed">
              Jsme pražská firma — znáte nás, znáte adresu, zvednete nám telefon.
              Nejdeme na kvantitu, jdeme na to, aby si vás 80 % zákazníků pamatovalo
              jako dobrou zkušenost.
            </p>
          </FadeIn>

          <Stagger className="mt-10 space-y-6">
            {reasons.map((r) => (
              <StaggerItem
                key={r.title}
                className="flex gap-5"
              >
                <div className="w-12 h-12 rounded-xl bg-[var(--brand-navy)] text-[var(--brand-orange)] flex items-center justify-center shrink-0">
                  <r.icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-[family-name:var(--font-display)] font-bold text-[var(--brand-navy)] text-lg">
                    {r.title}
                  </h3>
                  <p className="mt-1.5 text-[15px] text-[var(--ink-muted)] leading-relaxed">
                    {r.text}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  );
}
