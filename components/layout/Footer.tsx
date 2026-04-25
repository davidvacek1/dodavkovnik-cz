import Link from "next/link";
import { company } from "@/lib/data/company";
import { IconLocation, IconMail, IconPhone } from "../ui/Icons";
import Logo from "./Logo";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-[var(--brand-navy)] text-white/80 pt-20 pb-10 mt-24">
      <div className="container-site grid gap-12 lg:grid-cols-4">
        <div className="lg:col-span-2 space-y-5">
          <div className="bg-white rounded-xl px-4 py-3 inline-block">
            <Logo className="h-10 w-auto" />
          </div>
          <p className="max-w-md text-[15px] leading-relaxed">
            Pražská půjčovna dodávek a užitkových vozů. 21 typů vozidel včetně chladicích,
            skříňových, sklápěčů a vozů s hydraulickým čelem — vše na jedné adrese
            v Praze 9 – Černý Most.
          </p>
          <div className="flex flex-wrap gap-3 text-xs text-white/60">
            <span>IČO {company.legal.ico}</span>
            <span aria-hidden>•</span>
            <span>DIČ {company.legal.dic}</span>
            <span aria-hidden>•</span>
            <span>DS {company.legal.datovaSchranka}</span>
          </div>
        </div>

        <div>
          <h3 className="text-white font-semibold text-[15px] uppercase tracking-wider mb-5">
            Rychlé odkazy
          </h3>
          <ul className="space-y-3 text-[15px]">
            <li>
              <Link href="/" className="hover:text-white">
                Domů
              </Link>
            </li>
            <li>
              <Link href="/vozy" className="hover:text-white">
                Vozový park
              </Link>
            </li>
            <li>
              <Link href="/cenik" className="hover:text-white">
                Ceník
              </Link>
            </li>
            <li>
              <Link href="/#faq" className="hover:text-white">
                FAQ
              </Link>
            </li>
            <li>
              <Link href="/kontakt" className="hover:text-white">
                Kontakt
              </Link>
            </li>
            <li>
              <Link href="/obchodni-podminky" className="hover:text-white">
                Obchodní podmínky
              </Link>
            </li>
            <li>
              <Link href="/gdpr" className="hover:text-white">
                Zpracování osobních údajů
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-semibold text-[15px] uppercase tracking-wider mb-5">
            Kontakt
          </h3>
          <ul className="space-y-4 text-[15px]">
            <li className="flex gap-3">
              <IconLocation className="w-5 h-5 shrink-0 mt-0.5 text-[var(--brand-orange)]" />
              <span>
                {company.address.street}
                <br />
                {company.address.zip} {company.address.city}
              </span>
            </li>
            {company.phones.map((p) => (
              <li key={p.number} className="flex gap-3">
                <IconPhone className="w-5 h-5 shrink-0 mt-0.5 text-[var(--brand-orange)]" />
                <span>
                  <a href={p.href} className="hover:text-white">
                    {p.number}
                  </a>
                  <span className="block text-xs text-white/55">{p.label}</span>
                </span>
              </li>
            ))}
            <li className="flex gap-3">
              <IconMail className="w-5 h-5 shrink-0 mt-0.5 text-[var(--brand-orange)]" />
              <a href={`mailto:${company.email}`} className="hover:text-white break-all">
                {company.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="container-site mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-xs text-white/50">
        <p>© {year} {company.name}. Všechna práva vyhrazena.</p>
        <p>
          Web vyrobila <span className="text-white/75">OpenClaw</span> pro
          {" "}
          <span className="text-white/75">dodavkovnik.cz</span>.
        </p>
      </div>
    </footer>
  );
}
