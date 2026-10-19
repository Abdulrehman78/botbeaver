"use client";

import type { AnchorHTMLAttributes, ReactNode } from "react";
import { CAL_BOOKING_URL } from "@/lib/siteContent";
import { trackBookDemo } from "@/lib/analytics";

type Props = {
  children: ReactNode;
  className?: string;
  source?: string;
} & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href" | "children" | "className">;

/** Opens the company Cal.com booking page in a new tab and fires GA4 lead events. */
export function BookDemoLink({
  children,
  className,
  source = "book_demo",
  onClick,
  ...rest
}: Props) {
  return (
    <a
      href={CAL_BOOKING_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      onClick={(e) => {
        trackBookDemo(source);
        onClick?.(e);
      }}
      {...rest}
    >
      {children}
    </a>
  );
}
