import type { ReactElement } from "react";

export default function StarsField({
  className = "",
}: {
  className?: string;
}): ReactElement {
  return <div className={`stars-navy ${className}`} aria-hidden />;
}
