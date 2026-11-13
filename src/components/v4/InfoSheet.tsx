"use client";

import { createContext, useCallback, useContext, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { trackEvent } from "@/lib/analytics";
import { AppStoreBadge, GooglePlayBadge } from "../icons/StoreBadges";

export type SheetContent = {
  id: string;
  icon: string;
  kicker: string;
  title: string;
  body: string;
};

const SheetContext = createContext<(content: SheetContent) => void>(() => {});

/** Lets any card on the page open the bottom sheet. */
export function useInfoSheet() {
  return useContext(SheetContext);
}

/** Bottom sheet that slides up when a feature or movement is tapped. */
export function InfoSheetProvider({ children }: { children: React.ReactNode }) {
  const [content, setContent] = useState<SheetContent | null>(null);
  const [open, setOpen] = useState(false);
  const closeRef = useRef<HTMLButtonElement>(null);

  const show = useCallback((next: SheetContent) => {
    setContent(next);
    setOpen(true);
    trackEvent("sheet_open", { sheet: next.id });
  }, []);

  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    if (!open) return;
    closeRef.current?.focus({ preventScroll: true });
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && close();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, close]);

  return (
    <SheetContext.Provider value={show}>
      {children}
      <div
        aria-hidden={!open}
        onClick={(e) => e.target === e.currentTarget && close()}
        className={`fixed inset-0 z-50 flex items-end justify-center bg-slate-900/40 transition-opacity duration-200 ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        {content && (
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="info-sheet-title"
            className={`relative w-full max-w-md rounded-t-3xl bg-white px-5 pt-2.5 pb-[max(1.5rem,env(safe-area-inset-bottom))] shadow-2xl transition-transform duration-200 ease-out ${
              open ? "translate-y-0" : "translate-y-8"
            }`}
          >
            <div className="mx-auto h-1 w-10 rounded-full bg-slate-200" />
            <button
              ref={closeRef}
              type="button"
              onClick={close}
              aria-label="Close"
              className="absolute top-3 right-4 flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 text-slate-700"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-hidden="true">
                <path d="M6 6l12 12M18 6L6 18" />
              </svg>
            </button>
            <div className="mt-3 flex items-center gap-3 pr-10">
              <span className="relative h-14 w-14 shrink-0 rounded-full bg-[#eaf3fa]">
                <Image src={content.icon} alt="" fill sizes="56px" className="object-contain p-2.5 mix-blend-multiply" />
              </span>
              <div>
                <div className="text-[11px] font-bold uppercase tracking-[0.12em] text-brand">{content.kicker}</div>
                <h3 id="info-sheet-title" className="text-[19px] font-black leading-tight tracking-tight text-slate-900">
                  {content.title}
                </h3>
              </div>
            </div>
            <p className="mt-3 text-[14.5px] leading-snug text-slate-600">{content.body}</p>
            <div className="mt-4 grid grid-cols-2 gap-2.5">
              <AppStoreBadge placement="sheet" />
              <GooglePlayBadge placement="sheet" />
            </div>
          </div>
        )}
      </div>
    </SheetContext.Provider>
  );
}
