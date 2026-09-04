import type { ReactElement } from "react";
import LangFlag from "@/components/ui/LangFlag";
import { LANGUAGES_ROW1, LANGUAGES_ROW2, type Language } from "@/lib/languages";

function LangRow({ items }: { items: Language[] }): ReactElement {
  return (
    <div className="flex flex-wrap gap-3">
      {items.map(({ code, name }) => (
        <span key={name} className="lang-chip">
          <span className="flag">
            <LangFlag code={code} name={name} />
          </span>
          {name}
        </span>
      ))}
    </div>
  );
}

/** Static language list — used on inner pages (e.g. Proof card). */
export default function LanguageTicker({
  className = "",
  label = "Speaks the room's language",
}: {
  className?: string;
  label?: string;
}): ReactElement {
  return (
    <div className={className}>
      {label ? (
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-text-dim">
          {label}
        </p>
      ) : null}
      <div className="flex flex-col gap-3">
        <LangRow items={LANGUAGES_ROW1} />
        <LangRow items={LANGUAGES_ROW2} />
      </div>
    </div>
  );
}
