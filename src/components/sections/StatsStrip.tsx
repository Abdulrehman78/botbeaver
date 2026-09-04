const metrics = [
  { value: "20+", label: "AI-run services in one stack" },
  { value: "<500ms", label: "Target response latency" },
  { value: "24/7", label: "Agent coverage, every channel" },
  { value: "$97", label: "Flat monthly stack from" },
];

export default function StatsStrip() {
  return (
    <section className="bg-[#F4F7F4]">
      <div className="h-2 w-full bg-[#C45E28]" />
      <div className="site-wrap py-10 md:py-12">
        <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#0B3D38]">
          At a glance
        </p>
        <div className="mt-6 grid grid-cols-2 gap-x-6 gap-y-8 md:grid-cols-4 md:gap-8">
          {metrics.map((m) => (
            <div key={m.label}>
              <div className="font-display text-3xl font-bold text-[#0B3D38] sm:text-4xl">
                {m.value}
              </div>
              <div className="mt-2 text-sm leading-snug text-text-dim">{m.label}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="h-1 w-full bg-[#0B3D38]" />
    </section>
  );
}
