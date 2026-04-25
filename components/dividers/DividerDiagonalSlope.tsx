interface Props {
  fill?: string;
  height?: number;
  className?: string;
}

/**
 * Single diagonal cut — minimal, modern. Optional orange accent line on the slope.
 */
export default function DividerDiagonalSlope({
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
        <path fill={fill} d="M 0 200 L 0 110 L 1920 60 L 1920 200 Z" />
        <line x1="0" y1="110" x2="1920" y2="60" stroke="#eb6a2c" strokeWidth="2" opacity="0.85" />
      </svg>
    </div>
  );
}
