"use client";

import Link from "next/link";
import { useState } from "react";
import { Section } from "@/components/ui/PageSection";
import { FadeUp } from "@/components/ui/Motion";

export default function CtaContact() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <Section border id="contact">
      <div className="grid gap-10 lg:grid-cols-2 lg:items-start lg:gap-12">
        <FadeUp>
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#C45E28]">
            Last Call
          </span>
          <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-[#0B3D38] md:text-4xl">
            Somewhere, right now,
            <br />
            your phone is ringing.
          </h2>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-text-dim">
            Every minute it goes unanswered, that lead is calling someone else.
            Book a 20-minute walkthrough — we&apos;ll map your stack and show
            exactly what BotBeaver replaces, no obligation.
          </p>

          <ul className="mt-8 space-y-3 text-sm text-text-dim">
            <li className="flex gap-2">
              <span className="ai-check text-accent">✓</span>
              Same-week demo scheduling
            </li>
            <li className="flex gap-2">
              <span className="ai-check text-accent">✓</span>
              Real specialists, not a ticket queue
            </li>
            <li className="flex gap-2">
              <span className="ai-check text-accent">✓</span>
              Live across US · UK · Canada · Australia · Europe
            </li>
          </ul>

            <div className="mt-8 flex w-full flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Link
              href="/demo"
              className="inline-flex w-full items-center justify-center border-2 border-[#0B3D38] px-5 py-2.5 text-sm font-bold uppercase tracking-wide text-[#0B3D38] no-underline hover:bg-[#0B3D38] hover:text-white sm:w-auto"
            >
              Try the Live Demo
            </Link>
            <a
              href="mailto:hello@arqonnect.com"
              className="inline-flex w-full items-center justify-center border-2 border-[#0B3D38] px-5 py-2.5 text-sm font-bold uppercase tracking-wide text-[#0B3D38] no-underline hover:bg-[#0B3D38] hover:text-white sm:w-auto"
            >
              hello@arqonnect.com
            </a>
          </div>
        </FadeUp>

        <FadeUp delay={0.1}>
          <div className="motion-card border-2 border-line bg-panel p-5 sm:p-6 md:p-8">
            {submitted ? (
              <div className="py-10 text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-accent/30 bg-accent/10 text-accent">
                  ✓
                </div>
                <h3 className="mt-4 text-xl font-semibold text-text">
                  Request received
                </h3>
                <p className="mt-2 text-sm text-text-dim">
                  A specialist will follow up shortly — usually same week.
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
                  <label
                    htmlFor="contact-name"
                    className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-text-dimmer"
                  >
                    Name
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    required
                    placeholder="Your name"
                    className="w-full rounded-xl border border-line bg-bg px-4 py-3 text-sm text-text outline-none placeholder:text-text-dimmer focus:border-accent/50"
                  />
                </div>
                <div>
                  <label
                    htmlFor="contact-email"
                    className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-text-dimmer"
                  >
                    Work email
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    required
                    placeholder="you@company.com"
                    className="w-full rounded-xl border border-line bg-bg px-4 py-3 text-sm text-text outline-none placeholder:text-text-dimmer focus:border-accent/50"
                  />
                </div>
                <div>
                  <label
                    htmlFor="contact-company"
                    className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-text-dimmer"
                  >
                    Company
                  </label>
                  <input
                    id="contact-company"
                    name="company"
                    type="text"
                    placeholder="Company name"
                    className="w-full rounded-xl border border-line bg-bg px-4 py-3 text-sm text-text outline-none placeholder:text-text-dimmer focus:border-accent/50"
                  />
                </div>
                <div>
                  <label
                    htmlFor="contact-market"
                    className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-text-dimmer"
                  >
                    Primary market
                  </label>
                  <select
                    id="contact-market"
                    name="market"
                    className="w-full rounded-xl border border-line bg-bg px-4 py-3 text-sm text-text outline-none focus:border-accent/50"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Select a market
                    </option>
                    <option value="us">United States</option>
                    <option value="uk">United Kingdom</option>
                    <option value="ca">Canada</option>
                    <option value="au">Australia</option>
                    <option value="eu">Europe</option>
                    <option value="pk">Pakistan / Other</option>
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="contact-message"
                    className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-text-dimmer"
                  >
                    What do you need?
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={4}
                    placeholder="Chat agents, voice, CRM sync, enterprise…"
                    className="w-full resize-y rounded-xl border border-line bg-bg px-4 py-3 text-sm text-text outline-none placeholder:text-text-dimmer focus:border-accent/50"
                  />
                </div>
                <button
                  type="submit"
                  className="ai-cta-shine inline-flex w-full items-center justify-center rounded-sm bg-[#C45E28] px-6 py-3.5 text-sm font-semibold text-[#FFFFFF] transition-all hover:bg-[#9A4318] hover:shadow-[3px_3px_0_rgb(var(--shadow-rgb)/0.4)]"
                >
                  Book a Demo →
                </button>
                <p className="text-center text-xs text-text-dimmer">
                  No obligation. We&apos;ll map your stack on the call.
                </p>
              </form>
            )}
          </div>
        </FadeUp>
      </div>
    </Section>
  );
}
