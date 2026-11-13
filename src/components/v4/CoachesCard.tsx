"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { trackEvent } from "@/lib/analytics";
import { StoreLink } from "./StoreLink";

const coaches = [
  { id: "miles", name: "Miles", role: "Strength & cardio", line: "Find your pace.", prompt: "Ready for today's workout? Tell me how you're feeling and we'll find your pace.", reply: "Feeling good. Let's go! 💪" },
  { id: "avery", name: "Avery", role: "Outdoor fitness", line: "Start where you are.", prompt: "Great day to train outside! I'll pick a workout to match the weather.", reply: "Perfect, let's get outside! ☀️" },
  { id: "walt", name: "Walt", role: "Strength & balance", line: "It's never too late to get strong.", prompt: "Good to see you. Let's build some strength together today.", reply: "I'm in. Let's get strong! 🏋️" },
  { id: "mae", name: "Mae", role: "Mobility & movement", line: "Strong for the things you love.", prompt: "Hi there! Let's loosen up and find a workout that fits you today.", reply: "Ready to stretch it out! 🙌" },
];


export function CoachesCard() {
  const [picked, setPicked] = useState(coaches[0]);
  // 0 typing, 1 coach message, 2 member reply. Replays for each coach.
  const [step, setStep] = useState(0);
  // The chat waits until the preview is on screen.
  const previewRef = useRef<HTMLDivElement>(null);
  const [seen, setSeen] = useState(false);

  useEffect(() => {
    const el = previewRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setSeen(true);
          io.disconnect();
        }
      },
      { threshold: 0.5 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!seen) return;
    const a = window.setTimeout(() => setStep(1), 900);
    const b = window.setTimeout(() => setStep(2), 2600);
    return () => {
      window.clearTimeout(a);
      window.clearTimeout(b);
    };
  }, [picked.id, seen]);

  function pick(coach: (typeof coaches)[number]) {
    setPicked(coach);
    setStep(0);
    trackEvent("coach_pick", { coach: coach.id });
  }

  return (
    <section id="coaches" className="mx-auto max-w-md px-4 pb-3">
      <div className="rounded-2xl bg-white p-4 shadow-[0_4px_18px_-6px_rgba(0,0,0,0.08)]">
        <div className="text-[10px] font-bold uppercase tracking-[0.14em] text-brand">How it works</div>
        <h2 className="mt-1 text-[24px] font-black leading-tight tracking-tight text-slate-900">Pick your coach &amp; get started.</h2>
        <p className="mt-0.5 text-[13px] text-slate-600">Chat with your coach and pick your workout.</p>

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

        <div ref={previewRef}>
        <StoreLink
          placement={`coach_${picked.id}`}
          className="relative mt-3 block aspect-[4/5] overflow-hidden rounded-2xl bg-sky-200 transition active:scale-[0.99]"
        >
          {/* All four stay mounted so a tap cross-fades instead of loading. */}
          {coaches.map((coach) => (
            <Image
              key={coach.id}
              src={`/v4/coach-${coach.id}.jpg`}
              alt={coach.id === picked.id ? `Coach ${coach.name} on the Fitness Court®` : ""}
              fill
              sizes="(max-width: 448px) 92vw, 410px"
              className={`object-cover object-[50%_20%] transition-opacity duration-300 ${
                coach.id === picked.id ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}
          <div className="absolute inset-x-0 top-0 space-y-2 p-3" aria-live="polite">
            <div className="flex items-end gap-2">
              <span className="relative block h-8 w-8 shrink-0 overflow-hidden rounded-full ring-2 ring-white">
                <Image src={`/v2/coach-${picked.id}.jpg`} alt="" fill sizes="32px" className="object-cover" />
              </span>
              <div className="max-w-[80%] rounded-2xl rounded-bl-md bg-white px-3 py-2 shadow-md">
                <div className="text-[9px] font-bold uppercase tracking-[0.1em] text-brand">
                  {picked.name} · Your intelligent coach
                </div>
                {step === 0 ? (
                  <div className="flex gap-1 py-1.5" aria-label={`${picked.name} is typing`}>
                    {[0, 1, 2].map((i) => (
                      <span
                        key={i}
                        className="h-1.5 w-1.5 rounded-full bg-slate-400 motion-safe:animate-bounce"
                        style={{ animationDelay: `${i * 120}ms` }}
                      />
                    ))}
                  </div>
                ) : (
                  <p className="mt-0.5 animate-pop-in text-[13px] leading-snug text-slate-800">{picked.prompt}</p>
                )}
              </div>
            </div>
            {step === 2 && (
              <div className="flex justify-end">
                <div className="animate-pop-in rounded-2xl rounded-br-md bg-brand px-3 py-2 text-[13px] font-semibold text-white shadow-md">
                  {picked.reply}
                </div>
              </div>
            )}
          </div>
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#0b2a4a]/90 via-[#0b2a4a]/40 to-transparent p-3 pt-12">
            <div className="flex items-center justify-between">
              <span className="text-[15px] font-extrabold leading-tight text-white">
                Coach {picked.name}
                <span className="block text-[11px] font-semibold text-white/80">&ldquo;{picked.line}&rdquo;</span>
              </span>
              <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-white px-3 py-1.5 text-[12px] font-bold text-brand shadow-sm">
                <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M21 12a8 8 0 01-11.6 7.1L4 20l1-4.6A8 8 0 1121 12z" />
                </svg>
                Chat with {picked.name}
              </span>
            </div>
          </div>
        </StoreLink>
        </div>
      </div>
    </section>
  );
}
