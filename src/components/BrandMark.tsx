/**
 * Temporary BotBeaver mark (until client logo arrives).
 * Geometric beaver + chat notch. Use `onDark` on teal nav/footer bars.
 */
export default function BrandMark({
  className = "h-8 w-8",
  title = "BotBeaver",
  onDark = false,
}: {
  className?: string;
  title?: string;
  onDark?: boolean;
}) {
  const plate = onDark ? "#F7F9F8" : "#1E5C63";
  const face = onDark ? "#1E5C63" : "#F7F9F8";
  const eye = onDark ? "#123C42" : "#123C42";
  const tooth = "#C47A2E";

  return (
    <svg
      className={className}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label={title}
    >
      <title>{title}</title>
      <rect x="4" y="4" width="56" height="56" rx="14" fill={plate} />
      <path
        d="M18 28c0-7.2 6.4-12.5 14-12.5S46 20.8 46 28c0 3.2-1.1 6-2.9 8.2 1.6 1.1 2.9 2.8 2.9 5.1 0 2.6-2.1 4.2-4.6 4.2h-3.2c-.9 2.4-2.9 4-5.2 4s-4.3-1.6-5.2-4H25c-2.5 0-4.6-1.6-4.6-4.2 0-2.3 1.3-4 2.9-5.1C19.1 34 18 31.2 18 28Z"
        fill={face}
      />
      <ellipse cx="24.5" cy="20.5" rx="4.2" ry="5" fill={face} />
      <ellipse cx="39.5" cy="20.5" rx="4.2" ry="5" fill={face} />
      <circle cx="28" cy="27.5" r="2.1" fill={onDark ? "#F7F9F8" : eye} />
      <circle cx="36" cy="27.5" r="2.1" fill={onDark ? "#F7F9F8" : eye} />
      <ellipse cx="32" cy="32.5" rx="2.4" ry="1.8" fill={onDark ? "#F7F9F8" : eye} />
      <rect x="28.2" y="35.2" width="3.2" height="4.2" rx="0.6" fill={tooth} />
      <rect x="32.6" y="35.2" width="3.2" height="4.2" rx="0.6" fill={tooth} />
      <path
        d="M44 44.5c3.2.4 6.2 1.6 8.5 3.4-1.2-3.4-1-6.8.4-9.6-2.6 1.4-5.6 2.2-8.9 2.2Z"
        fill={tooth}
      />
    </svg>
  );
}
