import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { StickyBannerV4 } from "@/components/v4/StickyBannerV4";
import { HeroV4 } from "@/components/v4/HeroV4";
import { CheckInCard } from "@/components/v4/CheckInCard";
import { CoachesCard } from "@/components/v4/CoachesCard";
import { MoreWays } from "@/components/v4/MoreWays";
import { BadgesCardV4 } from "@/components/v4/BadgesCardV4";
import { FinalCtaV4 } from "@/components/v4/FinalCtaV4";
import { FooterLinks } from "@/components/v4/FooterLinks";

// Draft for review: kept out of search until it replaces the home page.
export const metadata: Metadata = {
  robots: { index: false, follow: false },
};

export default function PageV4() {
  return (
    <>
      <StickyBannerV4 />
      <Header />
      <main className="flex-1">
        <HeroV4 />
        <CoachesCard />
        <CheckInCard />
        <MoreWays />
        <BadgesCardV4 />
        <FinalCtaV4 />
        <FooterLinks />
      </main>
    </>
  );
}
