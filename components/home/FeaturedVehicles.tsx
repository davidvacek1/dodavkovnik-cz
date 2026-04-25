import Image from "next/image";
import Link from "next/link";
import { featuredVehicles } from "@/lib/data/vehicles";
import { IconArrowRight, IconBox, IconRoute } from "../ui/Icons";
import { FadeIn, Stagger, StaggerItem } from "../ui/Motion";

export default function FeaturedVehicles() {
  const items = featuredVehicles();
  return (
    <section id="vozy" className="section bg-[var(--surface-alt)]">
      <div className="container-site">
        <FadeIn className="text-center max-w-2xl mx-auto">
          <span className="eyebrow">Vyberte vůz</span>
          <h2 className="text-[clamp(1.8rem,3.5vw,2.5rem)] font-bold">
            Tři dodávky na 90 % situací.
          </h2>
          <p className="mt-4 text-[var(--ink-muted)] text-lg">
            Pro většinu úkolů si vystačíte s malou, střední nebo velkou dodávkou. Pokud potřebujete
            něco specifického, máme i chladicí, sklápěč, valník a skříň s hydraulickým čelem.
          </p>
        </FadeIn>

        <Stagger className="mt-14 grid md:grid-cols-3 gap-6">
          {items.map((v) => (
            <StaggerItem key={v.slug} className="card overflow-hidden flex flex-col group">
              <div className="relative aspect-[4/3] bg-white overflow-hidden">
                <Image
                  src={v.image}
                  alt={v.name}
                  fill
                  quality={90}
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="object-cover object-center group-hover:scale-[1.04] transition-transform duration-500"
                />
                <span className="absolute top-3 left-3 bg-white/95 text-[var(--brand-navy)] text-[11px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-md shadow-sm">
                  {v.categoryLabel}
                </span>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="font-[family-name:var(--font-display)] text-xl font-bold text-[var(--brand-navy)]">
                  {v.name}
                </h3>
                <p className="mt-2 text-[15px] text-[var(--ink-muted)] leading-relaxed flex-1">
                  {v.description}
                </p>
                <div className="mt-5 flex flex-wrap gap-4 text-[13px] text-[var(--ink-muted)]">
                  {v.size.cargoM3 && (
                    <span className="inline-flex items-center gap-1.5">
                      <IconBox className="w-4 h-4 text-[var(--brand-orange)]" />
                      {v.size.cargoM3} m³
                    </span>
                  )}
                  {v.size.loadKg && (
                    <span className="inline-flex items-center gap-1.5">
                      <IconRoute className="w-4 h-4 text-[var(--brand-orange)]" />
                      {v.size.loadKg} kg
                    </span>
                  )}
                  {v.size.dims && (
                    <span className="inline-flex items-center gap-1.5">
                      {v.size.dims}
                    </span>
                  )}
                </div>
                <div className="mt-5 pt-5 border-t border-[var(--border)] flex items-center justify-between gap-3">
                  <div>
                    <div className="text-xs text-[var(--ink-soft)]">od</div>
                    <div className="font-[family-name:var(--font-display)] text-2xl font-bold text-[var(--brand-navy)]">
                      {v.priceFrom} <span className="text-sm font-medium text-[var(--ink-muted)]">Kč/den</span>
                    </div>
                  </div>
                  <Link
                    href={`/vozy/${v.slug}`}
                    className="inline-flex items-center gap-1.5 text-[var(--brand-orange)] font-semibold text-[14px] hover:gap-2 transition-all"
                  >
                    Detail vozu
                    <IconArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>

        <div className="mt-10 text-center">
          <Link href="/vozy" className="btn-secondary">
            Zobrazit všech 21 vozidel
            <IconArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
