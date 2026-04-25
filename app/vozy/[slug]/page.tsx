import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { vehicleBySlug, vehicles } from "@/lib/data/vehicles";
import { company } from "@/lib/data/company";
import { IconArrowRight, IconBox, IconCheck, IconPhone, IconRoute, IconShield } from "@/components/ui/Icons";

type PageProps = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return vehicles.map((v) => ({ slug: v.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const v = vehicleBySlug(slug);
  if (!v) return { title: "Vůz nenalezen" };
  return {
    title: `${v.name} — pronájem v Praze`,
    description: v.description,
    alternates: { canonical: `/vozy/${v.slug}` },
    openGraph: {
      title: `${v.name} — dodavkovnik.cz`,
      description: v.description,
      images: [{ url: v.image, width: 1200, height: 900 }],
    },
  };
}

export default async function VehiclePage({ params }: PageProps) {
  const { slug } = await params;
  const v = vehicleBySlug(slug);
  if (!v) notFound();

  const related = vehicles
    .filter((x) => x.category === v.category && x.slug !== v.slug)
    .slice(0, 3);

  const productJsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: v.name,
    description: v.description,
    image: `${company.urlPreview}${v.image}`,
    brand: { "@type": "Brand", name: "Dodavkovnik.cz" },
    offers: {
      "@type": "Offer",
      priceCurrency: "CZK",
      price: typeof v.priceFrom === "number" ? v.priceFrom : undefined,
      availability: "https://schema.org/InStock",
      url: `${company.urlPreview}/vozy/${v.slug}`,
    },
  };

  const primary = company.phones.find((p) => p.primary)!;

  return (
    <div className="section">
      <div className="container-site">
        <nav className="text-[13px] text-[var(--ink-soft)] mb-6" aria-label="Drobečková navigace">
          <Link href="/" className="hover:text-[var(--brand-orange)]">Domů</Link>
          <span className="mx-2">/</span>
          <Link href="/vozy" className="hover:text-[var(--brand-orange)]">Vozový park</Link>
          <span className="mx-2">/</span>
          <span className="text-[var(--ink-muted)]">{v.shortName}</span>
        </nav>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          <div className="lg:sticky lg:top-24">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-[var(--surface-alt)] border border-[var(--border)]">
              <Image
                src={v.image}
                alt={v.name}
                fill
                priority
                quality={90}
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
              <span className="absolute top-4 left-4 bg-white text-[var(--brand-navy)] text-xs font-semibold uppercase tracking-wider px-3 py-1.5 rounded-md">
                {v.categoryLabel}
              </span>
            </div>
          </div>

          <div>
            <span className="eyebrow">{v.categoryLabel}</span>
            <h1 className="text-[clamp(1.8rem,3.5vw,2.6rem)] font-bold">{v.name}</h1>
            <p className="mt-5 text-[var(--ink-muted)] text-lg leading-relaxed">{v.description}</p>

            <div className="mt-8 rounded-2xl bg-[var(--brand-navy-soft)] border border-[var(--border)] p-5">
              <h2 className="text-sm uppercase tracking-wider font-semibold text-[var(--brand-orange)]">
                Ideální pro
              </h2>
              <p className="mt-2 text-[15px] text-[var(--ink)] leading-relaxed">{v.idealFor}</p>
            </div>

            <dl className="mt-8 grid grid-cols-2 gap-4">
              {v.size.cargoM3 && <Spec label="Ložný prostor" value={`${v.size.cargoM3} m³`} icon={<IconBox className="w-4 h-4" />} />}
              {v.size.loadKg && <Spec label="Nosnost" value={`${v.size.loadKg} kg`} icon={<IconRoute className="w-4 h-4" />} />}
              {v.size.dims && <Spec label="Rozměry" value={v.size.dims} />}
              {v.size.seats && <Spec label="Počet míst" value={`${v.size.seats}`} />}
              {v.deposit && <Spec label="Kauce" value={`${v.deposit.toLocaleString("cs-CZ")} Kč`} icon={<IconShield className="w-4 h-4" />} />}
            </dl>

            <div className="mt-10">
              <h2 className="text-lg font-bold font-[family-name:var(--font-display)] text-[var(--brand-navy)] mb-4">
                Ceník pronájmu
              </h2>
              <div className="rounded-xl border border-[var(--border)] overflow-hidden bg-white">
                {v.prices.map((p, i) => (
                  <div
                    key={p.label}
                    className={`flex items-center justify-between px-5 py-3.5 text-[15px] ${
                      i > 0 ? "border-t border-[var(--border)]" : ""
                    }`}
                  >
                    <span className="text-[var(--ink-muted)]">{p.label}</span>
                    <span className="font-semibold text-[var(--brand-navy)] tabular-nums">
                      {typeof p.price === "number"
                        ? `${p.price.toLocaleString("cs-CZ")} Kč`
                        : p.price}
                    </span>
                  </div>
                ))}
              </div>
              <p className="mt-3 text-[12px] text-[var(--ink-soft)]">
                Ceny jsou včetně havarijního pojištění, asistence a dálniční známky.
              </p>
            </div>

            {v.highlights.length > 0 && (
              <ul className="mt-8 space-y-3">
                {v.highlights.map((h) => (
                  <li key={h} className="flex items-start gap-3">
                    <span className="mt-1 w-5 h-5 rounded-full bg-[var(--brand-orange-soft)] text-[var(--brand-orange)] flex items-center justify-center shrink-0">
                      <IconCheck className="w-3 h-3" />
                    </span>
                    <span className="text-[15px] text-[var(--ink)]">{h}</span>
                  </li>
                ))}
              </ul>
            )}

            <div className="mt-10 flex flex-wrap gap-4">
              <Link href={`/#hero-form?vozidlo=${v.slug}`} className="btn-primary">
                Rezervovat tento vůz
                <IconArrowRight className="w-4 h-4" />
              </Link>
              <a href={primary.href} className="btn-secondary">
                <IconPhone className="w-4 h-4" />
                {primary.number}
              </a>
            </div>
          </div>
        </div>

        {related.length > 0 && (
          <section className="mt-24">
            <h2 className="text-2xl font-bold font-[family-name:var(--font-display)] mb-8">
              Podobné vozy v kategorii {v.categoryLabel.toLowerCase()}
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  href={`/vozy/${r.slug}`}
                  className="card overflow-hidden group"
                >
                  <div className="relative aspect-[4/3] bg-[var(--surface-alt)]">
                    <Image src={r.image} alt={r.name} fill quality={90} sizes="33vw" className="object-cover group-hover:scale-[1.04] transition-transform duration-500" />
                  </div>
                  <div className="p-5">
                    <h3 className="font-[family-name:var(--font-display)] font-bold text-[var(--brand-navy)]">
                      {r.shortName}
                    </h3>
                    <p className="mt-2 text-[13px] text-[var(--ink-muted)]">
                      {r.priceFrom ? `od ${r.priceFrom} Kč / den` : "Cena na dotaz"}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
      />
    </div>
  );
}

function Spec({
  label,
  value,
  icon,
}: {
  label: string;
  value: string;
  icon?: React.ReactNode;
}) {
  return (
    <div className="rounded-xl border border-[var(--border)] bg-white p-4">
      <dt className="flex items-center gap-2 text-xs uppercase tracking-wider font-semibold text-[var(--ink-soft)]">
        {icon && <span className="text-[var(--brand-orange)]">{icon}</span>}
        {label}
      </dt>
      <dd className="mt-1 text-[var(--brand-navy)] font-[family-name:var(--font-display)] font-bold text-lg">
        {value}
      </dd>
    </div>
  );
}
