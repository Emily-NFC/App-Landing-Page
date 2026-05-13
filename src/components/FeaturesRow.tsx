function CheckInIcon() {
  return (
    <svg viewBox="0 0 32 32" className="h-7 w-7" fill="none" aria-hidden="true">
      <path d="M16 2C9.92 2 5 6.92 5 13c0 7.5 11 17 11 17s11-9.5 11-17c0-6.08-4.92-11-11-11z" fill="#1d6fe5" />
      <path d="M11 13.5l3.5 3.5L21 10.5" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function DumbbellIcon() {
  return (
    <svg viewBox="0 0 32 32" className="h-7 w-7" fill="none" stroke="#22c55e" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="11" width="4" height="10" rx="1" />
      <rect x="26" y="11" width="4" height="10" rx="1" />
      <rect x="6" y="14" width="4" height="4" />
      <rect x="22" y="14" width="4" height="4" />
      <path d="M10 16h12" />
    </svg>
  );
}

function TrophyIcon() {
  return (
    <svg viewBox="0 0 32 32" className="h-7 w-7" fill="none" stroke="#f59e0b" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M9 4h14v6a7 7 0 01-14 0V4z" fill="#fde68a" />
      <path d="M9 6H5v2a4 4 0 004 4" />
      <path d="M23 6h4v2a4 4 0 01-4 4" />
      <path d="M12 21h8l1 4h-10l1-4z" fill="#fde68a" />
      <path d="M10 28h12" />
    </svg>
  );
}

const items = [
  {
    Icon: CheckInIcon,
    title: "Check In",
    body: "Track your visits and build healthy habits.",
  },
  {
    Icon: DumbbellIcon,
    title: "Guided Workouts",
    body: "7-minute workouts for every level.",
  },
  {
    Icon: TrophyIcon,
    title: "Badges & Challenges",
    body: "Earn badges, unlock rewards, and stay motivated.",
  },
];

export function FeaturesRow() {
  return (
    <section id="features" className="mx-auto max-w-md px-4 pb-4">
      <div className="rounded-2xl bg-white p-4 shadow-[0_4px_18px_-6px_rgba(0,0,0,0.08)]">
        <div className="grid grid-cols-3 gap-3 text-center">
          {items.map(({ Icon, title, body }) => (
            <div key={title} className="flex flex-col items-center gap-2">
              <Icon />
              <div className="text-[13px] font-semibold leading-tight">{title}</div>
              <p className="text-[11px] leading-snug text-slate-500">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
