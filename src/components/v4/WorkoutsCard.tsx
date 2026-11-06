"use client";

import { useState } from "react";
import Image from "next/image";

const lengths = [7, 14, 20, 30];

const workouts = [
  { src: "/v2/w-energy.jpg", title: "Energy Boost", line: "Quick strength. Big energy." },
  { src: "/v2/w-challenge.jpg", title: "Take a Challenge", line: "Go all out. Beat your best." },
  { src: "/v4/assessment.jpg", title: "Practice an Assessment", line: "See where you stand." },
];

export function WorkoutsCard() {
  const [minutes, setMinutes] = useState(7);

  return (
    <section id="workouts" className="mx-auto max-w-md px-4 pb-3">
      <div className="rounded-2xl bg-white p-4 shadow-[0_4px_18px_-6px_rgba(0,0,0,0.08)]">
        <div className="text-[10px] font-bold uppercase tracking-[0.14em] text-brand">Guided workouts</div>
        <h2 className="mt-1 text-[22px] font-black leading-tight tracking-tight text-slate-900">
          Pick a workout. Press play.
        </h2>
        <p className="mt-0.5 text-[13px] text-slate-600">Your coach guides every move.</p>

        <div className="mt-3 text-[11px] font-bold text-slate-700">Pick your workout length</div>
        <div className="mt-1.5 grid grid-cols-4 gap-1.5" role="group" aria-label="Workout length">
          {lengths.map((m) => (
            <button
              key={m}
              type="button"
              aria-pressed={minutes === m}
              onClick={() => setMinutes(m)}
              className={`rounded-full py-1.5 text-[12px] font-bold transition ${
                minutes === m ? "bg-brand text-white" : "bg-brand/10 text-brand"
              }`}
            >
              {m} min
            </button>
          ))}
        </div>

        <div className="mt-3 grid grid-cols-3 gap-2">
          {workouts.map(({ src, title, line }) => (
            <div key={title} className="relative aspect-[3/4] overflow-hidden rounded-xl bg-slate-100">
              <Image src={src} alt={title} fill sizes="140px" className="object-cover" />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#0b2a4a]/90 via-[#0b2a4a]/50 to-transparent p-2 pt-10">
                <div className="text-[13px] font-extrabold leading-tight text-white">{title}</div>
                <p className="mt-0.5 text-[10px] leading-snug text-white/90">{line}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
