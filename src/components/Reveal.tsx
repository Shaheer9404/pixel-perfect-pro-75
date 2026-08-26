import type { ReactNode } from "react";
import { useReveal } from "@/hooks/use-reveal";
import { cn } from "@/lib/utils";

type RevealProps = {
  children: ReactNode;
  /** stagger delay in ms */
  delay?: number;
  className?: string;
  as?: "div" | "article" | "section" | "li" | "span";
  id?: string;
};

export function Reveal({ children, delay = 0, className, as: Tag = "div", id }: RevealProps) {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <Tag
      id={id}
      ref={ref as never}
      style={{ transitionDelay: `${delay}ms` }}
      className={cn("reveal", visible && "reveal-visible", className)}
    >
      {children}
    </Tag>
  );
}
