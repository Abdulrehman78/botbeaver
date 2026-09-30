import type { Metadata } from "next";
import Link from "next/link";
import { COMPLIANCE_NOTE, PRICING, SHOW_PRICING_PLANS, SITE } from "@/lib/siteContent";
import { Reveal } from "@/components/motion/Reveal";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "BotBeaver pricing is custom after a demo. Book a scoped conversation — no public plan cards.",
};

export default function PricingPage() {
  return (
    <main>
      <section className="relative overflow-hidden bg-sapphire-deep site-offset">
        <div className="bb-hero-glow pointer-events-none absolute inset-0" aria-hidden />
        <div className="dam-grid dam-grid--hero pointer-events-none absolute inset-0" aria-hidden />
        <div className="site-wrap relative z-10 pb-14 pt-10 md:pb-16">
          <p className="eyebrow-mark mb-8 border-b border-white/15 pb-3 text-[#A8C4C0]">
            {PRICING.eyebrow}
          </p>
          <h1 className="banner-heading max-w-3xl text-[2rem] leading-[1.08] sm:text-5xl">
            {PRICING.title}
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/80">
            {PRICING.lead}
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center justify-center rounded-md bg-accent px-[22px] py-3 text-[15px] font-semibold text-white no-underline hover:bg-accent-dim"
          >
            Book a demo
          </Link>
        </div>
      </section>

      <section className="site-section bg-birch">
        <div className="site-wrap">
          {!SHOW_PRICING_PLANS ? (
            <Reveal className="bb-card max-w-2xl p-6 sm:p-8">
              <h2 className="font-display text-xl font-semibold text-sapphire">
                Talk pricing on a demo
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-slate-dark">
                {PRICING.note} Reach us at{" "}
                <a href={`mailto:${SITE.email}`} className="text-accent underline">
                  {SITE.email}
                </a>
                .
              </p>
            </Reveal>
          ) : null}

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
