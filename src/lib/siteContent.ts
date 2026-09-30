/**
 * Canonical BotBeaver marketing-site copy and entity fields.
 * Phone / AI calling is intentionally out of scope for now.
 */

export const SHOW_PRICING_PLANS = false;

export const SITE = {
  name: "BotBeaver",
  legalName: "BotBeaver LLC",
  tagline: "AI lead capture and growth for US teams",
  /** Demo booking / sales inbox */
  email: "abbasqureshi@botbeaver.ai",
  privacyEmail: "privacy@botbeaver.ai",
  location: "United States",
  formationState: "Delaware",
  addressLine:
    "United States — registered mailing address available on request at abbasqureshi@botbeaver.ai",
  url: "https://botbeaver.ai",
  footerBlurb:
    "BotBeaver builds and maintains AI chat agents plus growth services (marketing, SEO, AEO, and more) so US businesses answer leads and show up where buyers search.",
} as const;

export const NAV_LINKS = [
  { href: "/process", label: "How it works" },
  { href: "/services", label: "Services" },
  { href: "/faq", label: "FAQ" },
] as const;

export const PRODUCT_LINKS = [
  {
    href: "/services#chatbot",
    label: "AI Sales Development Representative",
  },
  {
    href: "/services#growth",
    label: "Marketing, SEO & AEO",
  },
  {
    href: "/services#outbound",
    label: "Outbound prospecting (consent-based)",
  },
] as const;

export const HERO = {
  eyebrow: "BotBeaver for US service businesses",
  kicker: "01 · Product",
  title: "Catch every lead",
  sub: "on your website — and get found online.",
  body: "We build and maintain an AI Sales Development Representative for your site, plus growth services like marketing, SEO, and AEO. Visitors get answers and booked meetings. Your team stays in control.",
  primaryCta: { href: "/contact", label: "Book a demo" },
  secondaryCta: { href: "/process", label: "How it works" },
  stats: [
    { label: "Response", value: "Typically under 3s" },
    { label: "Coverage", value: "Nights and weekends" },
    { label: "Go-live", value: "About 14 days" },
  ],
} as const;

export const STATS = [
  {
    value: "<3s",
    label: "Typical first response on a configured agent",
  },
  {
    value: "24/7",
    label: "Coverage so after-hours inquiries are not left waiting",
  },
  {
    value: "Higher show-up",
    label: "Booked meetings vs a static contact form (results vary)",
  },
  {
    value: "14 days",
    label: "Target go-live, or setup fee refunded per our Refund Policy",
  },
] as const;

/** Growth / digital services (aligned with ArQonnect catalog; no voice/calling). */
export const GROWTH_SERVICES = [
  { title: "CRM", body: "Organize leads and conversations in one place your team can run day to day." },
  { title: "Websites & funnels", body: "Landing pages and conversion paths wired to your AI chat and CRM." },
  { title: "Webinar funnels", body: "Registration-to-follow-up flows that keep attendees moving toward a booked call." },
  { title: "Chat widget / Conversation AI", body: "Site chat that qualifies, answers from approved knowledge, and books meetings." },
  { title: "Inbound SMS & social DMs", body: "Capture and reply on messaging channels you already use (where integrated)." },
  { title: "Social planner", body: "Plan and schedule posts so your brand stays visible without last-minute scramble." },
  { title: "Ad manager", body: "Campaign structure and creative support so paid traffic lands somewhere that converts." },
  { title: "SMM", body: "Social media management that supports the same offers your chat agent sells." },
  { title: "SEO", body: "Classic search visibility so buyers find you on Google, not just when they already know your name." },
  { title: "AEO", body: "Answer Engine Optimization — structure content so assistants can extract and read it aloud." },
  { title: "GEO", body: "Generative Engine Optimization — earn citations inside AI answers (ChatGPT, Gemini, Perplexity, and similar)." },
  { title: "AIO", body: "AI Overview readiness so you show up when search engines summarize the answer." },
  { title: "AI business consultancy", body: "Practical advice on where AI should sit in your sales and ops stack." },
  { title: "Technical writing", body: "Clear specs, help content, and knowledge base copy your agents can cite." },
  { title: "AI web development", body: "Sites and apps built with AI-assisted delivery, connected to your chat and CRM." },
  { title: "AI mobile development", body: "Native or hybrid apps when your offer needs a mobile surface." },
] as const;

export const HOW_IT_WORKS = {
  eyebrow: "How it works",
  title: "From discovery to a live agent in about two weeks",
  lead: "We handle build and maintenance. You approve the scripts, knowledge, and when a human should take over.",
  steps: [
    {
      num: "01",
      title: "Map the leak",
      body: "We learn whether you lose leads on the website, in forms, or in follow-up — and which services should go live first.",
    },
    {
      num: "02",
      title: "Approve tone and rules",
      body: "You set tone, services, hours, qualification criteria, and topics that must escalate to a person.",
    },
    {
      num: "03",
      title: "Train on your facts",
      body: "We load FAQs, pricing ranges you approve, and scheduling rules. The agent answers from your material, not open-ended invention.",
    },
    {
      num: "04",
      title: "Connect channels",
      body: "Website chat widget and CRM fields you already use. Outbound email or SMS only after consent rules are clear.",
    },
    {
      num: "05",
      title: "Go live and monitor",
      body: "We watch early conversations with you, tune handoffs, and keep the agent maintained after launch.",
    },
  ],
} as const;

export const PRICING = {
  eyebrow: "Pricing",
  title: "Custom quotes — no public plan cards",
  lead: "We scope every engagement on a demo. Pricing depends on channels, volume, and which growth services you need.",
  note: "No credit card is required to book a demo. We send a written quote after we understand your stack.",
  plans: [] as const,
  addons: [
    {
      name: "Growth services",
      body: "Marketing, SEO, AEO, GEO, funnels, and related work priced with the same engagement.",
    },
    {
      name: "Extra integrations",
      body: "Additional CRM, calendar, or messaging wiring beyond the standard package.",
    },
  ],
  guarantee:
    "If we miss the agreed 14-day go-live for the scoped setup (excluding delays you cause), your setup fee is refundable under our Refund Policy.",
} as const;

export const FAQ = {
  eyebrow: "Questions, answered",
  title: "What buyers ask before a demo",
  items: [
    {
      q: "What does BotBeaver actually build?",
      a: "An AI Sales Development Representative for your website, plus growth services such as marketing, SEO, AEO, GEO, funnels, and related digital work. We build, train, and maintain what we ship. You approve content and escalation rules.",
    },
    {
      q: "Do you offer AI phone or calling agents?",
      a: "Not right now. We focus on website chat and growth services. If voice becomes part of your roadmap later, we can discuss it separately.",
    },
    {
      q: "Will the agent invent answers?",
      a: "It should answer from the knowledge and scripts you approve. Ambiguous or high-risk topics escalate to a person. You remain responsible for reviewing what goes live.",
    },
    {
      q: "How fast is go-live?",
      a: "Most scoped inbound chat setups target about 14 days once we have your content and access. If we miss that target for reasons on our side, the setup fee refund rules in the Refund Policy apply.",
    },
    {
      q: "Do you support healthcare or law firms?",
      a: "We serve those verticals with careful scoping. BotBeaver is not a substitute for licensed professional advice. Healthcare deployments that handle protected health information require a separate BAA and architecture review. Until that is signed, do not route PHI through the agent.",
    },
    {
      q: "What is AEO vs SEO?",
      a: "SEO helps you rank in classic search. AEO structures content so answer engines and assistants can extract it. GEO focuses on citations inside generative AI answers. We can run these together with your chat agent.",
    },
    {
      q: "Can you send outbound texts or emails?",
      a: "Yes as an add-on, only with lists and consent you provide. You must follow TCPA, CAN-SPAM, and state telemarketing rules. We will not knowingly run unsolicited spam campaigns.",
    },
    {
      q: "Is there a credit card for the demo?",
      a: "No. Book a demo, we scope the work, then you decide. Billing starts only after you agree to an engagement.",
    },
  ],
} as const;

export const FINAL_CTA = {
  eyebrow: "Next step",
  title: "Book a scoped demo",
  body: "Tell us where leads leak or where you need to show up online. We will recommend chat, growth services, or both, and walk through go-live timing.",
  bullets: [
    "No credit card required",
    "Setup fee refundable if we miss the agreed 14-day go-live (see Refund Policy)",
    "We build it, train it, and maintain it",
  ],
  primaryCta: { href: "/contact", label: "Book a demo" },
  secondaryCta: { href: "/process", label: "How it works" },
} as const;

export const COMPLIANCE_NOTE =
  "BotBeaver agents are tools for your business. You are responsible for professional licensing rules, advertising rules, and messaging consent in your states. Healthcare PHI requires a BAA before processing.";
