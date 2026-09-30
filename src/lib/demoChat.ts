/** Shared knowledge + reply helpers for the hero demo chat */

export const DEMO_SYSTEM_PROMPT = `You are the BotBeaver demo agent on the marketing site.
Answer helpfully, clearly, and briefly (2–4 sentences unless the user asks for detail).
Sound like a confident builder in plain English. Talk about outcomes (booked meetings, answered questions, qualified leads), not model names. Beaver wordplay at most once.

About BotBeaver:
- Tagline: AI lead capture and growth for US teams.
- Core product: AI Sales Development Representative — website chatbot that qualifies visitors, screens poor fits, and books meetings to Google Calendar or Calendly. Typical first response under a few seconds when configured. Covers nights and weekends.
- Growth services: marketing, SEO, AEO, GEO, AIO, websites and funnels, social, ads, CRM, technical writing, AI web/mobile development, consultancy.
- NOT offered right now: AI Phone Receptionist, voice AI, or AI calling. If asked, say we focus on chat and growth services for now.
- Outbound (consent-based email/SMS) is an add-on after inbound chat is working.
- Verticals: law firms, healthcare and clinics, e-commerce, retail, B2B agencies, real estate. Healthcare PHI needs a BAA. Not a substitute for legal or medical advice.
- We design, build, and maintain what we ship. Typical go-live about 14 days. Setup-fee refunds follow the Refund Policy.
- Pricing: custom quotes after demo — no public plan cards. Demo booking: /contact or abbasqureshi@botbeaver.ai. Do not invent a booked meeting or fake pricing numbers.

If asked something unrelated, answer briefly then steer back. Never invent private customer data.`;

type KnowledgeHit = { keys: string[]; answer: string };

const KNOWLEDGE: KnowledgeHit[] = [
  {
    keys: ["price", "pricing", "cost", "how much", "$", "fee", "plan", "subscription"],
    answer:
      "We do not publish fixed plan cards. After a short demo we scope chat and any growth services you need, then send a written quote. No credit card to start. Go-live usually targets about 14 days; setup-fee refunds follow the Refund Policy.",
  },
  {
    keys: ["book", "demo", "meeting", "schedule", "calendar", "talk to"],
    answer:
      "Use the Book a demo page, or email abbasqureshi@botbeaver.ai. We confirm fit and go-live timing from there.",
  },
  {
    keys: ["voice", "phone", "call", "receptionist", "voicemail", "ivr", "calling"],
    answer:
      "We are not offering AI phone or calling agents right now. BotBeaver focuses on website chat plus growth services like SEO, AEO, and marketing.",
  },
  {
    keys: ["seo", "aeo", "geo", "aio", "marketing", "funnel", "ads", "smm"],
    answer:
      "Yes. Alongside chat we offer growth services: SEO, AEO, GEO, AIO, funnels, social, ads, and related work so more of the right people find you and convert.",
  },
  {
    keys: ["chat", "chatbot", "sdr", "website", "visitor", "widget"],
    answer:
      "The AI Sales Development Representative sits on your site, answers from your approved knowledge, qualifies visitors, and books meetings for the right leads.",
  },
  {
    keys: ["crm", "hubspot", "salesforce", "pipeline", "lead"],
    answer:
      "Chat details can push into Salesforce, HubSpot, or your industry CRM when the conversation ends, so your team is not retyping notes.",
  },
  {
    keys: ["outbound", "prospect", "outreach", "email blast", "cold"],
    answer:
      "Consent-based outbound email or SMS is an add-on once inbound chat is working. You provide lists and consent.",
  },
  {
    keys: ["who", "what is", "what do you", "company", "about", "botbeaver"],
    answer:
      "BotBeaver builds AI chat agents and growth services for US service businesses. We design, train, and maintain them for you.",
  },
  {
    keys: ["how long", "timeline", "setup", "launch", "go live", "implement", "14"],
    answer:
      "Most scoped chat setups target about 14 days after we have your content and access. If we miss that for reasons on our side, setup-fee refunds follow the Refund Policy.",
  },
  {
    keys: ["industry", "healthcare", "real estate", "dental", "law", "legal", "ecommerce", "retail", "clinic", "hipaa", "phi"],
    answer:
      "Core verticals include law, healthcare and clinics, e-commerce, retail, B2B services, and real estate. Healthcare PHI requires a BAA before processing. We are not a substitute for legal or medical advice.",
  },
  {
    keys: ["hello", "hi ", "hey", "good morning", "good afternoon"],
    answer:
      "Hi. I'm the BotBeaver demo agent. Ask about website chat, SEO/AEO, marketing services, or go-live.",
  },
];

function scoreHit(text: string, hit: KnowledgeHit): number {
  let score = 0;
  for (const key of hit.keys) {
    if (text.includes(key)) score += key.length > 4 ? 2 : 1;
  }
  return score;
}

/** Knowledge-grounded fallback when no LLM API key is configured */
export function localDemoReply(
  userText: string,
  history: Array<{ role: string; content: string }> = [],
): string {
  const t = userText.toLowerCase().trim();
  if (!t) {
    return "Go ahead. Ask about website chat, SEO/AEO, pricing approach, or go-live timing.";
  }

  const scored = KNOWLEDGE.map((hit) => ({ hit, score: scoreHit(t, hit) }))
    .filter((x) => x.score > 0)
    .sort((a, b) => b.score - a.score);

  if (scored.length >= 2 && scored[0].score > 0 && scored[1].score > 0) {
    return `${scored[0].hit.answer} ${scored[1].hit.answer}`;
  }

  if (scored.length >= 1 && scored[0].score > 0) {
    const base = scored[0].hit.answer;
    const askingHow = /\b(how|why|can you|could you|would you|explain)\b/.test(t);
    if (askingHow) {
      return `${base} If you share your industry, I can map it to chat and growth services.`;
    }
    return base;
  }

  const priorUser = history.filter((m) => m.role === "user").length;
  const opener = priorUser > 2 ? "Got it." : "Good question.";

  return `${opener} From what you asked, BotBeaver can usually help with website chat and growth services (SEO, AEO, marketing, and more). Tell me whether you care more about converting site visitors or getting found online — or book a live demo and we will map it to your stack.`;
}
