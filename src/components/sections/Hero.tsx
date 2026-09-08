import React from "react";
import Link from "next/link";
import HeroDemoChat from "@/components/HeroDemoChat";

export default function Hero(): React.ReactElement {
  return (
    <section className="relative overflow-hidden bg-sapphire-deep site-offset">
      <div className="bb-hero-glow pointer-events-none absolute inset-0" aria-hidden />
      <div className="dam-grid dam-grid--hero pointer-events-none absolute inset-0" aria-hidden />
      <div className="site-wrap relative z-10 pb-12 md:pb-16">
        <p className="eyebrow-mark mb-8 border-b border-white/15 pb-3 text-[#8FA3C4]">
          BotBeaver · Builds conversations that work
        </p>

        <div className="grid min-w-0 items-start gap-10 lg:grid-cols-2 lg:items-center lg:gap-12">
          <div>
            <p className="font-mono text-[11px] font-medium uppercase tracking-[0.14em] text-accent">
              01 · Product
            </p>
            <h1 className="banner-heading mt-3 text-[2rem] leading-[1.08] sm:text-5xl lg:text-[3.25rem]">
              AI-powered lead capture
              <br />
              <span className="font-normal text-white/70">
                and client communication.
              </span>
              <span className="tooth-cursor" aria-hidden />
            </h1>
            <p className="mt-5 max-w-md text-base leading-relaxed text-white/80">
              We design, build, and maintain AI chat agents for B2B teams — so
              your website answers questions, books meetings, and qualifies
              leads while you sleep.
            </p>
            <div className="mt-8 flex w-full flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Link
                href="/contact"
                className="inline-flex w-full items-center justify-center rounded-sm bg-accent px-[22px] py-3 text-[15px] font-semibold text-white no-underline hover:bg-accent-dim sm:w-auto"
              >
                Book a demo
              </Link>
              <Link
                href="/services"
                className="inline-flex w-full items-center justify-center rounded-sm border-[1.5px] border-white px-[22px] py-3 text-[15px] font-semibold text-white no-underline hover:bg-white/10 sm:w-auto"
              >
                How it works →
              </Link>
            </div>
            <dl className="mt-10 grid grid-cols-3 gap-2 border-t border-white/15 pt-6 text-white sm:gap-4">
              <div className="min-w-0">
                <dt className="font-mono text-[10px] font-medium uppercase tracking-[0.12em] text-[#8FA3C4]">
                  Response
                </dt>
                <dd className="mt-1 font-display text-base font-semibold sm:text-xl">
                  Under 3s
                </dd>
              </div>
              <div className="min-w-0">
                <dt className="font-mono text-[10px] font-medium uppercase tracking-[0.12em] text-[#8FA3C4]">
                  Coverage
                </dt>
                <dd className="mt-1 font-display text-base font-semibold sm:text-xl">
                  24 / 7 / 365
                </dd>
              </div>
              <div className="min-w-0">
                <dt className="font-mono text-[10px] font-medium uppercase tracking-[0.12em] text-[#8FA3C4]">
                  Live in
                </dt>
                <dd className="mt-1 font-display text-base font-semibold sm:text-xl">
                  14 days
                </dd>
              </div>
            </dl>
          </div>

          <HeroDemoChat className="w-full min-w-0" />
        </div>
      </div>
    </section>
  );
}
