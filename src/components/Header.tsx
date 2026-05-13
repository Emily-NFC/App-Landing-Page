import Image from "next/image";

export function Header() {
  return (
    <header className="w-full">
      <div className="mx-auto flex max-w-md items-center justify-between px-4 py-3">
        <a
          href="https://www.nationalfitnesscampaign.com/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="National Fitness Campaign"
          className="relative block h-11 w-11"
        >
          <Image
            src="/nfc-logo.png"
            alt="National Fitness Campaign"
            fill
            sizes="200px"
            quality={95}
            priority
            className="object-contain"
          />
        </a>
        <button
          type="button"
          aria-label="Open menu"
          className="flex h-10 w-10 items-center justify-center rounded-md text-slate-700 hover:bg-slate-100"
        >
          <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <line x1="4" y1="7" x2="20" y2="7" />
            <line x1="4" y1="12" x2="20" y2="12" />
            <line x1="4" y1="17" x2="20" y2="17" />
          </svg>
        </button>
      </div>
    </header>
  );
}
