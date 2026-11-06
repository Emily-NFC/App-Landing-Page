"use client";

import { useState } from "react";
import Image from "next/image";
import { trackEvent } from "@/lib/analytics";
import { StoreLink } from "./StoreLink";

const coaches = [
  { id: "miles", name: "Miles", role: "Strength & cardio", line: "Find your pace." },
  { id: "avery", name: "Avery", role: "Outdoor fitness", line: "Start where you are." },
  { id: "walt", name: "Walt", role: "Strength & balance", line: "It's never too late to get strong." },
  { id: "mae", name: "Mae", role: "Mobility & movement", line: "Strong for the things you love." },
];

export function CoachesCard() {
  const [picked, setPicked] = useState(coaches[0]);

  function pick(coach: (typeof coaches)[number]) {
    setPicked(coach);
    trackEvent("coach_pick", { coach: coach.id });
  }

  return (
    <section id="coaches" className="mx-auto max-w-md px-4 pb-3">
      <div className="rounded-2xl bg-white p-4 shadow-[0_4px_18px_-6px_rgba(0,0,0,0.08)]">
        <div className="text-[10px] font-bold uppercase tracking-[0.14em] text-brand">Now with guided coaches</div>
        <h2 className="mt-1 text-[24px] font-black leading-tight tracking-tight text-slate-900">Pick your coach.</h2>
        <p className="mt-0.5 text-[13px] text-slate-600">They talk you through every move.</p>

        <div className="mt-3 grid grid-cols-4 gap-2" role="radiogroup" aria-label="Choose a coach">
          {coaches.map((coach) => {
            const on = coach.id === picked.id;
            return (
              <button
                key={coach.id}
                type="button"
                role="radio"
                aria-checked={on}
                onClick={() => pick(coach)}
                className="flex flex-col items-center text-center"
              >
                <span
                  className={`relative block h-16 w-16 overflow-hidden rounded-full transition ${
                    on ? "scale-105 ring-[3px] ring-brand ring-offset-2" : "opacity-75 ring-2 ring-slate-200"
                  }`}
                >
                  <Image src={`/v2/coach-${coach.id}.jpg`} alt="" fill sizes="64px" className="object-cover" />
                </span>
                <span className={`mt-1.5 text-[14px] font-bold leading-tight ${on ? "text-brand" : "text-slate-800"}`}>
                  {coach.name}
                </span>
                <span className="text-[10px] leading-tight text-slate-500">{coach.role}</span>
              </button>
            );
          })}
        </div>

        <StoreLink
          placement={`coach_${picked.id}`}
          className="relative mt-3 block aspect-[4/3] overflow-hidden rounded-2xl bg-sky-200 transition active:scale-[0.99]"
        >
          {/* All four stay mounted so a tap cross-fades instead of loading. */}
          {coaches.map((coach) => (
            <Image
              key={coach.id}
              src={`/v4/coach-${coach.id}.jpg`}
              alt={coach.id === picked.id ? `Coach ${coach.name} on the Fitness Court®` : ""}
              fill
              sizes="(max-width: 448px) 92vw, 410px"
              className={`object-cover object-[50%_62%] transition-opacity duration-300 ${
                coach.id === picked.id ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#0b2a4a]/90 via-[#0b2a4a]/45 to-transparent p-3 pt-14">
            <div className="text-[18px] font-black leading-tight text-white">&ldquo;{picked.line}&rdquo;</div>
            <div className="mt-2 flex items-center justify-between">
              <span className="text-[12px] font-semibold text-white/85">Coach {picked.name}</span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1.5 text-[12px] font-bold text-brand shadow-sm">
                <svg viewBox="0 0 24 24" className="h-3 w-3" fill="currentColor" aria-hidden="true">
                  <path d="M8 5v14l11-7z" />
                </svg>
                Train with {picked.name}
              </span>
            </div>
          </div>
        </StoreLink>
      </div>
    </section>
  );
}
