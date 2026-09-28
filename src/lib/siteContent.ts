/**
 * Canonical BotBeaver marketing-site copy and entity fields.
 */

export const SITE = {
  name: "BotBeaver",
  legalName: "BotBeaver LLC",
  tagline: "AI lead capture and client communication for US teams",
  email: "hello@botbeaver.com",
  privacyEmail: "privacy@botbeaver.com",
  location: "United States",
  formationState: "Delaware",
  addressLine:
    "United States — registered mailing address available on request at hello@botbeaver.com",
  url: "https://botbeaver.com",
  footerBlurb:
    "BotBeaver designs, builds, and maintains AI chat and phone agents so US businesses answer questions, qualify leads, and book meetings after hours.",
} as const;

export const NAV_LINKS = [
  { href: "/process", label: "How it works" },
  { href: "/services", label: "Products" },
  { href: "/pricing", label: "Pricing" },
  { href: "/faq", label: "FAQ" },
] as const;

export const PRODUCT_LINKS = [
  {
    href: "/services#chatbot",
    label: "AI Sales Development Representative",
  },
  {
    href: "/services#phone",
    label: "AI Phone Receptionist",
  },
  {
    href: "/services#outbound",
    label: "Outbound prospecting and outreach",
  },
] as const;

export const HERO = {
  eyebrow: "BotBeaver for US service businesses",
  kicker: "01 · Product",
  title: "Catch every lead",
  sub: "on the site and on the phone.",
  body: "We build and maintain an AI Sales Development Representative for your website and an AI Phone Receptionist for inbound calls. Visitors get answers and booked meetings. Your team stays in control.",
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

export const HOW_IT_WORKS = {
  eyebrow: "How it works",
  title: "From discovery to a live agent in about two weeks",
  lead: "We handle build and maintenance. You approve the scripts, knowledge, and when a human should take over.",
  steps: [
    {
      num: "01",
      title: "Map the leak",
      body: "We learn whether you lose leads on the website, on missed calls, or both, and which product should go live first.",
    },
    {
      num: "02",
      title: "Approve voice and rules",
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
      body: "Website chat widget, phone number, and CRM fields you already use. Outbound email or SMS only after consent rules are clear.",
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
  title: "Scoped to your volume and channels",
  lead: "Most engagements are custom quotes. The bands below are starting points for a demo conversation, not a self-serve checkout.",
  note: "Final pricing depends on channels (web chat, phone, outbound), monthly conversation volume, CRM integrations, and whether you need regulated-industry controls. No credit card is required to book a demo.",
  plans: [
    {
      name: "Inbound Chat",
      price: "Custom",
      period: "",
      blurb: "AI Sales Development Representative on your website.",
      features: [
        "Site chat that qualifies and books meetings",
        "Knowledge trained on your approved FAQs",
        "Human handoff rules you control",
        "CRM logging where we can connect",
      ],
      popular: false,
    },
    {
      name: "Inbound Phone",
      price: "Custom",
      period: "",
      blurb: "AI Phone Receptionist for missed and after-hours calls.",
      features: [
        "Answer, qualify, and book from the call",
        "Transcripts and CRM notes",
        "Escalation paths for emergencies",
        "Recording and disclosure controls where required",
      ],
      popular: true,
    },
    {
      name: "Chat + Phone",
      price: "Custom",
      period: "",
      blurb: "Both inbound products under one engagement.",
      features: [
        "Shared qualification rules across channels",
        "Priority go-live sequencing",
        "Shared reporting for your team",
        "14-day go-live target on the scoped setup",
      ],
      popular: false,
    },
  ],
  addons: [
    {
      name: "Outbound layer",
      body: "Prospecting and personalized outreach by email, SMS, or social DM only with lawful consent and your approved lists.",
    },
    {
      name: "Extra integrations",
      body: "Additional CRM, calendar, or telephony wiring beyond the standard package.",
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
      a: "An AI Sales Development Representative for your website and an AI Phone Receptionist for inbound calls. We also offer an outbound layer when you are ready. We build, train, and maintain the agents. You approve content and escalation rules.",
    },
    {
      q: "Will the agent invent answers?",
      a: "It should answer from the knowledge and scripts you approve. Ambiguous or high-risk topics escalate to a person. You remain responsible for reviewing what goes live.",
    },
    {
      q: "How fast is go-live?",
      a: "Most scoped inbound setups target about 14 days once we have your content and access. If we miss that target for reasons on our side, the setup fee refund rules in the Refund Policy apply.",
    },
    {
      q: "Do you support healthcare or law firms?",
      a: "We serve those verticals with careful scoping. BotBeaver is not a substitute for licensed professional advice. Healthcare deployments that handle protected health information require a separate BAA and architecture review. Until that is signed, do not route PHI through the agent.",
    },
    {
      q: "Are calls recorded?",
      a: "Recording and transcription can be enabled where your use case needs them. You must obtain any consent required under state two-party consent laws and disclose AI use where required. We help you configure disclosures. You own compliance for your callers.",
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
  body: "Tell us whether the leak is website visitors, inbound calls, or both. We will recommend chat, phone, or both, and walk through go-live timing.",
  bullets: [
    "No credit card required",
    "Setup fee refundable if we miss the agreed 14-day go-live (see Refund Policy)",
    "We build it, train it, and maintain it",
  ],
  primaryCta: { href: "/contact", label: "Book a demo" },
  secondaryCta: { href: "/process", label: "How it works" },
} as const;

export const COMPLIANCE_NOTE =
  "BotBeaver agents are tools for your business. You are responsible for professional licensing rules, advertising rules, call recording consent, and messaging consent in your states. Healthcare PHI requires a BAA before processing.";
