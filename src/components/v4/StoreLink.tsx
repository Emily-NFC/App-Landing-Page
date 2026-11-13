"use client";

import { trackEvent } from "@/lib/analytics";
import { APP_STORE_URL, GOOGLE_PLAY_URL, pickStoreUrl } from "@/lib/storeLinks";

type Props = {
  placement: string;
  className?: string;
  children: React.ReactNode;
  onTap?: () => void;
};

/** Any card that should open the right store for this phone. */
export function StoreLink({ placement, className = "", children, onTap }: Props) {
  function handleClick(event: React.MouseEvent<HTMLAnchorElement>) {
    onTap?.();
    if (typeof navigator === "undefined") return;
    const url = pickStoreUrl(navigator.userAgent);
    trackEvent("store_click", { store: url === GOOGLE_PLAY_URL ? "android" : "ios", placement });
    if (url === APP_STORE_URL) return;
    event.preventDefault();
    window.open(url, "_blank", "noopener,noreferrer");
  }

  return (
    <a href={APP_STORE_URL} target="_blank" rel="noopener noreferrer" onClick={handleClick} className={className}>
      {children}
    </a>
  );
}
