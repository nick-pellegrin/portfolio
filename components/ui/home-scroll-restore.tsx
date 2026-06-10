"use client";

import { useEffect } from "react";

const KEY = "home-scroll-y";

export function HomeScrollRestore() {
  useEffect(() => {
    const saved = sessionStorage.getItem(KEY);
    if (saved !== null) {
      const y = parseInt(saved, 10);
      if (!Number.isNaN(y) && y > 0) {
        sessionStorage.removeItem(KEY);
        const scroll = () => window.scrollTo(0, y);
        scroll();
        const raf1 = requestAnimationFrame(() => {
          scroll();
          requestAnimationFrame(scroll);
        });
        const t = setTimeout(scroll, 100);
        return () => {
          cancelAnimationFrame(raf1);
          clearTimeout(t);
        };
      }
    }
  }, []);

  return null;
}
