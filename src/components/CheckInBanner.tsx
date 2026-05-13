"use client";

import { useCallback, useEffect, useRef } from "react";
import confetti from "canvas-confetti";

import { APP_STORE_URL, pickStoreUrl } from "@/lib/storeLinks";

const CONFETTI_COLORS = ["#1d6fe5", "#22c55e", "#f59e0b", "#ef4444", "#a855f7", "#fb923c"];

function fireConfetti() {
  confetti({
    particleCount: 80,
    spread: 70,
    startVelocity: 45,
    origin: { x: 0.5, y: 0.25 },
    colors: CONFETTI_COLORS,
    scalar: 0.9,
    ticks: 220,
  });
  confetti({
    particleCount: 35,
    spread: 60,
    startVelocity: 35,
    angle: 60,
    origin: { x: 0, y: 0.4 },
    colors: CONFETTI_COLORS,
    scalar: 0.8,
  });
  confetti({
    particleCount: 35,
    spread: 60,
    startVelocity: 35,
    angle: 120,
    origin: { x: 1, y: 0.4 },
    colors: CONFETTI_COLORS,
    scalar: 0.8,
  });
}

function tryVibrate() {
  if (typeof navigator === "undefined" || !("vibrate" in navigator)) return false;
  try {
    return navigator.vibrate([60, 40, 90, 40, 140]);
  } catch {
    return false;
  }
}

export function CheckInBanner() {
  const fired = useRef(false);

  useEffect(() => {
    if (fired.current) return;
    fired.current = true;

    let vibrated = tryVibrate();
    const canVibrate = typeof navigator !== "undefined" && "vibrate" in navigator;
    if (canVibrate && !vibrated) {
      const onFirstGesture = () => {
        if (vibrated) return;
        vibrated = !!tryVibrate();
      };
      window.addEventListener("touchstart", onFirstGesture, { passive: true, once: true });
      window.addEventListener("pointerdown", onFirstGesture, { passive: true, once: true });
      window.addEventListener("scroll", onFirstGesture, { passive: true, once: true });
    }

    fireConfetti();
    const t = window.setTimeout(fireConfetti, 280);
    return () => window.clearTimeout(t);
  }, []);

  const handleCardTap = useCallback(() => {
    fireConfetti();
    tryVibrate();
  }, []);

  function handleAppLink(event: React.MouseEvent<HTMLAnchorElement>) {
    event.stopPropagation();
    tryVibrate();
    if (typeof navigator === "undefined") return;
    const url = pickStoreUrl(navigator.userAgent);
    if (url === APP_STORE_URL) return;
    event.preventDefault();
    window.open(url, "_blank", "noopener,noreferrer");
  }

  return (
    <section className="mx-auto max-w-md px-4 pb-4">
      <button
        type="button"
        onClick={handleCardTap}
        aria-label="Replay check-in celebration"
        className="block w-full animate-pop-in cursor-pointer rounded-2xl bg-white p-4 text-left shadow-[0_8px_24px_-12px_rgba(29,111,229,0.18)] ring-1 ring-slate-100 transition-transform active:scale-[0.985]"
      >
        <div className="flex items-center gap-4">
          <div className="relative shrink-0">
            <span
              className="absolute inset-0 -m-1 rounded-full bg-orange-200/60 motion-safe:animate-ping"
              aria-hidden="true"
            />
            <div className="relative flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-sm ring-1 ring-sky-200/70">
              <span
                className="origin-bottom text-3xl motion-safe:animate-flame-wiggle"
                aria-hidden="true"
              >
                🔥
              </span>
            </div>
            <span
              className="absolute -bottom-1 -right-1 flex h-6 w-6 items-center justify-center rounded-full bg-brand ring-2 ring-white"
              aria-hidden="true"
            >
              <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 text-white" fill="none" stroke="currentColor" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </span>
            <span
              className="absolute -top-2 -right-3 inline-flex animate-badge-pop items-center gap-0.5 rounded-full bg-orange-100 px-2 py-0.5 text-[10px] font-bold text-orange-600 shadow-sm ring-1 ring-orange-200"
              aria-hidden="true"
            >
              +1 day
            </span>
          </div>
          <div className="min-w-0 flex-1">
            <h3 className="text-[20px] font-extrabold leading-tight text-slate-900">
              You checked in!
            </h3>
            <a
              href={APP_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleAppLink}
              className="mt-0.5 inline-flex items-center gap-1 text-[14px] font-semibold text-brand hover:text-brand-dark"
            >
              Save your streak in the app
              <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <polyline points="9 6 15 12 9 18" />
              </svg>
            </a>
            <p className="mt-1 text-[12px] leading-snug text-slate-600">
              Download the app to keep your streak going, earn badges, and join challenges.
            </p>
          </div>
        </div>
      </button>
    </section>
  );
}
