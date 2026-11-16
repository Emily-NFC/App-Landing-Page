import { ExploreMapLink } from "./ExploreMapLink";

// The fourth tile in the feature row: the Trail Line map, in Trail Line green.
export function MapTile() {
  return (
    <ExploreMapLink
      placement="feature_tile"
      className="flex flex-col items-center gap-1.5 rounded-2xl border border-[#9fd9b8] bg-gradient-to-b from-[#effaf3] to-white px-1.5 pt-3 pb-2.5 text-center transition active:scale-[0.97]"
    >
      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#0F7B4B] text-white">
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M9 4 3 6v14l6-2 6 2 6-2V4l-6 2-6-2Z" />
          <path d="M9 4v14M15 6v14" />
        </svg>
      </span>
      <span className="text-[13px] font-bold leading-tight text-slate-900">View the Map</span>
      <span className="text-[11.5px] leading-tight text-slate-500">Trail Lines &amp; courts</span>
      <span className="text-[11px] font-bold text-[#0F7B4B]">Open ›</span>
    </ExploreMapLink>
  );
}
