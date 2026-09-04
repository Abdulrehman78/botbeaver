import type { ReactElement } from "react";

const markets = [
  { name: "United States", region: "Headquarters market", src: "https://flagcdn.com/w160/us.png" },
  { name: "United Kingdom", region: "Europe", src: "https://flagcdn.com/w160/gb.png" },
  { name: "Canada", region: "North America", src: "https://flagcdn.com/w160/ca.png" },
  { name: "Australia", region: "APAC", src: "https://flagcdn.com/w160/au.png" },
  { name: "Europe", region: "EU coverage", src: "https://flagcdn.com/w160/eu.png" },
  { name: "Pakistan", region: "Build HQ — Lahore", src: "https://flagcdn.com/w160/pk.png" },
];

const industries = [
  {
    name: "Healthcare",
    line: "After-hours intake, appointment booking, and insurance FAQs — without a queue.",
  },
  {
    name: "Real Estate",
    line: "Qualify the lead, book the showing, and follow up while the listing is still hot.",
  },
  {
    name: "E-Commerce",
    line: "Order status, returns, and cart recovery on chat and voice, around the clock.",
  },
];

export default function LogoCloud(): ReactElement {
  return (
    <section className="site-section border-b border-line bg-white">
      <div className="site-wrap grid gap-10 lg:grid-cols-2 lg:gap-16">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#C45E28]">
            Where we work
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold leading-tight text-[#0B3D38] sm:text-4xl">
            Trusted across markets and industries
          </h2>
          <p className="mt-4 max-w-sm text-base leading-relaxed text-text-dim">
            Agents that answer in the same time zones and verticals your
            customers already live in — live, not queued.
          </p>
        </div>

        <div className="-mx-1 overflow-x-auto">
          <table className="w-full min-w-[20rem] border-t-2 border-[#0B3D38] text-left">
            <thead>
              <tr className="bg-[#0B3D38] text-white">
                <th className="px-3 py-2.5 text-[11px] font-bold uppercase tracking-[0.14em]">
                  Market
                </th>
                <th className="px-3 py-2.5 text-[11px] font-bold uppercase tracking-[0.14em]">
                  Coverage
                </th>
              </tr>
            </thead>
            <tbody>
              {markets.map((m) => (
                <tr key={m.name} className="border-b border-line">
                  <td className="px-3 py-3">
                    <span className="flex items-center gap-3">
                      <img
                        src={m.src}
                        alt=""
                        width={28}
                        height={20}
                        className="h-5 w-7 shrink-0 object-cover"
                      />
                      <span className="font-semibold text-text">{m.name}</span>
                    </span>
                  </td>
                  <td className="px-3 py-3 text-sm text-text-dim">{m.region}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="site-wrap mt-12 border-t border-line pt-10">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#0B3D38]">
          Core verticals
        </p>
        <ul className="mt-6 grid gap-8 md:grid-cols-3">
          {industries.map((item) => (
            <li key={item.name} className="border-l-4 border-[#C45E28] pl-4">
              <h3 className="font-display text-xl font-bold text-[#0B3D38]">
                {item.name}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-text-dim">{item.line}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
