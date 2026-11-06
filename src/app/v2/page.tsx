import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { CheckInBanner } from "@/components/CheckInBanner";
import { VideoSection } from "@/components/VideoSection";
import { FindCourt } from "@/components/FindCourt";
import { StickyBanner } from "@/components/StickyBanner";
import { HeroV2 } from "@/components/v2/HeroV2";
import { CoachesRow } from "@/components/v2/CoachesRow";
import { LanesRow } from "@/components/v2/LanesRow";
import { WorkoutsRow } from "@/components/v2/WorkoutsRow";
import { FeatureCard } from "@/components/v2/FeatureCard";
import { BadgesCard } from "@/components/v2/BadgesCard";
import { ExtrasRow } from "@/components/v2/ExtrasRow";
import { FinalCta } from "@/components/v2/FinalCta";

// Draft for review: kept out of search until it replaces the home page.
export const metadata: Metadata = {
  robots: { index: false, follow: false },
};

export default function PageV2() {
  return (
    <>
      <StickyBanner />
      <Header />
      <main className="flex-1">
        <HeroV2 />
        <CheckInBanner />
        <LanesRow />
        <CoachesRow />
        <WorkoutsRow />
        <BadgesCard />
        <FeatureCard
          id="walks"
          eyebrow="Companion Walks"
          title="Walk with a coach. Bring the dog."
          body="Earbuds in. Your coach sets the pace."
          image="/v2/walk-dog.jpg"
          imageAlt="Coach Miles walking his dog Max on a park path"
        />
        <ExtrasRow />
        <VideoSection />
        <FinalCta />
        <FindCourt />
      </main>
    </>
  );
}
