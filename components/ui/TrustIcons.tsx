import type { SVGProps } from "react";

/**
 * Two-tone duotone icons for the TrustBar — navy outline with orange accent fills.
 * Designed to feel a step richer than monoline icons. 40×40 viewbox.
 */

export function TrustPriceTag(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      {/* Tag fill */}
      <path
        d="M21.5 4.5h11A2.5 2.5 0 0 1 35 7v11a2.5 2.5 0 0 1-.73 1.77L20 34.04a2.5 2.5 0 0 1-3.54 0L5.96 23.54a2.5 2.5 0 0 1 0-3.54L19.73 5.23A2.5 2.5 0 0 1 21.5 4.5Z"
        fill="#FFE4D3"
        stroke="#0F2944"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      {/* Hole */}
      <circle cx="27" cy="13" r="2.4" fill="#fff" stroke="#0F2944" strokeWidth="2" />
      {/* Orange accent ribbon along the tag */}
      <path
        d="M11 22 L18 29"
        stroke="#EB6A2C"
        strokeWidth="2.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function TrustClock(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <circle cx="20" cy="21" r="14" fill="#FFE4D3" stroke="#0F2944" strokeWidth="2" />
      {/* Hour markers */}
      <line x1="20" y1="9" x2="20" y2="11" stroke="#0F2944" strokeWidth="1.6" strokeLinecap="round" />
      <line x1="32" y1="21" x2="30" y2="21" stroke="#0F2944" strokeWidth="1.6" strokeLinecap="round" />
      <line x1="20" y1="33" x2="20" y2="31" stroke="#0F2944" strokeWidth="1.6" strokeLinecap="round" />
      <line x1="8" y1="21" x2="10" y2="21" stroke="#0F2944" strokeWidth="1.6" strokeLinecap="round" />
      {/* Hands — orange minute, navy hour */}
      <line x1="20" y1="21" x2="20" y2="13.5" stroke="#EB6A2C" strokeWidth="2.6" strokeLinecap="round" />
      <line x1="20" y1="21" x2="25.5" y2="21" stroke="#0F2944" strokeWidth="2.6" strokeLinecap="round" />
      <circle cx="20" cy="21" r="1.6" fill="#0F2944" />
      {/* Speed swoosh */}
      <path d="M5 10 Q 9 8 13 10" stroke="#EB6A2C" strokeWidth="1.8" strokeLinecap="round" fill="none" />
    </svg>
  );
}

export function TrustShield(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M20 4 L33 9 V19c0 8-5.5 13.7-13 17C12.5 32.7 7 27 7 19V9L20 4Z"
        fill="#0F2944"
        stroke="#0F2944"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M14 21 L18.5 25.5 L27 16"
        stroke="#EB6A2C"
        strokeWidth="3.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}

export function TrustCalendar(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      {/* Body */}
      <rect x="6" y="9" width="28" height="25" rx="3" fill="#fff" stroke="#0F2944" strokeWidth="2" />
      {/* Header band */}
      <path
        d="M6 12 a3 3 0 0 1 3-3h22a3 3 0 0 1 3 3v3H6V12Z"
        fill="#EB6A2C"
        stroke="#0F2944"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      {/* Rings */}
      <line x1="13" y1="6" x2="13" y2="11" stroke="#0F2944" strokeWidth="2.4" strokeLinecap="round" />
      <line x1="27" y1="6" x2="27" y2="11" stroke="#0F2944" strokeWidth="2.4" strokeLinecap="round" />
      {/* Date dots */}
      <rect x="11" y="20" width="4" height="3.5" rx="0.7" fill="#FFE4D3" />
      <rect x="18" y="20" width="4" height="3.5" rx="0.7" fill="#FFE4D3" />
      <rect x="25" y="20" width="4" height="3.5" rx="0.7" fill="#FFE4D3" />
      {/* Selected highlighted day */}
      <rect x="18" y="25.5" width="4" height="3.5" rx="0.7" fill="#EB6A2C" />
      <rect x="11" y="25.5" width="4" height="3.5" rx="0.7" fill="#FFE4D3" />
      <rect x="25" y="25.5" width="4" height="3.5" rx="0.7" fill="#FFE4D3" />
    </svg>
  );
}
