import type { ReactElement } from "react";
import { GROWTH_SERVICES } from "@/lib/siteContent";

function OutcomeIcon({
  name,
}: {
  name: "clock" | "filter" | "calendar" | "trend";
}) {
  const marks: Record<typeof name, ReactElement> = {
    clock: (
      <>
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" />
      </>
    ),
    filter: <path d="M22 3H2l8 9.46V19l4 2v-8.54L22 3z" />,
    calendar: (
      <>
        <rect x="3" y="4" width="18" height="18" rx="2" />
        <path d="M16 2v4M8 2v4M3 10h18" />
      </>
    ),
    trend: (
      <>
        <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
        <polyline points="16 7 22 7 22 13" />
      </>
    ),
  };

  return (
    <span className="bb-icon" aria-hidden>
      <svg viewBox="0 0 24 24">{marks[name]}</svg>
    </span>
  );
}

const sdrOutcomes = [
  {
    icon: "clock" as const,
    title: "Always-on lead capture",
    body: "Engages every visitor — nights, weekends, holidays — before they bounce to a competitor who does answer.",
  },
  {
    icon: "filter" as const,
    title: "Instant lead qualification",
    body: "Screens visitors with natural conversation so your team only talks to real opportunities, not tire-kickers.",
  },
  {
    icon: "calendar" as const,
    title: "Automatic meeting booking",
    body: "Syncs directly with Google Calendar or Calendly and confirms appointments without a single email exchange.",
  },
  {
    icon: "trend" as const,
    title: "Higher conversion rate",
    body: "Visitors who get an instant answer are more likely to book than those left waiting on a static contact form. Results vary by vertical and offer.",
  },
];

const sdrVerticals = [
  { name: "Law firms", body: "Qualifies case type, jurisdiction, and urgency. Books consults during intake — even at 11pm when a client just got served papers." },
  { name: "Healthcare & clinics", body: "Answers insurance and service questions, books new patient appointments, and handles after-hours inquiries without pulling staff off the floor." },
  { name: "E-commerce", body: "Answers product questions, guides shoppers to the right item, handles return queries, and upsells based on cart contents." },
  { name: "Retail", body: "Checks stock in real time, guides shoppers to the right item, and captures contact info when something is out of stock." },
  { name: "B2B agencies & services", body: "Identifies company size, need, and budget before a human discovery call — so the first live conversation skips the small talk." },
  { name: "Real estate", body: "Qualifies buyers vs. renters, captures preferences, and books property tours — turning late-night browsers into morning appointments." },
];

export default function ServicesStory(): ReactElement {
  return (
    <div className="bg-birch">
      <section id="chatbot" className="site-section">
        <div className="site-wrap">
          <p className="eyebrow-mark">01 · Product</p>
          <h2 className="mt-3 max-w-2xl font-display text-3xl font-semibold tracking-tight text-sapphire sm:text-4xl">
            AI Sales Development Representative
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-dark">
            Your website talks to hundreds of visitors a day. Most leave without a
            trace. The AI SDR catches them at the moment of highest intent —
            qualifies them in real conversation, books the meeting, and hands off
            only the right leads. 24 hours a day, 7 days a week, no staffing cost.
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {[
              { label: "Responds in under 3 seconds" },
              { label: "No leads lost after 5pm" },
              { label: "Screens poor fits automatically" },
              { label: "Books meetings to your calendar" },
              { label: "Live 24 / 7 / 365", live: true },
            ].map((pill) => (
              <span
                key={pill.label}
                className={pill.live ? "bb-pill bb-pill-live" : "bb-pill"}
              >
                {pill.label}
              </span>
            ))}
          </div>

          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {sdrOutcomes.map((o) => (
              <article key={o.title} className="bb-card">
                <OutcomeIcon name={o.icon} />
                <h3 className="font-display text-sm font-semibold text-ink">{o.title}</h3>
                <p className="mt-2 text-[13px] leading-relaxed text-slate-dark">{o.body}</p>
              </article>
            ))}
          </div>

          <p className="mt-10 font-mono text-[10px] font-medium uppercase tracking-[0.14em] text-slate">
            Vertical use cases
          </p>
          <div className="mt-3 grid gap-2.5 sm:grid-cols-2 lg:grid-cols-3">
            {sdrVerticals.map((v) => (
              <article key={v.name} className="bb-card-quiet">
                <h4 className="flex items-center gap-2.5 font-display text-[13px] font-semibold text-sapphire">
                  <span className="bb-mark" aria-hidden />
                  {v.name}
                </h4>
                <p className="mt-2 text-[12.5px] leading-relaxed text-slate-dark">{v.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="growth" className="site-section border-t border-line">
        <div className="site-wrap">
          <p className="eyebrow-mark">02 · Growth services</p>
          <h2 className="mt-3 max-w-2xl font-display text-3xl font-semibold tracking-tight text-sapphire sm:text-4xl">
            Marketing, SEO, AEO, and more
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-dark">
            Same playbook as our sister ArQonnect stack for growth: get found in
            classic search and AI answers, then convert on chat. We do not offer
            AI phone or voice calling agents at this time.
          </p>
          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {GROWTH_SERVICES.map((s) => (
              <article key={s.title} className="bb-card">
                <h3 className="font-display text-sm font-semibold text-ink">{s.title}</h3>
                <p className="mt-2 text-[13px] leading-relaxed text-slate-dark">{s.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="outbound" className="pb-[var(--site-pad-y)]">
        <div className="site-wrap">
          <div className="bb-shell relative overflow-hidden px-8 py-9">
            <div className="bb-hero-glow pointer-events-none absolute inset-0 opacity-50" aria-hidden />
            <div className="dam-grid dam-grid--fade pointer-events-none absolute inset-0" aria-hidden />
            <div className="relative z-10">
              <p className="eyebrow-mark text-[#A8C4C0]">Add-ons · Outbound layer</p>
              <h3 className="mt-3 font-display text-lg font-semibold text-[#E7ECF5]">
                Reach buyers with consent-based email and SMS
              </h3>
              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-[#A8C4C0]">
                Optional once inbound chat is working. You provide lists and
                consent. We will not run unsolicited spam campaigns.
              </p>
              <div className="mt-5 grid gap-3 md:grid-cols-2">
                <div className="bb-panel-dark p-[18px]">
                  <h4 className="font-display text-sm font-semibold text-[#E7ECF5]">Automated Prospecting</h4>
                  <p className="mt-1.5 text-[13px] leading-relaxed text-[#A8C4C0]">
                    Surfaces high-intent accounts that match your ideal customer
                    profile — before they ever land on your site.
                  </p>
                </div>
                <div className="bb-panel-dark p-[18px]">
                  <h4 className="font-display text-sm font-semibold text-[#E7ECF5]">Consent-based personalized outreach</h4>
                  <p className="mt-1.5 text-[13px] leading-relaxed text-[#A8C4C0]">
                    Drafts tailored emails, texts, and social messages from
                    individual buyer data. Each one reads like it was written for
                    that one person.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

