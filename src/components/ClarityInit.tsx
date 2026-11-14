"use client";

import { useEffect } from "react";
import Clarity from "@microsoft/clarity";
import { getAttribution } from "@/lib/storeLinks";

export function ClarityInit({ projectId }: { projectId: string }) {
  useEffect(() => {
    Clarity.init(projectId);

    // Tag the session with the QR code's court so recordings can be filtered per court.
    const params = new URLSearchParams(window.location.search);
    const court = params.get("court") ?? params.get("qr");
    if (court) Clarity.setTag("court_id", court);
    const { source, medium } = getAttribution();
    Clarity.setTag("traffic_source", source);
    Clarity.setTag("traffic_medium", medium);
    Clarity.setTag("page", window.location.pathname === "/" ? "home" : window.location.pathname);
  }, [projectId]);

  return null;
}
