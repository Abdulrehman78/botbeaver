import type { ReactElement } from "react";
import Link from "next/link";

const pillars = [
  {
    num: "01",
    title: "Build agents that sound human",
    description:
      "Humanoid chat and voice agents that win the conversation, take the call, and book the appointment — on every channel.",
    tags: "Voice · Chat · SMS",
  },
  {
    num: "02",
    title: "Deploy across the full stack",
    description:
      "Twenty AI-run services: agents, websites and funnels, CRM automation, SEO/AEO/GEO — built to run themselves.",
    tags: "CRM · Funnels · SEO",
  },
  {
    num: "03",
    title: "Measure what converts",
    description:
      "Every lead updates itself in HubSpot, Salesforce, or your CRM. One record across chat, voice, SMS, and social.",
    tags: "Analytics · Attribution · Live KPIs",
  },
];

export default function FeaturesBento(): ReactElement {
  return (
    <section className="site-section bg-[#0B3D38] text-white">
      <div className="site-wrap grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#C45E28]">
            How the platform works
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold leading-tight sm:text-4xl">
            One platform for all your agents
          </h2>
          <p className="mt-4 text-base leading-relaxed text-white/75">
            Orchestration, CRM sync, and growth visibility — so you go from
            prompt to production without a tool pile.
          </p>
          <Link
            href="/services"
            className="mt-8 inline-flex items-center border-b-2 border-[#2A9B8F] pb-1 text-sm font-bold uppercase tracking-wide text-white no-underline hover:border-white"
          >
            Explore all services
          </Link>
        </div>

        <ol className="divide-y divide-white/15 border-y border-white/15">
          {pillars.map((p) => (
            <li key={p.num} className="grid gap-2 py-6 sm:grid-cols-[4.5rem_1fr] sm:gap-6 sm:py-8">
              <span className="font-display text-3xl font-bold text-[#C45E28]">
                {p.num}
              </span>
              <div>
                <h3 className="text-xl font-semibold tracking-tight">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/75">
                  {p.description}
                </p>
                <p className="mt-3 text-[11px] font-bold uppercase tracking-[0.16em] text-[#7ED4C8]">
                  {p.tags}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
