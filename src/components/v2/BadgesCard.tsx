import Image from "next/image";

const badges = [
  { src: "/v2/badge-five-week-streak.png", alt: "5 week streak badge" },
  { src: "/v2/badge-early-bird.png", alt: "Early Bird badge" },
  { src: "/v2/badge-weekend-warrior.png", alt: "Weekend Warrior badge" },
  { src: "/v2/badge-fitness-court-gold.png", alt: "Fitness Court Gold badge" },
];

export function BadgesCard() {
  return (
    <section id="badges" className="mx-auto max-w-md px-4 pb-4">
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#0b3a5c] to-brand p-4 text-white shadow-[0_8px_24px_-12px_rgba(0,108,163,0.5)]">
        <div className="max-w-[62%]">
          <div className="text-[10px] font-bold uppercase tracking-[0.14em] text-white/75">Badges &amp; challenges</div>
          <h2 className="mt-1 text-lg font-bold leading-tight tracking-tight">Check in. Earn badges. Keep the streak.</h2>
          <p className="mt-1.5 text-[12px] leading-snug text-white/85">
            Every visit counts automatically. Take the Fitness Challenge to see how you stack up.
          </p>
        </div>
        <div className="absolute -right-2 bottom-0 h-[92%] w-[42%]">
          <Image src="/v2/medal.png" alt="Coach Miles holding a medal" fill sizes="180px" className="object-contain object-bottom" />
        </div>
        <div className="relative mt-3 flex gap-2">
          {badges.map(({ src, alt }) => (
            <span key={src} className="relative block h-11 w-11">
              <Image src={src} alt={alt} fill sizes="44px" className="object-contain" />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
