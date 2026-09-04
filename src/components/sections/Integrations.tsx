import type { ReactElement } from "react";
import Link from "next/link";

const channels = [
  {
    num: "01",
    title: "Voice",
    description:
      "Humanoid voice agents that take the call, qualify the lead, and book the appointment.",
    tags: "Inbound, outbound, IVR",
  },
  {
    num: "02",
    title: "Chat",
    description:
      "AI conversation that wins before your competitor picks up — on web, app, or widget.",
    tags: "Web, in-app, live handoff",
  },
  {
    num: "03",
    title: "CRM",
    description:
      "HubSpot, Salesforce, or yours — every lead, one record, updated in real time.",
    tags: "HubSpot, Salesforce, custom",
  },
  {
    num: "04",
    title: "SMS & Social",
    description:
      "Missed-call text-back, DMs, and follow-ups handled automatically, around the clock.",
    tags: "SMS, WhatsApp, social DMs",
  },
];

export default function Integrations(): ReactElement {
  return (
    <section className="site-section bg-[#F4F7F4]">
      <div className="site-wrap">
        <div className="flex flex-col gap-4 border-b-2 border-[#0B3D38] pb-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#C45E28]">
              Channel directory
            </p>
            <h2 className="mt-2 font-display text-3xl font-bold text-[#0B3D38] sm:text-4xl">
              True omni-channel communication
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-text-dim">
            Chat, voice, CRM and growth — all pointed at one job: don&apos;t let
            the lead go quiet.
          </p>
        </div>

        <ul>
          {channels.map((c) => (
            <li
              key={c.num}
              className="grid gap-2 border-b border-[#0B3D38]/15 py-6 md:grid-cols-[3.5rem_9rem_1fr] md:items-start md:gap-6"
            >
              <span className="font-mono text-sm font-bold text-[#C45E28]">
                {c.num}
              </span>
              <h3 className="font-display text-xl font-bold text-[#0B3D38] md:text-2xl">
                {c.title}
              </h3>
              <div>
                <p className="text-sm leading-relaxed text-text-dim">{c.description}</p>
                <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.12em] text-[#0B3D38]/70">
                  {c.tags}
                </p>
              </div>
            </li>
          ))}
        </ul>

        <div className="mt-8">
          <Link
            href="/crm"
            className="inline-flex items-center bg-[#0B3D38] px-5 py-2.5 text-sm font-bold uppercase tracking-wide text-white no-underline hover:bg-[#072E2A]"
          >
            See CRM integrations
          </Link>
        </div>
      </div>
    </section>
  );
}
