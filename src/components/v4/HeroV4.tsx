import Image from "next/image";
import { Header } from "../Header";
import { AppStoreBadge, GooglePlayBadge } from "../icons/StoreBadges";

// The V2 frame (phone width), with the photo running up behind the banner and logo.
export function HeroV4() {
  return (
    <section className="relative">
      <div className="relative mx-auto w-full max-w-md overflow-hidden bg-gradient-to-b from-[#f3f8fc] to-[#d9ebf8] pt-[140px]">
        <div
          className="relative aspect-[4/5] w-full"
          style={{ maskImage: "linear-gradient(to bottom, transparent, black 18%)", WebkitMaskImage: "linear-gradient(to bottom, transparent, black 18%)" }}
        >
          <Image
            src="/v2/hero.jpg"
            alt="Coaches Avery and Miles waving at a Fitness Court®"
            fill
            priority
            sizes="(max-width: 448px) 100vw, 448px"
            className="object-cover object-[50%_70%]"
          />
          <div
            className="absolute inset-x-0 top-0 h-[55%] bg-gradient-to-b from-white/70 via-white/55 to-transparent"
            aria-hidden="true"
          />
        </div>

        <div className="absolute inset-x-0 top-[84px]">
          <Header />
        </div>

        <div className="absolute inset-x-0 top-[140px] px-5 pt-5">
          <span className="inline-flex items-center rounded-full bg-brand px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-white">
            New Fitness Court® App
          </span>
          <h1 className="mt-2 text-[40px] font-black leading-[0.98] tracking-tight text-slate-900">
            You&apos;re here.
            <br />
            <span className="text-brand">Let&apos;s move.</span>
          </h1>
          <p className="mt-2 text-[14px] font-semibold leading-snug text-slate-800">
            Pick your coach. Start in 7 minutes.
          </p>
        </div>
      </div>

      <div id="get-app" className="mx-auto -mt-8 max-w-md scroll-mt-28 px-4 pb-4">
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
