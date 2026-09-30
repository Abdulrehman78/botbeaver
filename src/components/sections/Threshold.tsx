import type { ReactElement } from "react";
import Link from "next/link";

const jumps = [
  {
    num: "01",
    href: "#chatbot",
    title: "AI Sales Development Representative",
    line: "Catches website visitors at the moment of highest intent.",
  },
  {
    num: "02",
    href: "#growth",
    title: "Marketing, SEO & AEO",
    line: "Get found in search and AI answers — then convert on chat.",
  },
  {
    num: "03",
    href: "#outbound",
    title: "Outbound (consent-based)",
    line: "Optional email or SMS outreach when you are ready.",
  },
];

export default function Threshold(): ReactElement {
  return (
    <section className="relative overflow-hidden bg-sapphire-deep site-offset">
      <div className="bb-hero-glow pointer-events-none absolute inset-0" aria-hidden />
      <div className="dam-grid dam-grid--hero pointer-events-none absolute inset-0" aria-hidden />
      <div className="site-wrap relative z-10 pb-14 pt-10 md:pb-20 md:pt-12">
        <p className="eyebrow-mark mb-8 border-b border-white/15 pb-3 text-[#A8C4C0]">
          Service offerings
        </p>

        <div className="grid min-w-0 items-end gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
          <div>
            <h1 className="banner-heading text-[2rem] leading-[1.08] sm:text-5xl lg:text-[3.25rem]">
              Chat and growth.
              <span className="block font-normal text-white/70">No phone agents for now.</span>
              <span className="tooth-cursor" aria-hidden />
            </h1>
            <p className="mt-5 max-w-md text-base leading-relaxed text-white/80">
              An AI sales chatbot for the website, plus marketing, SEO, AEO, and
              related services so more of the right people find you — then book.
            </p>
          </div>

          <nav aria-label="Services" className="grid gap-3">
            {jumps.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="bb-panel-dark group p-5 no-underline"
              >
                <p className="font-mono text-[11px] font-semibold tracking-[0.12em] text-accent">
                  {item.num}
                </p>
                <h2 className="mt-2 font-display text-lg font-semibold tracking-tight text-white group-hover:text-accent">
                  {item.title}
                </h2>
                <p className="mt-1.5 text-sm leading-relaxed text-[#A8C4C0]">
                  {item.line}
                </p>
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </section>
  );
}
