export const APP_STORE_URL = "https://apps.apple.com/us/app/fitness-court/id563421203";
export const GOOGLE_PLAY_URL =
  "https://play.google.com/store/apps/details?id=com.nationalfitnesscampaign.FitnessCourtLive";

// App Store Connect provider token (App Analytics > Campaigns > "Generate a campaign link", the pt= value).
// Apple only credits the ct= campaign to installs when pt is present.
const APP_STORE_PROVIDER_TOKEN = "";

export type Attribution = {
  /** Where the visitor came from: qr, newsletter, website, instagram, google, ... */
  source: string;
  /** The kind of traffic: fitness_court, email, website, social, search, referral, direct, ... */
  medium: string;
  /** Court id for QR scans, utm_campaign for tagged links. */
  campaign: string;
};

const SOCIAL = ["instagram", "facebook", "tiktok", "twitter", "t.co", "x.com", "linkedin", "youtube", "threads", "pinterest", "reddit", "snapchat"];
const SEARCH = ["google", "bing", "yahoo", "duckduckgo", "ecosia", "baidu"];
const OWN_SITES = ["nationalfitnesscampaign.com", "fitnesscourt.com", "nfchq.com"];

function clean(value: string | null): string {
  return (value ?? "").trim().toLowerCase().replace(/[^a-z0-9._-]+/g, "-").slice(0, 60);
}

function fromReferrer(referrer: string): Attribution {
  let host = "";
  try {
    host = new URL(referrer).hostname.replace(/^www\./, "").toLowerCase();
  } catch {
    return { source: "direct", medium: "direct", campaign: "" };
  }
  if (!host || host === window.location.hostname) return { source: "direct", medium: "direct", campaign: "" };
  if (OWN_SITES.some((s) => host === s || host.endsWith("." + s))) return { source: "website", medium: "website", campaign: host };
  const social = SOCIAL.find((s) => host.includes(s));
  if (social) return { source: social === "t.co" || social === "x.com" ? "twitter" : social, medium: "social", campaign: "" };
  const search = SEARCH.find((s) => host.includes(s));
  if (search) return { source: search, medium: "search", campaign: "" };
  return { source: clean(host), medium: "referral", campaign: "" };
}

/**
 * Who sent this visitor. QR codes carry ?court= or ?qr=, our own links carry utm_source
 * (e.g. ?utm_source=newsletter), and anything else falls back to the referrer.
 */
export function getAttribution(): Attribution {
  if (typeof window === "undefined") return { source: "direct", medium: "direct", campaign: "" };
  const params = new URLSearchParams(window.location.search);
  // QR codes carry ?court= or, on the newer codes, ?qr=<code name>.
  const court = clean(params.get("court")) || clean(params.get("qr"));
  if (court) return { source: "qr", medium: "fitness_court", campaign: court };
  const utmSource = clean(params.get("utm_source"));
  if (utmSource) {
    return {
      source: utmSource,
      medium: clean(params.get("utm_medium")) || (utmSource === "newsletter" ? "email" : "link"),
      campaign: clean(params.get("utm_campaign")),
    };
  }
  return fromReferrer(document.referrer);
}

/** Store URL carrying the visitor's source, so App Store Connect and Play Console count installs by source. */
export function withAttribution(storeUrl: string, a: Attribution = getAttribution()): string {
  const url = new URL(storeUrl);
  if (storeUrl.startsWith(GOOGLE_PLAY_URL)) {
    const referrer = new URLSearchParams({ utm_source: a.source, utm_medium: a.medium });
    if (a.campaign) referrer.set("utm_campaign", a.campaign);
    url.searchParams.set("referrer", referrer.toString());
  } else {
    if (APP_STORE_PROVIDER_TOKEN) url.searchParams.set("pt", APP_STORE_PROVIDER_TOKEN);
    url.searchParams.set("ct", [a.source, a.campaign].filter(Boolean).join("-").slice(0, 100));
    url.searchParams.set("mt", "8");
  }
  return url.toString();
}

export function isGooglePlay(url: string): boolean {
  return url.startsWith(GOOGLE_PLAY_URL);
}

/** The right store for this phone, tagged with where the visitor came from. */
export function pickStoreUrl(userAgent: string): string {
  if (/Android/i.test(userAgent) && !/iPad|iPhone|iPod/i.test(userAgent)) return withAttribution(GOOGLE_PLAY_URL);
  return withAttribution(APP_STORE_URL);
}
