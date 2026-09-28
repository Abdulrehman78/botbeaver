/**
 * Temporary brand lockup: mark + BotBeaver wordmark.
 * Swap assets when the client delivers final logos.
 */
import BrandMark from "@/components/BrandMark";

const SIZES = {
  nav: { mark: "h-8 w-8 sm:h-9 sm:w-9", text: "text-[17px] sm:text-[18px]" },
  footer: { mark: "h-9 w-9", text: "text-base" },
  hero: { mark: "h-12 w-12", text: "text-2xl" },
} as const;

export type BrandLogoSize = keyof typeof SIZES;

export default function BrandLogo({
  size = "nav",
  className = "",
  wordmarkClassName = "",
  showWordmark = true,
  onDark = false,
}: {
  size?: BrandLogoSize;
  className?: string;
  wordmarkClassName?: string;
  showWordmark?: boolean;
  /** Invert mark for teal/dark surfaces */
  onDark?: boolean;
}) {
  const s = SIZES[size];
  return (
    <span className={`inline-flex max-w-full items-center gap-2.5 ${className}`.trim()}>
      <BrandMark className={`${s.mark} shrink-0`} onDark={onDark} />
      {showWordmark ? (
        <span
          className={`truncate font-display tracking-tight ${s.text} ${wordmarkClassName}`.trim()}
        >
          <span className="font-bold">Bot</span>
          <span className="font-medium">Beaver</span>
        </span>
      ) : null}
    </span>
  );
}
