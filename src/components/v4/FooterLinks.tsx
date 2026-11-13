export function FooterLinks() {
  return (
    <section className="mx-auto max-w-md px-4 pb-3">
      <div className="flex items-stretch rounded-2xl bg-white shadow-[0_4px_18px_-6px_rgba(0,0,0,0.08)]">
        <a
          href="https://www.nationalfitnesscampaign.com/map"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-1 items-center gap-2 p-3 transition active:bg-slate-50"
        >
          <svg viewBox="0 0 32 32" className="h-6 w-6 shrink-0" fill="none" aria-hidden="true">
            <path d="M16 2C9.92 2 5 6.92 5 13c0 7.5 11 17 11 17s11-9.5 11-17c0-6.08-4.92-11-11-11z" fill="#006CA3" />
            <circle cx="16" cy="13" r="4" fill="white" />
          </svg>
          <span className="min-w-0 flex-1 leading-tight">
            <span className="block text-[12px] font-bold text-slate-900">Find another Fitness Court®</span>
            <span className="block text-[10px] text-slate-500">Explore locations near you.</span>
          </span>
          <svg viewBox="0 0 24 24" className="h-4 w-4 shrink-0 text-slate-400" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <polyline points="9 6 15 12 9 18" />
          </svg>
        </a>
        <a
          href="https://www.nationalfitnesscampaign.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 border-l border-slate-100 px-3 text-[12px] font-bold text-brand transition active:bg-slate-50"
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
