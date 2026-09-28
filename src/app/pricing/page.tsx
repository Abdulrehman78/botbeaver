import type { Metadata } from "next";
import Link from "next/link";
import { COMPLIANCE_NOTE, PRICING } from "@/lib/siteContent";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "BotBeaver pricing is scoped to your channels and volume. Starting bands for inbound chat, phone, and combined engagements.",
};

export default function PricingPage() {
  return (
    <main>
      <section className="relative overflow-hidden bg-sapphire-deep site-offset">
        <div className="bb-hero-glow pointer-events-none absolute inset-0" aria-hidden />
        <div className="dam-grid dam-grid--hero pointer-events-none absolute inset-0" aria-hidden />
        <div className="site-wrap relative z-10 pb-14 pt-10 md:pb-16">
          <p className="eyebrow-mark mb-8 border-b border-white/15 pb-3 text-[#8FA3C4]">
            {PRICING.eyebrow}
          </p>
          <h1 className="banner-heading max-w-3xl text-[2rem] leading-[1.08] sm:text-5xl">
            {PRICING.title}
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/80">
            {PRICING.lead}
          </p>
        </div>
      </section>

      <section className="site-section bg-birch">
        <div className="site-wrap">
          <Stagger className="grid gap-6 lg:grid-cols-3">
            {PRICING.plans.map((plan) => (
              <StaggerItem key={plan.name}>
              <article
                className={`bb-card flex h-full flex-col p-6 sm:p-8 ${
                  plan.popular ? "ring-2 ring-accent" : ""
                }`}
              >
                {plan.popular ? (
                  <p className="font-mono text-[11px] font-medium uppercase tracking-[0.14em] text-accent">
                    Most requested
                  </p>
                ) : (
                  <p className="font-mono text-[11px] font-medium uppercase tracking-[0.14em] text-slate">
                    Engagement
                  </p>
                )}
                <h2 className="mt-3 font-display text-2xl font-semibold text-sapphire">
                  {plan.name}
                </h2>
                <p className="mt-2 text-sm text-slate-dark">{plan.blurb}</p>
                <p className="mt-6 font-display text-3xl font-semibold text-sapphire">
                  {plan.price}
                </p>
                <ul className="mt-6 flex-1 space-y-2.5 text-sm text-slate-dark">
                  {plan.features.map((f) => (
                    <li key={f} className="flex gap-2">
                      <span className="text-circuit">✓</span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className="mt-8 inline-flex items-center justify-center rounded-sm bg-accent px-5 py-3 text-[14px] font-semibold text-white no-underline hover:bg-accent-dim"
                >
                  Book a demo
                </Link>
              </article>
              </StaggerItem>
            ))}
          </Stagger>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {PRICING.addons.map((addon) => (
              <div key={addon.name} className="bb-card p-6">
                <h3 className="font-display text-lg font-semibold text-sapphire">
                  {addon.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-dark">
                  {addon.body}
                </p>
              </div>
            ))}
          </div>

          <Reveal className="mt-10 max-w-3xl text-sm leading-relaxed text-slate-dark">
            {PRICING.note}
          </Reveal>
          <Reveal className="mt-4 max-w-3xl text-sm leading-relaxed text-slate-dark" delay={0.04}>
            {PRICING.guarantee}{" "}
            <Link href="/legal/refund" className="text-accent underline">
              Read the Refund Policy
            </Link>
            .
          </Reveal>
          <Reveal className="mt-4 max-w-3xl text-xs leading-relaxed text-slate" delay={0.08}>
            {COMPLIANCE_NOTE}
          </Reveal>
        </div>
      </section>
    </main>
  );
}
