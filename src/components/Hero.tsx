import { AppStoreBadge, GooglePlayBadge } from "./icons/StoreBadges";
import { PhoneMockup } from "./PhoneMockup";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-sky-100 via-blue-50 to-white" />
        <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-blue-200/40 to-transparent" />
        <div className="pointer-events-none absolute bottom-4 left-3 text-4xl font-black tracking-tighter text-white/40 sm:text-5xl">
          FITNESS COURT
        </div>
      </div>

      <div className="mx-auto flex max-w-md items-center gap-2 px-4 pt-5 pb-6">
        <div className="flex min-w-0 flex-1 flex-col justify-center">
          <h2 className="text-[26px] font-extrabold leading-[1.05] tracking-tight text-slate-900 sm:text-3xl">
            Take the<br />Fitness Court<br />with you
          </h2>
          <p className="mt-2.5 text-[13px] leading-snug text-slate-600">
            Download the free app for guided workouts, check-ins, badges, and challenges.
          </p>
        </div>
        <PhoneMockup className="shrink-0" />
      </div>

      <div className="mx-auto max-w-md px-4 pb-4">
        <div className="rounded-2xl bg-white p-3 shadow-[0_4px_18px_-6px_rgba(0,0,0,0.12)]">
          <div className="grid grid-cols-2 gap-2.5">
            <AppStoreBadge />
            <GooglePlayBadge />
          </div>
          <a
            href="#features"
            className="mt-3 flex items-center justify-center gap-1 text-sm font-semibold text-brand"
          >
            Continue on web
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <polyline points="9 6 15 12 9 18" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
