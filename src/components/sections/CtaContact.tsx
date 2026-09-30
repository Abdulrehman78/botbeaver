"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { COMPLIANCE_NOTE, SITE } from "@/lib/siteContent";

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
  const [consent, setConsent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!consent) return;
    const fd = new FormData(e.currentTarget);
    const name = String(fd.get("name") || "").trim();
    const email = String(fd.get("email") || "").trim();
    const company = String(fd.get("company") || "").trim();
    const vertical = String(fd.get("vertical") || "").trim();
    const product = String(fd.get("product") || "").trim();
    const subject = encodeURIComponent(`BotBeaver demo — ${name || company || "inquiry"}`);
    const body = encodeURIComponent(
      [
        `Name: ${name}`,
        `Email: ${email}`,
        `Company: ${company || "—"}`,
        `Vertical: ${vertical || "—"}`,
        `Interest: ${product || "—"}`,
      ].join("\n")
    );
    window.location.href = `mailto:${SITE.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  }

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
            Tell us where leads leak
            <span className="block font-normal text-white/70">
              site chat, growth, or both.
            </span>
            <span className="tooth-cursor" aria-hidden />
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-white/80">
            We will map whether the leak is website visitors, visibility online,
            or follow-up — then which services should go live first.
          </p>
        </div>
      </section>

      <section className="site-section bg-birch">
        <div className="site-wrap grid gap-10 lg:grid-cols-2 lg:items-start lg:gap-12">
          <div>
            <p className="eyebrow-mark">Let&apos;s build yours</p>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-sapphire">
              Scoped demo, no card required
            </h2>
            <ul className="mt-8 space-y-3 text-sm text-slate-dark">
              <li className="flex gap-2">
                <span className="text-circuit">✓</span>
                About 14-day go-live target, or setup fee back per Refund Policy
              </li>
              <li className="flex gap-2">
                <span className="text-circuit">✓</span>
                No credit card required for the demo
              </li>
              <li className="flex gap-2">
                <span className="text-circuit">✓</span>
                We build it, train it, and maintain it
              </li>
            </ul>
            <p className="mt-8 text-xs leading-relaxed text-slate">
              {COMPLIANCE_NOTE}
            </p>
          </div>

          <div className="bb-card p-5 sm:p-6 md:p-8">
            {submitted ? (
              <div className="py-10 text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#E6FAF4] text-circuit">
                  ✓
                </div>
                <h2 className="mt-4 font-display text-xl font-semibold text-ink">
                  Opening your email app
                </h2>
                <p className="mt-2 text-sm text-slate-dark">
                  Your mail client should open with the details filled in to{" "}
                  <a
                    href={`mailto:${SITE.email}`}
                    className="text-accent underline"
                  >
                    {SITE.email}
                  </a>
                  . If it does not, copy that address and send the same details.
                </p>
              </div>
            ) : (
              <form className="space-y-4" onSubmit={onSubmit}>
                <div>
                  <label
                    htmlFor="contact-name"
                    className="mb-1.5 block font-mono text-[11px] uppercase tracking-[0.12em] text-slate"
                  >
                    Name
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    required
                    autoComplete="name"
                    placeholder="Your name"
                    className="w-full rounded-sm border border-line bg-birch px-4 py-3 text-sm text-ink outline-none placeholder:text-slate focus:border-accent"
                  />
                </div>
                <div>
                  <label
                    htmlFor="contact-email"
                    className="mb-1.5 block font-mono text-[11px] uppercase tracking-[0.12em] text-slate"
                  >
                    Work email
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    placeholder="you@company.com"
                    className="w-full rounded-sm border border-line bg-birch px-4 py-3 text-sm text-ink outline-none placeholder:text-slate focus:border-accent"
                  />
                </div>
                <div>
                  <label
                    htmlFor="contact-company"
                    className="mb-1.5 block font-mono text-[11px] uppercase tracking-[0.12em] text-slate"
                  >
                    Company
                  </label>
                  <input
                    id="contact-company"
                    name="company"
                    type="text"
                    autoComplete="organization"
                    placeholder="Company name"
                    className="w-full rounded-sm border border-line bg-birch px-4 py-3 text-sm text-ink outline-none placeholder:text-slate focus:border-accent"
                  />
                </div>
                <div>
                  <label
                    htmlFor="contact-vertical"
                    className="mb-1.5 block font-mono text-[11px] uppercase tracking-[0.12em] text-slate"
                  >
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
                  <label
                    htmlFor="contact-product"
                    className="mb-1.5 block font-mono text-[11px] uppercase tracking-[0.12em] text-slate"
                  >
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
                    <option value="growth">Marketing / SEO / AEO</option>
                    <option value="both">Chat + growth services</option>
                    <option value="outbound">Inbound now, outbound later</option>
                  </select>
                </div>
                <label className="flex items-start gap-3 text-sm text-slate-dark">
                  <input
                    type="checkbox"
                    className="mt-1"
                    checked={consent}
                    onChange={(e) => setConsent(e.target.checked)}
                    required
                  />
                  <span>
                    I agree to the{" "}
                    <Link href="/legal/privacy" className="text-accent underline">
                      Privacy Policy
                    </Link>{" "}
                    and understand this demo request may be stored when the
                    backend is connected.
                  </span>
                </label>
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
