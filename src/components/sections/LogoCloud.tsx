import type { ReactElement } from "react";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";

const industries = [
  {
    name: "Law firms",
    line: "Qualifies case type, jurisdiction, and urgency. Books consults during intake — even at 11pm.",
  },
  {
    name: "Healthcare & clinics",
    line: "Answers insurance and service questions, books new-patient appointments, handles after-hours without pulling staff off the floor.",
  },
  {
    name: "E-commerce",
    line: "Guides shoppers to the right item, handles return queries, and reduces abandoned sessions.",
  },
  {
    name: "Retail",
    line: "Checks stock, captures follow-up when something is out, and keeps the conversation going.",
  },
  {
    name: "B2B agencies & services",
    line: "Identifies company size, need, and budget before a human ever picks up the phone.",
  },
  {
    name: "Real estate",
    line: "Qualifies buyers vs. renters, captures preferences, and books property tours from late-night browsers.",
  },
];

export default function LogoCloud(): ReactElement {
  return (
    <section className="site-section border-b border-line bg-birch">
      <div className="site-wrap">
        <Reveal>
          <p className="eyebrow-mark">Vertical use cases</p>
          <h2 className="mt-3 max-w-xl font-display text-3xl font-semibold leading-tight tracking-tight text-sapphire sm:text-4xl">
            Built for the firms that lose leads after hours
          </h2>
          <p className="mt-4 max-w-lg text-base leading-relaxed text-slate-dark">
            Legal, healthcare, retail, e-commerce, and B2B. Same products. Trained
            to the way your callers and visitors actually talk.
          </p>
        </Reveal>

        <Stagger className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((item) => (
            <StaggerItem key={item.name}>
              <article className="bb-card-quiet h-full">
                <h3 className="flex items-center gap-2.5 font-display text-[15px] font-semibold text-sapphire">
                  <span className="bb-mark" aria-hidden />
                  {item.name}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-slate-dark">{item.line}</p>
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
