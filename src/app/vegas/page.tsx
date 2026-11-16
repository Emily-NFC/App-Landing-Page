import type { Metadata } from "next";
import { StickyBannerV4 } from "@/components/v4/StickyBannerV4";
import { HeroVegas } from "@/components/vegas/HeroVegas";
import { TrailLineCard } from "@/components/vegas/TrailLineCard";
import { CheckInCard } from "@/components/v4/CheckInCard";
import { CoachesCard } from "@/components/v4/CoachesCard";
import { MoreWays } from "@/components/v4/MoreWays";
import { BadgesCardV4 } from "@/components/v4/BadgesCardV4";
import { FinalCtaV4 } from "@/components/v4/FinalCtaV4";
import { FooterLinks } from "@/components/v4/FooterLinks";
import { InfoSheetProvider } from "@/components/v4/InfoSheet";
import { FeaturesRowV4 } from "@/components/v4/FeaturesRowV4";
import { MovementsV4 } from "@/components/v4/MovementsV4";

export const metadata: Metadata = {
  title: "Las Vegas Fitness Courts® & Trail Lines",
  description: "Explore the Las Vegas map or download the free Fitness Court® App.",
};

// The national landing page for Las Vegas QR codes: the map up top, then the app.
export default function VegasPage() {
  return (
    <InfoSheetProvider>
      <StickyBannerV4 title="You’re in Las Vegas." subtitle="Get the free app or explore the Trail Line map." />
      <main className="flex-1">
        <HeroVegas />
        <FeaturesRowV4 />
        <CoachesCard />
        <TrailLineCard />
        <MovementsV4 />
        <CheckInCard />
        <MoreWays />
        <BadgesCardV4 />
        <FooterLinks />
        <FinalCtaV4 />
      </main>
    </InfoSheetProvider>
  );
}
