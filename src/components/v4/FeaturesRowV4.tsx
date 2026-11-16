"use client";

import Image from "next/image";
import { useInfoSheet, type SheetContent } from "./InfoSheet";

const features: (SheetContent & { name: string; blurb: string })[] = [
  {
    id: "guided",
    name: "Guided Workouts",
    blurb: "A coach walks you through it",
    icon: "/Exercise.png",
    kicker: "Guided workouts",
    title: "Strength and Cardio workouts at the Fitness Court®",
    body: "Pick a coach and select a workout built for this Fitness Court®. Your coach explains each movement and keeps time, at any fitness level.",
  },
  {
    id: "checkin",
    name: "Check In",
    blurb: "Build your streak",
    icon: "/check-in.png",
    kicker: "Check in",
    title: "Check in at this Fitness Court®",
    body: "Tap check in when you arrive. Every visit counts toward your streak, badges and community challenges.",
  },
  {
    id: "health",
    name: "Track Your Health",
    blurb: "Steps, heart rate, progress",
    icon: "/health.png",
    kicker: "Track your health",
    title: "See your progress",
    body: "Connect your phone's health data to see steps, heart rate and workouts in one place over time.",
  },
];

/** Guided Workouts / Check In / Track Your Health, each opening the sheet. */
/** With a fourth tile, names and blurbs get two lines each so every link lines up. */
export const TILE_NAME = "flex min-h-[2.5em] items-center";
export const TILE_BLURB = "min-h-[2.5em]";

/** extraTile: a fourth tile at the end of the row (the Las Vegas page's map). */
export function FeaturesRowV4({ extraTile }: { extraTile?: React.ReactNode } = {}) {
  const openSheet = useInfoSheet();

  return (
    <section className="mx-auto max-w-md px-4 pb-3">
      <div className={`grid gap-2 ${extraTile ? "grid-cols-4" : "grid-cols-3"}`}>
        {features.map((f, i) => (
          <button
            key={f.id}
            type="button"
            onClick={() => openSheet(f)}
            className={`flex flex-col items-center gap-1.5 rounded-2xl border px-1.5 pt-3 pb-2.5 text-center transition active:scale-[0.97] ${
              i === 0 ? "border-[#9fcbe7] bg-gradient-to-b from-[#f2f9fe] to-white" : "border-slate-200 bg-white"
            }`}
          >
            <span className="relative h-10 w-10">
              <Image src={f.icon} alt="" fill sizes="80px" className="object-contain" />
            </span>
            <span className={`text-[13px] font-bold leading-tight text-slate-900 ${extraTile ? TILE_NAME : ""}`}>{f.name}</span>
            <span className={`text-[11.5px] leading-tight text-slate-500 ${extraTile ? TILE_BLURB : ""}`}>{f.blurb}</span>
            <span className={`text-[11px] font-bold text-brand ${extraTile ? "mt-auto" : ""}`}>See how ›</span>
          </button>
        ))}
        {extraTile}
      </div>
    </section>
  );
}
