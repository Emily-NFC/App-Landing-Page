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
        className="block w-full animate-pop-in rounded-2xl bg-white p-4 text-left shadow-[0_8px_24px_-12px_rgba(29,111,229,0.18)] ring-1 ring-slate-100 transition-transform active:scale-[0.985]"
      >
        <span className="flex items-center gap-4">
          <span className="relative shrink-0">
            <span className="absolute inset-0 -m-1 rounded-full bg-orange-200/60 motion-safe:animate-ping" aria-hidden="true" />
            <span className="relative flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-sm ring-1 ring-orange-200/70">
              <span className="relative h-10 w-10 origin-bottom motion-safe:animate-flame-wiggle">
                <Image src="/fire.png" alt="" fill sizes="80px" className="object-contain" />
              </span>
            </span>
            <span
              className="absolute -right-1 -bottom-1 flex h-6 w-6 items-center justify-center rounded-full bg-brand ring-2 ring-white"
              aria-hidden="true"
            >
              <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 text-white" fill="none" stroke="currentColor" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </span>
            <span
              className="absolute -top-2 -right-3 inline-flex animate-badge-pop items-center rounded-full bg-orange-50 px-2 py-0.5 text-[10px] font-bold text-[#f59e0b] shadow-sm ring-1 ring-[#fcd34d]"
              aria-hidden="true"
            >
              +1 day
            </span>
          </span>
          <span className="min-w-0 flex-1">
            <span className="block text-[20px] font-extrabold leading-tight text-[#f19e3a]">Check In Today</span>
            <span className="mt-0.5 block text-[13px] font-bold uppercase tracking-wide text-[#f59e0b]">1 Day Streak</span>
            <span className="mt-1 inline-flex items-center gap-1 text-[13px] font-semibold text-brand">
              Save your streak in the app
              <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <polyline points="9 6 15 12 9 18" />
              </svg>
            </span>
            <span className="mt-1 block text-[12px] leading-snug text-slate-600">
              Download the app to keep your streak going, earn badges, and join challenges.
            </span>
          </span>
        </span>
      </StoreLink>
    </section>
  );
}
