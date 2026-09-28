import React from "react";
import Link from "next/link";
import HeroDemoChat from "@/components/HeroDemoChat";
import { HERO } from "@/lib/siteContent";

export default function Hero(): React.ReactElement {
  return (
    <section className="relative overflow-hidden bg-sapphire-deep site-offset">
      <div className="bb-hero-glow pointer-events-none absolute inset-0" aria-hidden />
      <div className="dam-grid dam-grid--hero pointer-events-none absolute inset-0" aria-hidden />
      <div className="site-wrap relative z-10 pb-12 md:pb-16">
        <p className="eyebrow-mark mb-8 border-b border-white/15 pb-3 text-[#A8C4C0]">
          {HERO.eyebrow}
        </p>

        <div className="grid min-w-0 items-start gap-10 lg:grid-cols-2 lg:items-center lg:gap-12">
          <div>
            <p className="font-mono text-[11px] font-medium uppercase tracking-[0.14em] text-accent">
              {HERO.kicker}
            </p>
            <h1 className="banner-heading mt-3 text-[2rem] leading-[1.08] sm:text-5xl lg:text-[3.25rem]">
              {HERO.title}
              <br />
              <span className="font-normal text-white/70">{HERO.sub}</span>
              <span className="tooth-cursor" aria-hidden />
            </h1>
            <p className="mt-5 max-w-md text-base leading-relaxed text-white/80">
              {HERO.body}
            </p>
            <div className="mt-8 flex w-full flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Link
                href={HERO.primaryCta.href}
                className="inline-flex w-full items-center justify-center rounded-sm bg-accent px-[22px] py-3 text-[15px] font-semibold text-white no-underline hover:bg-accent-dim sm:w-auto"
              >
                {HERO.primaryCta.label}
              </Link>
              <Link
                href={HERO.secondaryCta.href}
                className="inline-flex w-full items-center justify-center rounded-sm border-[1.5px] border-white px-[22px] py-3 text-[15px] font-semibold text-white no-underline hover:bg-white/10 sm:w-auto"
              >
                {HERO.secondaryCta.label}
              </Link>
            </div>
            <dl className="mt-10 grid grid-cols-1 gap-4 border-t border-white/15 pt-6 text-white sm:grid-cols-3 sm:gap-4">
              {HERO.stats.map((stat) => (
                <div key={stat.label} className="min-w-0">
                  <dt className="font-mono text-[10px] font-medium uppercase tracking-[0.12em] text-[#A8C4C0]">
                    {stat.label}
                  </dt>
                  <dd className="mt-1 font-display text-sm font-semibold leading-snug sm:text-base">
                    {stat.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <HeroDemoChat className="w-full min-w-0" />
        </div>
      </div>
    </section>
  );
}
