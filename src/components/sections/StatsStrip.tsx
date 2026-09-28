import { STATS } from "@/lib/siteContent";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";

export default function StatsStrip() {
  return (
    <section className="bg-white">
      <div className="h-[3px] w-full bg-accent" />
      <div className="site-wrap py-10 md:py-12">
        <Reveal>
          <p className="eyebrow-mark">At a glance</p>
        </Reveal>
        <Stagger className="bb-statboard mt-6 grid grid-cols-2 md:grid-cols-4">
          {STATS.map((m) => (
            <StaggerItem
              key={m.label}
              className="border-line px-5 py-6 odd:border-r [&:nth-child(-n+2)]:border-b md:border-b-0 md:border-r md:last:border-r-0"
            >
              <div className="font-display text-2xl font-semibold tracking-tight text-sapphire sm:text-3xl">
                {m.value}
              </div>
              <div className="mt-2 text-sm leading-snug text-slate-dark">{m.label}</div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
