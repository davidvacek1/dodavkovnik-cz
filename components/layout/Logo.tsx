import Image from "next/image";

interface LogoProps {
  className?: string;
  variant?: "primary" | "tagline" | "icon";
  /** When true (in dark surfaces like footer), uses the same PNG — background is transparent. */
  inverted?: boolean;
}

const sources = {
  primary: { src: "/logo/logo-primary.png", width: 1500, height: 500 },
  tagline: { src: "/logo/logo-with-tagline.png", width: 1500, height: 500 },
  icon: { src: "/logo/logo-icon.png", width: 512, height: 512 },
};

export default function Logo({ className = "h-9 w-auto", variant = "primary" }: LogoProps) {
  const s = sources[variant];
  return (
    <Image
      src={s.src}
      alt="dodavkovnik.cz — Půjčovna dodávek Praha"
      width={s.width}
      height={s.height}
      priority
      className={className}
    />
  );
}
