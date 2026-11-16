import Image from "next/image";
import { ExploreMapLink } from "./ExploreMapLink";

const facts = [
  { big: "14", small: "stations", line: "along the Bonanza and Lone Mountain Trails" },
  { big: "7", small: "minutes", line: "Trail Line Energy Boost: walk, run, three pushes with Avery" },
  { big: "Go", small: "far", line: "Cardio Challenge: start at any station and see how far you go" },
];

// Las Vegas Trail Lines: marked paths with stations, in the Trail Line green.
export function TrailLineCard() {
  return (
    <section className="mx-auto max-w-md px-4 pb-3">
      <div className="overflow-hidden rounded-2xl bg-[#0A4A2E] text-white shadow-[0_8px_24px_-10px_rgba(10,74,46,0.7)]">
        <div className="relative aspect-[1200/676] w-full">
          <Image
            src="/vegas/avery-trail.jpg"
            alt="Coach Avery running past a Trail Line station on the Bonanza Trail"
            fill
            sizes="(max-width: 448px) 100vw, 448px"
            className="object-cover"
          />
          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#0A4A2E] to-transparent" />
        </div>
        <div className="px-4 pb-4">
          <div className="relative h-5 w-[92px]">
            <Image src="/vegas/logo-tl-white.png" alt="Trail Line" fill sizes="92px" className="object-contain object-left" />
          </div>
          <h2 className="mt-2 text-[22px] font-black leading-tight tracking-tight">Walk, run or ride the Trail Line™.</h2>
          <p className="mt-1.5 text-[13.5px] leading-snug text-white/85">
            A Trail Line™ is a marked path through Las Vegas. Stop at the stations along the way for a workout, a
            challenge, or directions to the next Fitness Court®.
          </p>
          <ul className="mt-3 space-y-2">
            {facts.map((f) => (
              <li key={f.line} className="flex items-center gap-3 rounded-xl bg-white/10 px-3 py-2">
                <span className="w-[54px] shrink-0 text-center leading-none">
                  <span className="block text-[20px] font-black text-[#7fe0a9]">{f.big}</span>
                  <span className="block text-[9.5px] font-bold uppercase tracking-wide text-white/70">{f.small}</span>
                </span>
                <span className="text-[13px] leading-snug text-white/90">{f.line}</span>
              </li>
            ))}
          </ul>
          <ExploreMapLink
            placement="trail_line_card"
            className="mt-4 flex w-full items-center justify-center gap-1.5 rounded-full bg-white px-4 py-2.5 text-[14px] font-bold text-[#0A4A2E] transition active:scale-[0.98]"
          >
            Find a Trail Line station
          </ExploreMapLink>
        </div>
      </div>
    </section>
  );
}
