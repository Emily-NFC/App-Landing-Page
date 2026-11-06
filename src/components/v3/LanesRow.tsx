import Image from "next/image";

// Same two lanes, words and art as the app's Home screen.
const lanes = [
  {
    title: "Strength",
    line: "Train at the world's best outdoor gym.",
    src: "/v2/lane-miles-strength.jpg",
    alt: "Coach Miles training on the Fitness Court®",
  },
  {
    title: "Cardio",
    line: "Walk or run, right from your door.",
    src: "/v2/lane-avery-cardio.jpg",
    alt: "Coach Avery running on a park trail",
  },
];

export function LanesRow() {
  return (
    <section id="workouts" className="mx-auto max-w-md px-4 pb-4">
      <h2 className="text-[26px] font-black leading-tight tracking-tight text-slate-900">
        Pick a lane. <span className="text-brand">Press play.</span>
      </h2>
      <p className="mt-1 text-[13px] font-medium text-slate-600">Your coach talks you through every move. 7 to 30 minutes.</p>
      <div className="mt-3 grid grid-cols-2 gap-3">
        {lanes.map(({ title, line, src, alt }) => (
          <a
            key={title}
            href="#get-app"
            aria-label={`${title}: get the app to start`}
            className="relative block aspect-[2/3] overflow-hidden rounded-3xl bg-slate-100 shadow-[0_10px_28px_-12px_rgba(0,0,0,0.35)]"
          >
            <Image src={src} alt={alt} fill sizes="(max-width: 448px) 50vw, 220px" className="object-cover" />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-3 pt-16">
              <div className="text-[24px] font-black leading-none text-white">{title}</div>
              <p className="mt-1 text-[11px] font-medium leading-snug text-white/90">{line}</p>
              <span className="mt-2 inline-flex items-center gap-1 rounded-full bg-white px-3 py-1 text-[11px] font-bold text-brand">
                <svg viewBox="0 0 24 24" className="h-3 w-3" fill="currentColor" aria-hidden="true">
                  <path d="M8 5v14l11-7z" />
                </svg>
                Start
              </span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
