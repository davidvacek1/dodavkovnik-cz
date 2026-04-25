interface Props {
  fill?: string;
  height?: number;
  className?: string;
}

/**
 * Minimal abstract block skyline. Rectangular silhouettes, more graphic and modern
 * than detailed Prague rooftops.
 */
export default function DividerAbstractCity({
  fill = "#ffffff",
  height = 140,
  className = "",
}: Props) {
  return (
    <div
      className={`w-full overflow-hidden pointer-events-none ${className}`}
      style={{ height }}
      aria-hidden
    >
      <svg viewBox="0 0 1920 200" preserveAspectRatio="none" className="w-full h-full block">
        <path
          fill={fill}
          d="
            M 0 200
            L 0 140 L 80 140 L 80 110 L 130 110 L 130 130 L 200 130 L 200 100 L 245 100 L 245 80 L 290 80 L 290 130 L 360 130
            L 360 100 L 420 100 L 420 70 L 470 70 L 470 110 L 540 110 L 540 90 L 600 90 L 600 130 L 680 130
            L 680 110 L 740 110 L 740 60 L 790 60 L 790 100 L 850 100 L 850 130 L 920 130
            L 920 90 L 990 90 L 990 60 L 1040 60 L 1040 110 L 1110 110 L 1110 130 L 1180 130
            L 1180 100 L 1240 100 L 1240 70 L 1290 70 L 1290 110 L 1360 110 L 1360 90 L 1420 90 L 1420 130 L 1500 130
            L 1500 110 L 1560 110 L 1560 75 L 1620 75 L 1620 100 L 1700 100 L 1700 130 L 1780 130
            L 1780 100 L 1840 100 L 1840 130 L 1920 130 L 1920 200 Z"
        />
        {/* Few orange-lit windows */}
        <rect x="247" y="90" width="6" height="8" fill="#eb6a2c" opacity="0.85" />
        <rect x="745" y="75" width="6" height="8" fill="#eb6a2c" opacity="0.85" />
        <rect x="993" y="70" width="6" height="8" fill="#eb6a2c" opacity="0.85" />
        <rect x="1565" y="85" width="6" height="8" fill="#eb6a2c" opacity="0.85" />
      </svg>
    </div>
  );
}
