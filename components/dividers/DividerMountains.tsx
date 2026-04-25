interface Props {
  fill?: string;
  height?: number;
  className?: string;
}

/**
 * Angular peaks — sharper and more graphic than soft waves.
 * Orange faint accent peak in the middle.
 */
export default function DividerMountains({
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
        {/* Background range — translucent */}
        <path
          fill={fill}
          opacity="0.4"
          d="M 0 200 L 0 130 L 220 90 L 480 120 L 720 70 L 980 110 L 1240 60 L 1500 100 L 1740 80 L 1920 110 L 1920 200 Z"
        />
        {/* Front range — solid */}
        <path
          fill={fill}
          d="M 0 200 L 0 160 L 180 130 L 380 150 L 580 110 L 820 145 L 1080 95 L 1320 140 L 1560 120 L 1780 145 L 1920 130 L 1920 200 Z"
        />
        {/* Tiny orange accent peak */}
        <path
          fill="#eb6a2c"
          opacity="0.85"
          d="M 1075 95 L 1095 135 L 1055 135 Z"
        />
      </svg>
    </div>
  );
}
