interface Props {
  fill?: string;
  height?: number;
  className?: string;
}

/**
 * Single elegant smooth curve. The cleanest, most timeless option.
 */
export default function DividerWaveSimple({
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
          d="M 0 200 L 0 120 C 480 60, 1440 60, 1920 120 L 1920 200 Z"
        />
      </svg>
    </div>
  );
}
