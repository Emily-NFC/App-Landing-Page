import Image from "next/image";
import { Header } from "../Header";
import { StoreLink } from "./StoreLink";

// Phone-width frame; the photo runs up behind the banner and logo.
export function HeroV4() {
  return (
    <section className="relative pb-3">
      <div className="relative mx-auto w-full max-w-md overflow-hidden bg-gradient-to-b from-[#f4f8fc] via-[#e3eff9] to-[#cfe5f6] pt-[196px]">
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

        <div className="absolute inset-x-0 top-[84px]">
          <Header />
        </div>

        <div className="absolute inset-x-0 top-[132px] px-5 text-right">
          <h1 className="text-[38px] font-black leading-[0.95] tracking-tight text-slate-900">
            You&apos;re here.
            <br />
            <span className="text-brand">Let&apos;s move.</span>
          </h1>
          <p className="mt-1.5 text-[14px] font-semibold leading-snug text-slate-800">
            Pick your coach. Start in 7 minutes.
          </p>
          <div id="get-app" className="mt-3 scroll-mt-28">
            <StoreLink
              placement="hero"
              className="inline-flex items-center gap-2 rounded-full bg-brand px-5 py-3 text-[16px] font-extrabold text-white shadow-[0_8px_20px_-6px_rgba(0,108,163,0.7)] transition active:scale-[0.97]"
            >
              <svg viewBox="0 0 24 24" className="h-[18px] w-[18px]" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M12 3v12M7 10l5 5 5-5M5 21h14" />
              </svg>
              Download the app
            </StoreLink>
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
