import type { ReactElement, ReactNode } from "react";
import { GiggleText } from "@/components/ui/GiggleText";
import BannerBackdrop from "@/components/ui/BannerBackdrop";
import FlagStripe from "@/components/ui/FlagStripe";
import { type PageBannerKey } from "@/lib/brand";

export type PageBannerProps = {
  id?: string;
  banner?: PageBannerKey;
  image?: string;
  video?: string;
  imagePosition?: string;
  eyebrow: string;
  title: ReactNode;
  titleMuted?: ReactNode;
  description?: string;
  center?: boolean;
  minHeight?: string;
  children?: ReactNode;
  aside?: ReactNode;
};

function TitleLine({ children }: { children: ReactNode }): ReactElement {
  if (typeof children === "string") {
    return <GiggleText as="span" text={children} />;
  }
  return <>{children}</>;
}

function MutedLine({ children }: { children: ReactNode }): ReactElement {
  if (typeof children === "string") {
    return (
      <GiggleText as="span" text={children} className="banner-heading-muted" />
    );
  }
  return <span className="banner-heading-muted">{children}</span>;
}

export default function PageBanner({
  id,
  eyebrow,
  title,
  titleMuted,
  description,
  center = false,
  minHeight = "",
  children,
  aside,
}: PageBannerProps): ReactElement {
  const split = Boolean(aside) && !center;

  return (
    <section
      id={id}
      className={`relative overflow-hidden bg-[#0B3D38] site-offset pb-12 md:pb-16 ${minHeight}`}
    >
      <BannerBackdrop />
      <div className="absolute inset-x-0 bottom-0">
        <FlagStripe />
      </div>

      <div
        className={`site-wrap relative z-10 ${
          split ? "grid min-w-0 items-start gap-10 lg:grid-cols-2 lg:items-center lg:gap-12" : ""
        }`}
      >
        <div className={center || !split ? "max-w-3xl" : "max-w-xl"}>
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#C45E28]">
            <GiggleText text={eyebrow} />
          </span>
          <h1 className="banner-heading mt-3 text-3xl sm:text-4xl md:text-5xl">
            <TitleLine>{title}</TitleLine>
            {titleMuted ? (
              <>
                <br />
                <MutedLine>{titleMuted}</MutedLine>
              </>
            ) : null}
          </h1>
          {description ? (
            <GiggleText
              as="p"
              text={description}
              className={`room-body mt-5 max-w-xl text-base leading-relaxed sm:text-lg`}
            />
          ) : null}
          {children ? <div className="mt-8">{children}</div> : null}
        </div>

        {aside ? <div className="relative w-full">{aside}</div> : null}
      </div>
    </section>
  );
}

export function PageBannerChecks({
  items,
  className = "",
}: {
  items: string[];
  className?: string;
}): ReactElement {
  return (
    <ul className={`flex flex-col gap-2.5 ${className}`}>
      {items.map((item) => (
        <li key={item} className="flex items-center gap-2.5 text-sm room-muted">
          <span className="text-[#C45E28]">★</span>
          {item}
        </li>
      ))}
    </ul>
  );
}

export function PageBannerPanel({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}): ReactElement {
  return (
    <div className={`page-banner-panel overflow-hidden border border-white/20 bg-white ${className}`}>
      {children}
    </div>
  );
}
