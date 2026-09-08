"use client";

import { useState } from "react";

const verticals = [
  "Law firms",
  "Healthcare & clinics",
  "E-commerce",
  "Retail",
  "B2B agencies & services",
  "Real estate",
  "Home services",
  "Property management",
  "Med-spa & aesthetics",
  "Logistics & field ops",
];

export default function CtaContact() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      <section className="relative overflow-hidden bg-sapphire-deep site-offset">
        <div className="bb-hero-glow pointer-events-none absolute inset-0" aria-hidden />
        <div className="dam-grid dam-grid--hero pointer-events-none absolute inset-0" aria-hidden />
        <div className="site-wrap relative z-10 pb-14 pt-10 md:pb-16 md:pt-12">
          <p className="eyebrow-mark mb-8 border-b border-white/15 pb-3 text-[#8FA3C4]">
            Book a demo
          </p>
          <h1 className="banner-heading max-w-2xl text-[2rem] leading-[1.08] sm:text-5xl">
            Your site answers questions
            <span className="block font-normal text-white/70">at 2am.</span>
            <span className="tooth-cursor" aria-hidden />
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-white/80">
            We&apos;ll map whether the leak is website visitors, inbound calls,
            or both — then which product closes it first.
          </p>
        </div>
      </section>

      <section className="site-section bg-birch">
        <div className="site-wrap grid gap-10 lg:grid-cols-2 lg:items-start lg:gap-12">
          <div>
            <p className="eyebrow-mark">Let&apos;s build yours</p>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-sapphire">
              Live in 14 days.
            </h2>
            <ul className="mt-8 space-y-3 text-sm text-slate-dark">
              <li className="flex gap-2">
                <span className="text-circuit">✓</span>
                Live in 14 days, or setup fee back
              </li>
              <li className="flex gap-2">
                <span className="text-circuit">✓</span>
                No credit card required
              </li>
              <li className="flex gap-2">
                <span className="text-circuit">✓</span>
                We build it, train it, and maintain it
              </li>
            </ul>
          </div>

        <div className="bb-card p-5 sm:p-6 md:p-8">
          {submitted ? (
            <div className="py-10 text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#E6FAF4] text-circuit">
                ✓
              </div>
              <h2 className="mt-4 font-display text-xl font-semibold text-ink">
                Request received
              </h2>
              <p className="mt-2 text-sm text-slate-dark">
                We&apos;ll follow up on this demo request.
              </p>
            </div>
          ) : (
            <form
              className="space-y-4"
              onSubmit={(e) => {
                e.preventDefault();
                setSubmitted(true);
              }}
            >
              <div>
                <label htmlFor="contact-name" className="mb-1.5 block font-mono text-[11px] uppercase tracking-[0.12em] text-slate">
                  Name
                </label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  required
                  placeholder="Your name"
                  className="w-full rounded-sm border border-line bg-birch px-4 py-3 text-sm text-ink outline-none placeholder:text-slate focus:border-accent"
                />
              </div>
              <div>
                <label htmlFor="contact-email" className="mb-1.5 block font-mono text-[11px] uppercase tracking-[0.12em] text-slate">
                  Work email
                </label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  required
                  placeholder="you@company.com"
                  className="w-full rounded-sm border border-line bg-birch px-4 py-3 text-sm text-ink outline-none placeholder:text-slate focus:border-accent"
                />
              </div>
              <div>
                <label htmlFor="contact-company" className="mb-1.5 block font-mono text-[11px] uppercase tracking-[0.12em] text-slate">
                  Company
                </label>
                <input
                  id="contact-company"
                  name="company"
                  type="text"
                  placeholder="Company name"
                  className="w-full rounded-sm border border-line bg-birch px-4 py-3 text-sm text-ink outline-none placeholder:text-slate focus:border-accent"
                />
              </div>
              <div>
                <label htmlFor="contact-vertical" className="mb-1.5 block font-mono text-[11px] uppercase tracking-[0.12em] text-slate">
                  Vertical
                </label>
                <select
                  id="contact-vertical"
                  name="vertical"
                  className="w-full rounded-sm border border-line bg-birch px-4 py-3 text-sm text-ink outline-none focus:border-accent"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select a vertical
                  </option>
                  {verticals.map((v) => (
                    <option key={v} value={v}>
                      {v}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="contact-product" className="mb-1.5 block font-mono text-[11px] uppercase tracking-[0.12em] text-slate">
                  Product
                </label>
                <select
                  id="contact-product"
                  name="product"
                  className="w-full rounded-sm border border-line bg-birch px-4 py-3 text-sm text-ink outline-none focus:border-accent"
                  defaultValue=""
                >
                  <option value="" disabled>
                    What do you need?
                  </option>
                  <option value="sdr">AI Sales Development Representative</option>
                  <option value="phone">AI Phone Receptionist</option>
                  <option value="both">Both inbound products</option>
                  <option value="outbound">Inbound now, outbound later</option>
                </select>
              </div>
              <button
                type="submit"
                className="inline-flex w-full items-center justify-center rounded-sm bg-accent px-[22px] py-3.5 text-[15px] font-semibold text-white hover:bg-accent-dim"
              >
                Book a demo
              </button>
            </form>
          )}
        </div>
        </div>
      </section>
    </>
  );
}
