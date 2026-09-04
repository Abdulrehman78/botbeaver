import React from "react";
import Link from "next/link";
import HeroDemoChat from "@/components/HeroDemoChat";
import HeroVideoBackdrop from "@/components/ui/HeroVideoBackdrop";
import FlagStripe from "@/components/ui/FlagStripe";

export default function Hero(): React.ReactElement {
  return (
    <section className="relative overflow-hidden bg-[#0B3D38] site-offset">
      <HeroVideoBackdrop />
      <div className="site-wrap relative z-10 pb-12 md:pb-16">
        <p className="mb-8 border-b border-white/20 pb-3 font-mono text-[10px] uppercase tracking-[0.18em] text-white/70 sm:text-[11px]">
          BotBeaver · Established for American business · Est. 2024
        </p>

        <div className="grid min-w-0 items-start gap-10 lg:grid-cols-2 lg:items-center lg:gap-12">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#C45E28]">
              AI automation agency
            </p>
            <h1 className="banner-heading mt-3 text-[2rem] leading-tight sm:text-5xl lg:text-[3.25rem] lg:leading-[1.12]">
              Speak human
              <br />
              to every customer
            </h1>
            <p className="mt-5 max-w-md text-base leading-relaxed text-white/85">
              Voice and chat agents that answer every call, win every chat, and
              book the appointment — before your competitor picks up.
            </p>
            <div className="mt-8 flex w-full flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Link
                href="/demo"
                className="inline-flex w-full items-center justify-center bg-[#C45E28] px-6 py-3 text-sm font-bold uppercase tracking-wide text-white no-underline hover:bg-[#9A4318] sm:w-auto"
              >
                Try the live demo
              </Link>
              <Link
                href="/contact"
                className="inline-flex w-full items-center justify-center border-2 border-white px-6 py-3 text-sm font-bold uppercase tracking-wide text-white no-underline hover:bg-white hover:text-[#0B3D38] sm:w-auto"
              >
                Book a briefing
              </Link>
            </div>
            <dl className="mt-10 grid grid-cols-3 gap-2 border-t border-white/20 pt-6 text-white sm:gap-4">
              <div className="min-w-0">
                <dt className="text-[10px] font-bold uppercase tracking-[0.12em] text-white/55">
                  Coverage
                </dt>
                <dd className="mt-1 font-display text-base font-bold sm:text-xl">24/7</dd>
              </div>
              <div className="min-w-0">
                <dt className="text-[10px] font-bold uppercase tracking-[0.12em] text-white/55">
                  Latency
                </dt>
                <dd className="mt-1 font-display text-base font-bold sm:text-xl">&lt;500ms</dd>
              </div>
              <div className="min-w-0">
                <dt className="text-[10px] font-bold uppercase tracking-[0.12em] text-white/55">
                  Stack from
                </dt>
                <dd className="mt-1 font-display text-base font-bold sm:text-xl">$97</dd>
              </div>
            </dl>
          </div>

          <HeroDemoChat className="w-full min-w-0" />
        </div>
      </div>
      <FlagStripe />
    </section>
  );
}
