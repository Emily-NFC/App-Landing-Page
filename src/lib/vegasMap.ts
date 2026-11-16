// The Las Vegas web app's map (the Trail Line map, which the Fitness Court
// app does not have). Vegas QR codes carry ?s=<sign> and ?qr=<code name>;
// both ride along so the web app still counts the visit from that sign.
// NEXT_PUBLIC_VEGAS_MAP_URL points a local or preview build at another copy of the web app.
export const VEGAS_MAP_URL = process.env.NEXT_PUBLIC_VEGAS_MAP_URL || "https://pwa-nfc.vercel.app/";

export function vegasMapUrl(search: string = typeof window === "undefined" ? "" : window.location.search): string {
  const from = new URLSearchParams(search);
  const url = new URL(VEGAS_MAP_URL);
  for (const key of ["s", "qr"]) {
    const value = from.get(key);
    if (value) url.searchParams.set(key, value);
  }
  // The map alone, without the web app's tab bar (fitness-court-garden ?view=map).
  url.searchParams.set("view", "map");
  // So the map's Back button returns here.
  if (typeof window !== "undefined") url.searchParams.set("back", window.location.href);
  url.hash = "/map";
  return url.toString();
}
