import { Hero } from "@/components/Hero";
import { CheckInBanner } from "@/components/CheckInBanner";
import { FeaturesRow } from "@/components/FeaturesRow";
import { MovementsRow } from "@/components/MovementsRow";
import { VideoSection } from "@/components/VideoSection";
import { FindCourt } from "@/components/FindCourt";
import { StickyBanner } from "@/components/StickyBanner";

export default function Page() {
  return (
    <>
      <main className="flex-1 pt-20">
        <Hero />
        <CheckInBanner />
        <FeaturesRow />
        <MovementsRow />
        <VideoSection />
        <FindCourt />
      </main>
      <StickyBanner />
    </>
  );
}
