import { Mail } from "lucide-react";
import { GithubIcon, KaggleIcon, LinkedinIcon } from "@/components/ui/brand-icons";

export function Footer() {
  return (
    <footer className="relative z-10 bg-[var(--background)] border-t border-zinc-200/60 dark:border-neutral-800/60">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 px-6 py-8 text-sm text-zinc-500 sm:flex-row dark:text-neutral-400">
        <p>&copy; {new Date().getFullYear()} Nick Pellegrin</p>
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hover:text-zinc-900 dark:hover:text-neutral-50"
          >
            <GithubIcon className="h-4 w-4" />
          </a>
          <a
            href="https://www.kaggle.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Kaggle"
            className="hover:text-zinc-900 dark:hover:text-neutral-50"
          >
            <KaggleIcon className="h-4 w-4" />
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-zinc-900 dark:hover:text-neutral-50"
          >
            <LinkedinIcon className="h-4 w-4" />
          </a>
          <a
            href="mailto:nickpellegrin.np@gmail.com"
            aria-label="Email"
            className="hover:text-zinc-900 dark:hover:text-neutral-50"
          >
            <Mail className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
