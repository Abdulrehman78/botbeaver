import type { ReactElement } from "react";
import Link from "next/link";

const outcomes = [
  {
    num: "01",
    title: "Always-on lead capture",
    description:
      "Engages every visitor — nights, weekends, holidays — before they bounce to a competitor who does answer.",
  },
  {
    num: "02",
    title: "Instant qualification",
    description:
      "Screens visitors and callers with natural conversation so your team only talks to real opportunities.",
  },
  {
    num: "03",
    title: "Automatic meeting booking",
    description:
      "Syncs with Google Calendar or Calendly and confirms the appointment without a single email exchange.",
  },
  {
    num: "04",
    title: "CRM logging, no manual entry",
    description:
      "Pushes recordings, transcripts, and details into Salesforce, HubSpot, or your industry platform.",
  },
];

export default function Integrations(): ReactElement {
  return (
    <section className="site-section bg-white">
      <div className="site-wrap">
        <div className="flex flex-col gap-4 border-b border-line pb-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="eyebrow-mark">Outcomes</p>
            <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight text-sapphire sm:text-4xl">
              Built, trained, and managed for you
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-slate-dark">
            We talk about booked meetings, answered questions, and qualified
            leads — not model names.
          </p>
        </div>

        <ul className="mt-8 grid gap-3 sm:grid-cols-2">
          {outcomes.map((c) => (
            <li key={c.num} className="bb-card">
              <span className="font-mono text-sm font-semibold text-accent">{c.num}</span>
              <h3 className="mt-3 font-display text-xl font-semibold text-sapphire md:text-[20px]">
                {c.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-dark">{c.description}</p>
            </li>
          ))}
        </ul>

        <div className="mt-8">
          <Link
            href="/contact"
            className="inline-flex items-center rounded-sm bg-sapphire px-5 py-2.5 text-[15px] font-semibold text-white no-underline hover:bg-sapphire-deep"
          >
            Book a demo
          </Link>
        </div>
      </div>
    </section>
  );
}
