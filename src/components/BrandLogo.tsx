/**
 * BotBeaver brand lockup using stakeholder-provided assets.
 */
import Image from "next/image";

const SIZES = {
  nav: {
    mark: { w: 40, h: 40, className: "h-8 w-8 sm:h-9 sm:w-9" },
    text: "text-[17px] sm:text-[18px]",
  },
  footer: {
    mark: { w: 44, h: 44, className: "h-9 w-9" },
    text: "text-base",
  },
  hero: {
    mark: { w: 56, h: 56, className: "h-12 w-12" },
    text: "text-2xl",
  },
} as const;

export type BrandLogoSize = keyof typeof SIZES;

export default function BrandLogo({
  size = "nav",
  className = "",
  showWordmark = true,
  onDark = false,
  priority = false,
}: {
  size?: BrandLogoSize;
  className?: string;
  showWordmark?: boolean;
  /** Light wordmark for teal/navy bars */
  onDark?: boolean;
  priority?: boolean;
}) {
  const s = SIZES[size];
  const beaverColor = onDark ? "text-white" : "text-[#082A52]";

  return (
    <span className={`inline-flex max-w-full items-center gap-2.5 ${className}`.trim()}>
      <Image
        src="/icon.png"
        alt={showWordmark ? "" : "BotBeaver"}
        width={s.mark.w}
        height={s.mark.h}
        priority={priority}
        className={`${s.mark.className} object-contain`}
      />
      {showWordmark ? (
        <span className={`truncate font-display tracking-tight ${s.text}`}>
          <span className="font-bold text-[#04A6BA]">Bot</span>
          <span className={`font-semibold ${beaverColor}`}>Beaver</span>
        </span>
      ) : null}
    </span>
  );
}
