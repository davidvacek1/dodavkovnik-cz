interface Props {
  fill?: string;
  height?: number;
  className?: string;
}

/**
 * Vanishing-point highway curve — a perspective road sweeping from hero into the content.
 * Suits a van/transport brand. Orange dashed lane markers on the road centerline.
 */
export default function DividerHighwayCurve({
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
        <defs>
          <linearGradient id="hwy-fade" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor={fill} stopOpacity="0" />
            <stop offset="50%" stopColor={fill} stopOpacity="0.55" />
            <stop offset="100%" stopColor={fill} stopOpacity="1" />
          </linearGradient>
        </defs>
        {/* Soft horizon glow */}
        <ellipse cx="960" cy="60" rx="640" ry="40" fill="#eb6a2c" opacity="0.12" />
        {/* The road that sweeps from middle-distance into foreground */}
        <path
          fill={fill}
          d="
            M 0 200
            L 0 175
            C 320 165, 700 130, 960 110
            C 1220 130, 1600 165, 1920 175
            L 1920 200 Z"
        />
        {/* Soft fade band so the curve isn't too hard */}
        <path
          fill="url(#hwy-fade)"
          d="
            M 0 200
            L 0 165
            C 320 155, 700 120, 960 100
            C 1220 120, 1600 155, 1920 165
            L 1920 200 Z"
          opacity="0.4"
        />
        {/* Center dashed lane marking — implies depth */}
        <line
          x1="960" y1="115" x2="960" y2="195"
          stroke="#eb6a2c"
          strokeWidth="3"
          strokeDasharray="6 8"
          strokeLinecap="round"
        />
        {/* Two outer perspective lines */}
        <line x1="640" y1="135" x2="200" y2="200" stroke="#eb6a2c" strokeWidth="1.5" opacity="0.35" />
        <line x1="1280" y1="135" x2="1720" y2="200" stroke="#eb6a2c" strokeWidth="1.5" opacity="0.35" />
      </svg>
    </div>
  );
}
