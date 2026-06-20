import type { ReactNode } from "react";

// Typographic primitives for project write-ups. These mirror the styling
// previously applied to rendered markdown, so content authored as TSX in
// projects/* stays visually consistent without per-file classes.

export function H2({ children }: { children: ReactNode }) {
  return (
    <h2 className="text-xl font-bold text-zinc-900 dark:text-neutral-50 [&:not(:first-child)]:mt-10">
      {children}
    </h2>
  );
}

export function H3({ children }: { children: ReactNode }) {
  return (
    <h3 className="text-base font-bold text-zinc-900 dark:text-neutral-50 [&:not(:first-child)]:mt-8">
      {children}
    </h3>
  );
}

export function P({ children }: { children: ReactNode }) {
  return (
    <p className="mt-3 text-base leading-7 text-zinc-700 dark:text-neutral-300">
      {children}
    </p>
  );
}

export function UL({ children }: { children: ReactNode }) {
  return (
    <ul className="mt-3 list-disc space-y-1 pl-5 text-base leading-7 text-zinc-700 dark:text-neutral-300">
      {children}
    </ul>
  );
}

export function OL({ children }: { children: ReactNode }) {
  return (
    <ol className="mt-3 list-decimal space-y-1 pl-5 text-base leading-7 text-zinc-700 dark:text-neutral-300">
      {children}
    </ol>
  );
}

export function LI({ children }: { children: ReactNode }) {
  return <li>{children}</li>;
}

export function A({ children, href }: { children: ReactNode; href: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-zinc-900 underline underline-offset-2 hover:text-zinc-700 dark:text-neutral-50 dark:hover:text-neutral-300"
    >
      {children}
    </a>
  );
}

export function Code({ children }: { children: ReactNode }) {
  return (
    <code className="rounded bg-zinc-200/60 px-1 py-0.5 font-mono text-sm text-zinc-800 dark:bg-neutral-800 dark:text-neutral-200">
      {children}
    </code>
  );
}
