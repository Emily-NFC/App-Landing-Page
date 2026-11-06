import { AppStoreBadge, GooglePlayBadge } from "../icons/StoreBadges";

export function FinalCtaV4() {
  return (
    <section className="mx-auto max-w-md px-4 pb-3">
      <div className="rounded-2xl bg-brand p-4 text-center text-white shadow-[0_10px_30px_-10px_rgba(0,108,163,0.6)]">
        <h2 className="text-[20px] font-black leading-tight tracking-tight">Ready for your first 7 minutes?</h2>
        <p className="mt-1 text-[12px] text-white/85">Your coach is waiting.</p>
        <div className="mx-auto mt-3 grid max-w-[300px] grid-cols-2 gap-2.5">
          <AppStoreBadge placement="final" className="ring-1 ring-white/70" />
          <GooglePlayBadge placement="final" className="ring-1 ring-white/70" />
        </div>
      </div>
    </section>
  );
}
