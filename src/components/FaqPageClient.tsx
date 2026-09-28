"use client";

import { useState } from "react";
import Link from "next/link";
import { FAQ } from "@/lib/siteContent";

export default function FaqPageClient() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <main>
      <section className="relative overflow-hidden bg-sapphire-deep site-offset">
        <div className="bb-hero-glow pointer-events-none absolute inset-0" aria-hidden />
        <div className="dam-grid dam-grid--hero pointer-events-none absolute inset-0" aria-hidden />
        <div className="site-wrap relative z-10 pb-14 pt-10 md:pb-16">
          <p className="eyebrow-mark mb-8 border-b border-white/15 pb-3 text-[#8FA3C4]">
            {FAQ.eyebrow}
          </p>
          <h1 className="banner-heading max-w-3xl text-[2rem] leading-[1.08] sm:text-5xl">
            {FAQ.title}
          </h1>
        </div>
      </section>

      <section className="site-section bg-birch">
        <div className="site-wrap max-w-3xl">
          <div className="space-y-3">
            {FAQ.items.map((item, i) => {
              const isOpen = open === i;
              return (
                <div key={item.q} className="bb-card overflow-hidden">
                  <button
                    type="button"
                    className="flex w-full items-start justify-between gap-4 px-5 py-4 text-left sm:px-6"
                    aria-expanded={isOpen}
                    onClick={() => setOpen(isOpen ? null : i)}
                  >
                    <span className="font-display text-base font-semibold text-sapphire sm:text-lg">
                      {item.q}
                    </span>
                    <span
                      className="mt-1 font-mono text-sm text-accent"
                      aria-hidden
                    >
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>
                  {isOpen ? (
                    <div className="border-t border-line px-5 pb-5 pt-3 text-sm leading-relaxed text-slate-dark sm:px-6">
                      {item.a}
                    </div>
                  ) : null}
                </div>
              );
            })}
          </div>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-sm bg-accent px-[22px] py-3 text-[15px] font-semibold text-white no-underline hover:bg-accent-dim"
            >
              Book a demo
            </Link>
            <Link
              href="/pricing"
              className="inline-flex items-center justify-center rounded-sm border-[1.5px] border-sapphire px-[22px] py-3 text-[15px] font-semibold text-sapphire no-underline hover:bg-white"
            >
              Pricing approach
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
