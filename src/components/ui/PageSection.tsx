"use client";

import Link from "next/link";
import React from "react";
import { FadeUp } from "@/components/ui/Motion";
import { GiggleText } from "@/components/ui/GiggleText";

type SectionProps = {
  children: React.ReactNode;
  id?: string;
  className?: string;
  first?: boolean;
  border?: boolean;
  alt?: boolean;
};

export function Section({
  children,
  id,
  className = "",
  first = false,
  border = false,
  alt = false,
}: SectionProps): React.ReactElement {
  return (
    <section
      id={id}
      className={`relative ${first ? "site-offset" : "site-section"} ${
        border ? "border-t border-line" : ""
      } ${alt ? "bg-bg-alt" : "bg-bg"} ${className}`}
    >
      <div className="site-wrap relative">{children}</div>
    </section>
  );
}

type SectionHeaderProps = {
  eyebrow: string;
  title: React.ReactNode;
  description?: string;
  center?: boolean;
  accent?: "accent" | "violet" | "cyan" | "amber" | "indigo" | "orange";
  compact?: boolean;
};

export function SectionHeader({
  eyebrow,
  title,
  description,
  center = false,
  compact = false,
}: SectionHeaderProps): React.ReactElement {
  const titleText = typeof title === "string" ? title : null;
  return (
    <FadeUp
      className={`max-w-3xl border-l-4 border-[#C45E28] pl-5 ${compact ? "mb-6" : "mb-12"} ${
        center ? "mx-auto" : ""
      }`}
    >
      <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#C45E28]">
        <GiggleText text={eyebrow} />
      </span>
      <h2
        className={`mt-2 font-display font-bold tracking-tight text-[#0B3D38] leading-tight ${
          compact ? "text-2xl md:text-3xl" : "text-3xl md:text-4xl"
        }`}
      >
        {titleText ? <GiggleText as="span" text={titleText} /> : title}
      </h2>
      {description && (
        <GiggleText
          as="p"
          text={description}
          className={`mt-4 leading-relaxed text-text-dim ${compact ? "text-sm" : "text-base"}`}
        />
      )}
    </FadeUp>
  );
}

export function Card({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}): React.ReactElement {
  return (
    <div className={`rounded-none border border-line bg-panel p-6 ${className}`}>
      {children}
    </div>
  );
}

export function BrowserFrame({
  children,
  id,
}: {
  children: React.ReactNode;
  id?: string;
}): React.ReactElement {
  return (
    <div
      id={id}
      className="overflow-hidden rounded-none border border-line bg-panel shadow-sm"
    >
      <div className="flex gap-2 border-b border-line bg-bg-alt px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-[#C45E28]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#2A9B8F]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#0B3D38]" />
      </div>
      {children}
    </div>
  );
}

export function BtnPrimary({
  href,
  children,
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}): React.ReactElement {
  return (
    <Link
      href={href}
      className={`inline-flex w-full items-center justify-center rounded-none bg-[#C45E28] px-6 py-3 text-sm font-bold uppercase tracking-wide text-white no-underline hover:bg-[#9A4318] sm:w-auto ${className}`}
    >
      {children}
    </Link>
  );
}

export function BtnGhost({
  href,
  children,
  className = "",
  onDark = false,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
  onDark?: boolean;
}): React.ReactElement {
  return (
    <Link
      href={href}
      className={`inline-flex w-full items-center justify-center rounded-none border-2 bg-transparent px-6 py-3 text-sm font-bold uppercase tracking-wide no-underline sm:w-auto ${
        onDark
          ? "border-white text-white hover:bg-white hover:text-[#0B3D38]"
          : "border-[#0B3D38] text-[#0B3D38] hover:bg-[#0B3D38] hover:text-white"
      } ${className}`}
    >
      {children}
    </Link>
  );
}

export function Chip({
  children,
  active = false,
  onClick,
}: {
  children: React.ReactNode;
  active?: boolean;
  onClick?: () => void;
}): React.ReactElement {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`shrink-0 whitespace-nowrap rounded-none px-4 py-2 text-sm font-semibold ${
        active
          ? "bg-[#C45E28] text-white"
          : "border border-line bg-panel text-text-dim hover:text-text"
      }`}
    >
      {children}
    </button>
  );
}
