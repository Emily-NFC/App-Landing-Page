const VIDEO_ID = "AlW0mZy3m1E";

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

        <div className="relative mx-4 mt-3 aspect-video overflow-hidden rounded-xl bg-black">
          <iframe
            src={`https://www.youtube.com/embed/${VIDEO_ID}?rel=0`}
            title="Fitness Court 1-minute intro"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            className="absolute inset-0 h-full w-full"
          />
        </div>

        <div className="p-4">
          <a
            href={`https://youtu.be/${VIDEO_ID}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-full items-center justify-center gap-2 rounded-full bg-brand px-4 py-3 text-sm font-semibold text-white shadow-sm transition active:scale-[0.98] hover:bg-brand-dark"
          >
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/20">
              <svg viewBox="0 0 24 24" className="ml-0.5 h-3.5 w-3.5" fill="currentColor" aria-hidden="true">
                <path d="M8 5v14l11-7z" />
              </svg>
            </span>
            Watch now
          </a>
        </div>
      </div>
    </section>
  );
}
