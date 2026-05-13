import Image from "next/image";

type IconProps = { className?: string };

const sizeClass = "h-10 w-10";

function makeIcon(src: string, alt: string) {
  function Icon({ className = sizeClass }: IconProps) {
    return (
      <span className={`relative inline-block ${className}`}>
        <Image src={src} alt={alt} fill sizes="160px" quality={95} className="object-contain" />
      </span>
    );
  }
  Icon.displayName = `Icon(${alt})`;
  return Icon;
}

export const CoreIcon = makeIcon("/core.png", "Core");
export const SquatIcon = makeIcon("/squat.png", "Squat");
export const PushIcon = makeIcon("/push.png", "Push");
export const LungeIcon = makeIcon("/lunge.png", "Lunge");
export const PullIcon = makeIcon("/pull.png", "Pull");
export const AgilityIcon = makeIcon("/agility.png", "Agility");
export const BendIcon = makeIcon("/bend.png", "Bend");

export const movements = [
  { name: "CORE", Icon: CoreIcon },
  { name: "SQUAT", Icon: SquatIcon },
  { name: "PUSH", Icon: PushIcon },
  { name: "LUNGE", Icon: LungeIcon },
  { name: "PULL", Icon: PullIcon },
  { name: "AGILITY", Icon: AgilityIcon },
  { name: "BEND", Icon: BendIcon },
] as const;
