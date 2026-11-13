import Image from "next/image";

const cards = [
  {
    src: "/v2/walk-dog.jpg",
    alt: "Coach Miles walking his dog Max",
    title: "Walk the dog",
    body: "Coached walks for you and your pup.",
  },
  {
    src: "/v2/explore-trail.jpg",
    alt: "A Trail Line route through a park",
    title: "Find a court",
    body: "Courts and trails near you.",
  },
];

export function DuoCards() {
  return (
    <section className="mx-auto max-w-md px-4 pb-4">
      <div className="grid grid-cols-2 gap-3">
        {cards.map(({ src, alt, title, body }) => (
          <div key={title} className="overflow-hidden rounded-2xl bg-white shadow-[0_4px_18px_-6px_rgba(0,0,0,0.08)]">
            <div className="relative aspect-[4/3] w-full bg-slate-100">
              <Image src={src} alt={alt} fill sizes="(max-width: 448px) 50vw, 220px" className="object-cover" />
            </div>
            <div className="p-3">
              <h3 className="text-[15px] font-bold leading-tight text-slate-800">{title}</h3>
              <p className="mt-0.5 text-[11px] leading-snug text-slate-500">{body}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
