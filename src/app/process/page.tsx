import type { Metadata } from "next";
import Link from "next/link";
import { HOW_IT_WORKS } from "@/lib/siteContent";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";

export const metadata: Metadata = {
  title: "How it works",
  description:
    "How BotBeaver maps your lead leak, trains AI chat and phone agents on your approved knowledge, and targets go-live in about 14 days.",
};

export default function ProcessPage() {
  return (
    <main>
      <section className="relative overflow-hidden bg-sapphire-deep site-offset">
        <div className="bb-hero-glow pointer-events-none absolute inset-0" aria-hidden />
        <div className="dam-grid dam-grid--hero pointer-events-none absolute inset-0" aria-hidden />
        <div className="site-wrap relative z-10 pb-14 pt-10 md:pb-16">
          <p className="eyebrow-mark mb-8 border-b border-white/15 pb-3 text-[#8FA3C4]">
            {HOW_IT_WORKS.eyebrow}
          </p>
          <h1 className="banner-heading max-w-3xl text-[2rem] leading-[1.08] sm:text-5xl">
            {HOW_IT_WORKS.title}
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/80">
            {HOW_IT_WORKS.lead}
          </p>
        </div>
      </section>

      <section className="site-section bg-birch">
        <Stagger className="site-wrap space-y-6">
          {HOW_IT_WORKS.steps.map((step) => (
            <StaggerItem key={step.num}>
              <article
                className="bb-card grid gap-4 p-6 sm:grid-cols-[4.5rem_1fr] sm:gap-8 sm:p-8"
              >
                <p className="font-mono text-sm font-semibold text-accent">
                  {step.num}
                </p>
                <div>
                  <h2 className="font-display text-xl font-semibold text-sapphire">
                    {step.title}
                  </h2>
                  <p className="mt-2 text-sm leading-relaxed text-slate-dark sm:text-[15px]">
                    {step.body}
                  </p>
                </div>
              </article>
            </StaggerItem>
          ))}
        </Stagger>
        <Reveal className="site-wrap mt-10 flex flex-col gap-3 sm:flex-row">
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
            See pricing approach
          </Link>
        </Reveal>
      </section>
    </main>
  );
}
