import Image from "next/image";
import { StoreLink } from "./StoreLink";

// Phone-width frame; the photo runs up behind the banner and logo.
export function HeroV4() {
  return (
    <section className="relative pb-3">
      <div className="relative mx-auto w-full max-w-md overflow-hidden bg-gradient-to-b from-[#f4f8fc] via-[#e3eff9] to-[#cfe5f6] pt-[150px]">
        {/* The whole photo, uncropped, faded into the sky above it. */}
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


        <div className="absolute inset-x-0 top-[100px] px-5 text-center sm:top-[80px]">
          <h1 className="whitespace-nowrap text-[clamp(24px,7.9vw,34px)] font-black leading-none tracking-tight text-slate-900">
            You&apos;re here. <span className="text-brand">Let&apos;s move.</span>
          </h1>
          <p className="mt-2 whitespace-nowrap text-[clamp(13px,4.1vw,17px)] font-bold leading-snug text-slate-800">
            Pick your coach. Start your fitness journey.
          </p>
          <div id="get-app" className="mt-5 scroll-mt-28">
            <span className="relative inline-flex">
              <StoreLink
                placement="hero"
                className="relative inline-flex items-center gap-1.5 rounded-full bg-brand px-3.5 py-1.5 text-[13px] font-bold text-white shadow-[0_10px_24px_-8px_rgba(0,108,163,0.7)] transition active:scale-[0.97] motion-safe:animate-cta-pulse"
              >
                <svg viewBox="0 0 24 24" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M12 3v12M7 10l5 5 5-5M5 21h14" />
                </svg>
                Download the app
              </StoreLink>
            </span>
          </div>
        </div>

        <p className="absolute inset-x-0 bottom-3 text-center">
          <span className="rounded-full bg-white/90 px-3 py-1 text-[11px] font-semibold text-slate-700 shadow-sm">
            Free · iPhone &amp; Android · English &amp; Español
          </span>
        </p>
      </div>
    </section>
  );
}
