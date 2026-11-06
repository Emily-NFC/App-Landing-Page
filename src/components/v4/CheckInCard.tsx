"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { fireConfetti, tryVibrate } from "../CheckInBanner";
import { StoreLink } from "./StoreLink";

export function CheckInCard() {
  const fired = useRef(false);

  useEffect(() => {
    if (fired.current) return;
    fired.current = true;
    fireConfetti();
  }, []);

  return (
    <section className="mx-auto max-w-md px-4 pb-3">
      <StoreLink
        placement="checkin"
        onTap={tryVibrate}
        className="flex animate-pop-in items-center gap-3 rounded-2xl bg-white p-3.5 shadow-[0_6px_20px_-8px_rgba(0,0,0,0.15)] ring-1 ring-slate-100 transition active:scale-[0.985]"
      >
        <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-orange-50 ring-1 ring-orange-200/70">
          <span className="relative h-7 w-7 origin-bottom motion-safe:animate-flame-wiggle">
            <Image src="/fire.png" alt="" fill sizes="56px" className="object-contain" />
          </span>
        </span>
        <span className="min-w-0 flex-1">
          <span className="block text-[19px] font-extrabold leading-tight text-brand">Make this visit count.</span>
          <span className="mt-0.5 block text-[12px] leading-snug text-slate-700">
            Check in with the app and start your streak.
          </span>
        </span>
        <svg viewBox="0 0 24 24" className="h-5 w-5 shrink-0 text-brand" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <polyline points="9 6 15 12 9 18" />
        </svg>
      </StoreLink>
    </section>
  );
}
