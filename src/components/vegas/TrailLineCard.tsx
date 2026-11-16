import Image from "next/image";
import { ExploreMapLink } from "./ExploreMapLink";

const facts = [
  { big: "14", small: "Stations" },
  { big: "7 min", small: "Energy Boost" },
  { big: "GO", small: "Cardio Challenge" },
];

// The Las Vegas Trail Line map, in the Trail Line green: the one thing here the app doesn't have.
export function TrailLineCard() {
  return (
    <section className="mx-auto max-w-md px-4 pb-3">
      <div className="overflow-hidden rounded-2xl bg-[#0A4A2E] text-white shadow-[0_8px_24px_-10px_rgba(10,74,46,0.7)]">
        <ExploreMapLink placement="trail_line_map_image" className="relative block aspect-[780/540] w-full">
          <Image
            src="/vegas/kellogg.jpg"
            alt="Illustrated close-up of the Kellogg-Zaher Fitness Court, Trail Line station KL2 and the Bonanza Trail"
            fill
            sizes="(max-width: 448px) 100vw, 448px"
            className="object-cover"
          />
          <div className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-[#0A4A2E] to-transparent" />
        </ExploreMapLink>
        <div className="px-4 pb-4">
          <div className="relative h-4 w-[76px]">
            <Image src="/vegas/logo-tl-white.png" alt="Trail Line" fill sizes="76px" className="object-contain object-left" />
          </div>
          <h2 className="mt-1.5 text-[19px] font-black leading-tight tracking-tight">Explore the Las Vegas Trail Line map.</h2>
          <p className="mt-1 text-[13px] leading-snug text-white/85">
            Walk, run or ride the Trail Line™. Find stations, Fitness Courts® and parks near you.
          </p>
          <ul className="mt-3 grid grid-cols-3 gap-2">
            {facts.map((f) => (
              <li key={f.small} className="rounded-xl bg-white/10 px-1 py-2 text-center leading-none">
                <span className="block text-[17px] font-black text-[#7fe0a9]">{f.big}</span>
                <span className="mt-1 block text-[9.5px] font-bold uppercase tracking-wide text-white/75">{f.small}</span>
              </li>
            ))}
          </ul>
          <ExploreMapLink
            placement="trail_line_card"
            className="mt-3 flex w-full items-center justify-center gap-1.5 rounded-full bg-white px-4 py-2.5 text-[14px] font-bold text-[#0A4A2E] transition active:scale-[0.98]"
          >
            View Trail Line Map
          </ExploreMapLink>
          <p className="mt-1.5 text-center text-[11.5px] text-white/70">No download needed.</p>
        </div>
      </div>
    </section>
  );
}
