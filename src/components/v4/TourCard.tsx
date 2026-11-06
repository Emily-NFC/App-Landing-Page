"use client";

import Image from "next/image";
import { trackEvent } from "@/lib/analytics";

const VIDEO_URL = "https://youtu.be/gWCQpK6KPuM";

export function TourCard() {
  return (
    <section className="mx-auto max-w-md px-4 pb-3">
      <div className="flex items-center gap-3 rounded-2xl bg-white p-2.5 shadow-[0_4px_18px_-6px_rgba(0,0,0,0.1)]">
        <a
          href={VIDEO_URL}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackEvent("video_play", { surface: "thumb" })}
          aria-label="Play the 1-minute Fitness Court® tour"
          className="relative aspect-[4/3] w-[48%] shrink-0 overflow-hidden rounded-xl bg-slate-200"
        >
          <Image src="/v2/w-blocks.jpg" alt="" fill sizes="200px" className="object-cover" />
          <span className="absolute inset-0 flex items-center justify-center">
            <span className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-white bg-black/25">
              <svg viewBox="0 0 24 24" className="ml-0.5 h-5 w-5 text-white" fill="currentColor" aria-hidden="true">
                <path d="M8 5v14l11-7z" />
              </svg>
            </span>
          </span>
          <span className="absolute bottom-1.5 right-1.5 rounded-full bg-white px-2 py-0.5 text-[10px] font-bold text-slate-900">
            1 MIN
          </span>
        </a>
        <div className="min-w-0 flex-1">
          <div className="text-[10px] font-bold uppercase tracking-[0.12em] text-brand">New here?</div>
          <h2 className="mt-0.5 text-[17px] font-extrabold leading-tight tracking-tight text-slate-900">
            See the 7 moves in 1 minute.
          </h2>
          <a
            href={VIDEO_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackEvent("video_play", { surface: "watch_tour" })}
            className="mt-2 inline-flex items-center gap-1.5 rounded-full bg-brand px-3 py-1.5 text-[12px] font-bold text-white shadow-sm transition active:scale-[0.98]"
          >
            <svg viewBox="0 0 24 24" className="h-3 w-3" fill="currentColor" aria-hidden="true">
              <path d="M8 5v14l11-7z" />
            </svg>
            Watch the tour
          </a>
        </div>
      </div>
    </section>
  );
}
