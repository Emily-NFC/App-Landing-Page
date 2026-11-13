"use client";

import { useEffect } from "react";
import Clarity from "@microsoft/clarity";

export function ClarityInit({ projectId }: { projectId: string }) {
  useEffect(() => {
    Clarity.init(projectId);

    // Tag the session with the QR code's court so recordings can be filtered per court.
    const court = new URLSearchParams(window.location.search).get("court");
    if (court) Clarity.setTag("court_id", court);
    Clarity.setTag("page", window.location.pathname === "/" ? "home" : window.location.pathname);
  }, [projectId]);

  return null;
}
