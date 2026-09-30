import { site } from "@/data/site";

/**
 * Shared decorative pieces — kept in one place so the "art" stays consistent.
 * All use `currentColor`, so colour is set by the parent's text colour.
 */

/** Double-ring monogram badge with four fine serifs at the compass points. */
export function Monogram({
  className = "",
  size = 44,
}: {
  className?: string;
  size?: number;
}) {
  return (
    <span
      className={`relative grid place-items-center ${className}`}
      style={{ width: size, height: size }}
      aria-hidden
    >
      <svg viewBox="0 0 48 48" className="absolute inset-0 h-full w-full">
        <circle cx="24" cy="24" r="22" fill="none" stroke="currentColor" strokeOpacity="0.5" strokeWidth="1" />
        <circle cx="24" cy="24" r="18" fill="none" stroke="currentColor" strokeOpacity="0.25" strokeWidth="1" />
        <g stroke="currentColor" strokeWidth="1.25" strokeLinecap="round">
          <path d="M24 1.5v3M24 43.5v3M1.5 24h3M43.5 24h3" />
        </g>
      </svg>
      <span className="font-serif font-semibold leading-none" style={{ fontSize: size * 0.42 }}>
        {site.monogram}
      </span>
    </span>
  );
}

/** Centered rule with a small rotated square in the middle. */
export function Divider({ className = "" }: { className?: string }) {
  return (
    <div className={`container-x ${className}`} aria-hidden>
      <div className="flex items-center gap-4">
        <span className="h-px flex-1 bg-gradient-to-r from-transparent to-navy-200" />
        <span className="h-1.5 w-1.5 rotate-45 bg-gold" />
        <span className="h-px w-16 bg-navy-200" />
        <span className="h-1.5 w-1.5 rotate-45 bg-gold" />
        <span className="h-px flex-1 bg-gradient-to-l from-transparent to-navy-200" />
      </div>
    </div>
  );
}

/** Line-art scales of justice — used as a faint background watermark. */
export function ScalesArt({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 200"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <circle cx="100" cy="30" r="5" />
      <path d="M100 35v140" />
      <path d="M40 48h120" />
      <path d="M40 48 22 92h36z" />
      <path d="M160 48l-18 44h36z" />
      <path d="M16 92a24 16 0 0 0 48 0" />
      <path d="M136 92a24 16 0 0 0 48 0" />
      <path d="M66 175h68" />
      <path d="M74 175c0-14 12-22 26-22s26 8 26 22" />
    </svg>
  );
}

/** Line-art classical column — faint background watermark. */
export function ColumnArt({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 120 240"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M18 26h84" />
      <path d="M26 26c2 10 8 14 8 22h52c0-8 6-12 8-22" />
      <path d="M34 50v150M48 50v150M62 50v150M76 50v150M86 50v150" />
      <path d="M30 200h60" />
      <path d="M20 216h80" />
      <path d="M30 200l-10 16M90 200l10 16" />
    </svg>
  );
}
