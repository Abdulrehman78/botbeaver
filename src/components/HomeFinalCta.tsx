import Link from "next/link";

export default function HomeFinalCta() {
  return (
    <section className="site-section bg-birch">
      <div className="site-wrap overflow-hidden rounded-lg border border-[#E4E2DC] bg-white shadow-[0_20px_44px_rgba(11,36,71,0.08)]">
        <div className="grid md:grid-cols-[1.15fr_0.85fr]">
          <div className="bg-gradient-to-b from-accent-pale/80 to-white px-6 py-8 sm:px-8 md:py-10">
            <p className="eyebrow-mark">Let&apos;s build yours</p>
            <h2 className="mt-3 font-display text-3xl font-semibold leading-tight tracking-tight text-sapphire md:text-4xl">
              Live in 14 days.
            </h2>
            <p className="mt-4 max-w-md text-base leading-relaxed text-slate-dark">
              We build it, train it, and maintain it. Chat on the site, a
              receptionist on the line — inbound first, outbound when you&apos;re
              ready.
            </p>
            <ul className="mt-6 space-y-2 text-sm text-ink">
              <li>No credit card required</li>
              <li>Setup fee back if we miss the 14-day go-live</li>
            </ul>
          </div>
          <div className="relative flex flex-col justify-center gap-3 overflow-hidden bg-sapphire-deep px-6 py-8 sm:px-8 md:py-10">
            <div className="bb-hero-glow pointer-events-none absolute inset-0 opacity-70" aria-hidden />
            <div className="dam-grid dam-grid--fade pointer-events-none absolute inset-0" aria-hidden />
            <Link
              href="/contact"
              className="relative inline-flex items-center justify-center rounded-sm bg-accent px-[22px] py-3.5 text-center text-[15px] font-semibold text-white no-underline hover:bg-accent-dim"
            >
              Book a demo
            </Link>
            <Link
              href="/services"
              className="relative inline-flex items-center justify-center rounded-sm border-[1.5px] border-white px-[22px] py-3.5 text-center text-[15px] font-semibold text-white no-underline hover:bg-white/10"
            >
              How it works →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
