export type Category = "dodavky" | "minibusy" | "nakladni" | "auta" | "privesy";

export interface PriceTier {
  label: string;
  price: number | "Na dotaz" | "Na poptávku";
}

export interface Vehicle {
  slug: string;
  name: string;
  shortName: string;
  category: Category;
  categoryLabel: string;
  image: string;
  description: string;
  idealFor: string;
  size: {
    cargoM3?: number;
    loadKg?: number;
    dims?: string;
    seats?: number;
  };
  deposit: number | null;
  priceFrom?: number;
  prices: PriceTier[];
  highlights: string[];
  badge?: string;
  originalUrl: string;
}

export const categoryMeta: Record<Category, { label: string; short: string; order: number }> = {
  dodavky: { label: "Dodávky", short: "Dodávky", order: 1 },
  minibusy: { label: "Minibusy", short: "Minibusy", order: 2 },
  nakladni: { label: "Nákladní vozy", short: "Nákladní", order: 3 },
  auta: { label: "Autopůjčovna", short: "Auta", order: 4 },
  privesy: { label: "Přívěsy", short: "Přívěsy", order: 5 },
};

export const vehicles: Vehicle[] = [
  {
    slug: "renault-master-l1h1",
    name: "Renault Master L1H1",
    shortName: "Master L1H1",
    category: "dodavky",
    categoryLabel: "Malá dodávka",
    image: "/fotky/vozy/master-l1h1.jpg",
    description:
      "Menší dodávka pro stěhování garsonky nebo bytu 1+1, převoz nábytku a firemní rozvoz po Praze.",
    idealFor: "Stěhování 1+kk / 1+1, převoz nábytku, firemní rozvoz, přeprava materiálu.",
    size: { cargoM3: 6.5, loadKg: 900, dims: "2,5 × 1,75 × 1,5 m", seats: 3 },
    deposit: 10000,
    priceFrom: 900,
    highlights: ["Víkendová akce Pá 16:00 – Po 8:00 za 3 000 Kč", "Manuální převodovka, diesel"],
    prices: [
      { label: "3 hodiny", price: 800 },
      { label: "6 hodin", price: 1500 },
      { label: "1–3 dny", price: 1800 },
      { label: "4–7 dní", price: 1600 },
      { label: "8–14 dní", price: 1300 },
      { label: "14–29 dní", price: 1100 },
      { label: "1 měsíc", price: 900 },
    ],
    originalUrl: "https://www.pujcovnadodavek.com/pujcovna/pujcovna-dodavek/renault-master-l1h1",
  },
  {
    slug: "renault-master-l2h2",
    name: "Renault Master L2H2 – střední dodávka",
    shortName: "Master L2H2",
    category: "dodavky",
    categoryLabel: "Střední dodávka",
    image: "/fotky/vozy/master-l2h2.jpg",
    description:
      "Střední dodávka s vnitřní výškou 1,95 m, vhodná i na převoz vyšších lednic nastojato.",
    idealFor: "Převoz vyššího nákladu, stěhování, spotřebiče, firemní rozvoz.",
    size: { cargoM3: 10, loadKg: 1500, dims: "3,0 × 1,75 × 1,95 m", seats: 3 },
    deposit: 10000,
    priceFrom: 950,
    highlights: ["Víkendová akce Pá 16:00 – Po 8:00 za 3 000 Kč"],
    prices: [
      { label: "3 hodiny", price: 800 },
      { label: "6 hodin", price: 1500 },
      { label: "1–3 dny", price: 1800 },
      { label: "4–7 dní", price: 1600 },
      { label: "8–14 dní", price: 1300 },
      { label: "14–29 dní", price: 1100 },
      { label: "1 měsíc", price: 950 },
    ],
    originalUrl: "https://www.pujcovnadodavek.com/pujcovna-detail.php?id=29",
  },
  {
    slug: "renault-master-maxi-l3h2",
    name: "Renault Master Maxi L3H2",
    shortName: "Master Maxi L3H2",
    category: "dodavky",
    categoryLabel: "Velká dodávka",
    image: "/fotky/vozy/master-maxi-l3h2.jpg",
    description:
      "Prostorná dodávka Maxi pro větší stěhování, firemní rozvoz palet a převoz objemného nákladu.",
    idealFor: "Stěhování 2+kk / 2+1, paletová přeprava, objemný náklad.",
    size: { cargoM3: 13, loadKg: 1400, dims: "3,7 × 1,75 × 1,95 m", seats: 3 },
    deposit: 10000,
    priceFrom: 1000,
    highlights: ["Víkendová akce Pá 16:00 – Po 8:00 za 3 500 Kč"],
    prices: [
      { label: "3 hodiny", price: 800 },
      { label: "6 hodin", price: 1500 },
      { label: "1–3 dny", price: 2000 },
      { label: "4–7 dní", price: 1600 },
      { label: "8–14 dní", price: 1300 },
      { label: "14–29 dní", price: 1200 },
      { label: "1 měsíc", price: 1000 },
    ],
    originalUrl: "https://pujcovnadodavek.com/pujcovna/pujcovna-dodavek/renault-master-maxi-l3h2",
  },
  {
    slug: "renault-master-jumbo-l4h3",
    name: "Renault Master Jumbo L4H3",
    shortName: "Master Jumbo",
    category: "dodavky",
    categoryLabel: "XXL dodávka",
    image: "/fotky/vozy/master-jumbo-l4h3.jpg",
    description:
      "Největší dodávka JUMBO s nejvyšší ložnou plochou a vnitřní výškou — pro velká stěhování a firmy.",
    idealFor: "Stěhování celého bytu, paletová přeprava, dlouhé tyčové materiály.",
    size: { cargoM3: 17, loadKg: 1650, dims: "4,4 × 1,75 × 2,10 m", seats: 3 },
    deposit: 10000,
    priceFrom: 1000,
    highlights: ["Víkendová akce Pá 16:00 – Po 8:00 za 3 750 Kč"],
    prices: [
      { label: "3 hodiny", price: 1000 },
      { label: "6 hodin", price: 1500 },
      { label: "1–3 dny", price: 2200 },
      { label: "4–7 dní", price: 1700 },
      { label: "8–14 dní", price: 1400 },
      { label: "14–29 dní", price: 1200 },
      { label: "1 měsíc", price: 1000 },
    ],
    originalUrl: "https://www.pujcovnadodavek.com/pujcovna/pujcovna-dodavek/renault-master-jumbo-l4h3",
  },
  {
    slug: "renault-master-skrin",
    name: "Renault Master skříň",
    shortName: "Master skříň",
    category: "dodavky",
    categoryLabel: "Skříňová dodávka",
    image: "/fotky/vozy/master-skrin.jpg",
    description:
      "Skříňová dodávka s uzavřeným nákladovým prostorem — chrání náklad před počasím i zraky kolemjdoucích.",
    idealFor: "Pravidelný firemní rozvoz, citlivý náklad, elektronika, zboží na paletách.",
    size: { loadKg: 1400, dims: "uzavřená skříň" },
    deposit: 10000,
    badge: "Cenu potvrdíme",
    highlights: ["Pro přesné cenové pásmo kontaktujte naši pobočku"],
    prices: [{ label: "Cena", price: "Na dotaz" }],
    originalUrl: "https://www.pujcovnadodavek.com/pujcovna",
  },
  {
    slug: "renault-master-chladici",
    name: "Renault Master chladicí dodávka",
    shortName: "Chladicí Master",
    category: "dodavky",
    categoryLabel: "Chladicí dodávka",
    image: "/fotky/vozy/master-chladici.jpg",
    description:
      "Chladicí dodávka pro převoz potravin, nápojů, květin a zboží s řízenou teplotou.",
    idealFor: "Catering, rozvoz potravin, farmářské trhy, převoz květin a medikamentů.",
    size: { loadKg: 1100, dims: "chladicí nástavba" },
    deposit: 10000,
    priceFrom: 1100,
    highlights: ["Chlazení s nastavitelnou teplotou", "Vhodné pro potraviny a citlivé zboží"],
    prices: [
      { label: "1–3 dny", price: 2300 },
      { label: "4–7 dní", price: 1800 },
      { label: "8–14 dní", price: 1500 },
      { label: "14–29 dní", price: 1300 },
      { label: "1 měsíc", price: 1100 },
    ],
    originalUrl:
      "https://www.pujcovnadodavek.com/pujcovna/pujcovna-dodavek/renault-master-chladici-dodavka",
  },
  {
    slug: "renault-master-valnik",
    name: "Renault Master valník",
    shortName: "Master valník",
    category: "dodavky",
    categoryLabel: "Valník",
    image: "/fotky/vozy/master-valnik.jpg",
    description:
      "Valník s otevřenou ložnou plochou a sklápěcími bočnicemi — pro nadrozměrný a stavební náklad.",
    idealFor: "Stavební materiál, dlouhé tyče, cihly, palety, suť.",
    size: { loadKg: 1500, dims: "valník 3,2 × 2,1 m" },
    deposit: 10000,
    priceFrom: 1100,
    highlights: ["Sklápěcí bočnice", "Snadné nakládání z boku"],
    prices: [
      { label: "1–3 dny", price: 2200 },
      { label: "4–7 dní", price: 1700 },
      { label: "8–14 dní", price: 1500 },
      { label: "14–29 dní", price: 1300 },
      { label: "1 měsíc", price: 1100 },
    ],
    originalUrl:
      "https://www.pujcovnadodavek.com/pujcovna/pujcovna-dodavek/renault-master-valnik-pujcovna-dodavek-valnik",
  },
  {
    slug: "renault-master-maxi-skrin-hydraulicke-celo",
    name: "Renault Master Maxi skříň s hydraulickým čelem",
    shortName: "Maxi skříň + hydraulické čelo",
    category: "dodavky",
    categoryLabel: "Skříň s hydraulickým čelem",
    image: "/fotky/vozy/master-maxi-skrin.jpg",
    description:
      "Skříňová dodávka Maxi s hydraulickým zvedacím čelem — pro převoz těžkého zboží bez nosičů.",
    idealFor: "Paletová přeprava, těžké spotřebiče, firemní rozvoz bez potřeby rampy.",
    size: { loadKg: 1300, dims: "uzavřená skříň + hydraulické čelo" },
    deposit: 20000,
    priceFrom: 1200,
    highlights: ["Hydraulické čelo do 500 kg", "Vyšší kauce 20 000 Kč"],
    prices: [
      { label: "1–3 dny", price: 3300 },
      { label: "4–7 dní", price: 2400 },
      { label: "8–14 dní", price: 2000 },
      { label: "14–29 dní", price: 1700 },
      { label: "1 měsíc", price: 1200 },
    ],
    originalUrl:
      "https://www.pujcovnadodavek.com/pujcovna/pujcovna-dodavek/renault-master-maxi-skrin-s-hydraulickym-celem",
  },
  {
    slug: "renault-master-hydraulicke-celo",
    name: "Renault Master s hydraulickým čelem",
    shortName: "Master + hydraulické čelo",
    category: "dodavky",
    categoryLabel: "Dodávka s hydraulickým čelem",
    image: "/fotky/vozy/master-hydro.jpg",
    description:
      "Dodávka s hydraulickým zvedacím čelem pro snadnou nakládku těžkých kusů bez rampy.",
    idealFor: "Těžké palety, spotřebiče, stavební náklad.",
    size: { loadKg: 1200, dims: "valník nebo skříň + hydraulické čelo" },
    deposit: 20000,
    priceFrom: 1250,
    highlights: ["Hydraulické čelo", "Kauce 20 000 Kč"],
    prices: [
      { label: "1–3 dny", price: 3300 },
      { label: "4–7 dní", price: 2400 },
      { label: "8–14 dní", price: 2000 },
      { label: "14–29 dní", price: 1700 },
      { label: "1 měsíc", price: 1250 },
    ],
    originalUrl:
      "https://www.pujcovnadodavek.com/pujcovna/pujcovna-dodavek/renault-master-s-hydraulickym-celem",
  },
  {
    slug: "valnik-s-plachtou",
    name: "Valník s plachtou",
    shortName: "Valník + plachta",
    category: "dodavky",
    categoryLabel: "Valník s plachtou",
    image: "/fotky/vozy/valnik-plachta.jpg",
    description:
      "Valník s nastavitelnou plachtou — chrání náklad před deštěm a sněhem, přitom zachovává snadnou nakládku z boku.",
    idealFor: "Stavebniny, nábytek mimo skříň, stěhování v nejistém počasí.",
    size: { loadKg: 1400, dims: "valník 3,2 × 2,1 m + plachta" },
    deposit: 10000,
    priceFrom: 1100,
    highlights: ["Plachta do bočnic", "Ochrana před počasím"],
    prices: [
      { label: "1–3 dny", price: 2200 },
      { label: "4–7 dní", price: 1700 },
      { label: "8–14 dní", price: 1500 },
      { label: "14–29 dní", price: 1300 },
      { label: "1 měsíc", price: 1100 },
    ],
    originalUrl: "https://www.pujcovnadodavek.com/pujcovna/pujcovna-dodavek/valnik-s-plachtou",
  },
  {
    slug: "sklapec",
    name: "Dodávka sklápěč",
    shortName: "Sklápěč",
    category: "dodavky",
    categoryLabel: "Sklápěč",
    image: "/fotky/vozy/sklapec.jpg",
    description:
      "Sklápěcí dodávka pro sypké materiály, suť, zeminu a snadnou vykládku.",
    idealFor: "Odvoz suti, zeminy, stavebniny, sypké materiály.",
    size: { loadKg: 1500, dims: "sklopná korba" },
    deposit: 20000,
    priceFrom: 1200,
    highlights: ["Hydraulický sklápěč", "Kauce 20 000 Kč"],
    prices: [
      { label: "1–3 dny", price: 3300 },
      { label: "4–7 dní", price: 2400 },
      { label: "8–14 dní", price: 2000 },
      { label: "14–29 dní", price: 1700 },
      { label: "1 měsíc", price: 1200 },
    ],
    originalUrl: "https://www.pujcovnadodavek.com/pujcovna/pujcovna-dodavek/sklapec",
  },
  {
    slug: "renault-master-tristranny-sklapec",
    name: "Renault Master třístranný sklápěč",
    shortName: "Třístranný sklápěč",
    category: "dodavky",
    categoryLabel: "Třístranný sklápěč",
    image: "/fotky/vozy/master-sklapec.jpg",
    description:
      "Sklápěč s možností vyklopení na všechny tři strany — rychlá vykládka odkudkoliv.",
    idealFor: "Zahradnické práce, odvoz odpadu, stavebniny s rychlou vykládkou.",
    size: { loadKg: 1500, dims: "třístranná sklopná korba" },
    deposit: 20000,
    badge: "Cenu potvrdíme",
    highlights: ["Sklopení na 3 strany", "Kauce 20 000 Kč"],
    prices: [{ label: "Cena", price: "Na dotaz" }],
    originalUrl: "https://www.pujcovnadodavek.com/pujcovna",
  },
  // Minibusy
  {
    slug: "renault-master-7mist",
    name: "Renault Master 7 míst",
    shortName: "Master 7 míst",
    category: "minibusy",
    categoryLabel: "Minibus pro 7 osob",
    image: "/fotky/vozy/master-7mist.jpg",
    description:
      "Pohodlný minibus pro 7 osob — ideální na rodinné cesty, firemní teambuildingy a sportovní výjezdy.",
    idealFor: "Rodinné výlety, svatby, firemní akce, sportovní týmy.",
    size: { seats: 7 },
    deposit: 20000,
    priceFrom: 1050,
    highlights: ["7 míst včetně řidiče", "Pohodlné sedačky"],
    prices: [
      { label: "1–3 dny", price: 2400 },
      { label: "4–7 dní", price: 1900 },
      { label: "8–14 dní", price: 1600 },
      { label: "14–29 dní", price: 1400 },
      { label: "1 měsíc", price: 1050 },
    ],
    originalUrl: "https://www.pujcovnadodavek.com/pujcovna-detail.php?id=51",
  },
  {
    slug: "renault-trafic-8-1-mist",
    name: "Renault Trafic 8+1 míst",
    shortName: "Trafic 8+1",
    category: "minibusy",
    categoryLabel: "Minibus pro 9 osob",
    image: "/fotky/vozy/trafic-8mist.jpg",
    description:
      "Minibus Renault Trafic pro 8 pasažérů a řidiče — cestování, výjezdy, rodinné cesty.",
    idealFor: "Rodinné dovolené, firemní teambuildingy, sportovní týmy.",
    size: { seats: 9 },
    deposit: 10000,
    badge: "Cenu potvrdíme",
    highlights: ["8+1 míst", "Ceny stanovíme při poptávce"],
    prices: [{ label: "Cena", price: "Na dotaz" }],
    originalUrl: "https://www.pujcovnadodavek.com/pujcovna/pujcovna-minibusu/renault-trafic-8-1-mist",
  },
  // Nákladní
  {
    slug: "tahac-man",
    name: "Tahač návěsů MAN",
    shortName: "Tahač MAN",
    category: "nakladni",
    categoryLabel: "Tahač návěsů",
    image: "/fotky/vozy/tahac-man.jpg",
    description:
      "Tahač návěsů MAN pro těžkou nákladní přepravu. Nutný ŘP sk. C+E a zkušenosti s návěsem.",
    idealFor: "Mezinárodní kamionová přeprava, spediční služby.",
    size: {},
    deposit: 30000,
    priceFrom: 4900,
    highlights: ["Kauce 30 000 Kč", "ŘP sk. C+E nutný"],
    prices: [{ label: "1–3 dny", price: 4900 }],
    originalUrl: "https://www.pujcovnadodavek.com/pujcovna/pujcovna-nakladnich-vozu/tahac-navesu-man",
  },
  {
    slug: "iveco-hakovy-nosic",
    name: "Iveco hákový nosič kontejnerů",
    shortName: "Iveco nosič kontejnerů",
    category: "nakladni",
    categoryLabel: "Nosič kontejnerů",
    image: "/fotky/vozy/iveco-hak.jpg",
    description:
      "Nákladní vůz Iveco s hákovým nosičem kontejnerů — přeprava velkoobjemových kontejnerů a kovového odpadu.",
    idealFor: "Přeprava kontejnerů, odvoz suti, kovošrotu, firemní odpad.",
    size: {},
    deposit: 30000,
    priceFrom: 4900,
    highlights: ["Hákový nosič", "Kauce 30 000 Kč"],
    prices: [{ label: "1–3 dny", price: 4900 }],
    originalUrl:
      "https://www.pujcovnadodavek.com/pujcovna/pujcovna-nakladnich-vozu/iveco-hakovy-nosic-kontejneru",
  },
  // Auta
  {
    slug: "renault-megane",
    name: "Renault Megane benzin",
    shortName: "Megane",
    category: "auta",
    categoryLabel: "Osobní auto",
    image: "/fotky/vozy/megane.jpg",
    description: "Pohodlné osobní auto Renault Megane benzin — pro pracovní i soukromé cesty.",
    idealFor: "Služební cesty, pracovní výjezdy, dočasná náhrada za vlastní vůz.",
    size: { seats: 5 },
    deposit: 5000,
    priceFrom: 600,
    highlights: ["Benzinový motor", "Klimatizace"],
    prices: [
      { label: "1–3 dny", price: 900 },
      { label: "4–7 dní", price: 700 },
      { label: "8–14 dní", price: 600 },
    ],
    originalUrl: "https://www.pujcovnadodavek.com/pujcovna-detail.php?id=61",
  },
  {
    slug: "renault-clio",
    name: "Renault Clio benzin",
    shortName: "Clio",
    category: "auta",
    categoryLabel: "Osobní auto",
    image: "/fotky/vozy/clio.jpg",
    description: "Malé úsporné auto Renault Clio benzin — ideální pro město a krátké cesty.",
    idealFor: "Město, krátké cesty, parkování v úzkých uličkách.",
    size: { seats: 5 },
    deposit: 5000,
    badge: "Cenu potvrdíme",
    highlights: ["Nízká spotřeba", "Snadné parkování"],
    prices: [{ label: "Cena", price: "Na dotaz" }],
    originalUrl: "https://www.pujcovnadodavek.com/pujcovna/autopujcovna",
  },
  {
    slug: "renault-twingo",
    name: "Renault Twingo benzin",
    shortName: "Twingo",
    category: "auta",
    categoryLabel: "Osobní auto",
    image: "/fotky/vozy/twingo.jpg",
    description: "Městské autíčko Renault Twingo benzin — minimální spotřeba, pohodlné po městě.",
    idealFor: "Městské jízdy, úzké uličky, ekonomický provoz.",
    size: { seats: 4 },
    deposit: 5000,
    badge: "Cenu potvrdíme",
    highlights: ["Úsporný provoz", "Ideální do města"],
    prices: [{ label: "Cena", price: "Na dotaz" }],
    originalUrl: "https://www.pujcovnadodavek.com/pujcovna/autopujcovna",
  },
  // Přívěsy
  {
    slug: "jednoosy-prives",
    name: "Jednoosý přívěs",
    shortName: "Jednoosý přívěs",
    category: "privesy",
    categoryLabel: "Přívěs",
    image: "/fotky/vozy/prives-jednoosy.jpg",
    description: "Jednoosý přívěs za osobní auto — pro malé stěhování, zahradní stroje a materiál.",
    idealFor: "Malá stěhování, zahradnická technika, drobné stavební materiály.",
    size: { loadKg: 750 },
    deposit: null,
    priceFrom: 750,
    highlights: ["Přívěs za osobní auto", "Stačí ŘP sk. B"],
    prices: [
      { label: "Cena za den", price: 750 },
      { label: "Cena za týden", price: 3000 },
    ],
    originalUrl: "https://www.pujcovnadodavek.com/pujcovna/pujcovna-privesu",
  },
  {
    slug: "prepravnik-aut",
    name: "Přepravník aut a strojů",
    shortName: "Přepravník aut",
    category: "privesy",
    categoryLabel: "Přepravník aut",
    image: "/fotky/vozy/prepravnik-aut.jpg",
    description:
      "Přívěs pro přepravu aut a strojů — navijáky, plošina, snadný nájezd.",
    idealFor: "Přeprava havarovaných aut, strojů, motocyklů, zahradní techniky.",
    size: { loadKg: 2700 },
    deposit: null,
    priceFrom: 1200,
    highlights: ["Plošina s navijákem", "Snadný nájezd"],
    prices: [
      { label: "Cena za den", price: 1200 },
      { label: "Cena za týden", price: 5000 },
    ],
    originalUrl: "https://www.pujcovnadodavek.com/pujcovna/pujcovna-privesu",
  },
];

export function vehicleBySlug(slug: string): Vehicle | undefined {
  return vehicles.find((v) => v.slug === slug);
}

export function vehiclesByCategory(cat: Category): Vehicle[] {
  return vehicles.filter((v) => v.category === cat);
}

export const featuredSlugs = [
  "renault-master-l1h1",
  "renault-master-l2h2",
  "renault-master-maxi-l3h2",
] as const;

export function featuredVehicles(): Vehicle[] {
  return featuredSlugs.map((s) => vehicleBySlug(s)!).filter(Boolean);
}
