"use client";

import { Children, type ReactNode, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

type Props = {
  children: ReactNode;
  className?: string;
};

const DEFAULT_GRID =
  "grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3";

// Number of columns the cascade is tuned for. Used to flip the stagger
// for the reverse animation so the wave travels right-to-left on exit.
const COLUMNS = 3;

// Asymmetric visibility thresholds. The "in" threshold fires the forward
// animation when the card has crept this far into view at the bottom
// edge; the "out" threshold fires the reverse animation when the card
// has receded back to this much visibility on scroll-up. Higher OUT
// value = reverse starts sooner (while the card is still mostly visible).
const REVEAL_THRESHOLD_IN = 0.2;
const REVEAL_THRESHOLD_OUT = 0.8;

function AnimatedItem({
  children,
  columnIndex,
}: {
  children: ReactNode;
  columnIndex: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  // Direction-aware visibility. We only toggle state when the card is
  // crossing the BOTTOM edge of the viewport:
  //   - Card becomes visible there (scrolling down) → forward animation.
  //   - Card becomes hidden there (scrolling up) → reverse animation
  //     (slides down + fades out at the bottom of the page).
  // When the card exits the TOP edge (scrolling down past it) we leave
  // it settled, so scrolling back up over it from above doesn't replay
  // the entry animation.
  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        // Only react to crossings at the BOTTOM edge. When the card is
        // above the viewport top (top <= 0), hold state so a settled
        // card stays settled.
        if (entry.boundingClientRect.top <= 0) return;

        const ratio = entry.intersectionRatio;
        setShown((prev) => {
          if (!prev && ratio >= REVEAL_THRESHOLD_IN) return true;
          if (prev && ratio < REVEAL_THRESHOLD_OUT) return false;
          return prev;
        });
      },
      { threshold: [REVEAL_THRESHOLD_IN, REVEAL_THRESHOLD_OUT] },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <motion.div
      ref={ref}
      // Start state. y = how many px below its resting spot the card
      // begins (bigger = longer slide). opacity 0 = full fade-in.
      initial={{ opacity: 0, y: 100 }}
      // Settled target when shown; otherwise we animate back to the
      // initial values — same parameters, played in reverse.
      animate={shown ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
      transition={{
        // Per-card animation length in seconds (applies to forward AND reverse).
        duration: 0.8,
        // Easing curve (cubic-bezier). This one is a fast-out / soft-settle.
        ease: [0.22, 1, 0.36, 1],
        // Stagger gap between columns, in seconds. The diagonal cascade
        // comes from this: column N starts (N × multiplier) after column 0.
        // On the way in (shown=true) the wave runs left → right; on the
        // way out we flip the index so the wave runs right → left,
        // mirroring the entry. Bigger multiplier = more pronounced sweep.
        delay: (shown ? columnIndex : COLUMNS - 1 - columnIndex) * 0.08,
      }}
    >
      {children}
    </motion.div>
  );
}

export function AnimatedGrid({ children, className }: Props) {
  return (
    <div className={className ?? DEFAULT_GRID}>
      {Children.map(children, (child, index) => (
        <AnimatedItem columnIndex={index % 3}>{child}</AnimatedItem>
      ))}
    </div>
  );
}
