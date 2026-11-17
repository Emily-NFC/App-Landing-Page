import { ExploreMapLink } from "./ExploreMapLink";
import { TILE_BLURB, TILE_NAME } from "../v4/FeaturesRowV4";

// The fourth tile in the feature row: the Trail Line map, in Trail Line green.
export function MapTile() {
  return (
    <ExploreMapLink
      placement="feature_tile"
      className="flex flex-col items-center gap-1.5 rounded-2xl border border-slate-200 bg-white px-1.5 pt-3 pb-2.5 text-center transition active:scale-[0.97]"
    >
      <span className="flex h-10 w-10 items-center justify-center text-[#0F7B4B]">
        <svg viewBox="0 0 24 24" className="h-9 w-9" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M9 4 3 6v14l6-2 6 2 6-2V4l-6 2-6-2Z" />
          <path d="M9 4v14M15 6v14" />
        </svg>
      </span>
      <span className={`text-[13px] font-bold leading-tight text-slate-900 ${TILE_NAME}`}>View the Map</span>
      <span className={`text-[11.5px] leading-tight text-slate-500 ${TILE_BLURB}`}>Trail Lines &amp; courts</span>
      <span className="mt-auto text-[11px] font-bold text-brand">Open ›</span>
    </ExploreMapLink>
  );
}
