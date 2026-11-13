import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { CheckInBanner } from "@/components/CheckInBanner";
import { FeaturesRow } from "@/components/FeaturesRow";
import { MovementsRow } from "@/components/MovementsRow";
import { VideoSection } from "@/components/VideoSection";
import { FindCourt } from "@/components/FindCourt";
import { StickyBanner } from "@/components/StickyBanner";

// Previous home page, kept as a fallback now that V4 is live at /.
export const metadata: Metadata = {
  robots: { index: false, follow: false },
};

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
