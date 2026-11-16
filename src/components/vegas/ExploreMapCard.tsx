import Image from "next/image";
import { ExploreMapLink } from "./ExploreMapLink";

// The Las Vegas map: Trail Lines, Fitness Courts and parks, no download needed.
export function ExploreMapCard() {
  return (
    <section className="mx-auto max-w-md px-4 pt-3">
      <ExploreMapLink
        placement="map_card"
        className="block overflow-hidden rounded-2xl bg-white shadow-[0_4px_18px_-6px_rgba(0,0,0,0.12)] transition active:scale-[0.99]"
      >
        <div className="relative aspect-[780/620] w-full">
          <Image
            src="/vegas/map.jpg"
            alt="Map of Las Vegas Trail Lines and Fitness Courts"
            fill
            sizes="(max-width: 448px) 100vw, 448px"
            className="object-cover"
          />
        </div>
        <div className="flex items-center gap-3 p-4">
          <div className="flex-1">
            <div className="text-[16px] font-bold text-slate-900">Explore the Las Vegas map</div>
            <div className="mt-0.5 text-[13px] leading-snug text-slate-600">
              Trail Lines, Fitness Courts® and parks near you. No download needed.
            </div>
          </div>
          <span className="shrink-0 rounded-full bg-brand px-3.5 py-2 text-[12px] font-bold text-white">Open map</span>
        </div>
      </ExploreMapLink>
    </section>
  );
}
