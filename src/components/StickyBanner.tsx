export function StickyBanner() {
  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-0 z-40 px-3 pb-3">
      <div className="pointer-events-auto mx-auto flex max-w-md items-center gap-3 rounded-2xl bg-brand px-3 py-2.5 text-white shadow-[0_10px_30px_-10px_rgba(29,111,229,0.6)]">
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/15">
          <svg viewBox="0 0 32 32" className="h-5 w-5" fill="none" aria-hidden="true">
            <path d="M16 2C9.92 2 5 6.92 5 13c0 7.5 11 17 11 17s11-9.5 11-17c0-6.08-4.92-11-11-11z" fill="white" />
            <circle cx="16" cy="13" r="4" fill="#1d6fe5" />
          </svg>
        </span>
        <div className="flex-1 leading-tight">
          <div className="text-[13px] font-bold">You&apos;re at a Fitness Court.</div>
          <div className="text-[11px] opacity-90">Get the app to start your 7-minute workout.</div>
        </div>
        <a
          href="#"
          className="shrink-0 rounded-full bg-white px-3.5 py-2 text-[12px] font-bold text-brand shadow-sm transition active:scale-[0.98]"
        >
          Get the App
        </a>
      </div>
    </div>
  );
}
