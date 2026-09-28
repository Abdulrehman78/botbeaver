/** Shared knowledge + reply helpers for the hero demo chat */

export const DEMO_SYSTEM_PROMPT = `You are the BotBeaver demo agent on the marketing site.
Answer helpfully, clearly, and briefly (2–4 sentences unless the user asks for detail).
Sound like a confident builder in plain English. Talk about outcomes (booked meetings, answered questions, qualified leads), not model names. Beaver wordplay at most once.

About BotBeaver:
- Tagline: AI lead capture and client communication for US teams.
- Two core inbound products:
  1) AI Sales Development Representative — website chatbot that qualifies visitors, screens poor fits, and books meetings to Google Calendar or Calendly. Typical first response under a few seconds when configured. Covers nights and weekends.
  2) AI Phone Receptionist — answers inbound calls, qualifies, books appointments, logs to CRM, and routes emergencies. Call recording and AI disclosure must follow state consent rules.
- Outbound (prospecting and consent-based outreach) is an add-on after inbound is working.
- Verticals: law firms, healthcare and clinics, e-commerce, retail, B2B agencies, real estate; phone also serves home services, property management, med-spa, logistics. Healthcare PHI needs a BAA. Not a substitute for legal or medical advice.
- We design, build, and maintain the agent. Typical go-live about 14 days. Setup-fee refunds follow the Refund Policy.
- CTA: book a demo at /contact. Do not invent a booked meeting or fake pricing numbers.

If asked something unrelated, answer briefly then steer back. Never invent private customer data.`;

type KnowledgeHit = { keys: string[]; answer: string };

const KNOWLEDGE: KnowledgeHit[] = [
  {
    keys: ["price", "pricing", "cost", "how much", "$", "fee", "plan", "subscription"],
    answer:
      "We price after a short demo so it matches chat, phone, or both. No credit card to start. Go-live usually targets about 14 days; setup-fee refunds follow the Refund Policy.",
  },
  {
    keys: ["book", "demo", "meeting", "schedule", "calendar", "call me", "talk to"],
    answer:
      "Use the Book a demo page. We confirm fit and go-live timing from there.",
  },
  {
    keys: ["voice", "phone", "call", "receptionist", "voicemail", "ivr"],
    answer:
      "The AI Phone Receptionist answers inbound calls, qualifies the caller, can book while they are on the line, logs to your CRM, and routes real emergencies to a human. Recording and AI disclosure must match your state's consent rules.",
  },
  {
    keys: ["chat", "chatbot", "sdr", "website", "visitor", "widget"],
    answer:
      "The AI Sales Development Representative sits on your site, answers from your approved knowledge, qualifies visitors, and books meetings for the right leads.",
  },
  {
    keys: ["crm", "hubspot", "salesforce", "pipeline", "lead"],
    answer:
      "Caller and chat details can push into Salesforce, HubSpot, or your industry CRM when the conversation ends, so your team is not retyping notes.",
  },
  {
    keys: ["outbound", "prospect", "outreach", "email blast", "cold"],
    answer:
      "Consent-based outbound prospecting is an add-on once inbound is working. We start with website chat and the phone receptionist.",
  },
  {
    keys: ["who", "what is", "what do you", "company", "about", "botbeaver"],
    answer:
      "BotBeaver builds AI chat and phone agents for US service businesses. We design, train, and maintain them for you.",
  },
  {
    keys: ["how long", "timeline", "setup", "launch", "go live", "implement", "14"],
    answer:
      "Most scoped inbound setups target about 14 days after we have your content and access. If we miss that for reasons on our side, setup-fee refunds follow the Refund Policy.",
  },
  {
    keys: ["industry", "healthcare", "real estate", "dental", "law", "legal", "ecommerce", "retail", "clinic", "hipaa", "phi"],
    answer:
      "Core verticals include law, healthcare and clinics, e-commerce, retail, B2B services, and real estate. Healthcare PHI requires a BAA before processing. We are not a substitute for legal or medical advice.",
  },
  {
    keys: ["hello", "hi ", "hey", "good morning", "good afternoon"],
    answer:
      "Hi. I'm the BotBeaver demo agent. Ask about website chat, the phone receptionist, go-live, or whether we'd fit your industry.",
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
    return "Go ahead. Ask about pricing, website chat, the phone receptionist, or go-live timing.";
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
      return `${base} If you share your industry, I can map it to chat, phone, or both.`;
    }
    return base;
  }

  const priorUser = history.filter((m) => m.role === "user").length;
  const opener = priorUser > 2 ? "Got it." : "Good question.";

  return `${opener} From what you asked, BotBeaver's agents can handle that kind of conversation on chat or voice, qualify the lead, and book a next step. Tell me whether you care more about the website, the phone line, or CRM sync, or book a live demo and we will map it to your stack.`;
}
