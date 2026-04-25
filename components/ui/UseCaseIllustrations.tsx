import type { SVGProps } from "react";

/**
 * Inline-SVG fallback illustrations for the UseCases section. Used until
 * Codex-generated 3D PNGs are placed in /public/fotky/usecases/. Soft 2-tone
 * (navy + warm beige + orange accent) line+fill icons sized to 200x150 viewbox.
 */

export function UseCaseBoxes(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 200 150" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      {/* Hand truck (dolly) */}
      <path d="M 38 130 L 38 40 L 30 40" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      <path d="M 38 130 L 70 130" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      <circle cx="42" cy="130" r="9" fill="#fff" stroke="currentColor" strokeWidth="3" />
      <circle cx="68" cy="130" r="9" fill="#fff" stroke="currentColor" strokeWidth="3" />
      {/* Boxes stack */}
      <rect x="50" y="70" width="50" height="42" rx="2" fill="#C8956D" stroke="currentColor" strokeWidth="2.4" />
      <line x1="75" y1="70" x2="75" y2="112" stroke="currentColor" strokeWidth="1.6" />
      <line x1="50" y1="89" x2="100" y2="89" stroke="currentColor" strokeWidth="1.6" />
      <rect x="100" y="60" width="48" height="52" rx="2" fill="#B58258" stroke="currentColor" strokeWidth="2.4" />
      <line x1="124" y1="60" x2="124" y2="112" stroke="currentColor" strokeWidth="1.6" />
      <line x1="100" y1="83" x2="148" y2="83" stroke="currentColor" strokeWidth="1.6" />
      <rect x="62" y="32" width="52" height="38" rx="2" fill="#D4A57F" stroke="currentColor" strokeWidth="2.4" />
      <line x1="88" y1="32" x2="88" y2="70" stroke="currentColor" strokeWidth="1.6" />
      <line x1="62" y1="48" x2="114" y2="48" stroke="currentColor" strokeWidth="1.6" />
      {/* Tape */}
      <line x1="62" y1="48" x2="114" y2="48" stroke="#EB6A2C" strokeWidth="3.5" strokeLinecap="round" />
    </svg>
  );
}

export function UseCaseSofa(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 200 150" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      {/* Sofa */}
      <rect x="30" y="60" width="120" height="44" rx="14" fill="#9CA3AF" stroke="currentColor" strokeWidth="3" />
      <rect x="38" y="50" width="36" height="32" rx="8" fill="#B0B7C0" stroke="currentColor" strokeWidth="2.4" />
      <rect x="106" y="50" width="36" height="32" rx="8" fill="#B0B7C0" stroke="currentColor" strokeWidth="2.4" />
      <rect x="35" y="100" width="14" height="14" rx="2" fill="currentColor" />
      <rect x="131" y="100" width="14" height="14" rx="2" fill="currentColor" />
      {/* Plant */}
      <path d="M 165 95 L 162 110 L 178 110 L 175 95 Z" fill="#EB6A2C" stroke="currentColor" strokeWidth="2.4" />
      <path d="M 170 92 C 162 78 168 68 170 60 C 172 68 178 78 170 92 Z" fill="#3B7A4E" />
      <path d="M 168 78 C 156 76 158 64 162 58 C 168 62 172 70 168 78 Z" fill="#4A8E5C" />
    </svg>
  );
}

export function UseCaseDolly(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 200 150" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      {/* Pallet truck */}
      <path d="M 25 110 L 165 110" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
      <path d="M 25 100 L 25 120" stroke="#EB6A2C" strokeWidth="5" strokeLinecap="round" />
      <circle cx="40" cy="125" r="8" fill="#fff" stroke="currentColor" strokeWidth="3" />
      <circle cx="150" cy="125" r="8" fill="#fff" stroke="currentColor" strokeWidth="3" />
      <path d="M 25 100 L 25 30 L 35 25" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" />
      <rect x="20" y="22" width="20" height="10" rx="3" fill="#EB6A2C" stroke="currentColor" strokeWidth="2.4" />
      {/* Stacked boxes */}
      <rect x="50" y="70" width="42" height="40" rx="2" fill="#C8956D" stroke="currentColor" strokeWidth="2.4" />
      <rect x="92" y="70" width="42" height="40" rx="2" fill="#B58258" stroke="currentColor" strokeWidth="2.4" />
      <rect x="60" y="40" width="48" height="30" rx="2" fill="#D4A57F" stroke="currentColor" strokeWidth="2.4" />
      <line x1="60" y1="55" x2="108" y2="55" stroke="#EB6A2C" strokeWidth="3.5" strokeLinecap="round" />
    </svg>
  );
}

export function UseCaseWheelbarrow(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 200 150" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      {/* Wheelbarrow body */}
      <path d="M 40 70 L 160 70 L 145 110 L 60 110 Z" fill="#EB6A2C" stroke="currentColor" strokeWidth="3" strokeLinejoin="round" />
      {/* Bricks inside */}
      <rect x="50" y="55" width="22" height="14" fill="#B23B2A" stroke="currentColor" strokeWidth="2" />
      <rect x="73" y="55" width="22" height="14" fill="#A23824" stroke="currentColor" strokeWidth="2" />
      <rect x="96" y="55" width="22" height="14" fill="#B23B2A" stroke="currentColor" strokeWidth="2" />
      <rect x="119" y="55" width="22" height="14" fill="#9C3322" stroke="currentColor" strokeWidth="2" />
      <rect x="60" y="42" width="22" height="14" fill="#A23824" stroke="currentColor" strokeWidth="2" />
      <rect x="83" y="42" width="22" height="14" fill="#B23B2A" stroke="currentColor" strokeWidth="2" />
      <rect x="106" y="42" width="22" height="14" fill="#9C3322" stroke="currentColor" strokeWidth="2" />
      {/* Wheel */}
      <circle cx="55" cy="120" r="13" fill="#1F1F1F" stroke="currentColor" strokeWidth="2.5" />
      <circle cx="55" cy="120" r="4" fill="#fff" />
      {/* Handle */}
      <path d="M 145 110 L 175 125" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
      <path d="M 60 110 L 35 125" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
    </svg>
  );
}
