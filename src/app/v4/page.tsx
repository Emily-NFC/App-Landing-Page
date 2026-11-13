import type { Metadata } from "next";
import { StickyBannerV4 } from "@/components/v4/StickyBannerV4";
import { HeroV4 } from "@/components/v4/HeroV4";
import { CheckInCard } from "@/components/v4/CheckInCard";
import { CoachesCard } from "@/components/v4/CoachesCard";
import { MoreWays } from "@/components/v4/MoreWays";
import { BadgesCardV4 } from "@/components/v4/BadgesCardV4";
import { FinalCtaV4 } from "@/components/v4/FinalCtaV4";
import { FooterLinks } from "@/components/v4/FooterLinks";
import { InfoSheetProvider } from "@/components/v4/InfoSheet";
import { FeaturesRowV4 } from "@/components/v4/FeaturesRowV4";
import { MovementsV4 } from "@/components/v4/MovementsV4";

// Draft for review: kept out of search until it replaces the home page.
export const metadata: Metadata = {
  robots: { index: false, follow: false },
};

export default function PageV4() {
  return (
    <InfoSheetProvider>
      <StickyBannerV4 />
      <main className="flex-1">
        <HeroV4 />
        <FeaturesRowV4 />
        <CoachesCard />
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
