import { track } from "@vercel/analytics";
import { sendGAEvent } from "@next/third-parties/google";
import Clarity from "@microsoft/clarity";
import { getAttribution } from "@/lib/storeLinks";

type Props = Record<string, string | number | boolean | null>;

export function trackEvent(name: string, props: Props = {}) {
  if (typeof window === "undefined") return;

  const params = new URLSearchParams(window.location.search);
  const court = params.get("court") ?? params.get("qr");
  const { source, medium, campaign } = getAttribution();
  const merged: Props = {
    ...props,
    traffic_source: source,
    traffic_medium: medium,
    ...(campaign ? { traffic_campaign: campaign } : {}),
    ...(court ? { court_id: court } : {}),
  };

  try {
    track(name, merged);
  } catch {
    // analytics script may not be loaded yet — fail silently
  }

  try {
    sendGAEvent("event", name, merged);
  } catch {
    // gtag may not be loaded yet — fail silently
  }

  try {
    Clarity.event(name);
  } catch {
    // Clarity only loads in production — fail silently
  }
}
