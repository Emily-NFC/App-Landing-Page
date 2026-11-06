import Image from "next/image";
import { AppBadge } from "./AppBadge";

export function BadgesCardV4() {
  return (
    <section id="badges" className="mx-auto max-w-md px-4 pb-3">
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#0b3a5c] to-brand p-4 text-white shadow-[0_8px_24px_-12px_rgba(0,108,163,0.5)]">
        <div className="max-w-[64%]">
          <div className="text-[10px] font-bold uppercase tracking-[0.14em] text-white/75">Badges &amp; challenges</div>
          <h2 className="mt-1 text-[20px] font-black leading-tight tracking-tight">Show up. Earn badges. Keep the streak.</h2>
          <p className="mt-1.5 text-[12px] leading-snug text-white/85">Check in, build your streak, and take on challenges.</p>
        </div>
        <div className="absolute -right-2 bottom-0 h-[88%] w-[40%]">
          <Image src="/v2/medal.png" alt="Coach Miles holding a medal" fill sizes="180px" className="object-contain object-bottom" />
        </div>
        <div className="relative mt-3 flex max-w-[66%] gap-0.5">
          <AppBadge family="fitnessCourt" big="10" small="VISITS" label="10 visits badge" className="h-14 w-14 shrink-0" />
          <AppBadge family="streak" big="5" small="WEEKS" label="5 week streak badge" className="h-14 w-14 shrink-0" />
          <AppBadge family="challenges" big="1st" small="CHALLENGE" label="First challenge badge" className="h-14 w-14 shrink-0" />
          <AppBadge family="together" big="1st" small="TOGETHER" label="First workout together badge" className="h-14 w-14 shrink-0" />
        </div>
      </div>
    </section>
  );
}
