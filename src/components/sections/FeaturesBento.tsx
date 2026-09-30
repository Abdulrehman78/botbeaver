import type { ReactElement } from "react";
import Link from "next/link";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { IconChat, LeadFlowStrip } from "@/components/ui/ProductIcons";

const products = [
  {
    num: "01",
    title: "AI Sales Development Representative",
    description:
      "Catches website visitors at the moment of highest intent, qualifies them in real conversation, books the meeting, and hands off only the right leads.",
    tags: "Typically under 3s · Nights and weekends",
    href: "/services#chatbot",
    Icon: IconChat,
  },
  {
    num: "02",
    title: "Marketing, SEO & AEO",
    description:
      "Growth services so buyers find you — classic search, answer engines, funnels, social, and ads — wired to the same chat and CRM stack.",
    tags: "SEO · AEO · GEO · Funnels · SMM",
    href: "/services#growth",
    Icon: IconChat,
  },
];

export default function FeaturesBento(): ReactElement {
  return (
    <section className="relative overflow-hidden site-section bg-sapphire-deep text-white">
      <div className="bb-hero-glow pointer-events-none absolute inset-0 opacity-60" aria-hidden />
      <div className="dam-grid dam-grid--fade pointer-events-none absolute inset-0" aria-hidden />
      <div className="site-wrap relative z-10 grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        <Reveal>
          <p className="eyebrow-mark text-[#A8C4C0]">Chat + growth</p>
          <h2 className="mt-3 font-display text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
            Chat captures the site. Growth gets you found.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[#A8C4C0]">
            Website chat qualifies and books. Marketing, SEO, AEO, and related
            services bring more of the right visitors in. Your team still owns
            escalations and anything the agent should not answer.
          </p>
          <div className="mt-8 rounded-sm border border-white/10 bg-white/5 p-4">
            <LeadFlowStrip />
          </div>
          <Link
            href="/process"
            className="mt-8 inline-flex items-center text-[15px] font-semibold text-accent no-underline hover:text-white"
          >
            How it works →
          </Link>
        </Reveal>

        <Stagger className="grid gap-3" stagger={0.1}>
          {products.map((p) => (
            <StaggerItem key={p.num}>
              <Link
                href={p.href}
                className="bb-panel-dark bb-card-3d grid gap-2 p-5 no-underline sm:grid-cols-[4.5rem_1fr] sm:gap-6 sm:p-6"
              >
                <div className="flex flex-col gap-2">
                  <span className="font-mono text-sm font-semibold tracking-wider text-accent">
                    {p.num}
                  </span>
                  <p.Icon className="h-7 w-7 text-circuit" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-semibold tracking-tight">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#A8C4C0]">
                    {p.description}
                  </p>
                  <p className="mt-3 font-mono text-[11px] font-medium uppercase tracking-[0.12em] text-circuit">
                    {p.tags}
                  </p>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
