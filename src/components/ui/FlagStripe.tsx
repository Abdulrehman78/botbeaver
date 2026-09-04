import type { ReactElement } from "react";

export default function FlagStripe({
  className = "",
}: {
  className?: string;
}): ReactElement {
  return <div className={`flag-stripe ${className}`} aria-hidden />;
}
