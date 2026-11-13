"use client";

import Image from "next/image";
import { trackEvent } from "@/lib/analytics";
import { useInfoSheet } from "./InfoSheet";

const VIDEO_URL = "https://youtu.be/gWCQpK6KPuM";

const movements = [
  { id: "core", name: "Core", body: "Station 1. Build a strong center that every other movement relies on." },
  { id: "squat", name: "Squat", body: "Station 2. Lower-body strength using the Fitness Court® step boxes." },
  { id: "push", name: "Push", body: "Station 3. Upper-body pushing strength on the incline bars." },
  { id: "lunge", name: "Lunge", body: "Station 4. Single-leg strength and balance." },
  { id: "pull", name: "Pull", body: "Station 5. Back and arm strength on the rings and bars." },
  { id: "agility", name: "Agility", body: "Station 6. Quick feet on the Fitness Court® agility markers." },
  { id: "bend", name: "Bend", body: "Station 7. Flexibility and mobility to finish the circuit." },
];

/** The 7 Fitness Court movements, each opening the sheet, plus the 1-minute intro. */
export function MovementsV4() {
  const openSheet = useInfoSheet();

  return (
    <section className="mx-auto max-w-md px-4 pb-3">
      <div className="rounded-2xl bg-white p-4 shadow-[0_4px_18px_-6px_rgba(0,0,0,0.08)]">
        <div className="text-[11px] font-bold uppercase tracking-[0.14em] text-brand">The Fitness Court® workout</div>
        <h2 className="mt-1 text-[24px] font-black leading-tight tracking-tight text-slate-900">7 movements. 7 minutes.</h2>

        <div className="mt-3 grid grid-cols-7 gap-1">
          {movements.map((m) => (
            <button
              key={m.id}
              type="button"
              onClick={() =>
                openSheet({
                  id: `move-${m.id}`,
                  icon: `/${m.id}.png`,
                  kicker: "Fitness Court® movement",
                  title: m.name,
                  body: `${m.body} Your coach guides it in the app.`,
                })
              }
              className="flex flex-col items-center gap-1 transition active:scale-[0.95]"
            >
              <span className="relative aspect-square w-full rounded-full border-[1.5px] border-[#d3e6f3] bg-[#eaf3fa]">
                <Image src={`/${m.id}.png`} alt="" fill sizes="48px" className="object-contain p-[18%] mix-blend-multiply" />
              </span>
              <span className="text-[9.5px] font-bold uppercase tracking-wide text-slate-800">{m.name}</span>
            </button>
          ))}
        </div>

        <a
          href={VIDEO_URL}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackEvent("video_play", { surface: "v4_movements" })}
          className="relative mt-4 block overflow-hidden rounded-2xl text-white"
        >
          <span className="relative block aspect-[16/9] w-full">
            <Image src="/v2/hero.jpg" alt="" fill sizes="(max-width: 448px) 100vw, 448px" className="object-cover object-[50%_70%]" />
          </span>
          <span className="absolute inset-0 flex flex-col justify-end bg-gradient-to-b from-[#091e34]/5 to-[#091e34]/80 p-3.5">
            <span className="absolute top-1/2 left-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/95">
              <svg viewBox="0 0 24 24" className="ml-1 h-6 w-6 text-brand" fill="currentColor" aria-hidden="true">
                <path d="M8 5v14l11-7z" />
              </svg>
            </span>
            <span className="text-[16px] font-bold">New here? Watch the 1-minute intro.</span>
          </span>
        </a>
      </div>
    </section>
  );
}
