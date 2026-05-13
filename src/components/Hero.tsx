import Image from "next/image";
import { AppStoreBadge, GooglePlayBadge } from "./icons/StoreBadges";

export function Hero() {
  return (
    <section className="relative pt-4">
      <div className="relative w-full overflow-hidden bg-[#f6f7f9]">
        <div className="relative aspect-[3/2] w-full sm:aspect-[16/9]">
          <Image
            src="/hero.png"
            alt="Fitness Court with the mobile app"
            fill
            priority
            sizes="100vw"
            className="object-cover object-[58%_center]"
          />
          <div className="pointer-events-none absolute inset-y-0 left-0 w-3/4 bg-gradient-to-r from-white/70 via-white/25 to-transparent" />
        </div>

        <div className="absolute inset-0 px-5 pt-5 sm:pt-9">
          <div className="mx-auto w-full max-w-md">
            <h1 className="max-w-[58%] text-[26px] font-extrabold leading-[1.04] tracking-tight text-slate-900 sm:text-[34px]">
              Take the
              <br />
              Fitness Court
              <br />
              with you
            </h1>
            <p className="mt-2.5 max-w-[55%] text-[12px] leading-snug text-slate-700 sm:text-[14px]">
              Download the free app for guided workouts, check-ins, badges, and challenges.
            </p>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-md px-4 pt-4 pb-4">
        <div className="rounded-2xl bg-white p-3 shadow-[0_4px_18px_-6px_rgba(0,0,0,0.12)]">
          <div className="grid grid-cols-2 gap-2.5">
            <AppStoreBadge />
            <GooglePlayBadge />
          </div>
        </div>
      </div>
    </section>
  );
}
