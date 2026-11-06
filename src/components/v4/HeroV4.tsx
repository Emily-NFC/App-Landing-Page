import Image from "next/image";
import { AppStoreBadge, GooglePlayBadge } from "../icons/StoreBadges";

export function HeroV4() {
  return (
    <section className="relative">
      <div className="relative mx-auto w-full max-w-md overflow-hidden">
        {/* Coaches on the left, headline over the sky on the right. */}
        <div className="relative aspect-[5/4] w-full">
          <Image
            src="/v2/hero.jpg"
            alt="Coaches Avery and Miles waving at a Fitness Court®"
            fill
            priority
            sizes="(max-width: 448px) 100vw, 448px"
            className="object-cover object-[30%_45%]"
          />
          <div
            className="absolute right-0 top-0 h-[62%] w-[80%] bg-[radial-gradient(ellipse_at_top_right,rgba(255,255,255,0.92)_0%,rgba(255,255,255,0.6)_45%,transparent_75%)]"
            aria-hidden="true"
          />
        </div>

        <span className="absolute left-4 top-3 rounded-full bg-brand px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.1em] text-white shadow-sm">
          New Fitness Court® App
        </span>
        <div className="absolute right-4 top-[15%] w-[60%] text-right">
          <h1 className="text-[34px] font-black leading-[0.98] tracking-tight text-slate-900">
            You&apos;re here.
            <br />
            <span className="text-brand">Let&apos;s move.</span>
          </h1>
          <p className="mt-2 text-[12.5px] font-semibold leading-snug text-slate-800">
            Pick your coach. Start in 7 minutes.
          </p>
        </div>
      </div>

      <div id="get-app" className="mx-auto -mt-10 max-w-md scroll-mt-28 px-6 pb-4">
        <div className="relative rounded-2xl bg-white p-3 shadow-[0_8px_24px_-10px_rgba(0,0,0,0.25)]">
          <div className="grid grid-cols-2 gap-2.5">
            <AppStoreBadge />
            <GooglePlayBadge />
          </div>
          <p className="mt-2 text-center text-[11px] font-medium text-slate-600">Free · English &amp; Español</p>
        </div>
      </div>
    </section>
  );
}
