/**
 * Web copies of the app's earned badges (BadgeArt.tsx in fitness-court-app):
 * the same family shapes, colours and face words, drawn as SVG.
 */
type Family = "fitnessCourt" | "streak" | "challenges" | "together" | "anytime";

const COLOURS: Record<Family, [string, string]> = {
  fitnessCourt: ["#1E9BFF", "#0B4F9E"],
  streak: ["#FF6B4A", "#B02A12"],
  challenges: ["#E8478B", "#8E1B52"],
  together: ["#B15CFF", "#5A1FA8"],
  anytime: ["#FFB43A", "#C45A00"],
};

const GOLD = "#FFC933";

function polygon(sides: number, r: number, rotate = 0) {
  return Array.from({ length: sides }, (_, i) => {
    const a = (Math.PI * 2 * i) / sides + rotate;
    return `${50 + r * Math.cos(a)},${50 + r * Math.sin(a)}`;
  }).join(" ");
}

function Shape({ family, r, fill }: { family: Family; r: number; fill: string }) {
  switch (family) {
    case "streak":
      return <polygon points={polygon(6, r, Math.PI / 6)} fill={fill} />;
    case "challenges":
      return <polygon points={polygon(8, r, Math.PI / 8)} fill={fill} />;
    case "anytime":
      return <polygon points={polygon(16, r, 0).split(" ").map((p, i) => (i % 2 ? scale(p, 0.86) : p)).join(" ")} fill={fill} />;
    case "together":
      return (
        <g fill={fill}>
          <circle cx={50 - r * 0.32} cy="50" r={r * 0.7} />
          <circle cx={50 + r * 0.32} cy="50" r={r * 0.7} />
        </g>
      );
    default:
      return <circle cx="50" cy="50" r={r} fill={fill} />;
  }
}

function scale(point: string, k: number) {
  const [x, y] = point.split(",").map(Number);
  return `${50 + (x - 50) * k},${50 + (y - 50) * k}`;
}

type Props = { family: Family; big: string; small: string; label: string; className?: string };

export function AppBadge({ family, big, small, label, className = "h-14 w-14" }: Props) {
  const [outer, deep] = COLOURS[family];
  const id = `g-${family}`;
  return (
    <svg viewBox="0 0 100 100" className={className} role="img" aria-label={label}>
      <defs>
        <linearGradient id={id} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor={outer} />
          <stop offset="1" stopColor={deep} />
        </linearGradient>
      </defs>
      {/* Dark under-rim, white rim, the family colour, then the inner disc. */}
      <g transform="translate(0 3)">
        <Shape family={family} r={47} fill={deep} />
      </g>
      <Shape family={family} r={47} fill="#FFFFFF" />
      <Shape family={family} r={42} fill={`url(#${id})`} />
      <circle cx="50" cy="50" r="27" fill={deep} opacity="0.35" />
      <circle cx="50" cy="50" r="27" fill="none" stroke="#FFFFFF" strokeOpacity="0.6" strokeWidth="2" />
      {family === "fitnessCourt" &&
        Array.from({ length: 7 }, (_, i) => {
          const a = -Math.PI / 2 + (Math.PI * 2 * i) / 7;
          return <circle key={i} cx={50 + 34 * Math.cos(a)} cy={50 + 34 * Math.sin(a)} r="3.6" fill={i === 0 ? GOLD : "#FFFFFF"} />;
        })}
      {/* Shine across the top. */}
      <ellipse cx="42" cy="24" rx="20" ry="7" fill="#FFFFFF" opacity="0.28" />
      <text x="50" y="55" textAnchor="middle" fontSize={big.length > 2 ? 20 : 26} fontWeight="900" fill="#FFFFFF" fontFamily="inherit">
        {big}
      </text>
      <text x="50" y="69" textAnchor="middle" fontSize={small.length > 7 ? 8 : 10} fontWeight="900" letterSpacing="0.3" fill="#FFFFFF" fontFamily="inherit">
        {small}
      </text>
    </svg>
  );
}
