import Image from "next/image";
import { AppStoreBadge, GooglePlayBadge } from "../icons/StoreBadges";

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
            className="object-cover object-[50%_70%]"
          />
          <div
            className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-white/85 via-white/50 to-transparent"
            aria-hidden="true"
          />
        </div>

        <div className="absolute inset-x-0 top-0 px-5 pt-5">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-brand px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-white">
            New app
          </span>
          <h1 className="mt-2 max-w-[90%] text-[27px] font-extrabold leading-[1.05] tracking-tight text-slate-900">
            Your coach is waiting at the Fitness Court®.
          </h1>
          <p className="mt-2 max-w-[80%] text-[13px] font-medium leading-snug text-slate-700">
            Join 130,000+ Americans staying active outdoors. Free guided workouts, walks, badges and challenges.
          </p>
        </div>
      </div>

      <div className="mx-auto -mt-8 max-w-md px-4 pb-4">
        <div className="relative rounded-2xl bg-white p-3 shadow-[0_8px_24px_-10px_rgba(0,0,0,0.2)]">
          <div className="grid grid-cols-2 gap-2.5">
            <AppStoreBadge />
            <GooglePlayBadge />
          </div>
          <p className="mt-2 text-center text-[11px] text-slate-500">Free · English &amp; Español</p>
        </div>
      </div>
    </section>
  );
}
