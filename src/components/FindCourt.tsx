export function FindCourt() {
  return (
    <section className="mx-auto max-w-md px-4 pb-4">
      <div className="overflow-hidden rounded-2xl bg-white shadow-[0_4px_18px_-6px_rgba(0,0,0,0.08)]">
        <a
          href="https://www.nationalfitnesscampaign.com/map"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 p-4 transition active:bg-slate-50"
        >
          <div className="flex-1">
            <h3 className="text-base font-bold leading-tight">Find another Fitness Court® near you</h3>
            <p className="mt-1 text-[12px] leading-snug text-slate-500">
              Explore nearby Fitness Court® locations.
            </p>
          </div>
          <div className="relative h-16 w-24 shrink-0 overflow-hidden rounded-lg bg-slate-100">
            <svg viewBox="0 0 96 64" className="absolute inset-0 h-full w-full" aria-hidden="true">
              <rect width="96" height="64" fill="#eef2f7" />
              <path d="M0 20 Q30 10 60 24 T96 30" stroke="#cbd5e1" strokeWidth="2" fill="none" />
              <path d="M10 50 Q40 40 70 50 T96 48" stroke="#cbd5e1" strokeWidth="2" fill="none" />
              <path d="M20 0 V64" stroke="#dbeafe" strokeWidth="6" />
              <path d="M70 0 V64" stroke="#dcfce7" strokeWidth="8" />
            </svg>
            <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <svg viewBox="0 0 32 32" className="h-7 w-7" fill="none" aria-hidden="true">
                <path d="M16 2C9.92 2 5 6.92 5 13c0 7.5 11 17 11 17s11-9.5 11-17c0-6.08-4.92-11-11-11z" fill="#006CA3" />
                <circle cx="16" cy="13" r="4" fill="white" />
              </svg>
            </span>
          </div>
          <svg viewBox="0 0 24 24" className="h-5 w-5 text-slate-400" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <polyline points="9 6 15 12 9 18" />
          </svg>
        </a>
        <a
          href="https://www.nationalfitnesscampaign.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 border-t border-slate-100 px-4 py-2.5 text-[12px] font-semibold text-brand transition active:bg-slate-50"
        >
          <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M14 3h7v7" />
            <path d="M10 14L21 3" />
            <path d="M21 14v5a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h5" />
          </svg>
          More about NFC
        </a>
      </div>
    </section>
  );
}
