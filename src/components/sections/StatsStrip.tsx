const metrics = [
  { value: "<3s", label: "Typical first response" },
  { value: "24/7/365", label: "No leads lost after 5pm" },
  { value: "3–5×", label: "Conversion vs a contact form" },
  { value: "14 days", label: "Live, or setup fee back" },
];

export default function StatsStrip() {
  return (
    <section className="bg-white">
      <div className="h-[3px] w-full bg-accent" />
      <div className="site-wrap py-10 md:py-12">
        <p className="eyebrow-mark">At a glance</p>
        <div className="bb-statboard mt-6 grid grid-cols-2 md:grid-cols-4">
          {metrics.map((m) => (
            <div
              key={m.label}
              className="border-line px-5 py-6 odd:border-r [&:nth-child(-n+2)]:border-b md:border-b-0 md:border-r md:last:border-r-0"
            >
              <div className="font-display text-3xl font-semibold tracking-tight text-sapphire sm:text-4xl">
                {m.value}
              </div>
              <div className="mt-2 text-sm leading-snug text-slate-dark">{m.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
