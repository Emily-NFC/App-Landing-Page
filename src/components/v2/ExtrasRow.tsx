const items = [
  {
    title: "Train together",
    body: "Invite a friend with one link, near or far.",
    icon: (
      <path d="M16 11a3 3 0 100-6 3 3 0 000 6zM8 11a3 3 0 100-6 3 3 0 000 6zM2 20c0-3 3-5 6-5s6 2 6 5M12 20c0-3 3-5 6-5s4 1.5 4 4" />
    ),
  },
  {
    title: "Share your win",
    body: "Send a finish card when you're done.",
    icon: <path d="M4 12v7a1 1 0 001 1h14a1 1 0 001-1v-7M16 6l-4-4-4 4M12 2v13" />,
  },
  {
    title: "Track your health",
    body: "Workouts save to your health app.",
    icon: <path d="M20.8 4.6a5.5 5.5 0 00-7.8 0L12 5.7l-1-1.1a5.5 5.5 0 00-7.8 7.8l1 1.1L12 21l7.8-7.5 1-1.1a5.5 5.5 0 000-7.8z" />,
  },
];

export function ExtrasRow() {
  return (
    <section className="mx-auto max-w-md px-4 pb-4">
      <div className="rounded-2xl bg-white p-4 shadow-[0_4px_18px_-6px_rgba(0,0,0,0.08)]">
        <div className="grid grid-cols-3 gap-3 text-center">
          {items.map(({ title, body, icon }) => (
            <div key={title} className="flex flex-col items-center gap-2">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand/10 text-brand">
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  {icon}
                </svg>
              </span>
              <div className="text-[13px] font-semibold leading-tight text-slate-800">{title}</div>
              <p className="text-[11px] leading-snug text-slate-500">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
