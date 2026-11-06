import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { CheckInBanner } from "@/components/CheckInBanner";
import { FindCourt } from "@/components/FindCourt";
import { StickyBanner } from "@/components/StickyBanner";
import { HeroV2 } from "@/components/v2/HeroV2";
import { CoachesRow } from "@/components/v3/CoachesRow";
import { LanesRow } from "@/components/v3/LanesRow";
import { BadgesCard } from "@/components/v3/BadgesCard";
import { FinalCta } from "@/components/v2/FinalCta";

// Draft for review: kept out of search until it replaces the home page.
export const metadata: Metadata = {
  robots: { index: false, follow: false },
};

export default function PageV3() {
  return (
    <>
      <StickyBanner />
      <Header />
      <main className="flex-1">
        <HeroV2 />
        <CheckInBanner />
        <LanesRow />
        <CoachesRow />
        <BadgesCard />
        <FinalCta />
        <FindCourt />
      </main>
    </>
  );
}
