import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { CheckInBanner } from "@/components/CheckInBanner";
import { VideoSection } from "@/components/VideoSection";
import { FindCourt } from "@/components/FindCourt";
import { StickyBanner } from "@/components/StickyBanner";
import { HeroV2 } from "@/components/v2/HeroV2";
import { FinalCta } from "@/components/v2/FinalCta";
import { WorkoutsRow } from "@/components/v3/WorkoutsRow";
import { CoachesRow } from "@/components/v3/CoachesRow";
import { DuoCards } from "@/components/v3/DuoCards";
import { BadgesCard } from "@/components/v3/BadgesCard";
import { ExtrasRow } from "@/components/v3/ExtrasRow";

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
        <WorkoutsRow />
        <CoachesRow />
        <DuoCards />
        <BadgesCard />
        <ExtrasRow />
        <VideoSection />
        <FinalCta />
        <FindCourt />
      </main>
    </>
  );
}
