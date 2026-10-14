"use client";

import type { AnchorHTMLAttributes, ReactNode } from "react";
import { CAL_BOOKING_URL } from "@/lib/siteContent";

type Props = {
  children: ReactNode;
  className?: string;
} & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href" | "children" | "className">;

/** Opens the company Cal.com booking page in a new tab. */
export function BookDemoLink({ children, className, ...rest }: Props) {
  return (
    <a
      href={CAL_BOOKING_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      {...rest}
    >
      {children}
    </a>
  );
}
