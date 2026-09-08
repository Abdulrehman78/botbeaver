/** Shared knowledge + reply helpers for the hero demo chat */

export const DEMO_SYSTEM_PROMPT = `You are the BotBeaver demo agent on the marketing site.
Answer helpfully, clearly, and briefly (2–4 sentences unless the user asks for detail).
Sound like a confident builder in plain English. Talk about outcomes (booked meetings, answered questions, qualified leads), not model names. Beaver wordplay at most once.

About BotBeaver:
- Tagline: Builds conversations that work.
- Two core inbound products:
  1) AI Sales Development Representative — website chatbot that qualifies visitors in conversation, screens poor fits, and books meetings to Google Calendar or Calendly. Responds in under 3 seconds. Live 24/7/365. Visitors who get an instant answer convert at 3–5× a contact form.
  2) AI Phone Receptionist — answers instantly (no voicemail), qualifies the caller, books the appointment live on the call, logs recordings/transcripts to Salesforce/HubSpot/industry CRM, and routes true emergencies to an on-call human.
- Outbound (prospecting + hyper-personalized outreach) is an add-on after inbound is working — not the first pitch.
- Verticals: law firms, healthcare & clinics, e-commerce, retail, B2B agencies, real estate; phone also serves home services, property management, med-spa, logistics.
- We design, build, and maintain the agent. Typical go-live: 14 days, or setup fee back.
- CTA: book a demo at /contact. Do not invent a booked meeting.

If asked something unrelated, answer briefly then steer back. Never invent private customer data.`;

type KnowledgeHit = { keys: string[]; answer: string };

const KNOWLEDGE: KnowledgeHit[] = [
  {
    keys: ["price", "pricing", "cost", "how much", "$", "fee", "plan", "subscription"],
    answer:
      "We price after a short demo so it matches the product you actually need — website SDR, phone receptionist, or both. No credit card to start. Live in 14 days or your setup fee back.",
  },
  {
    keys: ["book", "demo", "meeting", "schedule", "calendar", "call me", "talk to"],
    answer:
      "Use the Book a demo page. We confirm fit and go-live from there — live in 14 days or your setup fee back.",
  },
  {
    keys: ["voice", "phone", "call", "receptionist", "voicemail", "ivr"],
    answer:
      "The AI Phone Receptionist answers instantly so nothing goes to voicemail. It qualifies the caller, books the appointment while they're on the line, logs the call to your CRM, and routes real emergencies to an on-call human.",
  },
  {
    keys: ["chat", "chatbot", "sdr", "website", "visitor", "widget"],
    answer:
      "The AI SDR lives on your site. It catches visitors in real conversation, screens poor fits, and books meetings to Google Calendar or Calendly — under 3 seconds, 24/7, no staffing cost.",
  },
  {
    keys: ["crm", "hubspot", "salesforce", "pipeline", "lead"],
    answer:
      "Call recordings, transcripts, and caller details push into Salesforce, HubSpot, or your industry CRM when the conversation ends. Zero manual entry.",
  },
  {
    keys: ["outbound", "prospect", "outreach", "email blast", "cold"],
    answer:
      "Automated prospecting and hyper-personalized outreach are add-ons once inbound is working. We start with the chatbot and phone receptionist — that's the pain most teams already feel.",
  },
  {
    keys: ["who", "what is", "what do you", "company", "about", "botbeaver"],
    answer:
      "BotBeaver builds conversations that work. Two products: an AI sales chatbot for the website and an AI phone receptionist for inbound calls. We design, train, and maintain them for you.",
  },
  {
    keys: ["how long", "timeline", "setup", "launch", "go live", "implement", "14"],
    answer:
      "Most clients go live in 14 days. If we miss that, your setup fee comes back.",
  },
  {
    keys: ["industry", "healthcare", "real estate", "dental", "law", "legal", "ecommerce", "retail", "clinic"],
    answer:
      "Core verticals are law firms, healthcare and clinics, e-commerce, retail, B2B services, and real estate. The phone receptionist also fits home services, property management, and med-spa.",
  },
  {
    keys: ["hello", "hi ", "hey", "good morning", "good afternoon"],
    answer:
      "Hi — I'm the BotBeaver demo agent. Ask about the website SDR, the phone receptionist, go-live, or whether we'd fit your industry.",
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
export function localDemoReply(userText: string, history: Array<{ role: string; content: string }> = []): string {
  const t = userText.toLowerCase().trim();
  if (!t) {
    return "Go ahead — pricing, the website SDR, the phone receptionist, or go-live timing.";
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
      return `${base} If you share your industry, I can map it to the chatbot, the phone line, or both.`;
    }
    return base;
  }

  const priorUser = history.filter((m) => m.role === "user").length;
  const opener = priorUser > 2 ? "Got it." : "Good question.";

  return `${opener} From what you asked — “${userText.slice(0, 120)}${userText.length > 120 ? "…" : ""}” — here's the short take: BotBeaver's agents handle that kind of conversation on chat or voice, qualify the lead, and book a next step. Tell me whether you care more about the website, the phone line, or CRM sync — or book a live demo and we'll map it to your stack.`;
}
