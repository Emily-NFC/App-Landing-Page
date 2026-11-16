"use client";

import { trackEvent } from "@/lib/analytics";
import { VEGAS_MAP_URL, vegasMapUrl } from "@/lib/vegasMap";

type Props = { placement: string; className?: string; children: React.ReactNode };

/** Opens the Las Vegas map, carrying the sign the visitor scanned. */
export function ExploreMapLink({ placement, className = "", children }: Props) {
  function handleClick(event: React.MouseEvent<HTMLAnchorElement>) {
    trackEvent("explore_map_click", { placement });
    event.currentTarget.href = vegasMapUrl();
  }
  return (
    <a href={VEGAS_MAP_URL + "#/map"} onClick={handleClick} className={className}>
      {children}
    </a>
  );
}
