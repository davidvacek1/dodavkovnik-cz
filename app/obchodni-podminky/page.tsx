import type { Metadata } from "next";
import { company } from "@/lib/data/company";

export const metadata: Metadata = {
  title: "Obchodní podmínky | Dodavkovnik.cz — Půjčovna dodávek Praha",
  description:
    "Všeobecné obchodní podmínky pronájmu dodávek a vozidel u Půjčovny dodávek s.r.o. — kauce, pojištění, spoluúčast, storno, vrácení vozu, smluvní pokuty.",
  alternates: { canonical: "/obchodni-podminky" },
};

const toc = [
  { id: "uvod", label: "I. Úvod a definice pojmů" },
  { id: "rezervace", label: "II. Rezervace, převzetí a kauce" },
  { id: "platby-pojisteni", label: "III. Nájemné, pojištění a spoluúčast" },
  { id: "odpovednost", label: "IV. Odpovědnost a postup při škodě" },
  { id: "provoz", label: "V. Provoz, vrácení a smluvní pokuty" },
  { id: "gdpr", label: "VI. GDPR a závěrečná ustanovení" },
];

export default function OpPage() {
  return (
    <div className="bg-[var(--surface)]">
      {/* Header */}
      <section className="bg-[var(--brand-navy)] text-white">
        <div className="container-site py-14 md:py-20">
          <span className="inline-block text-[12px] uppercase tracking-[0.2em] font-semibold text-[var(--brand-orange)]">
            Právní dokumenty
          </span>
          <h1 className="mt-3 text-white text-[clamp(2rem,4.5vw,3.2rem)] font-bold leading-tight">
            Všeobecné obchodní podmínky
          </h1>
          <p className="mt-5 text-white/75 text-lg max-w-2xl">
            Tyto VOP upravují smluvní vztahy mezi {company.name} (Pronajímatel) a Nájemcem při
            pronájmu vozidla z naší půjčovny v Praze 9. Vznikají na základě Smlouvy o nájmu
            dopravního prostředku podle § 2201 a § 2321 zákona č. 89/2012 Sb., občanský zákoník.
          </p>
          <div className="mt-7 flex flex-wrap gap-x-8 gap-y-2 text-[14px] text-white/65">
            <span>
              Pronajímatel: <strong className="text-white">{company.name}</strong>
            </span>
            <span>IČO {company.legal.ico}</span>
            <span>Platné od 25. 4. 2026</span>
          </div>
        </div>
      </section>

      <div className="container-site py-10 md:py-14 grid lg:grid-cols-[260px_1fr] gap-10">
        {/* Sticky TOC */}
        <aside className="lg:sticky lg:top-24 self-start">
          <div className="bg-white rounded-xl border border-[var(--border)] p-5">
            <div className="text-[11px] uppercase tracking-[0.18em] font-semibold text-[var(--ink-soft)] mb-3">
              Obsah
            </div>
            <nav>
              <ol className="space-y-2.5 text-[14px]">
                {toc.map((t) => (
                  <li key={t.id}>
                    <a
                      href={`#${t.id}`}
                      className="text-[var(--ink-muted)] hover:text-[var(--brand-orange)] leading-snug"
                    >
                      {t.label}
                    </a>
                  </li>
                ))}
              </ol>
            </nav>
          </div>
          <p className="mt-4 text-[12px] text-[var(--ink-soft)] leading-relaxed">
            Tištěnou verzi obdržíte při převzetí vozidla. Pokud potřebujete VOP v PDF, napište
            na{" "}
            <a href={`mailto:${company.email}`} className="text-[var(--brand-orange)] underline">
              {company.email}
            </a>
            .
          </p>
        </aside>

        {/* Content */}
        <article className="max-w-3xl space-y-12 text-[15.5px] text-[var(--ink)] leading-relaxed">
          <section id="uvod" className="scroll-mt-24">
            <h2 className="text-2xl md:text-[28px] font-bold text-[var(--brand-navy)]">
              I. Úvod a definice pojmů
            </h2>

            <h3 className="mt-7 font-bold text-[var(--brand-navy)] text-lg">1. Smluvní strany</h3>
            <p className="mt-2 text-[var(--ink-muted)]">
              <strong>Pronajímatel</strong> – obchodní společnost {company.name}, IČO {company.legal.ico},
              DIČ {company.legal.dic}, se sídlem {company.address.full}, provozující půjčovnu
              motorových vozidel pod doménou dodavkovnik.cz.
            </p>
            <p className="mt-2 text-[var(--ink-muted)]">
              <strong>Nájemce</strong> – fyzická nebo právnická osoba, která s Pronajímatelem
              uzavírá Smlouvu o nájmu vozidla.
            </p>

            <h3 className="mt-7 font-bold text-[var(--brand-navy)] text-lg">
              2. Co je předmětem smlouvy
            </h3>
            <p className="mt-2 text-[var(--ink-muted)]">
              Pronajímatel přenechává Nájemci k dočasnému užívání konkrétní vozidlo (dále jen
              &bdquo;Vozidlo&ldquo; nebo &bdquo;Dodávka&ldquo;), jehož přesnou specifikaci, technický
              stav, výbavu a stav PHM zachycuje Předávací protokol. Nájemce se zavazuje hradit
              sjednané nájemné a dodržovat tyto VOP a Smlouvu.
            </p>

            <h3 className="mt-7 font-bold text-[var(--brand-navy)] text-lg">3. Klíčové pojmy</h3>
            <ul className="mt-2 space-y-2 list-disc pl-6 text-[var(--ink-muted)]">
              <li>
                <strong>Den nájmu</strong> – časové období 24 hodin počínající okamžikem převzetí
                Vozidla.
              </li>
              <li>
                <strong>Kauce</strong> – vratná finanční záruka složená při převzetí Vozidla na
                pokrytí případné spoluúčasti, smluvních pokut a dalších nároků z porušení Smlouvy.
              </li>
              <li>
                <strong>Předávací protokol</strong> – písemný dokument o stavu Vozidla, výbavě
                a PHM v okamžiku převzetí (a vrácení).
              </li>
            </ul>
          </section>

          <section id="rezervace" className="scroll-mt-24">
            <h2 className="text-2xl md:text-[28px] font-bold text-[var(--brand-navy)]">
              II. Rezervace, převzetí a kauce
            </h2>

            <h3 className="mt-7 font-bold text-[var(--brand-navy)] text-lg">
              1. Závaznost rezervace a storno
            </h3>
            <p className="mt-2 text-[var(--ink-muted)]">
              Každá Pronajímatelem potvrzená objednávka je závazná. Odesláním objednávky
              Nájemce potvrzuje, že se s těmito VOP seznámil a souhlasí s nimi.
            </p>
            <ul className="mt-3 space-y-2 list-disc pl-6 text-[var(--ink-muted)]">
              <li>
                Storno do 24 hodin před převzetím vozu &mdash; <strong>30 % z ceny pronájmu</strong>.
              </li>
              <li>
                Nepřevzetí vozu bez storna (no&#8209;show) &mdash; <strong>50 % z ceny pronájmu</strong>.
              </li>
            </ul>

            <h3 className="mt-7 font-bold text-[var(--brand-navy)] text-lg">
              2. Kdo může vůz řídit
            </h3>
            <p className="mt-2 text-[var(--ink-muted)]">
              Vozidlo smí řídit pouze osoba, která splňuje všechny tyto podmínky:
            </p>
            <ul className="mt-3 space-y-2 list-disc pl-6 text-[var(--ink-muted)]">
              <li>dosáhla věku alespoň <strong>18 let</strong>;</li>
              <li>je držitelem platného řidičského oprávnění <strong>skupiny B</strong>;</li>
              <li>má toto oprávnění minimálně <strong>18 kalendářních měsíců</strong>.</li>
            </ul>
            <p className="mt-3 text-[var(--ink-muted)]">
              Při převzetí Vozidla je Nájemce povinen předložit:
            </p>
            <ul className="mt-3 space-y-2 list-disc pl-6 text-[var(--ink-muted)]">
              <li>platný občanský průkaz (nebo cestovní pas) a platný řidičský průkaz;</li>
              <li>u nových klientů můžeme vyžádat doklad k ověření trvalého bydliště;</li>
              <li>
                u právnických osob a OSVČ kopii aktuálního výpisu z obchodního rejstříku nebo
                živnostenského oprávnění.
              </li>
            </ul>

            <h3 className="mt-7 font-bold text-[var(--brand-navy)] text-lg">
              3. Předání vozu a Předávací protokol
            </h3>
            <p className="mt-2 text-[var(--ink-muted)]">
              Vozidlo je Nájemci předáno v dobrém technickém stavu, s povinnou výbavou a se všemi
              doklady potřebnými k provozu. Aktuální stav (vč. stávajících poškození) zachycuje
              Předávací protokol. Nájemci doporučujeme stav při převzetí osobně zkontrolovat
              a pořídit si vlastní fotodokumentaci &mdash; usnadní to případné pozdější řešení.
            </p>

            <h3 className="mt-7 font-bold text-[var(--brand-navy)] text-lg">4. Vratná kauce</h3>
            <p className="mt-2 text-[var(--ink-muted)]">
              Při předání skládá Nájemce vratnou Kauci. Její výše je uvedena ve Smlouvě a slouží
              k zajištění úhrady spoluúčasti a dalších nákladů (čištění, smluvní pokuty,
              nedotankování). Lze ji uhradit v hotovosti nebo blokací na platební kartě
              (akceptujeme pouze fyzickou kartu, virtuální karta nestačí). Kauci vracíme{" "}
              <strong>ihned po převzetí a kontrole vozu</strong>.
            </p>
          </section>

          <section id="platby-pojisteni" className="scroll-mt-24">
            <h2 className="text-2xl md:text-[28px] font-bold text-[var(--brand-navy)]">
              III. Nájemné, pojištění a spoluúčast
            </h2>

            <h3 className="mt-7 font-bold text-[var(--brand-navy)] text-lg">1. Platba nájemného</h3>
            <p className="mt-2 text-[var(--ink-muted)]">
              Nájemné se hradí předem, nejpozději při převzetí Vozidla. Účtuje se za každý
              započatý den (24 hodin). Cena pronájmu nezahrnuje palivo &mdash; platí pravidlo
              &bdquo;<strong>plná nádrž, plná nádrž</strong>&ldquo;: vůz si přebíráte plně
              natankovaný a stejně tak ho i vracíte.
            </p>

            <h3 className="mt-7 font-bold text-[var(--brand-navy)] text-lg">
              2. Havarijní pojištění a standardní spoluúčast
            </h3>
            <p className="mt-2 text-[var(--ink-muted)]">
              Vozidlo je pojištěno povinným ručením i havarijním pojištěním (krytí škody na
              Vozidle, poškození a odcizení). U každé pojistné události je standardně
              spoluúčast Nájemce ve výši <strong>20 % ze způsobené škody, minimálně však
              20 000 Kč</strong>. Pokud celková škoda 20 000 Kč nepřesáhne, hradí Nájemce
              <strong> celou částku opravy</strong>. Tento přístup motivuje k opatrnosti
              při provozu a zjednodušuje administrativu drobných případů.
            </p>

            <h3 className="mt-7 font-bold text-[var(--brand-navy)] text-lg">
              3. Doplňkové služby ke snížení rizika
            </h3>
            <div className="mt-3 grid sm:grid-cols-2 gap-4">
              <div className="rounded-xl border border-[var(--border)] bg-white p-5">
                <div className="text-[11px] uppercase tracking-[0.16em] font-semibold text-[var(--brand-orange)]">
                  CDW Reduction
                </div>
                <div className="mt-1.5 font-bold text-[var(--brand-navy)] text-[16px]">
                  Snížení spoluúčasti na 10 000 Kč
                </div>
                <p className="mt-2 text-[14px] text-[var(--ink-muted)]">
                  Za <strong>500 Kč/den</strong> snížíme minimální spoluúčast z 20 000 Kč na
                  10 000 Kč. Procentuální podíl 20 % ze škody zůstává.
                </p>
              </div>
              <div className="rounded-xl border border-[var(--border)] bg-white p-5">
                <div className="text-[11px] uppercase tracking-[0.16em] font-semibold text-[var(--brand-orange)]">
                  Glass Protection
                </div>
                <div className="mt-1.5 font-bold text-[var(--brand-navy)] text-[16px]">
                  Pojištění skel se spoluúčastí 2 000 Kč
                </div>
                <p className="mt-2 text-[14px] text-[var(--ink-muted)]">
                  Za <strong>500 Kč/den</strong> snížíme spoluúčast na poškození čelního,
                  bočních a zadních skel na 2 000 Kč (mimo úmyslného poškození).
                </p>
              </div>
            </div>
            <p className="mt-3 text-[14px] text-[var(--ink-soft)]">
              Pneumatiky se připojištění netýká &mdash; v případě defektu nebo poškození hradí
              Nájemce nový kus včetně práce a přezutí.
            </p>

            <h3 className="mt-7 font-bold text-[var(--brand-navy)] text-lg">
              4. Kdy ztratíte krytí pojištěním
            </h3>
            <p className="mt-2 text-[var(--ink-muted)]">
              Nájemce nese plnou odpovědnost za škodu &mdash; i nad rámec sjednané spoluúčasti
              &mdash; pokud k ní došlo hrubým porušením Smlouvy nebo právních předpisů, zejména:
            </p>
            <ul className="mt-3 space-y-2 list-disc pl-6 text-[var(--ink-muted)]">
              <li>řízení pod vlivem alkoholu, drog nebo léků ovlivňujících řízení;</li>
              <li>
                řízení osobou, která není uvedena ve Smlouvě, nemá platné řidičské oprávnění,
                nebo má soudní zákaz řízení;
              </li>
              <li>
                neoznámení škodní události Policii ČR v případech, kdy je to vyžadováno
                předpisy nebo pojistnou smlouvou, a pojišťovna proto odmítne plnit.
              </li>
            </ul>
          </section>

          <section id="odpovednost" className="scroll-mt-24">
            <h2 className="text-2xl md:text-[28px] font-bold text-[var(--brand-navy)]">
              IV. Odpovědnost a postup při škodě
            </h2>

            <h3 className="mt-7 font-bold text-[var(--brand-navy)] text-lg">1. Náklad ve voze</h3>
            <p className="mt-2 text-[var(--ink-muted)]">
              Pronajímatel <strong>neodpovídá</strong> za škodu, ztrátu ani zničení převáženého
              materiálu, zboží nebo jiného nákladu. Po dobu nájmu je provozovatelem Vozidla
              Nájemce a odpovídá za řádné upevnění a rozložení nákladu podle dopravních
              a bezpečnostních předpisů.
            </p>

            <h3 className="mt-7 font-bold text-[var(--brand-navy)] text-lg">
              2. Přepravované osoby
            </h3>
            <p className="mt-2 text-[var(--ink-muted)]">
              Pronajímatel neodpovídá za újmu na zdraví ani životě přepravovaných osob mimo
              odpovědnosti, kterou nelze zákonem vyloučit. Újma vzniklá provozem Vozidla je
              primárně kryta povinným ručením. Úrazové pojištění přepravovaných osob (PAI)
              není součástí pronájmu &mdash; doporučujeme sjednat si vlastní úrazové či
              cestovní pojištění.
            </p>

            <h3 className="mt-7 font-bold text-[var(--brand-navy)] text-lg">
              3. Postup při havárii, poškození nebo odcizení
            </h3>
            <p className="mt-2 text-[var(--ink-muted)]">
              Při jakékoliv škodní události Nájemce <strong>bez zbytečného odkladu</strong>{" "}
              kontaktuje Pronajímatele. Policii ČR je vždy nutné přivolat:
            </p>
            <ul className="mt-3 space-y-2 list-disc pl-6 text-[var(--ink-muted)]">
              <li>k jakékoliv dopravní nehodě;</li>
              <li>při poškození Vozidla třetí osobou, vandalismu nebo odcizení;</li>
              <li>při zranění nebo úmrtí osoby;</li>
              <li>pokud je zřejmá škoda na majetku třetí osoby.</li>
            </ul>
            <p className="mt-3 text-[var(--ink-muted)]">
              Nájemce dále řádně vyplní Evropský záznam o dopravní nehodě. Pokud Policii ČR
              nepřivolá, ač to bylo nutné, a pojišťovna z tohoto důvodu odmítne plnit, nese
              Nájemce <strong>plnou odpovědnost za vzniklou škodu</strong>. Za každou škodní
              událost účtujeme administrativní poplatek 500 Kč bez DPH (komunikace
              s pojišťovnou, dokumentace, servis).
            </p>
          </section>

          <section id="provoz" className="scroll-mt-24">
            <h2 className="text-2xl md:text-[28px] font-bold text-[var(--brand-navy)]">
              V. Provoz, vrácení a smluvní pokuty
            </h2>

            <h3 className="mt-7 font-bold text-[var(--brand-navy)] text-lg">
              1. Užívání vozu a opravy
            </h3>
            <p className="mt-2 text-[var(--ink-muted)]">
              Nájemce užívá Vozidlo s řádnou péčí, v souladu s jeho určením a technickými
              podmínkami. Drobné opravy do <strong>1 500 Kč</strong> (např. doplnění
              provozních kapalin) může provést bez předchozího souhlasu. Vyšší výdaje vyžadují
              náš souhlas předem; doloží originál dokladu o platbě a pokud možno i vyměněný díl.
            </p>

            <h3 className="mt-7 font-bold text-[var(--brand-navy)] text-lg">2. Vrácení vozu</h3>
            <p className="mt-2 text-[var(--ink-muted)]">
              Vozidlo se vrací ve sjednaném čase a místě. Tolerujeme zpoždění do{" "}
              <strong>60 minut</strong>. Po jeho překročení účtujeme za každý započatý den
              prodlení částku odpovídající denní sazbě nájemného &mdash; proto nám raději ozvěte
              dopředu, většinou se domluvíme.
            </p>

            <h3 className="mt-7 font-bold text-[var(--brand-navy)] text-lg">
              3. Sazebník smluvních pokut
            </h3>
            <p className="mt-2 text-[var(--ink-muted)]">
              Pro transparentní řešení nestandardních situací sjednáváme následující smluvní
              pokuty a poplatky &mdash; mohou být odečteny z Kauce:
            </p>
            <div className="mt-4 overflow-x-auto rounded-xl border border-[var(--border)] bg-white">
              <table className="w-full text-[14.5px]">
                <thead>
                  <tr className="bg-[var(--surface-alt)] text-[var(--brand-navy)]">
                    <th className="text-left font-semibold p-3 md:p-4">Situace</th>
                    <th className="text-right font-semibold p-3 md:p-4 whitespace-nowrap">
                      Částka (bez DPH)
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[var(--border)]">
                  <tr>
                    <td className="p-3 md:p-4 text-[var(--ink-muted)]">
                      Administrativa za přestupek (poskytnutí údajů řidiče správnímu orgánu)
                    </td>
                    <td className="p-3 md:p-4 text-right font-semibold text-[var(--brand-navy)] whitespace-nowrap">
                      300 Kč
                    </td>
                  </tr>
                  <tr>
                    <td className="p-3 md:p-4 text-[var(--ink-muted)]">
                      Ztráta klíčů, technického průkazu nebo dokladů (za kus)
                    </td>
                    <td className="p-3 md:p-4 text-right font-semibold text-[var(--brand-navy)] whitespace-nowrap">
                      5 000 Kč
                    </td>
                  </tr>
                  <tr>
                    <td className="p-3 md:p-4 text-[var(--ink-muted)]">
                      Silné znečištění interiéru nebo kouření ve voze
                    </td>
                    <td className="p-3 md:p-4 text-right font-semibold text-[var(--brand-navy)] whitespace-nowrap">
                      2 000 Kč
                    </td>
                  </tr>
                  <tr>
                    <td className="p-3 md:p-4 text-[var(--ink-muted)]">
                      Doplnění nesprávného paliva (PHM)
                    </td>
                    <td className="p-3 md:p-4 text-right font-semibold text-[var(--brand-navy)] whitespace-nowrap">
                      5 000 Kč + náklady na opravu
                    </td>
                  </tr>
                  <tr>
                    <td className="p-3 md:p-4 text-[var(--ink-muted)]">
                      Administrativa škodní události
                    </td>
                    <td className="p-3 md:p-4 text-right font-semibold text-[var(--brand-navy)] whitespace-nowrap">
                      500 Kč
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section id="gdpr" className="scroll-mt-24">
            <h2 className="text-2xl md:text-[28px] font-bold text-[var(--brand-navy)]">
              VI. GDPR a závěrečná ustanovení
            </h2>

            <h3 className="mt-7 font-bold text-[var(--brand-navy)] text-lg">
              1. Ochrana osobních údajů
            </h3>
            <p className="mt-2 text-[var(--ink-muted)]">
              Správcem osobních údajů je {company.name}. Zpracování probíhá v souladu s
              nařízením GDPR (EU 2016/679) a národními předpisy. Hlavním právním základem je
              plnění Smlouvy o nájmu (ověření totožnosti, způsobilosti k řízení a poskytnutí
              služby), dále oprávněný zájem správce (ochrana majetku, vymáhání nároků,
              povinnosti vůči správním orgánům a pojišťovnám).
            </p>
            <p className="mt-3 text-[var(--ink-muted)]">Osobní údaje můžeme předat zejména:</p>
            <ul className="mt-3 space-y-2 list-disc pl-6 text-[var(--ink-muted)]">
              <li>Policii ČR a jiným orgánům veřejné moci;</li>
              <li>správním orgánům v řízení o přestupcích;</li>
              <li>pojišťovnám pro likvidaci pojistných událostí.</li>
            </ul>
            <p className="mt-3 text-[var(--ink-muted)]">
              Subjekt údajů má právo na přístup, opravu, výmaz, omezení zpracování a námitku
              proti zpracování, jakož i další práva dle GDPR. Žádost zašlete na{" "}
              <a href={`mailto:${company.email}`} className="text-[var(--brand-orange)] underline">
                {company.email}
              </a>
              .
            </p>

            <h3 className="mt-7 font-bold text-[var(--brand-navy)] text-lg">
              2. Závěrečná ustanovení
            </h3>
            <ul className="mt-3 space-y-2 list-disc pl-6 text-[var(--ink-muted)]">
              <li>
                VOP tvoří nedílnou součást každé Smlouvy o nájmu vozidla. Smlouva i VOP jsou
                vyhotoveny v českém jazyce.
              </li>
              <li>
                Pronajímatel si vyhrazuje právo VOP měnit. Aktuální verze je vždy zveřejněna
                na dodavkovnik.cz. Změna VOP se nevztahuje na již uzavřené Smlouvy.
              </li>
              <li>
                Spory ze Smlouvy nebo v souvislosti s ní řeší věcně a místně příslušný soud
                v České republice.
              </li>
            </ul>
          </section>

          <div className="mt-12 rounded-xl bg-[var(--brand-orange-soft)] p-6 border border-[var(--brand-orange)]/15">
            <p className="text-[var(--ink)] leading-relaxed">
              Máte ke smluvním podmínkám otázku?{" "}
              <a
                href={company.phones.find((p) => p.primary)?.href ?? "#"}
                className="font-semibold text-[var(--brand-orange)] hover:underline"
              >
                Zavolejte nám na {company.phones.find((p) => p.primary)?.number}
              </a>{" "}
              nebo napište na{" "}
              <a
                href={`mailto:${company.email}`}
                className="font-semibold text-[var(--brand-orange)] hover:underline"
              >
                {company.email}
              </a>
              . Rádi vše projdeme telefonicky nebo na pobočce.
            </p>
          </div>
        </article>
      </div>
    </div>
  );
}
