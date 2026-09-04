"use client";

import React from "react";

/** True once the site is ready to show copy. Always true — no preloader gate. */
export function useWelcomeReady(): boolean {
  return true;
}

export type GiggleTone =
  | "giggle"
  | "rise"
  | "wave"
  | "blur"
  | "slide"
  | "pop"
  | "glow";

type GiggleTextProps = {
  text: string;
  mode?: "chars" | "words";
  tone?: GiggleTone;
  className?: string;
  style?: React.CSSProperties;
  as?: "h1" | "h2" | "h3" | "p" | "span";
  startDelay?: number;
  active?: boolean;
};

/** Static heading/body copy. Letter-play and scroll-in motion are disabled. */
export function GiggleText({
  text,
  className,
  style,
  as: Tag = "span",
}: GiggleTextProps): React.ReactElement {
  const lines = text.split("\n");
  return (
    <Tag className={className} style={style}>
      {lines.map((line, i) => (
        <React.Fragment key={i}>
          {i > 0 ? <br /> : null}
          {line}
        </React.Fragment>
      ))}
    </Tag>
  );
}
