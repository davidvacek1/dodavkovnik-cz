interface Props {
  fill?: string;
  height?: number;
  className?: string;
}

/**
 * Torn-paper edge — handcrafted, organic. Random jagged shape with a hand-drawn feel.
 */
export default function DividerTornPaper({
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
            L 30 138 L 70 145 L 95 130 L 130 142 L 165 128 L 200 140 L 240 132 L 285 145 L 320 130
            L 365 138 L 400 122 L 440 138 L 480 130 L 520 145 L 560 128 L 600 138 L 645 130
            L 685 142 L 725 125 L 765 138 L 810 130 L 850 145 L 890 130 L 930 138 L 970 125
            L 1015 138 L 1055 132 L 1100 145 L 1140 130 L 1180 140 L 1225 128 L 1265 142 L 1300 130
            L 1345 138 L 1380 125 L 1425 140 L 1465 130 L 1505 145 L 1545 130 L 1590 140 L 1630 128
            L 1675 142 L 1715 130 L 1755 140 L 1795 130 L 1835 142 L 1875 130 L 1920 140
            L 1920 200 Z"
        />
      </svg>
    </div>
  );
}
