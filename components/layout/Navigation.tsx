"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { company } from "@/lib/data/company";
import { IconClose, IconMenu, IconPhone } from "../ui/Icons";
import Logo from "./Logo";

const navItems = [
  { href: "/vozy", label: "Vozy" },
  { href: "/cenik", label: "Ceník" },
  { href: "/#jak-to-funguje", label: "Jak to funguje" },
  { href: "/#faq", label: "FAQ" },
  { href: "/kontakt", label: "Kontakt" },
];

export default function Navigation() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const primary = company.phones.find((p) => p.primary)!;

  return (
    <>
      <header
        className={`sticky top-0 z-50 backdrop-blur-md transition-all duration-200 ${
          scrolled
            ? "bg-white/95 shadow-[0_4px_30px_-12px_rgba(15,41,68,0.15)]"
            : "bg-white/80"
        }`}
      >
        <div className="container-site flex items-center justify-between h-[72px]">
          <Link href="/" aria-label="Dodavkovnik.cz — domů" className="shrink-0">
            <Logo className="h-9 w-auto" />
          </Link>

          <nav className="hidden lg:flex items-center gap-8" aria-label="Hlavní navigace">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-[15px] font-medium text-[var(--ink)] hover:text-[var(--brand-orange)] transition-colors link-underline"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <a
              href={primary.href}
              className="hidden xl:inline-flex items-center gap-2 text-[15px] font-semibold text-[var(--brand-navy)] hover:text-[var(--brand-orange)]"
            >
              <IconPhone className="w-4 h-4" />
              {primary.number}
            </a>
            <a href="#hero-form" className="btn-primary text-[15px]">
              Rezervovat online
            </a>
          </div>

          <button
            type="button"
            className="lg:hidden inline-flex items-center justify-center w-11 h-11 rounded-md text-[var(--brand-navy)]"
            aria-label="Otevřít menu"
            aria-expanded={open}
            onClick={() => setOpen(true)}
          >
            <IconMenu className="w-7 h-7" />
          </button>
        </div>
      </header>

      {/* Mobile fullscreen menu — mimo header, z-60, scroll lock */}
      {open && (
        <div
          className="fixed inset-0 z-[60] bg-white flex flex-col lg:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Mobilní navigace"
        >
          <div className="flex items-center justify-between h-[72px] px-6 border-b border-[var(--border)]">
            <Logo className="h-9 w-auto" />
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Zavřít menu"
              className="inline-flex items-center justify-center w-11 h-11 rounded-md text-[var(--brand-navy)]"
            >
              <IconClose className="w-7 h-7" />
            </button>
          </div>
          <nav className="flex-1 overflow-y-auto px-6 py-8 flex flex-col gap-6" aria-label="Mobilní menu">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="text-2xl font-semibold text-[var(--brand-navy)] hover:text-[var(--brand-orange)]"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="border-t border-[var(--border)] px-6 py-6 space-y-3">
            <a
              href={primary.href}
              className="btn-primary w-full text-base"
              onClick={() => setOpen(false)}
            >
              <IconPhone className="w-4 h-4" /> {primary.number}
            </a>
            <a
              href="#hero-form"
              className="btn-secondary w-full text-base"
              onClick={() => setOpen(false)}
            >
              Rezervovat online
            </a>
          </div>
        </div>
      )}
    </>
  );
}
