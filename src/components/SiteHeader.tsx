import { useState } from "react";
import { Logo } from "./Logo";

const links = [
  { href: "#services", label: "Services" },
  { href: "#process", label: "Process" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/85 backdrop-blur-lg">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#top" aria-label="devstack studios home">
          <Logo />
        </a>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Main">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-muted-foreground transition-colors hover:text-mint"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className="rounded-md bg-gradient-accent px-4 py-2 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
          >
            Book a call
          </a>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label="Toggle menu"
          className="flex flex-col gap-1.5 p-2 md:hidden"
        >
          <span className="h-0.5 w-5 bg-mint" />
          <span className="h-0.5 w-5 bg-mint" />
          <span className="h-0.5 w-5 bg-mint" />
        </button>
      </div>

      {open && (
        <nav
          className="flex flex-col gap-1 border-t border-border/70 px-6 py-4 md:hidden"
          aria-label="Mobile"
        >
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="py-2 text-sm text-muted-foreground transition-colors hover:text-mint"
            >
              {l.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
