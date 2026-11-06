import Image from "next/image";

const workouts = [
  { src: "/v2/w-energy.jpg", title: "Energy Boost", tag: "Strength" },
  { src: "/v2/w-blocks.jpg", title: "Building Blocks", tag: "Beginner" },
  { src: "/v2/w-aging.jpg", title: "Aging Well", tag: "Balance" },
  { src: "/v2/w-challenge.jpg", title: "Fitness Challenge", tag: "Test yourself" },
];

const lengths = ["7", "14", "20", "30"];

export function WorkoutsRow() {
  return (
    <section className="mx-auto max-w-md pb-4">
      <div className="px-4">
        <div className="text-[10px] font-bold uppercase tracking-[0.14em] text-brand">More to try</div>
        <h2 className="mt-1 text-lg font-bold leading-tight tracking-tight text-slate-800">
          7, 14, 20 or 30 minutes.
        </h2>
        <div className="mt-2 flex gap-1.5">
          {lengths.map((m) => (
            <span key={m} className="rounded-full bg-brand/10 px-2.5 py-1 text-[11px] font-bold text-brand">
              {m} min
            </span>
          ))}
        </div>
      </div>
      <div className="mt-3 flex snap-x snap-mandatory gap-3 overflow-x-auto px-4 pb-1 [scrollbar-width:none]">
        {workouts.map(({ src, title, tag }) => (
          <div
            key={title}
            className="relative aspect-[4/5] w-[42%] shrink-0 snap-start overflow-hidden rounded-2xl bg-slate-100 shadow-[0_4px_18px_-6px_rgba(0,0,0,0.15)]"
          >
            <Image src={src} alt={title} fill sizes="200px" className="object-cover" />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 to-transparent p-2.5 pt-8">
              <div className="text-[10px] font-semibold uppercase tracking-wide text-white/80">{tag}</div>
              <div className="text-[14px] font-bold leading-tight text-white">{title}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
