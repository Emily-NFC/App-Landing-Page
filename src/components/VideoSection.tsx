export function VideoSection() {
  return (
    <section className="mx-auto max-w-md px-4 pb-4">
      <div className="overflow-hidden rounded-2xl bg-white shadow-[0_4px_18px_-6px_rgba(0,0,0,0.08)]">
        <div className="px-4 pt-4">
          <div className="text-[10px] font-bold uppercase tracking-[0.14em] text-brand">
            Start your journey
          </div>
          <h3 className="mt-1 text-lg font-bold leading-tight tracking-tight">
            See how the court works in 1 minute
          </h3>
          <p className="mt-1.5 text-sm leading-snug text-slate-600">
            Perfect for first-time visitors. Watch a quick, 1-min intro and see how the 7 movements work.
          </p>
        </div>

        <div className="relative mx-4 mt-3 aspect-video overflow-hidden rounded-xl bg-gradient-to-br from-sky-300 via-cyan-200 to-blue-400">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.0),rgba(0,0,0,0.35))]" />
          <button
            type="button"
            aria-label="Play intro video"
            className="absolute inset-0 flex items-center justify-center"
          >
            <span className="flex h-14 w-14 items-center justify-center rounded-full bg-white/95 shadow-lg">
              <svg viewBox="0 0 24 24" className="ml-1 h-6 w-6 text-brand" fill="currentColor" aria-hidden="true">
                <path d="M8 5v14l11-7z" />
              </svg>
            </span>
          </button>
          <div className="absolute bottom-2 right-2 rounded bg-black/70 px-2 py-0.5 text-[11px] font-semibold text-white">
            1:00
          </div>
        </div>

        <div className="p-4">
          <button
            type="button"
            className="flex w-full items-center justify-center gap-2 rounded-full bg-brand px-4 py-3 text-sm font-semibold text-white shadow-sm transition active:scale-[0.98] hover:bg-brand-dark"
          >
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/20">
              <svg viewBox="0 0 24 24" className="ml-0.5 h-3.5 w-3.5" fill="currentColor" aria-hidden="true">
                <path d="M8 5v14l11-7z" />
              </svg>
            </span>
            Watch &amp; Download the App
          </button>
        </div>
      </div>
    </section>
  );
}
