import Image from "next/image";
import { StoreLink } from "./StoreLink";

export function StickyBannerV4() {
  return (
    <div className="sticky top-0 z-40 h-0 px-3 pt-3">
      <div className="mx-auto flex max-w-md items-center gap-3 rounded-2xl bg-brand px-3 py-2.5 text-white shadow-[0_10px_30px_-10px_rgba(0,108,163,0.6)]">
        <a
          href="https://www.nationalfitnesscampaign.com/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="National Fitness Campaign"
          className="relative block h-10 w-10 shrink-0"
        >
          <Image src="/nfc-logo.png" alt="National Fitness Campaign" fill sizes="80px" quality={95} className="object-contain" />
        </a>
        <div className="flex-1 leading-tight">
          <div className="text-[13px] font-bold">You&apos;re at a Fitness Court®.</div>
          <div className="text-[11px] opacity-90">Get the free app and start your workout.</div>
        </div>
        <StoreLink
          placement="sticky"
          className="shrink-0 rounded-full bg-white px-3.5 py-2 text-[12px] font-bold text-brand shadow-sm transition active:scale-[0.98]"
        >
          Download
        </StoreLink>
      </div>
    </div>
  );
}
