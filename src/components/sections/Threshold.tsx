import type { ReactElement } from "react";
import FlagStripe from "@/components/ui/FlagStripe";

export default function Threshold(): ReactElement {
  return (
    <section className="bg-[#F4F7F4] site-offset">
      <div className="h-2 bg-[#C45E28]" />
      <div className="site-wrap pb-12 pt-10 md:pb-16 md:pt-12">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#C45E28]">
          Service catalog
        </p>
        <div className="mt-3 grid gap-6 md:grid-cols-[1.2fr_0.8fr] md:items-end">
          <h1 className="font-display text-4xl font-bold leading-tight text-[#0B3D38] md:text-5xl">
            Fourteen rooms.
            <span className="block text-[#0B3D38]/60">One workforce.</span>
          </h1>
          <p className="max-w-md text-base leading-relaxed text-text-dim">
            Every service is built to run itself — chat, voice, CRM, and growth —
            pointed at one job: don&apos;t let the lead go quiet.
          </p>
        </div>
      </div>
      <FlagStripe />
    </section>
  );
}
