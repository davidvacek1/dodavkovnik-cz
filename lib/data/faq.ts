export interface FaqItem {
  question: string;
  answer: string;
}

export const faq: FaqItem[] = [
  {
    question: "Je možné půjčit dodávku na víkend?",
    answer:
      "Ano, na víkend máme zvýhodněnou akci od pátku 16:00 do pondělí 8:00 — u vybraných dodávek za 3 000 Kč. Stačí si rezervovat termín a my vám vůz připravíme.",
  },
  {
    question: "Co když se vrátím později, než mám v rezervaci?",
    answer:
      "Dejte nám vědět co nejdřív. Každá započatá hodina navíc se účtuje podle denní sazby. Pokud víte dopředu, že se zdržíte, stačí zavolat — většinou se domluvíme.",
  },
  {
    question: "Stačí mi běžný řidičský průkaz?",
    answer:
      "U všech dodávek do 3,5 tuny a u osobních vozů stačí řidičský průkaz skupiny B. U tahače MAN a některých nákladních vozů je potřeba ŘP sk. C nebo C+E.",
  },
  {
    question: "Je v ceně zahrnuto pojištění?",
    answer:
      "Ano, havarijní pojištění a pojištění odpovědnosti je u každého vozu zahrnuto v ceně pronájmu. V ceně máte i dálniční známku a silniční asistenci.",
  },
  {
    question: "Jak velká je kauce a kdy ji dostanu zpět?",
    answer:
      "U dodávek je kauce 10 000 Kč, u vozů s hydraulickým čelem, sklápěče a minibusů 20 000 Kč, u tahače 30 000 Kč. Kauci vracíme okamžitě po kontrole vozu při vrácení.",
  },
  {
    question: "Kolik kilometrů mám v ceně?",
    answer:
      "Volné kilometry: víkend (Pá 16:00 – Po 8:00) 400 km, při pronájmu 1–3 dny 300 km/den, 4–7 dní 250 km/den. Další kilometry se účtují podle sazebníku.",
  },
  {
    question: "Kde vůz vyzvednu a vrátím?",
    answer:
      "Na naší adrese Bryksova 940/35, Praha 9 – Černý Most. Jsme otevřeni 7 dní v týdnu a předání většinou zvládneme do 1 hodiny od potvrzení rezervace.",
  },
  {
    question: "Jak probíhá rezervace online?",
    answer:
      "Vyplníte formulář u nás na webu (datum vyzvednutí, čas, typ vozu), my vás kontaktujeme a potvrdíme dostupnost — obvykle ještě týž den. Platbu i kauci platíte až při převzetí vozu.",
  },
];
