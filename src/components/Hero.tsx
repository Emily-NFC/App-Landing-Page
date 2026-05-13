import Image from "next/image";
import { AppStoreBadge, GooglePlayBadge } from "./icons/StoreBadges";

export function Hero() {
  return (
    <section className="relative">
      <div className="relative w-full overflow-hidden bg-[#f6f7f9]">
        <div className="relative aspect-[1665/1205] w-full">
          <Image
            src="/hero.png"
            alt="Fitness Court® with the mobile app"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
        </div>

        <div className="absolute inset-x-0 top-[20%] px-5">
          <div className="mx-auto w-full max-w-md">
            <h1 className="max-w-[58%] text-[22px] font-extrabold leading-[1.06] tracking-tight text-slate-800 sm:text-[28px]">
              Join 130,000+ Americans staying active outdoors.
            </h1>
            <p className="mt-2.5 max-w-[55%] text-[12px] leading-snug text-slate-700 sm:text-[14px]">
              Take the Fitness Court® with you and download the app.
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
