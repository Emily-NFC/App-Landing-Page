const stroke = "#1d6fe5";
const strokeWidth = 2;

type IconProps = { className?: string };

const base = "h-10 w-10 text-brand";

export function SquatIcon({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" className={className} fill="none" stroke={stroke} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="18" cy="8" r="3" />
      <path d="M18 12v8l-6 8 6 4v8" />
      <path d="M12 28h-6" />
      <path d="M6 40h36" />
    </svg>
  );
}

export function PushIcon({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" className={className} fill="none" stroke={stroke} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="10" cy="20" r="3" />
      <path d="M13 22l8 4 16-2" />
      <path d="M21 26v8" />
      <path d="M14 34h28" />
    </svg>
  );
}

export function LungeIcon({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" className={className} fill="none" stroke={stroke} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="22" cy="8" r="3" />
      <path d="M22 12v10l-8 10" />
      <path d="M22 22l10 10" />
      <path d="M8 40h32" />
    </svg>
  );
}

export function PullIcon({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" className={className} fill="none" stroke={stroke} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M6 6h36" />
      <path d="M24 6v6" />
      <circle cx="24" cy="15" r="3" />
      <path d="M24 18v12" />
      <path d="M18 24h12" />
      <path d="M20 38l4-8 4 8" />
    </svg>
  );
}

export function AgilityIcon({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" className={className} fill="none" stroke={stroke} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="30" cy="8" r="3" />
      <path d="M30 12l-6 6 4 8 8 4" />
      <path d="M24 26l-8 6 4 8" />
      <path d="M4 36l8-2" />
    </svg>
  );
}

export function BendIcon({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" className={className} fill="none" stroke={stroke} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="14" cy="8" r="3" />
      <path d="M14 12c0 8 6 12 14 12" />
      <path d="M28 24l4 14" />
      <path d="M14 18l-2 20" />
    </svg>
  );
}

export function PlankIcon({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" className={className} fill="none" stroke={stroke} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="8" cy="20" r="3" />
      <path d="M11 22h28" />
      <path d="M16 22v8" />
      <path d="M30 22v8" />
      <path d="M14 30h18" />
    </svg>
  );
}

export const movements = [
  { name: "SQUAT", Icon: SquatIcon },
  { name: "PUSH", Icon: PushIcon },
  { name: "LUNGE", Icon: LungeIcon },
  { name: "PULL", Icon: PullIcon },
  { name: "AGILITY", Icon: AgilityIcon },
  { name: "BEND", Icon: BendIcon },
  { name: "PLANK", Icon: PlankIcon },
] as const;
