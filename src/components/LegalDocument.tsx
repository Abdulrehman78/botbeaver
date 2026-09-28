import type { ReactElement } from "react";
import Link from "next/link";
import type { LegalBlock, LegalDoc } from "@/lib/legalContent";
import { LEGAL_LINKS } from "@/lib/legalContent";

function renderBlock(block: LegalBlock, i: number): ReactElement {
  switch (block.type) {
    case "h2":
      return (
        <h2
          key={i}
          className="mt-10 scroll-mt-28 font-display text-xl font-semibold tracking-tight text-sapphire sm:text-2xl"
        >
          {block.text}
        </h2>
      );
    case "h3":
      return (
        <h3
          key={i}
          className="mt-6 text-base font-semibold text-sapphire sm:text-lg"
        >
          {block.text}
        </h3>
      );
    case "ul":
      return (
        <ul
          key={i}
          className="mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed text-slate-dark sm:text-[15px]"
        >
          {block.items.map((item) => (
            <li key={item.slice(0, 64)}>{item}</li>
          ))}
        </ul>
      );
    case "table":
      return (
        <div
          key={i}
          className="mt-4 overflow-x-auto rounded-sm border border-line"
        >
          <table className="min-w-full border-collapse text-left text-sm">
            <thead className="bg-birch">
              <tr>
                {block.headers.map((h) => (
                  <th
                    key={h}
                    className="border-b border-line px-3 py-2.5 font-mono text-[11px] font-semibold uppercase tracking-wider text-slate"
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.rows.map((row, ri) => (
                <tr key={ri} className="odd:bg-white even:bg-birch/40">
                  {row.map((cell, ci) => (
                    <td
                      key={`${ri}-${ci}`}
                      className="border-b border-line/70 px-3 py-2.5 align-top text-slate-dark"
                    >
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    default:
      return (
        <p
          key={i}
          className="mt-3 text-sm leading-relaxed text-slate-dark sm:text-[15px]"
        >
          {block.text}
        </p>
      );
  }
}

export default function LegalDocument({
  doc,
}: {
  doc: LegalDoc;
}): ReactElement {
  return (
    <main aria-label={doc.title}>
      <section className="site-offset border-b border-line bg-birch">
        <div className="site-wrap grid gap-10 pb-16 pt-10 lg:grid-cols-[minmax(0,1fr)_220px] lg:gap-12">
          <article className="min-w-0">
            <p className="eyebrow-mark text-slate">Legal</p>
            <h1 className="mt-3 font-display text-3xl font-semibold tracking-tight text-sapphire sm:text-4xl">
              {doc.title}
            </h1>
            {doc.updated ? (
              <p className="mt-2 font-mono text-[11px] tracking-wider text-slate">
                Last updated {doc.updated}
              </p>
            ) : null}
            <div className="mt-8 max-w-3xl">{doc.blocks.map(renderBlock)}</div>
            <p className="mt-10 max-w-3xl text-xs leading-relaxed text-slate">
              These pages are provided for transparency and should be reviewed
              by qualified counsel before you rely on them for compliance.
            </p>
          </article>

          <aside className="lg:pt-2">
            <div className="lg:sticky lg:top-24">
              <h2 className="font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-circuit">
                Policies
              </h2>
              <nav
                className="mt-3 flex flex-col gap-2"
                aria-label="Legal policies"
              >
                {LEGAL_LINKS.map((l) => {
                  const active = l.href === `/legal/${doc.slug}`;
                  return (
                    <Link
                      key={l.href}
                      href={l.href}
                      className={`text-sm no-underline transition-colors ${
                        active
                          ? "font-medium text-accent"
                          : "text-slate-dark hover:text-sapphire"
                      }`}
                    >
                      {l.label}
                    </Link>
                  );
                })}
              </nav>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
