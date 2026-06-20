import type { ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";
import { BackToHome } from "@/components/ui/back-to-home";
import { GithubIcon, KaggleIcon } from "@/components/ui/brand-icons";
import type { Project } from "@/app/projects";

export type ProjectPageProps = {
  project: Project;
};

// Shared chrome for a project page: back link, title, external links,
// description, and tags. Each projects/<slug>.tsx wraps its write-up in this
// so every project page matches without repeating the boilerplate.
export function ProjectLayout({
  project,
  children,
}: ProjectPageProps & { children: ReactNode }) {
  return (
    <div className="mx-auto w-full max-w-4xl px-6 py-10">
      <nav aria-label="Breadcrumb" className="mb-8">
        <BackToHome />
      </nav>

      <header className="mb-10">
        <div className="flex items-start justify-between gap-4">
          <h1 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl dark:text-neutral-50">
            {project.title}
          </h1>
          <div className="mt-2 flex shrink-0 items-center gap-2 text-zinc-500 dark:text-neutral-400">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${project.title} on GitHub`}
                className="hover:text-zinc-900 dark:hover:text-neutral-50"
              >
                <GithubIcon className="h-5 w-5" />
              </a>
            )}
            {project.kaggle && (
              <a
                href={project.kaggle}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${project.title} on Kaggle`}
                className="hover:text-zinc-900 dark:hover:text-neutral-50"
              >
                <KaggleIcon className="h-5 w-5" />
              </a>
            )}
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${project.title} live demo`}
                className="hover:text-zinc-900 dark:hover:text-neutral-50"
              >
                <ArrowUpRight className="h-5 w-5" />
              </a>
            )}
          </div>
        </div>
        <p className="mt-3 text-base leading-7 text-zinc-600 dark:text-neutral-400">
          {project.description}
        </p>
        <ul className="mt-5 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <li
              key={tag}
              className="rounded-full border border-zinc-400 px-2.5 py-0.5 text-xs text-zinc-600 dark:border-neutral-800 dark:text-neutral-400"
            >
              {tag}
            </li>
          ))}
        </ul>
      </header>

      <article>{children}</article>
    </div>
  );
}
