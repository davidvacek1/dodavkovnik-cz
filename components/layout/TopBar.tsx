import { company } from "@/lib/data/company";
import { IconClock, IconLocation, IconPhone } from "../ui/Icons";

export default function TopBar() {
  const primary = company.phones.find((p) => p.primary)!;
  return (
    <div className="hidden md:block bg-[var(--brand-navy)] text-white/85 text-[13px]">
      <div className="container-site flex items-center justify-between h-10">
        <div className="flex items-center gap-6">
          <span className="inline-flex items-center gap-2">
            <IconLocation className="w-3.5 h-3.5 text-[var(--brand-orange)]" />
            {company.address.city}
          </span>
          <span className="inline-flex items-center gap-2">
            <IconClock className="w-3.5 h-3.5 text-[var(--brand-orange)]" />
            {company.openingHours}
          </span>
        </div>
        <a
          href={primary.href}
          className="inline-flex items-center gap-2 font-medium text-white hover:text-[var(--brand-orange)] transition-colors"
        >
          <IconPhone className="w-3.5 h-3.5" />
          {primary.number}
        </a>
      </div>
    </div>
  );
}
