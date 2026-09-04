"use client";

import { createContext } from "react";
import React from "react";

/** Kept for callers that still check motion budget. Always skip motion. */
export function useCheapMotion(): boolean {
  return true;
}

/** True when this home-room is on screen. null = normal page. */
export const RoomActiveContext = createContext<boolean | null>(null);

type MotionProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  lift?: boolean;
};

export function FadeUp({
  children,
  className,
}: MotionProps): React.ReactElement {
  return <div className={className}>{children}</div>;
}

export function Stagger({
  children,
  className,
}: MotionProps): React.ReactElement {
  return <div className={className}>{children}</div>;
}

export function MotionItem({
  children,
  className,
}: MotionProps): React.ReactElement {
  return <div className={className}>{children}</div>;
}

export function Float({
  children,
  className,
}: MotionProps): React.ReactElement {
  return <div className={className}>{children}</div>;
}

export function HoverLift({
  children,
  className,
}: MotionProps): React.ReactElement {
  return <div className={className}>{children}</div>;
}
