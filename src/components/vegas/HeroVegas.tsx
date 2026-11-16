import Image from "next/image";
import { StoreLink } from "../v4/StoreLink";
import { AppStoreBadge, GooglePlayBadge } from "../icons/StoreBadges";
import { ExploreMapLink } from "./ExploreMapLink";

// The national hero with two choices: explore the Las Vegas map now, or get the app.
export function HeroVegas() {
  return (
    <section className="relative pb-3">
      <div className="relative mx-auto w-full max-w-md overflow-hidden bg-gradient-to-b from-[#f4f8fc] via-[#e3eff9] to-[#cfe5f6] pt-[150px] sm:pt-[116px]">
        <div
          className="relative aspect-[1290/1209] w-full"
          style={{
            maskImage: "linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.6) 30%, black 50%)",
            WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.6) 30%, black 50%)",
          }}
        >
          <Image
            src="/v2/hero.jpg"
            alt="Coaches Avery and Miles waving at a Fitness Court®"
            fill
            priority
            sizes="(max-width: 448px) 100vw, 448px"
            className="object-cover"
          />
        </div>

        <div className="absolute inset-x-0 top-[104px] px-5 text-center">
          <h1 className="whitespace-nowrap text-[clamp(24px,7.9vw,34px)] font-black leading-none tracking-tight text-slate-900">
            You&apos;re here. <span className="text-brand">Let&apos;s move.</span>
          </h1>
          <p className="mt-3 whitespace-nowrap text-[clamp(12px,3.7vw,15px)] font-normal leading-snug text-slate-800">
            Get the free app or explore the Trail Line map.
          </p>
          <div id="get-app" className="mt-4 flex scroll-mt-28 flex-wrap items-center justify-center gap-2">
            <StoreLink
              placement="hero"
              className="relative inline-flex min-w-[200px] items-center justify-center gap-1.5 rounded-full bg-red-600 px-4 py-2 text-[14px] font-bold text-white shadow-[0_10px_24px_-8px_rgba(220,38,38,0.7)] transition hover:bg-red-700 active:scale-[0.97]"
            >
              <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M12 3v12M7 10l5 5 5-5M5 21h14" />
              </svg>
              Download the app
            </StoreLink>
            <ExploreMapLink
              placement="hero"
              className="inline-flex min-w-[200px] items-center justify-center gap-1.5 rounded-full bg-[#0F7B4B] px-4 py-2 text-[14px] font-bold text-white shadow-[0_10px_24px_-8px_rgba(15,123,75,0.7)] transition hover:bg-[#0A4A2E] active:scale-[0.97]"
            >
              <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M9 4 3 6v14l6-2 6 2 6-2V4l-6 2-6-2Z" />
                <path d="M9 4v14M15 6v14" />
              </svg>
              View Trail Line Map
            </ExploreMapLink>
          </div>
        </div>

        <p className="absolute inset-x-0 bottom-3 text-center">
          <span className="rounded-full bg-white/90 px-3 py-1 text-[11px] font-semibold text-slate-700 shadow-sm">
            Free · iPhone &amp; Android · English &amp; Español
          </span>
        </p>
      </div>

      <div className="mx-auto max-w-md px-4 pt-3">
        <div className="rounded-2xl bg-white p-3 shadow-[0_4px_18px_-6px_rgba(0,0,0,0.12)]">
          <div className="grid grid-cols-2 gap-2.5">
            <AppStoreBadge placement="hero" />
            <GooglePlayBadge placement="hero" />
          </div>
        </div>
      </div>
    </section>
  );
}
