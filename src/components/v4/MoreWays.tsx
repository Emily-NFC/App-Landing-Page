import Image from "next/image";
import { StoreLink } from "./StoreLink";

const cards = [
  {
    tag: "Strength",
    title: "Build strength.",
    line: "Guided workouts for every fitness level.",
    src: "/v4/strength2.jpg",
    alt: "Coach Miles on the Fitness Court®",
    pos: "object-[70%_30%]",
  },
  {
    tag: "Cardio",
    title: "Boost cardio.",
    line: "Walks and trail routes to keep you moving.",
    src: "/v4/cardio.jpg",
    alt: "Coach Avery running on a park trail",
    pos: "object-[60%_40%]",
  },
];

export function MoreWays() {
  return (
    <section className="mx-auto max-w-md px-4 pb-3">
      <div className="mb-2 text-[10px] font-bold uppercase tracking-[0.14em] text-brand">More ways to move</div>
      <div className="grid grid-cols-2 gap-2.5">
        {cards.map(({ tag, title, line, src, alt, pos }) => (
          <StoreLink
            key={tag}
            placement={`more_${tag.toLowerCase()}`}
            className="relative block aspect-[4/3] overflow-hidden rounded-2xl bg-slate-200 shadow-[0_6px_18px_-8px_rgba(0,0,0,0.3)] transition active:scale-[0.985]"
          >
            <Image src={src} alt={alt} fill sizes="(max-width: 448px) 50vw, 220px" className={`object-cover ${pos}`} />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0b2a4a]/90 via-[#0b2a4a]/55 to-transparent" />
            <div className="absolute inset-0 flex flex-col p-2.5">
              <span className="self-start rounded-full bg-brand px-2 py-0.5 text-[9px] font-bold uppercase tracking-[0.1em] text-white">
                {tag}
              </span>
              <div className="mt-auto max-w-[72%]">
                <div className="text-[15px] font-extrabold leading-tight text-white">{title}</div>
                <p className="mt-0.5 text-[10px] leading-snug text-white/90">{line}</p>
              </div>
            </div>
            <span className="absolute bottom-2 right-2 flex h-6 w-6 items-center justify-center rounded-full bg-white text-brand">
              <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <polyline points="9 6 15 12 9 18" />
              </svg>
            </span>
          </StoreLink>
        ))}
      </div>
    </section>
  );
}
