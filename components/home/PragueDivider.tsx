interface PragueDividerProps {
  /** Fill color — default matches the surface below. */
  fill?: string;
  /** Height of the SVG in px; scales responsively. */
  height?: number;
  className?: string;
}

/**
 * Decorative horizontal panorama divider — silhouette of Prague rooftops + a side-view
 * van with orange speed streaks. Sits between the dark hero section and the light content
 * below. Zero raster assets — pure SVG, scales crisply on any screen.
 */
export default function PragueDivider({
  fill = "var(--surface)",
  height = 100,
  className = "",
}: PragueDividerProps) {
  return (
    <div
      className={`relative w-full overflow-hidden pointer-events-none ${className}`}
      style={{ height }}
      aria-hidden
    >
      <svg
        viewBox="0 30 1920 170"
        preserveAspectRatio="none"
        className="absolute inset-0 w-full h-full block"
      >
        {/* Soft orange horizon glow above the silhouette */}
        <defs>
          <linearGradient id="prg-glow" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="#eb6a2c" stopOpacity="0" />
            <stop offset="65%" stopColor="#eb6a2c" stopOpacity="0.18" />
            <stop offset="100%" stopColor="#eb6a2c" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="prg-streak" x1="0" x2="1">
            <stop offset="0%" stopColor="#ff9462" stopOpacity="0" />
            <stop offset="100%" stopColor="#eb6a2c" stopOpacity="1" />
          </linearGradient>
        </defs>

        <rect x="0" y="60" width="1920" height="70" fill="url(#prg-glow)" />

        {/* Prague silhouette — hand-crafted path covering the bottom. */}
        <path
          fill={fill}
          d="
            M 0 200
            L 0 130
            L 50 130 L 55 110 L 60 130 L 70 130 L 75 105 L 78 105 L 82 120 L 90 120 L 95 100 L 98 100 L 100 120 L 120 120 L 125 95 L 130 95 L 135 120 L 165 120
            L 170 95 L 178 95 L 182 112 L 200 112 L 205 105 L 215 95 L 218 90 L 222 95 L 228 105 L 235 115 L 270 115
            L 270 95 L 280 95 L 290 82 L 300 95 L 310 95 L 312 115 L 360 115
            L 365 98 L 368 98 L 372 85 L 378 78 L 384 78 L 388 85 L 392 98 L 395 98 L 400 115 L 450 115
            L 460 100 L 470 100 L 475 85 L 485 85 L 490 100 L 500 100 L 510 110 L 540 110
            L 545 120 L 575 120 L 580 105 L 600 105 L 605 120 L 640 120
            L 650 92 L 660 92 L 665 80 L 670 72 L 675 65 L 680 60 L 685 52 L 690 45 L 693 52 L 698 58 L 702 65 L 707 72 L 712 80 L 718 86 L 725 92 L 740 92 L 745 110 L 800 110
            L 810 100 L 820 85 L 828 85 L 833 72 L 840 65 L 843 72 L 848 85 L 856 85 L 865 100 L 880 100 L 885 112 L 930 112
            L 940 95 L 948 95 L 953 85 L 960 78 L 965 85 L 972 95 L 980 95 L 988 108 L 1030 108
            L 1040 118 L 1070 118 L 1078 108 L 1085 108 L 1092 95 L 1098 88 L 1102 95 L 1110 108 L 1118 108 L 1125 118 L 1165 118
            L 1170 100 L 1180 100 L 1188 85 L 1196 85 L 1202 70 L 1210 62 L 1216 55 L 1220 48 L 1226 55 L 1232 62 L 1240 70 L 1248 78 L 1256 85 L 1264 85 L 1270 100 L 1320 100
            L 1330 90 L 1340 90 L 1348 78 L 1356 78 L 1360 70 L 1368 70 L 1374 78 L 1382 78 L 1390 90 L 1400 90 L 1408 102 L 1450 102
            L 1460 115 L 1500 115 L 1505 100 L 1520 100 L 1525 88 L 1535 88 L 1540 100 L 1555 100 L 1560 115 L 1600 115
            L 1610 105 L 1620 90 L 1630 78 L 1642 78 L 1650 68 L 1658 68 L 1665 78 L 1678 78 L 1690 90 L 1700 105 L 1710 115 L 1760 115
            L 1770 100 L 1785 100 L 1795 88 L 1810 88 L 1820 100 L 1835 100 L 1845 115 L 1880 115 L 1890 125 L 1920 125
            L 1920 200 Z"
        />

        {/* Small side-view van, parked on the skyline road */}
        <g transform="translate(1420, 92)" opacity="0.92">
          <path
            fill={fill}
            stroke={fill}
            strokeWidth="1"
            d="M 0 18 L 0 4 Q 0 0 4 0 L 14 0 Q 16 0 18 -2 L 22 -6 Q 24 -8 28 -8 L 50 -8 Q 54 -8 55 -4 L 58 16 L 58 18 Z"
          />
          <circle cx="10" cy="20" r="3" fill={fill} />
          <circle cx="48" cy="20" r="3" fill={fill} />
        </g>

        {/* Orange speed streaks */}
        <g stroke="url(#prg-streak)" strokeWidth="3" strokeLinecap="round" fill="none" opacity="0.95">
          <line x1="1360" y1="102" x2="1410" y2="102" />
          <line x1="1370" y1="110" x2="1408" y2="110" />
          <line x1="1380" y1="94" x2="1406" y2="94" />
        </g>
      </svg>
    </div>
  );
}
