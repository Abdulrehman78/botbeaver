import type { ReactElement } from "react";

function OutcomeIcon({
  name,
}: {
  name: "clock" | "filter" | "calendar" | "trend" | "slots" | "database" | "qualify" | "alert";
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
    slots: (
      <>
        <rect x="3" y="4" width="18" height="18" rx="2" />
        <path d="M16 2v4M8 2v4M3 10h18M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01" />
      </>
    ),
    database: (
      <>
        <ellipse cx="12" cy="5" rx="9" ry="3" />
        <path d="M3 5v6c0 1.66 4.03 3 9 3s9-1.34 9-3V5M3 11v6c0 1.66 4.03 3 9 3s9-1.34 9-3v-6" />
      </>
    ),
    qualify: (
      <>
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
        <polyline points="16 11 18 13 22 9" />
      </>
    ),
    alert: (
      <>
        <path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
        <line x1="12" y1="9" x2="12" y2="13" />
        <line x1="12" y1="17" x2="12.01" y2="17" />
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
    body: "Visitors who get an instant answer convert at 3–5× the rate of those sent to a contact form to wait for a callback.",
  },
];

const sdrVerticals = [
  { name: "Law firms", body: "Qualifies case type, jurisdiction, and urgency. Books consults during intake — even at 11pm when a client just got served papers." },
  { name: "Healthcare & clinics", body: "Answers insurance and service questions, books new patient appointments, and handles after-hours inquiries without pulling staff off the floor." },
  { name: "E-commerce", body: "Answers product questions, guides shoppers to the right item, handles return queries, and upsells based on cart contents." },
  { name: "Retail", body: "Checks stock in real time, guides shoppers to the right item, and captures contact info when something is out of stock." },
  { name: "B2B agencies & services", body: "Identifies company size, need, and budget before a human ever picks up the phone — so discovery calls skip the small talk." },
  { name: "Real estate", body: "Qualifies buyers vs. renters, captures preferences, and books property tours — turning late-night browsers into morning appointments." },
];

const phoneOutcomes = [
  { icon: "slots" as const, title: "Live appointment booking", body: "Checks real-time calendar availability and confirms the appointment before the call ends. No callbacks. No scheduling tag." },
  { icon: "database" as const, title: "Automatic CRM logging", body: "Pushes call recordings, transcripts, and caller details straight into Salesforce, HubSpot, or your industry-specific platform." },
  { icon: "qualify" as const, title: "Intelligent qualification", body: "Asks screening questions, evaluates caller needs, and flags high-value opportunities for immediate human follow-up — while the caller is still on the line." },
  { icon: "alert" as const, title: "Emergency escalation routing", body: "Detects true after-hours urgencies using defined criteria and transfers the caller instantly to an on-call human." },
];

const phoneVerticals = [
  { name: "Law firms", body: "Handles intake after hours, qualifies by practice area, and routes DUI or custody emergencies to on-call attorneys the moment they call." },
  { name: "Healthcare & dental", body: "Books patient appointments, does a first-pass on insurance, and escalates urgent clinical calls — without tying up the front desk." },
  { name: "Home services", body: "Books service calls, collects job details, and dispatches emergency plumbing or HVAC calls to field crews in real time." },
  { name: "Property management", body: "Qualifies prospective renters, schedules showings, and routes maintenance emergencies to on-call staff." },
  { name: "Med-spa & aesthetics", body: "Answers treatment FAQs, confirms basic eligibility, and books consultations directly during the call." },
  { name: "Logistics & field ops", body: "Handles inbound dispatch calls, logs job details to the CRM, and escalates critical delivery or equipment issues." },
];

const phoneFeatures = [
  { title: "Live appointment scheduling", body: "Connects to Google Calendar or Calendly to check real-time availability and instantly book, reschedule, or cancel — no hold music, no callback." },
  { title: "Instant CRM integration", body: "Syncs recordings, transcripts, and caller details into Salesforce, HubSpot, or industry tools the moment a call ends." },
  { title: "Intelligent lead qualification", body: "Asks screening questions, logs the details, and flags high-value opportunities for immediate human follow-up with full context already captured." },
  { title: "Emergency escalation routing", body: "Uses client-defined criteria to decide if a call is a true after-hours emergency and transfers to the designated on-call human — not a voicemail." },
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

      <section id="outbound" className="pb-[var(--site-pad-y)]">
        <div className="site-wrap">
          <div className="bb-shell relative overflow-hidden px-8 py-9">
            <div className="bb-hero-glow pointer-events-none absolute inset-0 opacity-50" aria-hidden />
            <div className="dam-grid dam-grid--fade pointer-events-none absolute inset-0" aria-hidden />
            <div className="relative z-10">
              <p className="eyebrow-mark text-[#8FA3C4]">Add-ons · Outbound layer</p>
              <h3 className="mt-3 font-display text-lg font-semibold text-[#E7ECF5]">
                Go beyond the website — reach buyers before they find you
              </h3>
              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-[#8FA3C4]">
                The two features below extend the chatbot into outbound. They
                belong on a premium tier once inbound is working — a different
                conversation, for a different buyer.
              </p>
              <div className="mt-5 grid gap-3 md:grid-cols-2">
                <div className="bb-panel-dark p-[18px]">
                  <h4 className="font-display text-sm font-semibold text-[#E7ECF5]">Automated Prospecting</h4>
                  <p className="mt-1.5 text-[13px] leading-relaxed text-[#8FA3C4]">
                    Surfaces high-intent accounts that match your ideal customer
                    profile — before they ever land on your site.
                  </p>
                </div>
                <div className="bb-panel-dark p-[18px]">
                  <h4 className="font-display text-sm font-semibold text-[#E7ECF5]">Hyper-Personalized Outreach</h4>
                  <p className="mt-1.5 text-[13px] leading-relaxed text-[#8FA3C4]">
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

      <section id="phone" className="site-section border-t border-line">
        <div className="site-wrap">
          <p className="eyebrow-mark">02 · Product</p>
          <h2 className="mt-3 max-w-2xl font-display text-3xl font-semibold tracking-tight text-sapphire sm:text-4xl">
            AI Phone Receptionist
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-dark">
            Every missed call is a missed client. The AI receptionist answers
            instantly, qualifies the caller, books the appointment, and routes
            real emergencies — all in real time, without sending anyone to
            voicemail. It works the same at 9am and 9pm.
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {[
              { label: "Zero calls go to voicemail" },
              { label: "Books appointments live on the call" },
              { label: "Syncs directly to your CRM" },
              { label: "Routes emergencies in real time", live: true },
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
            {phoneOutcomes.map((o) => (
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
            {phoneVerticals.map((v) => (
              <article key={v.name} className="bb-card-quiet">
                <h4 className="flex items-center gap-2.5 font-display text-[13px] font-semibold text-sapphire">
                  <span className="bb-mark" aria-hidden />
                  {v.name}
                </h4>
                <p className="mt-2 text-[12.5px] leading-relaxed text-slate-dark">{v.body}</p>
              </article>
            ))}
          </div>

          <div className="mt-12">
            <p className="font-mono text-[10px] font-medium uppercase tracking-[0.14em] text-slate">
              Feature breakdown
            </p>
            <ul className="mt-4 divide-y divide-line border-y border-line">
              {phoneFeatures.map((f) => (
                <li key={f.title} className="flex gap-3.5 py-5">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-accent" />
                  <div>
                    <strong className="block font-display text-sm font-semibold text-ink">{f.title}</strong>
                    <p className="mt-1 text-[13px] leading-relaxed text-slate-dark">{f.body}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
