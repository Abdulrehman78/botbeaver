type Service = {
  key: string;
  index: string;
  room: string;
  title: string;
  body: string;
  tags: string[];
  image: string;
  imageAlt: string;
};

const services: Service[] = [
  {
    key: "crm",
    index: "01",
    room: "Mission Control",
    title: "Every lead, one home.",
    body: "Chat, call, text or DM — every conversation lands in the same room, tracked from first hello to signed deal.",
    tags: ["Pipelines", "AI Recap", "Reporting"],
    image: "/media/img_7.webp",
    imageAlt: "CRM dashboard preview",
  },
  {
    key: "voice",
    index: "02",
    room: "The Voice Room",
    title: "Pick up on the first ring.",
    body: "A voice so human they forget it's AI — qualifying, answering, booking the appointment while you sleep.",
    tags: ["Real-time speech", "Booking", "24/7"],
    image: "/media/img_1.webp",
    imageAlt: "Voice AI preview",
  },
  {
    key: "web",
    index: "03",
    room: "The Front Door",
    title: "First impressions, engineered.",
    body: "Landing pages and funnels built to turn a click into a client — live in days, wired straight into your CRM.",
    tags: ["Landing pages", "Funnels", "No-code"],
    image: "/media/img_2.webp",
    imageAlt: "Landing page and funnel preview",
  },
  {
    key: "webinar",
    index: "04",
    room: "Center Stage",
    title: "The pitch that plays itself.",
    body: "Live or evergreen replay, registration to reminder to close — sequenced so the room is always full.",
    tags: ["Evergreen", "Live", "Replay"],
    image: "/media/img_4.webp",
    imageAlt: "Webinar stage preview",
  },
  {
    key: "chat",
    index: "05",
    room: "The Chat Room",
    title: "Never leave them on read.",
    body: "A humanoid chatbot on your site answers, qualifies and hands off a booked meeting — any hour, every time.",
    tags: ["Website chat", "Lead capture", "Instant reply"],
    image: "/media/img_3.webp",
    imageAlt: "Chat widget preview",
  },
  {
    key: "calltrack",
    index: "06",
    room: "The Record Room",
    title: "Know which call made you money.",
    body: "Every ring recorded, tagged and traced straight back to the ad, page or campaign that earned it.",
    tags: ["Attribution", "Recording", "Source tags"],
    image: "/media/img_5.webp",
    imageAlt: "Call tracking preview",
  },
  {
    key: "sms",
    index: "07",
    room: "The Mailroom",
    title: "One inbox. Every platform.",
    body: "Texts, Instagram and Facebook DMs land in one place — answered instantly, no app-hopping required.",
    tags: ["2-way SMS", "Instagram", "Facebook"],
    image: "/media/img_6.webp",
    imageAlt: "SMS and social inbox preview",
  },
  {
    key: "planner",
    index: "08",
    room: "The Studio",
    title: "Post once, show up everywhere.",
    body: "Plan, approve and publish across every channel from one calendar — the same update, five fewer tabs.",
    tags: ["Scheduling", "Multi-platform", "Approvals"],
    image: "/media/img_2.webp",
    imageAlt: "Social planner preview",
  },
  {
    key: "missedcall",
    index: "09",
    room: "The Safety Net",
    title: "The lead you didn't lose.",
    body: "Miss the call, still win the client — a text goes out within seconds, keeping the conversation alive.",
    tags: ["Instant text", "Zero missed leads"],
    image: "/media/img_1.webp",
    imageAlt: "Missed call recovery preview",
  },
  {
    key: "ads",
    index: "10",
    room: "The Spotlight",
    title: "Every dollar, accounted for.",
    body: "Google, Meta and Instagram campaigns built, launched and reported next to the leads they actually created.",
    tags: ["Google", "Meta", "Reporting"],
    image: "/media/img_7.webp",
    imageAlt: "Ads reporting preview",
  },
  {
    key: "social",
    index: "11",
    room: "The Broadcast Room",
    title: "Content that shows up, on schedule.",
    body: "Posts, captions and creative planned and published across every platform — built to grow the feed, not just fill it.",
    tags: ["Content", "Organic growth", "Multi-channel"],
    image: "/media/img_4.webp",
    imageAlt: "Social content preview",
  },
  {
    key: "seo",
    index: "12",
    room: "The Map Room",
    title: "Found first, ranked right.",
    body: "On-page fixes, local listings and keyword targeting that move you up the map and the search results both.",
    tags: ["Local SEO", "Keywords", "Google Maps"],
    image: "/media/img_5.webp",
    imageAlt: "SEO and maps preview",
  },
  {
    key: "email",
    index: "13",
    room: "The Letter Room",
    title: "The inbox, still open.",
    body: "Sequences, newsletters and win-back campaigns that land, get opened, and keep the pipeline warm.",
    tags: ["Sequences", "Newsletters", "Automation"],
    image: "/media/img_3.webp",
    imageAlt: "Email campaign preview",
  },
  {
    key: "reputation",
    index: "14",
    room: "The Hall of Mirrors",
    title: "What they say when you're not in the room.",
    body: "Review requests, ratings and listings tracked and nudged automatically — so the reputation matches the work.",
    tags: ["Reviews", "Listings", "Auto-requests"],
    image: "/media/img_6.webp",
    imageAlt: "Reputation and reviews preview",
  },
];

export default function ServicesStory() {
  return (
    <section id="catalog" className="site-section bg-white">
      <div className="site-wrap">
        <div className="max-w-xl border-l-4 border-[#C45E28] pl-5">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#C45E28]">
            Service catalog
          </p>
          <h2 className="mt-2 font-display text-3xl font-bold text-[#0B3D38] sm:text-4xl">
            Everything in the stack
          </h2>
          <p className="mt-3 text-base text-text-dim">
            Same offerings as before — listed as a catalog, not a wall of matching cards.
          </p>
        </div>

        <ol className="mt-12">
          {services.map((s, i) => (
            <li
              key={s.key}
              className={`grid items-start gap-4 border-t border-line py-8 md:grid-cols-[5rem_1fr_12rem] md:items-center ${
                i === services.length - 1 ? "border-b" : ""
              }`}
            >
              <span className="font-display text-3xl font-bold text-[#C45E28]">
                {s.index}
              </span>
              <div>
                <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#0B3D38]/60">
                  {s.room}
                </p>
                <h3 className="mt-1 font-display text-2xl font-bold text-[#0B3D38]">
                  {s.title}
                </h3>
                <p className="mt-2 max-w-xl text-sm leading-relaxed text-text-dim">
                  {s.body}
                </p>
                <p className="mt-3 text-[11px] font-semibold uppercase tracking-[0.12em] text-text-dimmer">
                  {s.tags.join(" · ")}
                </p>
              </div>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={s.image}
                alt={s.imageAlt}
                className="hidden h-28 w-full object-contain md:block"
              />
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
