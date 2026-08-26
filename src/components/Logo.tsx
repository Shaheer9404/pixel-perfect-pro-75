export function LogoMark({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex flex-col gap-[3px] ${className}`} aria-hidden="true">
      <span className="h-[4px] w-6 rounded-[1px] bg-primary/50" />
      <span className="h-[4px] w-6 rounded-[1px] bg-primary" />
      <span className="h-[4px] w-6 rounded-[1px] bg-mint" />
    </span>
  );
}

export function Logo() {
  return (
    <span className="flex items-center gap-3">
      <LogoMark />
      <span className="flex flex-col leading-none">
        <span className="text-lg font-bold tracking-tight text-foreground">devstack</span>
        <span className="text-[0.55rem] font-medium tracking-[0.34em] text-mint">STUDIOS</span>
      </span>
    </span>
  );
}
