"use client";

import { trackEvent } from "@/lib/analytics";
import { APP_STORE_URL, isGooglePlay, pickStoreUrl } from "@/lib/storeLinks";

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
    trackEvent("store_click", { store: isGooglePlay(url) ? "android" : "ios", placement });
    if (!isGooglePlay(url)) {
      // Let the App Store link open natively, now tagged with the visitor's source.
      event.currentTarget.href = url;
      return;
    }
    event.preventDefault();
    window.open(url, "_blank", "noopener,noreferrer");
  }

  return (
    <a href={APP_STORE_URL} target="_blank" rel="noopener noreferrer" onClick={handleClick} className={className}>
      {children}
    </a>
  );
}
