import { movements } from "./icons/ExerciseIcons";

export function MovementsRow() {
  return (
    <section className="mx-auto max-w-md px-4 pb-4">
      <div className="rounded-2xl bg-white p-4 shadow-[0_4px_18px_-6px_rgba(0,0,0,0.08)]">
        <h3 className="text-center text-base font-bold tracking-tight">
          7 Movements. 7 Minutes.
        </h3>
        <div className="mt-3 grid grid-cols-7 gap-1">
          {movements.map(({ name, Icon }) => (
            <div key={name} className="flex flex-col items-center gap-1.5">
              <Icon className="h-8 w-8 text-brand" />
              <span className="text-[9px] font-semibold tracking-wide text-slate-600">{name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
