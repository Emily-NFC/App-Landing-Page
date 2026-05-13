import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { FeaturesRow } from "@/components/FeaturesRow";
import { MovementsRow } from "@/components/MovementsRow";
import { VideoSection } from "@/components/VideoSection";
import { FindCourt } from "@/components/FindCourt";
import { StickyBanner } from "@/components/StickyBanner";

export default function Page() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <FeaturesRow />
        <MovementsRow />
        <VideoSection />
        <FindCourt />
      </main>
      <StickyBanner />
    </>
  );
}
