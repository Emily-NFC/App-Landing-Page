import Image from "next/image";
import { Header } from "../Header";
import { StoreLink } from "./StoreLink";

// The V2 frame (phone width), with the photo running up behind the banner and logo.
export function HeroV4() {
  return (
    <section className="relative pb-3">
      <div className="relative mx-auto w-full max-w-md overflow-hidden bg-gradient-to-b from-[#f3f8fc] to-[#d9ebf8] pt-[150px]">
        <div
          className="relative aspect-[1/1] w-full"
          style={{ maskImage: "linear-gradient(to bottom, transparent, black 18%)", WebkitMaskImage: "linear-gradient(to bottom, transparent, black 18%)" }}
        >
          <Image
            src="/v2/hero.jpg"
            alt="Coaches Avery and Miles waving at a Fitness Court®"
            fill
            priority
            sizes="(max-width: 448px) 100vw, 448px"
            className="object-cover object-[35%_80%]"
          />
          <div
            className="absolute inset-x-0 top-0 h-[55%] bg-gradient-to-b from-white/70 via-white/55 to-transparent"
            aria-hidden="true"
          />
        </div>

        <div className="absolute inset-x-0 top-[84px]">
          <Header />
        </div>

        <div className="absolute inset-x-0 top-[128px] px-5 text-right">
          <h1 className="text-[38px] font-black leading-[0.95] tracking-tight text-slate-900">
            You&apos;re here.
            <br />
            <span className="text-brand">Let&apos;s move.</span>
          </h1>
          <p className="mt-1.5 text-[14px] font-semibold leading-snug text-slate-800">
            Pick your coach. Start in 7 minutes.
          </p>
          <div id="get-app" className="scroll-mt-28">
            <StoreLink
              placement="hero"
              className="mt-3 inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3.5 text-[17px] font-extrabold text-white shadow-[0_10px_24px_-8px_rgba(0,108,163,0.7)] transition active:scale-[0.97]"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M12 3v12M7 10l5 5 5-5M5 21h14" />
              </svg>
              Download the app
            </StoreLink>
            <p className="mt-1.5 inline-block rounded-full bg-white/90 px-2.5 py-0.5 text-[11px] font-semibold text-slate-700 shadow-sm">Free · iPhone &amp; Android</p>
          </div>
        </div>
      </div>

    </section>
  );
}
