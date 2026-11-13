import Image from "next/image";

const coaches = [
  { id: "miles", name: "Miles", role: "Strength & intervals", line: "Clear calls, honest pace." },
  { id: "avery", name: "Avery", role: "Outdoor fitness", line: "Start where you are." },
  { id: "walt", name: "Walt", role: "Strength & balance", line: "Never too late to get strong." },
  { id: "mae", name: "Mae", role: "Mobility", line: "Strong for the things you love." },
];

export function CoachesRow() {
  return (
    <section id="coaches" className="mx-auto max-w-md px-4 pb-4">
      <div className="rounded-2xl bg-white p-4 shadow-[0_4px_18px_-6px_rgba(0,0,0,0.08)]">
        <div className="text-[10px] font-bold uppercase tracking-[0.14em] text-brand">Choose your coach</div>
        <h2 className="mt-1 text-lg font-bold leading-tight tracking-tight text-slate-800">
          Four coaches. One in your ear.
        </h2>
        <p className="mt-1.5 text-[13px] leading-snug text-slate-600">
          They call every move, keep your pace, and cheer you on.
        </p>
        <div className="mt-3 grid grid-cols-4 gap-2">
          {coaches.map(({ id, name, role, line }) => (
            <div key={id} className="flex flex-col items-center text-center">
              <span className="relative block h-16 w-16 overflow-hidden rounded-full ring-2 ring-brand/15">
                <Image src={`/v2/coach-${id}.jpg`} alt={`Coach ${name}`} fill sizes="64px" className="object-cover" />
              </span>
              <div className="mt-1.5 text-[13px] font-bold leading-tight text-slate-800">{name}</div>
              <div className="text-[10px] font-semibold leading-tight text-brand">{role}</div>
              <p className="mt-0.5 text-[10px] leading-snug text-slate-500">{line}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
