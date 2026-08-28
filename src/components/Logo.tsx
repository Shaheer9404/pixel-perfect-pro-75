export function LogoMark({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 80 80"
      className={`h-7 w-7 ${className}`}
      role="img"
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M16 16 L36 40 L16 64"
        fill="none"
        stroke="var(--mint)"
        strokeWidth="7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M34 16 L54 40 L34 64"
        fill="none"
        stroke="var(--primary)"
        strokeWidth="7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="66" cy="40" r="7" fill="var(--foreground)" />
    </svg>
  );
}

export function Logo() {
  return (
    <span className="flex items-center gap-3">
      <LogoMark className="h-9 w-9" />
      <span className="flex flex-col leading-none">
        <span className="text-lg font-bold tracking-tight text-foreground">devstack</span>
        <span className="text-[0.55rem] font-medium tracking-[0.34em] text-mint">STUDIOS</span>
      </span>
    </span>
  );
}
