import Image from "next/image";
import { company } from "@/lib/data/company";
import { IconArrowRight, IconPhone } from "../ui/Icons";
import { FadeIn } from "../ui/Motion";

export default function CtaBanner() {
  const primary = company.phones.find((p) => p.primary)!;
  return (
    <section className="section-tight">
      <div className="container-site">
        <FadeIn className="relative overflow-hidden rounded-3xl bg-[var(--brand-navy)] text-white p-8 md:p-14">
          <div className="absolute inset-0 -z-0 opacity-25">
            <Image
              src="/fotky/vozy/master-l2h2.jpg"
              alt=""
              fill
              sizes="100vw"
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[var(--brand-navy)] via-[var(--brand-navy)]/80 to-transparent" />
          </div>
          <div className="relative grid md:grid-cols-[1.3fr_1fr] gap-8 items-center">
            <div>
              <span className="inline-block text-xs uppercase tracking-[0.2em] font-semibold text-[var(--brand-orange)]">
                Máte termín?
              </span>
              <h2 className="mt-4 text-white font-[family-name:var(--font-display)] font-bold text-[clamp(1.8rem,4vw,2.6rem)] leading-tight">
                Dodávku zarezervujete <br className="hidden sm:block" />
                během pár minut.
              </h2>
              <p className="mt-4 text-white/80 text-lg max-w-lg">
                Vyberte si vůz, vyplňte datum a máte hotovo. Rychle, snadno a spolehlivě.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row md:flex-col gap-3">
              <a href="/#hero-form" className="btn-primary justify-center h-12 flex-1">
                Rezervovat online
                <IconArrowRight className="w-4 h-4" />
              </a>
              <a
                href={primary.href}
                className="inline-flex items-center justify-center gap-2 font-semibold text-white border-2 border-white/25 rounded-[10px] px-6 h-12 hover:bg-white/10 transition-colors"
              >
                <IconPhone className="w-4 h-4" />
                Zavolat {primary.number}
              </a>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
