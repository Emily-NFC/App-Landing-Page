import Image from "next/image";
import { Header } from "../Header";
import { AppStoreBadge, GooglePlayBadge } from "../icons/StoreBadges";

export function HeroV4() {
  return (
    <section className="relative">
      {/* One full phone screen, top to bottom: banner and logo float over the sky. */}
      <div className="relative mx-auto h-[100svh] max-h-[900px] min-h-[600px] w-full max-w-md overflow-hidden">
        <Image
          src="/v2/hero.jpg"
          alt="Coaches Avery and Miles waving at a Fitness Court®"
          fill
          priority
          sizes="(max-width: 448px) 100vw, 448px"
          className="object-cover object-[9%_100%]"
        />
        <div
          className="absolute inset-x-0 top-0 h-[48%] bg-gradient-to-b from-white via-white/75 to-transparent"
          aria-hidden="true"
        />

        <div className="absolute inset-x-0 top-[84px]">
          <Header />
        </div>

        <div className="absolute inset-x-0 top-[148px] mx-auto max-w-md px-5 text-center">
          <span className="inline-block rounded-full bg-brand px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.1em] text-white shadow-sm">
            New Fitness Court® App
          </span>
          <h1 className="mt-3 text-[44px] font-black leading-[0.95] tracking-tight text-slate-900">
            You&apos;re here.
            <br />
            <span className="text-brand">Let&apos;s move.</span>
          </h1>
          <p className="mt-3 text-[15px] font-bold text-slate-800">Pick your coach. Start in 7 minutes.</p>
        </div>

        <div id="get-app" className="absolute inset-x-0 bottom-0 mx-auto max-w-md scroll-mt-28 px-4 pb-5">
          <div className="rounded-2xl bg-white/95 p-3 shadow-[0_8px_24px_-10px_rgba(0,0,0,0.35)] backdrop-blur">
            <div className="grid grid-cols-2 gap-2.5">
              <AppStoreBadge />
              <GooglePlayBadge />
            </div>
            <p className="mt-2 text-center text-[11px] font-medium text-slate-600">Free · English &amp; Español</p>
          </div>
        </div>
      </div>
      <div className="h-3" />
    </section>
  );
}
