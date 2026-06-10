"use client";

import { useEffect, useState } from "react";

type Theme = "light" | "dark";

function HalfCircleIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <circle cx="12" cy="12" r="10" />
      {/* right half filled to the edge */}
      <path d="M12 2a10 10 0 0 1 0 20z" fill="currentColor" stroke="none" />
    </svg>
  );
}

function applyTheme(theme: Theme) {
  document.documentElement.classList.toggle("dark", theme === "dark");
}

function systemTheme(): Theme {
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("light");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("theme") as Theme | null;
    setTheme(stored === "light" || stored === "dark" ? stored : systemTheme());
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    localStorage.setItem("theme", theme);
    applyTheme(theme);
  }, [theme, mounted]);

  const toggle = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  const label = mounted ? `Switch to ${theme === "dark" ? "light" : "dark"} mode` : "Toggle theme";

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={label}
      title={label}
      className="flex h-7 w-7 items-center justify-center rounded-md text-zinc-600 hover:bg-zinc-100 hover:text-zinc-900 dark:text-neutral-400 dark:hover:bg-neutral-900 dark:hover:text-neutral-50"
    >
      {mounted ? (
        <HalfCircleIcon className="h-5 w-5" />
      ) : (
        <span className="h-5 w-5" aria-hidden />
      )}
    </button>
  );
}
