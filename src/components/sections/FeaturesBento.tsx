import type { ReactElement } from "react";
import Link from "next/link";

const products = [
  {
    num: "01",
    title: "AI Sales Development Representative",
    description:
      "Catches website visitors at the moment of highest intent — qualifies them in real conversation, books the meeting, and hands off only the right leads.",
    tags: "Responds in under 3 seconds · Live 24 / 7 / 365",
    href: "/services#chatbot",
  },
  {
    num: "02",
    title: "AI Phone Receptionist",
    description:
      "Answers instantly, qualifies the caller, books the appointment, and routes real emergencies — all in real time, without sending anyone to voicemail.",
    tags: "Zero voicemail · Books live on the call · CRM logging",
    href: "/services#phone",
  },
];

export default function FeaturesBento(): ReactElement {
  return (
    <section className="relative overflow-hidden site-section bg-sapphire-deep text-white">
      <div className="bb-hero-glow pointer-events-none absolute inset-0 opacity-60" aria-hidden />
      <div className="dam-grid dam-grid--fade pointer-events-none absolute inset-0" aria-hidden />
      <div className="site-wrap relative z-10 grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        <div>
          <p className="eyebrow-mark text-[#8FA3C4]">Two products · Inbound first</p>
          <h2 className="mt-3 font-display text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
            Chat captures the site. Phone captures the call.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[#8FA3C4]">
            Together they close the after-hours gap — missed web visitors and
            full voicemail inboxes — that every firm in our verticals already
            feels.
          </p>
          <Link
            href="/services"
            className="mt-8 inline-flex items-center text-[15px] font-semibold text-accent no-underline hover:text-white"
          >
            How it works →
          </Link>
        </div>

        <ol className="grid gap-3">
          {products.map((p) => (
            <li key={p.num}>
              <Link
                href={p.href}
                className="bb-panel-dark grid gap-2 p-5 no-underline sm:grid-cols-[4.5rem_1fr] sm:gap-6 sm:p-6"
              >
                <span className="font-mono text-sm font-semibold tracking-wider text-accent">
                  {p.num}
                </span>
                <div>
                  <h3 className="font-display text-xl font-semibold tracking-tight">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#8FA3C4]">
                    {p.description}
                  </p>
                  <p className="mt-3 font-mono text-[11px] font-medium uppercase tracking-[0.12em] text-circuit">
                    {p.tags}
                  </p>
                </div>
              </Link>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
