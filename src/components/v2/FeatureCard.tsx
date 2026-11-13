import Image from "next/image";

type Props = {
  id: string;
  eyebrow: string;
  title: string;
  body: string;
  image: string;
  imageAlt: string;
};

export function FeatureCard({ id, eyebrow, title, body, image, imageAlt }: Props) {
  return (
    <section id={id} className="mx-auto max-w-md px-4 pb-4">
      <div className="overflow-hidden rounded-2xl bg-white shadow-[0_4px_18px_-6px_rgba(0,0,0,0.08)]">
        <div className="relative aspect-[16/10] w-full bg-slate-100">
          <Image src={image} alt={imageAlt} fill sizes="(max-width: 448px) 100vw, 448px" className="object-cover" />
        </div>
        <div className="p-4">
          <div className="text-[10px] font-bold uppercase tracking-[0.14em] text-brand">{eyebrow}</div>
          <h2 className="mt-1 text-lg font-bold leading-tight tracking-tight text-slate-800">{title}</h2>
          <p className="mt-1.5 text-[13px] leading-snug text-slate-600">{body}</p>
        </div>
      </div>
    </section>
  );
}
