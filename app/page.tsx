import Hero from "@/components/home/Hero";
import TrustBar from "@/components/home/TrustBar";
import UseCases from "@/components/home/UseCases";
import HowItWorks from "@/components/home/HowItWorks";
import WhyUs from "@/components/home/WhyUs";
import FeaturedVehicles from "@/components/home/FeaturedVehicles";
import Included from "@/components/home/Included";
import Faq from "@/components/home/Faq";
import CtaBanner from "@/components/home/CtaBanner";
import { faq } from "@/lib/data/faq";

export default function Home() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };

  return (
    <>
      <Hero />
      <TrustBar />
      <UseCases />
      <HowItWorks />
      <FeaturedVehicles />
      <WhyUs />
      <Included />
      <Faq />
      <CtaBanner />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
    </>
  );
}
