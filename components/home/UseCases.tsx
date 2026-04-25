import { FadeIn, Stagger, StaggerItem } from "../ui/Motion";
import { UseCaseBoxes, UseCaseSofa, UseCaseDolly, UseCaseWheelbarrow } from "../ui/UseCaseIllustrations";

const cases = [
  {
    Illu: UseCaseBoxes,
    title: "Stěhování / Praha",
    text: "Přestěhujte byt, dům nebo kancelář bez starostí.",
  },
  {
    Illu: UseCaseSofa,
    title: "Odvoz nábytku",
    text: "Převezete nábytek rychle a bezpečně.",
  },
  {
    Illu: UseCaseDolly,
    title: "Firemní rozvoz",
    text: "Pravidelně rozvážíte zboží a materiály po Praze.",
  },
  {
    Illu: UseCaseWheelbarrow,
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
            Když potřebujete dodávku, jsme tu správně
          </h2>
        </FadeIn>

        <Stagger className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {cases.map(({ Illu, title, text }) => (
            <StaggerItem
              key={title}
              className="bg-white rounded-2xl border border-[var(--border)] overflow-hidden flex flex-col"
            >
              <div className="aspect-[4/3] bg-[#FAF6EE] flex items-center justify-center p-8">
                <Illu className="w-full h-full text-[var(--brand-navy)]" />
              </div>
              <div className="p-5 md:p-6 text-center">
                <h3 className="font-[family-name:var(--font-display)] font-bold text-[var(--brand-navy)] text-[17px]">
                  {title}
                </h3>
                <p className="mt-1.5 text-[14px] text-[var(--ink-muted)] leading-relaxed">
                  {text}
                </p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
