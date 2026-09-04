import Link from "next/link";

export default function HomeFinalCta() {
  return (
    <section className="site-section bg-[#F4F7F4]">
      <div className="site-wrap overflow-hidden border border-[#0B3D38] bg-white">
        <div className="grid md:grid-cols-[1.15fr_0.85fr]">
          <div className="px-6 py-8 sm:px-8 md:py-10">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#C45E28]">
              Request a briefing
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold leading-tight text-[#0B3D38] md:text-4xl">
              Revolutionize your call operation
            </h2>
            <p className="mt-4 max-w-md text-base leading-relaxed text-text-dim">
              Put an AI workforce on it — chat, voice, CRM and growth, running
              24/7 across every channel your leads use.
            </p>
            <ul className="mt-6 space-y-2 text-sm text-text">
              <li>— Same-week demo scheduling</li>
              <li>— Real specialists, not a ticket queue</li>
              <li>— Live across US · UK · Canada · Australia · Europe</li>
            </ul>
          </div>
          <div className="flex flex-col justify-center gap-3 bg-[#0B3D38] px-6 py-8 sm:px-8 md:py-10">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-[#C45E28] px-6 py-3.5 text-center text-sm font-bold uppercase tracking-wide text-white no-underline hover:bg-[#9A4318]"
            >
              Book a demo
            </Link>
            <Link
              href="/demo"
              className="inline-flex items-center justify-center border-2 border-white px-6 py-3.5 text-center text-sm font-bold uppercase tracking-wide text-white no-underline hover:bg-white hover:text-[#0B3D38]"
            >
              Try the live demo
            </Link>
            <p className="mt-1 text-center text-xs text-white/65">
              20 minutes. No obligation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
