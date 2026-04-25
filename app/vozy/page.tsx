import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { categoryMeta, vehicles, type Category } from "@/lib/data/vehicles";
import { IconArrowRight, IconBox, IconRoute } from "@/components/ui/Icons";

export const metadata: Metadata = {
  title: "Vozový park — 21 dodávek, minibusů a nákladních vozů",
  description:
    "Kompletní vozový park dodavkovnik.cz — 12 dodávek, 2 minibusy, 2 nákladní vozy, 3 osobní auta a 2 přívěsy. Všechny vozy včetně parametrů a cen.",
  alternates: { canonical: "/vozy" },
};

export default function VozyPage() {
  const categories: Category[] = ["dodavky", "minibusy", "nakladni", "auta", "privesy"];
  return (
    <div className="section">
      <div className="container-site">
        <header className="max-w-3xl">
          <span className="eyebrow">Vozový park</span>
          <h1 className="text-[clamp(2rem,4vw,3rem)] font-bold">Celkem 21 vozidel na jedné adrese</h1>
          <p className="mt-5 text-[var(--ink-muted)] text-lg leading-relaxed">
            Od malé dodávky po tahač návěsů — vše půjčujeme z jedné pobočky v Praze 9 na Černém Mostě.
            Pokud si nejste jisti, který vůz vybrat, zavolejte nebo nám napište a poradíme.
          </p>
        </header>

        {categories.map((cat) => {
          const list = vehicles.filter((v) => v.category === cat);
          if (list.length === 0) return null;
          return (
            <section key={cat} className="mt-16">
              <h2 className="text-2xl font-bold mb-6 font-[family-name:var(--font-display)]">
                {categoryMeta[cat].label}{" "}
                <span className="text-sm font-medium text-[var(--ink-soft)]">({list.length})</span>
              </h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {list.map((v) => (
                  <Link
                    key={v.slug}
                    href={`/vozy/${v.slug}`}
                    className="card overflow-hidden group flex flex-col"
                  >
                    <div className="relative aspect-[4/3] bg-[var(--surface-alt)] overflow-hidden">
                      <Image
                        src={v.image}
                        alt={v.name}
                        fill
                        quality={90}
                        sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                        className="object-cover object-center group-hover:scale-[1.04] transition-transform duration-500"
                      />
                      <span className="absolute top-3 left-3 bg-white/95 text-[var(--brand-navy)] text-[11px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-md">
                        {v.categoryLabel}
                      </span>
                      {v.badge && (
                        <span className="absolute top-3 right-3 bg-[var(--brand-orange)] text-white text-[11px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-md">
                          {v.badge}
                        </span>
                      )}
                    </div>
                    <div className="p-6 flex-1 flex flex-col">
                      <h3 className="font-[family-name:var(--font-display)] text-lg font-bold text-[var(--brand-navy)]">
                        {v.name}
                      </h3>
                      <p className="mt-2 text-[14px] text-[var(--ink-muted)] leading-relaxed line-clamp-2">
                        {v.description}
                      </p>
                      <div className="mt-4 flex flex-wrap gap-3 text-[12px] text-[var(--ink-muted)]">
                        {v.size.cargoM3 && (
                          <span className="inline-flex items-center gap-1">
                            <IconBox className="w-3.5 h-3.5 text-[var(--brand-orange)]" />
                            {v.size.cargoM3} m³
                          </span>
                        )}
                        {v.size.loadKg && (
                          <span className="inline-flex items-center gap-1">
                            <IconRoute className="w-3.5 h-3.5 text-[var(--brand-orange)]" />
                            {v.size.loadKg} kg
                          </span>
                        )}
                        {v.size.seats && (
                          <span className="inline-flex items-center gap-1">{v.size.seats} míst</span>
                        )}
                      </div>
                      <div className="mt-auto pt-4 flex items-center justify-between">
                        <span className="text-[var(--brand-navy)] font-semibold">
                          {v.priceFrom
                            ? `od ${v.priceFrom.toLocaleString("cs-CZ")} Kč / den`
                            : "Cena na dotaz"}
                        </span>
                        <IconArrowRight className="w-4 h-4 text-[var(--brand-orange)] group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}
