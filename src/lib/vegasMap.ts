// The Las Vegas web app's map (the Trail Line map, which the Fitness Court
// app does not have). Vegas QR codes carry ?s=<sign> and ?qr=<code name>;
// both ride along so the web app still counts the visit from that sign.
export const VEGAS_MAP_URL = "https://pwa-nfc.vercel.app/";

export function vegasMapUrl(search: string = typeof window === "undefined" ? "" : window.location.search): string {
  const from = new URLSearchParams(search);
  const url = new URL(VEGAS_MAP_URL);
  for (const key of ["s", "qr"]) {
    const value = from.get(key);
    if (value) url.searchParams.set(key, value);
  }
  url.hash = "/map";
  return url.toString();
}
