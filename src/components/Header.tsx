import { Logo } from "./icons/Logo";

export function Header() {
  return (
    <header className="sticky top-0 z-30 border-b border-gray-100 bg-white/90 backdrop-blur">
      <div className="mx-auto flex h-14 max-w-md items-center justify-between px-4">
        <a href="/" aria-label="The Fitness Court home" className="flex items-center">
          <Logo />
        </a>
        <h1 className="text-base font-semibold tracking-tight">The Fitness Court®</h1>
        <button
          type="button"
          aria-label="Open menu"
          className="flex h-9 w-9 items-center justify-center rounded-md text-gray-700 hover:bg-gray-100"
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <line x1="4" y1="7" x2="20" y2="7" />
            <line x1="4" y1="12" x2="20" y2="12" />
            <line x1="4" y1="17" x2="20" y2="17" />
          </svg>
        </button>
      </div>
    </header>
  );
}
