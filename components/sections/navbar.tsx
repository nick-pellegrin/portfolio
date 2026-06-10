import Link from "next/link";
import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/brand-icons";
import { ThemeToggle } from "@/components/ui/theme-toggle";

export function Navbar() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-zinc-200/60 bg-background/70 backdrop-blur dark:border-neutral-800/60">
      <nav className="mx-auto flex h-14 max-w-5xl items-center justify-between px-6">
        <Link
          href="/"
          className="font-semibold tracking-tight text-zinc-900 dark:text-neutral-50"
        >
          Nick Pellegrin
        </Link>
        <div className="flex items-center gap-5 text-sm text-zinc-600 dark:text-neutral-400">
          <Link
            href="#about"
            className="hidden sm:inline hover:text-zinc-900 dark:hover:text-neutral-50"
          >
            About
          </Link>
          <Link
            href="#competitions"
            className="hidden sm:inline hover:text-zinc-900 dark:hover:text-neutral-50"
          >
            Competitions
          </Link>
          <Link
            href="#projects"
            className="hidden sm:inline hover:text-zinc-900 dark:hover:text-neutral-50"
          >
            Projects
          </Link>
          <div className="flex items-center gap-3">
            <ThemeToggle />
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="hover:text-zinc-900 dark:hover:text-neutral-50"
            >
              <GithubIcon className="h-5 w-5" />
            </a>
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hover:text-zinc-900 dark:hover:text-neutral-50"
            >
              <LinkedinIcon className="h-5 w-5" />
            </a>
            <a
              href="mailto:nickpellegrin.np@gmail.com"
              aria-label="Email"
              className="hover:text-zinc-900 dark:hover:text-neutral-50"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}
