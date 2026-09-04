"use client";

import type { ReactElement, ReactNode } from "react";

type ZoomBackdropProps = {
  src?: string;
  position?: string;
  fit?: "cover" | "contain";
  zoom?: boolean;
  tint?: string;
  veil?: string;
  overlay?: "hero" | "room";
  quiet?: boolean;
  delaySec?: number;
  className?: string;
  priority?: boolean;
  children?: ReactNode;
};

/** Static backdrop slot — Ken Burns and video rooms are removed. */
export default function ZoomBackdrop({
  className = "",
  children,
}: ZoomBackdropProps): ReactElement {
  return (
    <div
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
      aria-hidden
    >
      {children}
    </div>
  );
}
