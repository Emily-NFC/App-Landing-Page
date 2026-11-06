import Image from "next/image";
import { AppStoreBadge, GooglePlayBadge } from "../icons/StoreBadges";

const chips = ["Free", "7-min workouts", "4 coaches"];

export function HeroV2() {
  return (
    <section className="relative">
      <div className="relative mx-auto w-full max-w-md overflow-hidden">
        {/* Portrait crop so the coaches and the court fill a phone screen. */}
        <div className="relative aspect-[4/5] w-full">
          <Image
            src="/v2/hero.jpg"
            alt="Coaches Avery and Miles waving at a Fitness Court®"
            fill
            priority
            sizes="(max-width: 448px) 100vw, 448px"
            className="object-cover object-[50%_80%]"
          />
          <div
            className="absolute inset-x-0 top-0 h-[60%] bg-gradient-to-b from-white via-white/80 to-transparent"
            aria-hidden="true"
          />
        </div>

        <div className="absolute inset-x-0 top-0 px-5 pt-4">
          <div className="flex items-center gap-2 text-[20px] font-extrabold tracking-tight text-brand">
            <span className="inline-block origin-bottom-right motion-safe:animate-flame-wiggle" aria-hidden="true">
              👋
            </span>
            Welcome to the
          </div>
          <h1 className="relative mt-1 text-[44px] font-black leading-[0.95] tracking-tight text-slate-900">
            <span className="absolute -top-3 right-2 rotate-[8deg] rounded-full bg-orange-400 px-3 py-1 text-[14px] font-black uppercase tracking-wide text-white shadow-md motion-safe:animate-badge-pop">
              New!
            </span>
            Fitness Court®
            <br />
            App
          </h1>
          <div className="mt-3 flex flex-wrap gap-1.5">
            {chips.map((c) => (
              <span key={c} className="rounded-full bg-white px-3 py-1 text-[12px] font-bold text-slate-800 shadow-sm ring-1 ring-slate-200">
                {c}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div id="get-app" className="mx-auto -mt-8 max-w-md scroll-mt-28 px-4 pb-4">
        <div className="relative rounded-2xl bg-white p-3 shadow-[0_8px_24px_-10px_rgba(0,0,0,0.2)]">
          <div className="grid grid-cols-2 gap-2.5">
            <AppStoreBadge />
            <GooglePlayBadge />
          </div>
          <p className="mt-2 text-center text-[11px] text-slate-500">Join 130,000+ members · English &amp; Español</p>
        </div>
      </div>
    </section>
  );
}
