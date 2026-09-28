import type { ReactElement } from "react";

export function IconChat({ className = "h-6 w-6" }: { className?: string }): ReactElement {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M5 6a3 3 0 013-3h8a3 3 0 013 3v7a3 3 0 01-3 3H11l-4 3v-3H8a3 3 0 01-3-3V6z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path d="M9 9h6M9 12h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function IconPhone({ className = "h-6 w-6" }: { className?: string }): ReactElement {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M8 3h3.5l1 4.5-2 1.5a12 12 0 005.5 5.5l1.5-2L21 13.5V17a2 2 0 01-2 2A14 14 0 015 5a2 2 0 012-2h1z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function IconOutbound({ className = "h-6 w-6" }: { className?: string }): ReactElement {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M4 12h12M12 6l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M20 5v14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function IconClock({ className = "h-6 w-6" }: { className?: string }): ReactElement {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.5" />
      <path d="M12 8v4l3 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function IconCalendar({ className = "h-6 w-6" }: { className?: string }): ReactElement {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <rect x="3" y="5" width="18" height="16" rx="2" stroke="currentColor" strokeWidth="1.5" />
      <path d="M3 10h18M8 3v4M16 3v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function IconCrm({ className = "h-6 w-6" }: { className?: string }): ReactElement {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <circle cx="8" cy="8" r="2.5" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="16" cy="8" r="2.5" stroke="currentColor" strokeWidth="1.5" />
      <path d="M4 18c1-3 3-4.5 6-4.5S15 15 16 18M16 13.5c1.5.2 3 1.2 4 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function IconQualify({ className = "h-6 w-6" }: { className?: string }): ReactElement {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.5" />
      <path d="M8.5 12.5l2.5 2.5 4.5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/** Simple animated-looking pipeline strip (CSS, no heavy 3D libs). */
export function LeadFlowStrip({ className = "" }: { className?: string }): ReactElement {
  const steps = [
    { label: "Visitor", Icon: IconChat },
    { label: "Qualify", Icon: IconQualify },
    { label: "Book", Icon: IconCalendar },
    { label: "CRM", Icon: IconCrm },
  ];
  return (
    <div
      className={`flex flex-wrap items-center justify-center gap-2 ${className}`}
      role="img"
      aria-label="Visitor to qualify to book to CRM"
    >
      {steps.map((s, i) => (
        <div key={s.label} className="flex items-center gap-2">
          <div className="bb-card-3d flex min-w-[4.25rem] flex-col items-center gap-1.5 rounded-sm border border-line bg-white px-3 py-3 text-accent shadow-sm">
            <s.Icon className="h-5 w-5" />
            <span className="font-mono text-[10px] uppercase tracking-wider text-slate">
              {s.label}
            </span>
          </div>
          {i < steps.length - 1 ? (
            <span className="text-accent" aria-hidden>
              →
            </span>
          ) : null}
        </div>
      ))}
    </div>
  );
}
