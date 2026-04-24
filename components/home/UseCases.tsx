import { IconBox, IconBuilding, IconHammer, IconSofa } from "../ui/Icons";
import { FadeIn, Stagger, StaggerItem } from "../ui/Motion";

const cases = [
  {
    icon: IconSofa,
    title: "Stěhování v Praze",
    text: "Malé i větší stěhování — od garsonky po rodinný dům. Poradíme, jakou dodávku vybrat.",
  },
  {
    icon: IconBox,
    title: "Odvoz nábytku a zboží",
    text: "Převezete si nábytek z bazaru, pračku, sedačku nebo náklad z e-shopu sami — bez stěhováků.",
  },
  {
    icon: IconBuilding,
    title: "Firemní rozvoz",
    text: "Pravidelná distribuce zboží po Praze, rozvoz pro e-shopy, dočasná záloha za firemní flotilu.",
  },
  {
    icon: IconHammer,
    title: "Materiál na stavbu",
    text: "Valníky, sklápěče a plachtou chráněné dodávky pro stavebniny, sádrokartony i suť.",
  },
];

export default function UseCases() {
  return (
    <section className="section bg-[var(--surface-alt)]">
      <div className="container-site">
        <FadeIn className="text-center max-w-2xl mx-auto">
          <span className="eyebrow">Kdy se hodíme</span>
          <h2 className="text-[clamp(1.8rem,3.5vw,2.5rem)] font-bold">
            Když potřebujete dodávku, jsme tady správně.
          </h2>
          <p className="mt-4 text-[var(--ink-muted)] text-lg">
            Máme vůz na každou situaci — od malého stěhování po materiál na stavbu. Řekněte,
            co potřebujete převézt, a my vám doporučíme nejvhodnější dodávku.
          </p>
        </FadeIn>

        <Stagger className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {cases.map((c) => (
            <StaggerItem key={c.title} className="card p-7 text-left">
              <div className="w-12 h-12 rounded-lg bg-[var(--brand-orange-soft)] text-[var(--brand-orange)] flex items-center justify-center mb-5">
                <c.icon className="w-6 h-6" />
              </div>
              <h3 className="font-[family-name:var(--font-display)] font-bold text-[var(--brand-navy)] text-lg mb-2">
                {c.title}
              </h3>
              <p className="text-[15px] text-[var(--ink-muted)] leading-relaxed">{c.text}</p>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
