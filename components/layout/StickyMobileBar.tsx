import { company } from "@/lib/data/company";
import { IconCalendar, IconPhone } from "../ui/Icons";

export default function StickyMobileBar() {
  const primary = company.phones.find((p) => p.primary)!;
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-white border-t border-[var(--border)] shadow-[0_-8px_24px_-12px_rgba(15,41,68,0.15)]">
      <div className="grid grid-cols-2 gap-0">
        <a
          href={primary.href}
          className="flex items-center justify-center gap-2 py-3 font-semibold text-[var(--brand-navy)] border-r border-[var(--border)] text-[15px]"
        >
          <IconPhone className="w-5 h-5 text-[var(--brand-orange)]" />
          Zavolat
        </a>
        <a
          href="#hero-form"
          className="flex items-center justify-center gap-2 py-3 font-semibold text-white bg-[var(--brand-orange)] text-[15px]"
        >
          <IconCalendar className="w-5 h-5" />
          Rezervovat
        </a>
      </div>
    </div>
  );
}
