interface Props {
  fill?: string;
  height?: number;
  className?: string;
}

/**
 * Repeating circular arches — feels architectural, almost like a Prague colonnade.
 * Distinctive but quiet enough not to compete with content.
 */
export default function DividerArches({
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
            M 0 200 L 0 140
            Q 80 80 160 140 Q 240 80 320 140 Q 400 80 480 140 Q 560 80 640 140
            Q 720 80 800 140 Q 880 80 960 140 Q 1040 80 1120 140 Q 1200 80 1280 140
            Q 1360 80 1440 140 Q 1520 80 1600 140 Q 1680 80 1760 140 Q 1840 80 1920 140
            L 1920 200 Z"
        />
      </svg>
    </div>
  );
}
