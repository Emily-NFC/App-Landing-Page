import { track } from "@vercel/analytics";

type Props = Record<string, string | number | boolean | null>;

export function trackEvent(name: string, props: Props = {}) {
  if (typeof window === "undefined") return;

  const params = new URLSearchParams(window.location.search);
  const court = params.get("court");
  const merged: Props = court ? { ...props, court_id: court } : props;

  try {
    track(name, merged);
  } catch {
    // analytics script may not be loaded yet — fail silently
  }
}
