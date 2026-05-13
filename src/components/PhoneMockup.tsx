import { Logo } from "./icons/Logo";

export function PhoneMockup({ className = "" }: { className?: string }) {
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const filled = [true, true, true, false, false, false, false];

  return (
    <div className={`relative ${className}`}>
      <div className="relative h-[340px] w-[170px] rounded-[28px] bg-black p-[5px] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.45)] sm:h-[420px] sm:w-[210px]">
        <div className="relative h-full w-full overflow-hidden rounded-[24px] bg-white">
          <div className="absolute left-1/2 top-1 z-20 h-3 w-14 -translate-x-1/2 rounded-full bg-black" />

          <div className="flex h-full flex-col">
            <div className="flex items-center justify-between px-2.5 pt-5 pb-1.5">
              <Logo className="h-3.5 w-3.5" />
              <span className="text-[9px] font-semibold">The Fitness Court®</span>
              <div className="flex flex-col gap-[2px]">
                <span className="block h-[1.5px] w-2.5 bg-black" />
                <span className="block h-[1.5px] w-2.5 bg-black" />
                <span className="block h-[1.5px] w-2.5 bg-black" />
              </div>
            </div>

            <div className="px-2.5">
              <div className="rounded-2xl bg-[#fff8ef] p-2.5 text-center">
                <div className="mx-auto mb-0.5 text-lg leading-none">🔥</div>
                <div className="text-lg font-bold leading-none">3</div>
                <div className="text-[8px] font-medium uppercase tracking-wide text-gray-500">
                  Week Streak
                </div>
                <div className="mt-1.5 flex justify-between px-0.5">
                  {days.map((d, i) => (
                    <div key={d} className="flex flex-col items-center gap-0.5">
                      <span
                        className={`h-3 w-3 rounded-full ${filled[i] ? "bg-orange-400" : "bg-gray-200"}`}
                      />
                      <span className="text-[6px] font-medium text-gray-500">{d}</span>
                    </div>
                  ))}
                </div>
                <button className="mt-2 w-full rounded-full bg-brand py-1 text-[9px] font-semibold text-white">
                  Check In
                </button>
              </div>
            </div>

            <div className="mt-2 px-2.5">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-semibold">Workouts</span>
                <span className="text-[8px] font-medium text-brand">See all</span>
              </div>
              <div className="mt-1 flex items-center gap-1.5 rounded-xl border border-gray-100 bg-white p-1.5 shadow-sm">
                <div className="h-7 w-7 rounded-lg bg-gradient-to-br from-blue-100 to-blue-200" />
                <div className="flex-1">
                  <div className="text-[9px] font-semibold">Full Body</div>
                  <div className="text-[7px] text-gray-500">7 Movements · 7 minutes</div>
                </div>
              </div>
            </div>

            <div className="mt-1.5 px-2.5">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-semibold">Trails</span>
                <span className="text-[8px] font-medium text-brand">See all</span>
              </div>
              <div className="mt-1 flex items-center gap-1.5 rounded-xl border border-gray-100 bg-white p-1.5 shadow-sm">
                <div className="h-7 w-7 rounded-lg bg-gradient-to-br from-green-100 to-green-200" />
                <div className="flex-1">
                  <div className="text-[9px] font-semibold">Marina Green</div>
                  <div className="text-[7px] text-gray-500">1.2 mi · Easy</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
