import { AppStoreBadge, GooglePlayBadge } from "../icons/StoreBadges";

export function FinalCta() {
  return (
    <section className="mx-auto max-w-md px-4 pb-4">
      <div className="rounded-2xl bg-brand p-4 text-center text-white shadow-[0_10px_30px_-10px_rgba(0,108,163,0.6)]">
        <h2 className="text-lg font-bold leading-tight tracking-tight">Your first workout is 7 minutes away.</h2>
        <p className="mt-1 text-[12px] text-white/85">Download the free Fitness Court® App.</p>
        <div className="mt-3 grid grid-cols-2 gap-2.5 rounded-xl bg-white p-2.5">
          <AppStoreBadge placement="final" />
          <GooglePlayBadge placement="final" />
        </div>
      </div>
    </section>
  );
}
