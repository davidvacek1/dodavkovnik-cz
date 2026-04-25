import Image from "next/image";
import Link from "next/link";
import { vehicles, type Category } from "@/lib/data/vehicles";
import { IconArrowRight, IconBox, IconRoute } from "../ui/Icons";
import { FadeIn, Stagger, StaggerItem } from "../ui/Motion";

/**
 * Compact showcase of whole fleet by category (links to /vozy/[slug]).
 * Designed as a visual counterpart to the pricing card grid.
 */
export default function VehicleShowcase() {
  const byCat: Array<{ cat: Category; label: string }> = [
    { cat: "dodavky", label: "Dodávky" },
    { cat: "minibusy", label: "Minibusy a auta" },
    { cat: "nakladni", label: "Nákladní a speciální" },
  ];

  const grouped = byCat.map(({ cat, label }) => ({
    label,
    items: vehicles.filter((v) =>
      cat === "minibusy"
        ? v.category === "minibusy" || v.category === "auta"
        : cat === "nakladni"
          ? v.category === "nakladni" || v.category === "privesy"
          : v.category === "dodavky",
    ),
  }));

  return (
    <section className="section bg-[var(--surface-alt)]">
      <div className="container-site">
        <FadeIn className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div className="max-w-2xl">
            <span className="eyebrow">Vozový park</span>
            <h2 className="text-[clamp(1.9rem,3.8vw,2.7rem)] font-bold">
              21 vozů pod jednou střechou v Praze 9.
            </h2>
            <p className="mt-4 text-[var(--ink-muted)] text-lg leading-relaxed">
              Od malé dodávky po tahač návěsů a sklápěč. Všechny vozy jsou
              pravidelně kontrolované a připravené k okamžitému použití.
            </p>
          </div>
          <Link
            href="/vozy"
            className="btn-secondary shrink-0 text-[14px] whitespace-nowrap"
          >
            Zobrazit všechny vozy
            <IconArrowRight className="w-4 h-4" />
          </Link>
        </FadeIn>

        <div className="space-y-14">
          {grouped.map((group) => (
            <div key={group.label}>
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-[family-name:var(--font-display)] font-bold text-[var(--brand-navy)] text-xl">
                  {group.label}
                </h3>
                <span className="text-[13px] text-[var(--ink-soft)]">
                  {group.items.length} {group.items.length === 1 ? "vůz" : "vozů"}
                </span>
              </div>
              <Stagger className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {group.items.map((v) => (
                  <StaggerItem key={v.slug}>
                    <Link
                      href={`/vozy/${v.slug}`}
                      className="group block bg-white rounded-xl border border-[var(--border)] overflow-hidden hover:border-[var(--brand-navy)] transition-colors"
                    >
                      <div className="relative aspect-[4/3] bg-[var(--surface-alt)] overflow-hidden">
                        <Image
                          src={v.image}
                          alt={v.name}
                          fill
                          quality={90}
                          sizes="(min-width: 1024px) 22vw, (min-width: 768px) 33vw, 50vw"
                          className="object-cover group-hover:scale-[1.06] transition-transform duration-500"
                        />
                      </div>
                      <div className="p-4">
                        <div className="text-[10px] uppercase tracking-wider font-semibold text-[var(--brand-orange)]">
                          {v.categoryLabel}
                        </div>
                        <div className="mt-1 font-[family-name:var(--font-display)] font-bold text-[var(--brand-navy)] text-[15px] leading-tight line-clamp-2">
                          {v.shortName}
                        </div>
                        <div className="mt-2 flex items-center justify-between text-[12px] text-[var(--ink-muted)]">
                          <div className="flex items-center gap-2.5">
                            {v.size.cargoM3 && (
                              <span className="inline-flex items-center gap-1">
                                <IconBox className="w-3 h-3 text-[var(--brand-orange)]" />
                                {v.size.cargoM3} m³
                              </span>
                            )}
                            {v.size.loadKg && (
                              <span className="inline-flex items-center gap-1">
                                <IconRoute className="w-3 h-3 text-[var(--brand-orange)]" />
                                {v.size.loadKg} kg
                              </span>
                            )}
                            {v.size.seats && !v.size.loadKg && (
                              <span>{v.size.seats} míst</span>
                            )}
                          </div>
                          {v.priceFrom && (
                            <span className="text-[var(--brand-navy)] font-semibold">
                              od {v.priceFrom} Kč
                            </span>
                          )}
                        </div>
                      </div>
                    </Link>
                  </StaggerItem>
                ))}
              </Stagger>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
