import PragueDivider from "@/components/home/PragueDivider";
import DividerHighwayCurve from "@/components/dividers/DividerHighwayCurve";
import DividerWaveLayered from "@/components/dividers/DividerWaveLayered";
import DividerWaveSimple from "@/components/dividers/DividerWaveSimple";
import DividerMountains from "@/components/dividers/DividerMountains";
import DividerAbstractCity from "@/components/dividers/DividerAbstractCity";
import DividerDiagonalSlope from "@/components/dividers/DividerDiagonalSlope";
import DividerTornPaper from "@/components/dividers/DividerTornPaper";
import DividerArches from "@/components/dividers/DividerArches";

export const metadata = {
  title: "Divider variants — preview",
  robots: { index: false, follow: false },
};

const variants = [
  {
    id: "prague-rooftops",
    name: "1. Pražské střechy + dodávka (současné)",
    desc: "Hand-drawn silueta Prahy s malou dodávkou + oranžové streaks. Tematicky odpovídá značce.",
    Component: PragueDivider,
  },
  {
    id: "highway-curve",
    name: "2. Silnice / dálnice s ubíhajícími pruhy",
    desc: "Perspektivní křivka silnice s oranžovými přerušovanými pruhy. Doslova „silnice“ — pasuje na půjčovnu dodávek.",
    Component: DividerHighwayCurve,
  },
  {
    id: "wave-layered",
    name: "3. Vrstvené organické vlny (livetravel-style)",
    desc: "Tři vrstvy poloprůhledných vln. Měkký, moderní, klidný přechod.",
    Component: DividerWaveLayered,
  },
  {
    id: "wave-simple",
    name: "4. Jednoduchá elegantní vlna",
    desc: "Jedna čistá křivka. Nejtimerohlasovější, nikdy nezestárne.",
    Component: DividerWaveSimple,
  },
  {
    id: "mountains",
    name: "5. Hory / vrcholy",
    desc: "Ostřejší, grafičtější. Dvě vrstvy vrcholů + drobný oranžový peak akcent.",
    Component: DividerMountains,
  },
  {
    id: "abstract-city",
    name: "6. Abstraktní bloková skyline",
    desc: "Minimalistická městská silueta s obdélníky. Pár svítících oranžových oken jako akcent.",
    Component: DividerAbstractCity,
  },
  {
    id: "diagonal-slope",
    name: "7. Diagonální řez s oranžovou linkou",
    desc: "Velmi minimalistický. Jedna nakloněná čára. Funguje jako moderní design statement.",
    Component: DividerDiagonalSlope,
  },
  {
    id: "torn-paper",
    name: "8. Roztrhaný papír",
    desc: "Nepravidelný okraj jako utržený papír. Hand-crafted, organický feel.",
    Component: DividerTornPaper,
  },
  {
    id: "arches",
    name: "9. Pražská kolonáda — oblouky",
    desc: "Repetitivní oblouky, architektonická reference (Karlův most arkády).",
    Component: DividerArches,
  },
];

export default function DividerVariantsPage() {
  return (
    <div className="min-h-screen bg-[var(--surface)]">
      <header className="bg-[var(--brand-navy)] text-white py-10 px-6 text-center">
        <h1 className="text-white text-3xl md:text-4xl font-bold">Divider varianty — vyber jednu</h1>
        <p className="mt-3 text-white/70 max-w-2xl mx-auto">
          9 alternativních přechodů Hero → bílá. Každý má stejné rozměry (140 px) a navy bg nahoře, čistou bílou dole.
          Pošli mi číslo kterou chceš, použiju ji v homepage.
        </p>
      </header>

      <main className="py-12 px-6">
        <div className="max-w-[1280px] mx-auto space-y-14">
          {variants.map(({ id, name, desc, Component }) => (
            <article key={id} className="bg-white rounded-2xl border border-[var(--border)] overflow-hidden shadow-sm">
              <div className="p-5 md:p-6 border-b border-[var(--border)]">
                <h2 className="font-bold text-[var(--brand-navy)] text-xl">{name}</h2>
                <p className="text-[14px] text-[var(--ink-muted)] mt-1">{desc}</p>
              </div>
              {/* Render: hero strip + divider + content strip */}
              <div className="bg-[var(--brand-navy)] h-32 relative" />
              <Component fill="#ffffff" height={140} />
              <div className="bg-white h-32 relative flex items-center justify-center">
                <span className="text-[var(--ink-muted)] text-sm uppercase tracking-wider">
                  Bílý obsah pokračuje níže…
                </span>
              </div>
            </article>
          ))}
        </div>
      </main>
    </div>
  );
}
