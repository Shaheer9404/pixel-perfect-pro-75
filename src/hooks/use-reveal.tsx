import { useEffect, useRef, useState } from "react";

/**
 * Adds `.reveal-visible` once the element scrolls into view.
 * Pairs with the `.reveal` utility in styles.css.
 */
export function useReveal<T extends HTMLElement>(options?: {
  threshold?: number;
  once?: boolean;
}) {
  const ref = useRef<T>(null);
  const [visible, setVisible] = useState(false);
  const { threshold = 0.15, once = true } = options ?? {};

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry) return;
        if (entry.isIntersecting) {
          setVisible(true);
          if (once) observer.disconnect();
        } else if (!once) {
          setVisible(false);
        }
      },
      { threshold },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, once]);

  return { ref, visible };
}
