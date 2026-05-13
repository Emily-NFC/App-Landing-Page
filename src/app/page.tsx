import { Header } from "@/components/Header";
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
      <StickyBanner />
      <Header />
      <main className="flex-1">
        <Hero />
        <CheckInBanner />
        <FeaturesRow />
        <MovementsRow />
        <VideoSection />
        <FindCourt />
      </main>
    </>
  );
}
