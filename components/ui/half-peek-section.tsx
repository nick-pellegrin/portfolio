"use client";

import { useLayoutEffect, useRef, useState, type ReactNode } from "react";

/**
 * Renders a <section> that pulls itself upward by exactly half of its own
 * rendered height, so it straddles the boundary directly above it — here, the
 * hero image's bottom edge lands on this section's vertical center.
 *
 * margin-top can't express "half my own height" in CSS (percentage margins are
 * relative to width), so we measure the height and apply it in pixels. A ~20vh
 * CSS approximation is used for SSR / before the first measurement.
 */
export function HalfPeekSection({
  id,
  className = "",
  children,
}: {
  id?: string;
  className?: string;
  children: ReactNode;
}) {
  const ref = useRef<HTMLElement>(null);
  const [half, setHalf] = useState<number | null>(null);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;
    const measure = () => setHalf(el.offsetHeight / 2);
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      id={id}
      style={half !== null ? { marginTop: -half } : undefined}
      className={`${half === null ? "-mt-[20vh]" : ""} ${className}`.trim()}
    >
      {children}
    </section>
  );
}
