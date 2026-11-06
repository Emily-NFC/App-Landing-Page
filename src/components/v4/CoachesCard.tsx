import Image from "next/image";

const coaches = [
  { id: "miles", name: "Miles", role: "Strength & cardio" },
  { id: "avery", name: "Avery", role: "Outdoor fitness" },
  { id: "walt", name: "Walt", role: "Strength & balance" },
  { id: "mae", name: "Mae", role: "Mobility & movement" },
];

export function CoachesCard() {
  return (
    <section id="coaches" className="mx-auto max-w-md px-4 pb-3">
      <div className="rounded-2xl bg-white p-4 shadow-[0_4px_18px_-6px_rgba(0,0,0,0.08)]">
        <div className="text-[10px] font-bold uppercase tracking-[0.14em] text-brand">Meet your coaches</div>
        <h2 className="mt-1 text-[22px] font-black leading-tight tracking-tight text-slate-900">
          Pick your coach. Let&apos;s go.
        </h2>
        <div className="mt-3 grid grid-cols-4 gap-2">
          {coaches.map(({ id, name, role }) => (
            <div key={id} className="flex flex-col items-center text-center">
              <span className="relative block h-16 w-16 overflow-hidden rounded-full ring-2 ring-brand/15">
                <Image src={`/v2/coach-${id}.jpg`} alt={`Coach ${name}`} fill sizes="64px" className="object-cover" />
              </span>
              <div className="mt-1.5 text-[14px] font-bold leading-tight text-slate-900">{name}</div>
              <div className="text-[10px] leading-tight text-slate-500">{role}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
