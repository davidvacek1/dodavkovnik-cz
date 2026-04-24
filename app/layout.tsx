import type { Metadata, Viewport } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import TopBar from "@/components/layout/TopBar";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import StickyMobileBar from "@/components/layout/StickyMobileBar";
import { company } from "@/lib/data/company";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || company.urlPreview;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Půjčovna dodávek Praha | Dodavkovnik.cz — pronájem dodávek Praha 9",
    template: "%s | Dodavkovnik.cz",
  },
  description:
    "Půjčovna dodávek Praha — pronájem dodávek, minibusů, chladicích vozů, sklápěčů a valníků. Rychlé potvrzení rezervace, předání do hodiny. Praha 9, Černý Most.",
  keywords: [
    "půjčovna dodávek Praha",
    "pronájem dodávek Praha",
    "půjčení dodávky",
    "dodavkovnik",
    "půjčovna dodávek Černý Most",
    "chladicí dodávka pronájem",
    "minibus pronájem Praha",
  ],
  authors: [{ name: "Půjčovna dodávek s.r.o." }],
  openGraph: {
    type: "website",
    locale: "cs_CZ",
    url: siteUrl,
    title: "Půjčovna dodávek Praha | Dodavkovnik.cz",
    description:
      "Půjčovna dodávek a užitkových vozů v Praze 9. Rychlé potvrzení rezervace, předání do hodiny. Ceny od 800 Kč / den.",
    siteName: "Dodavkovnik.cz",
    images: [{ url: "/fotky/vozy/master-l1h1.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Půjčovna dodávek Praha — Dodavkovnik.cz",
    description: "Pronájem dodávek v Praze 9, potvrzení do hodiny.",
  },
  alternates: { canonical: "/" },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
  formatDetection: { telephone: true, address: true, email: true },
};

export const viewport: Viewport = {
  themeColor: "#0f2944",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLdLocal = {
    "@context": "https://schema.org",
    "@type": "AutoRental",
    name: "Dodavkovnik.cz — Půjčovna dodávek Praha",
    legalName: company.name,
    url: siteUrl,
    image: `${siteUrl}/fotky/vozy/master-l1h1.jpg`,
    priceRange: company.priceRange,
    telephone: company.phones[0].number,
    email: company.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: company.address.street,
      postalCode: company.address.zip,
      addressLocality: "Praha",
      addressRegion: "Praha 9",
      addressCountry: "CZ",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: company.address.lat,
      longitude: company.address.lng,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "07:00",
        closes: "19:00",
      },
    ],
    areaServed: [
      { "@type": "City", name: "Praha" },
      { "@type": "AdministrativeArea", name: "Středočeský kraj" },
    ],
    sameAs: ["https://www.pujcovnadodavek.com"],
  };

  return (
    <html
      lang="cs"
      className={`${outfit.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <a href="#main" className="skip-link">
          Přeskočit na obsah
        </a>
        <TopBar />
        <Navigation />
        <main id="main" className="flex-1 pb-16 md:pb-0">
          {children}
        </main>
        <Footer />
        <StickyMobileBar />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdLocal) }}
        />
      </body>
    </html>
  );
}
