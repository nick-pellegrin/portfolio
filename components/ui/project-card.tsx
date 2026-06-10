"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { GithubIcon, KaggleIcon } from "@/components/ui/brand-icons";
import type { Project } from "@/app/projects";

const SCROLL_KEY = "home-scroll-y";

export function ProjectCard({ project }: { project: Project }) {
  const saveScroll = () => {
    try {
      sessionStorage.setItem(SCROLL_KEY, String(window.scrollY));
    } catch {}
  };

  return (
    <article className="group relative flex min-h-[24rem] flex-col rounded-lg border border-zinc-200 bg-white p-6 transition-colors hover:border-zinc-300 dark:border-neutral-800 dark:bg-neutral-900 dark:hover:border-neutral-700">
      <Link
        href={`/${project.slug}`}
        aria-label={project.title}
        onClick={saveScroll}
        className="absolute inset-0 rounded-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-500"
      />
      <div className="flex items-start justify-between gap-4">
        <h3 className="text-lg font-semibold tracking-tight text-zinc-900 dark:text-neutral-50">
          {project.title}
        </h3>
        <div className="relative z-10 flex items-center gap-2 text-zinc-500 dark:text-neutral-400">
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
      <p className="mt-3 flex-1 text-sm leading-6 text-zinc-600 dark:text-neutral-400">
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
    </article>
  );
}
