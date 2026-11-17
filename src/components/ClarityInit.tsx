"use client";

import { useEffect } from "react";
import Clarity from "@microsoft/clarity";
import { getAttribution } from "@/lib/storeLinks";

export function ClarityInit({ projectId }: { projectId: string }) {
  useEffect(() => {
    Clarity.init(projectId);

    // Tag the session with the QR code's court so recordings can be filtered per court.
    const params = new URLSearchParams(window.location.search);
    const court = params.get("court") ?? params.get("qr") ?? params.get("s");
    if (court) Clarity.setTag("court_id", court);
    // Las Vegas signs also carry ?s=<sign>, e.g. L-BN1.
    const sign = params.get("s");
    if (sign) Clarity.setTag("vegas_sign", sign);
    if (window.location.pathname.startsWith("/vegas")) Clarity.setTag("site", "vegas");
    const { source, medium } = getAttribution();
    Clarity.setTag("traffic_source", source);
    Clarity.setTag("traffic_medium", medium);
    Clarity.setTag("page", window.location.pathname === "/" ? "home" : window.location.pathname);
  }, [projectId]);

  return null;
}
