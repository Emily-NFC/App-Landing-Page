export function AppStoreBadge({ className = "" }: { className?: string }) {
  return (
    <a
      href="https://apps.apple.com/us/app/fitness-court/id563421203"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Download on the App Store"
      className={`flex items-center justify-center gap-2 rounded-xl bg-black px-3 py-2.5 text-white shadow-sm transition active:scale-[0.98] ${className}`}
    >
      <svg viewBox="0 0 24 24" className="h-6 w-6 shrink-0" fill="currentColor" aria-hidden="true">
        <path d="M16.365 1.43c0 1.14-.45 2.23-1.19 3.02-.79.85-2.07 1.5-3.13 1.42-.13-1.1.46-2.27 1.18-3.04.81-.86 2.18-1.5 3.14-1.4zM20.5 17.06c-.55 1.26-.82 1.82-1.52 2.93-.99 1.55-2.38 3.48-4.1 3.5-1.53.02-1.92-.99-4-.98-2.07.01-2.5 1-4.03.98-1.72-.02-3.04-1.77-4.03-3.32C.04 15.55-.25 9.81 2.94 7.6c1.13-.78 2.4-1.2 3.71-1.2 1.55 0 2.52.85 3.81.85 1.25 0 2.01-.85 3.81-.85 1.16 0 2.41.63 3.3 1.72-2.9 1.59-2.43 5.72.93 6.95z" />
      </svg>
      <span className="text-left leading-none">
        <span className="block text-[8px] uppercase tracking-wide opacity-90">Download on the</span>
        <span className="mt-0.5 block text-[15px] font-semibold leading-none">App Store</span>
      </span>
    </a>
  );
}

export function GooglePlayBadge({ className = "" }: { className?: string }) {
  return (
    <a
      href="https://play.google.com/store/apps/details?id=com.nationalfitnesscampaign.FitnessCourtLive"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Get it on Google Play"
      className={`flex items-center justify-center gap-2 rounded-xl bg-black px-3 py-2.5 text-white shadow-sm transition active:scale-[0.98] ${className}`}
    >
      <svg viewBox="0 0 24 24" className="h-6 w-6 shrink-0" aria-hidden="true">
        <path d="M3.6 1.6C3.2 1.9 3 2.4 3 3v18c0 .6.2 1.1.6 1.4L13.7 12 3.6 1.6z" fill="#00d7fe" />
        <path d="M17.4 8.2L14.5 10.4 4.2 1.1c.2-.1.5-.1.7-.1.3 0 .6.1.9.3l11.6 6.9z" fill="#00f076" />
        <path d="M21.5 10.6c.7.4 1 1 1 1.4 0 .5-.3 1-1 1.4l-4.1 2.4-2.9-2.8 2.9-2.8 4.1 2.4z" fill="#ffce00" />
        <path d="M17.4 15.8L5.8 22.7c-.3.2-.6.3-.9.3-.3 0-.5 0-.7-.1l10.3-9.3 2.9 2.2z" fill="#ff3a44" />
      </svg>
      <span className="text-left leading-none">
        <span className="block text-[8px] uppercase tracking-wide opacity-90">Get it on</span>
        <span className="mt-0.5 block text-[15px] font-semibold leading-none">Google Play</span>
      </span>
    </a>
  );
}
