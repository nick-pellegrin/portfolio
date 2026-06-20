"use client";

import Link from "next/link";
import type { Project } from "@/app/projects";

const SCROLL_KEY = "home-scroll-y";

export function ProjectCard({ project }: { project: Project }) {
  const saveScroll = () => {
    try {
      sessionStorage.setItem(SCROLL_KEY, String(window.scrollY));
    } catch {}
  };

  return (
    <article className="group relative flex min-h-[24rem] flex-col overflow-hidden rounded-3xl border border-zinc-200 bg-white transition duration-200 hover:scale-[1.05] hover:border-zinc-300 dark:border-neutral-800 dark:bg-neutral-900 dark:hover:border-neutral-700">
      <Link
        href={`/${project.slug}`}
        aria-label={project.title}
        onClick={saveScroll}
        className="absolute inset-0 z-10 rounded-3xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-500"
      />

      {/* Banner: top third, full-bleed to the card edges. */}
      <div className="h-32 w-full shrink-0 overflow-hidden bg-zinc-100 dark:bg-neutral-800">
        {project.image && (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={project.image}
            alt=""
            aria-hidden
            className="h-full w-full object-cover"
          />
        )}
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-lg font-bold tracking-tight text-zinc-900 dark:text-neutral-50">
          {project.title}
        </h3>
        <p className="mt-3 text-sm leading-6 text-zinc-600 dark:text-neutral-400">
          {project.description}
        </p>
        <ul className="mt-auto flex flex-wrap gap-2 pt-5">
          {project.tags.map((tag) => (
            <li
              key={tag}
              className="rounded-full border border-zinc-400 px-2.5 py-0.5 text-xs text-zinc-600 dark:border-neutral-800 dark:text-neutral-400"
            >
              {tag}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
