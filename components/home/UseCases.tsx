import Image from "next/image";
import { FadeIn, Stagger, StaggerItem } from "../ui/Motion";

const cases = [
  {
    src: "/fotky/usecases/usecase-stehovani.png",
    alt: "Stěhování v Praze — krabice na sklápěči",
    title: "Stěhování / Praha",
    text: "Přestěhujte byt, dům nebo kancelář bez starostí.",
  },
  {
    src: "/fotky/usecases/usecase-nabytek.png",
    alt: "Odvoz nábytku — pohovka s pokojovou rostlinou",
    title: "Odvoz nábytku",
    text: "Převezete nábytek rychle a bezpečně.",
  },
  {
    src: "/fotky/usecases/usecase-firemni-rozvoz.png",
    alt: "Firemní rozvoz — paletový vozík s krabicemi",
    title: "Firemní rozvoz",
    text: "Pravidelně rozvážíte zboží a materiály po Praze.",
  },
  {
    src: "/fotky/usecases/usecase-stavba.png",
    alt: "Materiál na stavbu — kolečko s cihlami",
    title: "Materiál na stavbu",
    text: "Doprava všeho, co na stavbě potřebujete.",
  },
];

export default function UseCases() {
  return (
    <section className="section bg-[var(--surface-alt)]">
      <div className="container-site">
        <FadeIn className="text-center max-w-2xl mx-auto">
          <h2 className="text-[clamp(1.8rem,3.5vw,2.5rem)] font-bold">
            Když potřebujete dodávku, jste tu správně
          </h2>
        </FadeIn>

        <Stagger className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {cases.map((c) => (
            <StaggerItem
              key={c.title}
              className="bg-white rounded-2xl border border-[var(--border)] overflow-hidden flex flex-col"
            >
              <div className="relative aspect-square bg-[#FAF6EE]">
                <Image
                  src={c.src}
                  alt={c.alt}
                  fill
                  quality={90}
                  sizes="(min-width: 1024px) 22vw, (min-width: 640px) 45vw, 90vw"
                  className="object-contain p-6"
                />
              </div>
              <div className="p-5 md:p-6 text-center">
                <h3 className="font-[family-name:var(--font-display)] font-bold text-[var(--brand-navy)] text-[17px]">
                  {c.title}
                </h3>
                <p className="mt-1.5 text-[14px] text-[var(--ink-muted)] leading-relaxed">
                  {c.text}
                </p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
