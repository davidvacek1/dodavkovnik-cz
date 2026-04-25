interface Props {
  fill?: string;
  height?: number;
  className?: string;
}

/**
 * Three layered organic waves — soft, modern, livetravel-like.
 * Top layer is most translucent; bottom layer is solid white.
 */
export default function DividerWaveLayered({
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
        {/* Background wave — most translucent */}
        <path
          fill={fill}
          opacity="0.35"
          d="M 0 90 C 320 60, 640 130, 960 95 S 1600 60, 1920 100 L 1920 200 L 0 200 Z"
        />
        {/* Mid wave */}
        <path
          fill={fill}
          opacity="0.65"
          d="M 0 130 C 240 100, 600 160, 960 130 S 1440 100, 1920 140 L 1920 200 L 0 200 Z"
        />
        {/* Front wave — solid */}
        <path
          fill={fill}
          d="M 0 165 C 380 140, 720 185, 1080 165 S 1620 145, 1920 170 L 1920 200 L 0 200 Z"
        />
      </svg>
    </div>
  );
}
