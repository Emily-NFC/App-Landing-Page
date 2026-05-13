import Image from "next/image";

const items = [
  {
    src: "/check-in.png",
    alt: "Check in",
    title: "Check In",
    body: "Track your visits and build healthy habits.",
  },
  {
    src: "/Exercise.png",
    alt: "Guided workouts",
    title: "Guided Workouts",
    body: "7-minute workouts for every level.",
  },
  {
    src: "/health.png",
    alt: "Track your health",
    title: "Track Your Health",
    body: "See your steps, heart rate, and progress.",
  },
];

export function FeaturesRow() {
  return (
    <section id="features" className="mx-auto max-w-md px-4 pb-4">
      <div className="rounded-2xl bg-white p-4 shadow-[0_4px_18px_-6px_rgba(0,0,0,0.08)]">
        <div className="grid grid-cols-3 gap-3 text-center">
          {items.map(({ src, alt, title, body }) => (
            <div key={title} className="flex flex-col items-center gap-2">
              <span className="relative inline-block h-8 w-8">
                <Image src={src} alt={alt} fill sizes="32px" className="object-contain" />
              </span>
              <div className="text-[13px] font-semibold leading-tight">{title}</div>
              <p className="text-[11px] leading-snug text-slate-500">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
