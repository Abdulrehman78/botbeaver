import type { ReactElement } from "react";
import Link from "next/link";

const highlights = [
  { label: "Response time", value: "<500ms" },
  { label: "Coverage", value: "24/7" },
  { label: "Founding slot", value: "Open" },
];

export default function Testimonials(): ReactElement {
  return (
    <section className="site-section bg-white">
      <div className="site-wrap grid overflow-hidden border border-[#0B3D38] md:grid-cols-[16rem_1fr] lg:grid-cols-[18rem_1fr]">
        <aside className="bg-[#C45E28] px-6 py-8 text-white sm:px-8 md:py-10">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-white/80">
            From the record
          </p>
          <h2 className="mt-4 font-display text-3xl font-bold leading-tight">
            Real conversations. Real outcomes.
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-white/85">
            Every engagement gets documented — latency, conversion, and the
            story behind the result.
          </p>
          <Link
            href="/case-studies"
            className="mt-8 inline-flex items-center border-b border-white pb-0.5 text-sm font-bold uppercase tracking-wide text-white no-underline"
          >
            See case studies
          </Link>
        </aside>

        <div className="px-6 py-8 sm:px-8 md:py-10">
          <blockquote>
            <p className="font-display text-2xl font-bold leading-snug text-[#0B3D38] sm:text-3xl">
              “This is where your story goes. Once the first engagement wraps,
              we&apos;ll swap this for a real quote, a real name, and a real
              result.”
            </p>
            <footer className="mt-8 border-t border-line pt-5">
              <div className="font-bold text-text">Reserved for you</div>
              <div className="text-sm text-text-dim">Founding client, BotBeaver</div>
              <p className="mt-2 text-xs uppercase tracking-[0.14em] text-text-dimmer">
                Healthcare · Real estate · E-commerce
              </p>
            </footer>
          </blockquote>

          <dl className="mt-10 grid grid-cols-3 gap-2 sm:gap-4">
            {highlights.map((h) => (
              <div key={h.label} className="min-w-0">
                <dt className="text-[10px] font-bold uppercase tracking-[0.12em] text-text-dimmer sm:text-[11px]">
                  {h.label}
                </dt>
                <dd className="mt-1 font-display text-xl font-bold text-[#0B3D38] sm:text-2xl">
                  {h.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
