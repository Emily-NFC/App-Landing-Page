import { AppStoreBadge, GooglePlayBadge } from "../icons/StoreBadges";

export function FinalCtaV4() {
  return (
    <section className="mx-auto max-w-md px-4 pb-6">
      <div className="rounded-2xl bg-gradient-to-br from-[#f7b733] via-[#f19e3a] to-[#e8641a] p-4 text-center text-white shadow-[0_10px_30px_-10px_rgba(241,158,58,0.7)] [text-shadow:0_1px_2px_rgba(140,60,0,0.35)]">
        <h2 className="text-[20px] font-black leading-tight tracking-tight">Ready for your first 7 minutes?</h2>
        <p className="mt-1 text-[12px] text-white/95">Download the free app. Your coach is waiting.</p>
        <div className="mx-auto mt-3 grid max-w-[300px] grid-cols-2 gap-2.5">
          <AppStoreBadge placement="final" className="ring-1 ring-white/70" />
          <GooglePlayBadge placement="final" className="ring-1 ring-white/70" />
        </div>
      </div>
    </section>
  );
}
