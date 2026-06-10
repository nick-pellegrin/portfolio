"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { X } from "lucide-react";
import { AnimatedGrid } from "@/components/ui/animated-grid";
import { GradientHeading } from "@/components/ui/gradient-heading";
import { ProjectCard } from "@/components/ui/project-card";
import type { Project } from "@/app/projects";

type Props = {
  id: string;
  title: string;
  description: string;
  items: Project[];
};

export function FilteredGrid({ id, title, description, items }: Props) {
  const [selected, setSelected] = useState<string[]>([]);
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const [highlight, setHighlight] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const rootRef = useRef<HTMLDivElement>(null);

  const allTags = useMemo(() => {
    const set = new Set<string>();
    for (const item of items) for (const t of item.tags) set.add(t);
    return [...set].sort((a, b) => a.localeCompare(b));
  }, [items]);

  const suggestions = useMemo(() => {
    const q = query.trim().toLowerCase();
    const selectedLower = new Set(selected.map((t) => t.toLowerCase()));
    return allTags
      .filter((t) => !selectedLower.has(t.toLowerCase()))
      .filter((t) => q === "" || t.toLowerCase().includes(q));
  }, [allTags, query, selected]);

  const filtered = useMemo(() => {
    if (selected.length === 0) return items;
    const sel = new Set(selected.map((t) => t.toLowerCase()));
    return items.filter((item) =>
      item.tags.some((tag) => sel.has(tag.toLowerCase())),
    );
  }, [items, selected]);

  useEffect(() => {
    setHighlight(0);
  }, [query, selected]);

  useEffect(() => {
    const onDown = (e: MouseEvent) => {
      if (!rootRef.current?.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", onDown);
    return () => document.removeEventListener("mousedown", onDown);
  }, []);

  const addTag = (tag: string) => {
    if (!selected.some((t) => t.toLowerCase() === tag.toLowerCase())) {
      setSelected([...selected, tag]);
    }
    setQuery("");
    inputRef.current?.focus();
  };

  const removeTag = (tag: string) => {
    setSelected(selected.filter((t) => t !== tag));
  };

  const clearAll = () => {
    setSelected([]);
    setQuery("");
    inputRef.current?.focus();
  };

  const handleKey = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && suggestions.length > 0) {
      e.preventDefault();
      addTag(suggestions[Math.min(highlight, suggestions.length - 1)]);
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      setOpen(true);
      setHighlight((h) => Math.min(h + 1, suggestions.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setHighlight((h) => Math.max(h - 1, 0));
    } else if (e.key === "Backspace" && query === "" && selected.length > 0) {
      removeTag(selected[selected.length - 1]);
    } else if (e.key === "Escape") {
      setOpen(false);
    }
  };

  return (
    <section id={id} className="py-16 sm:py-20 scroll-mt-16">
      <div className="mb-6">
        <GradientHeading>{title}</GradientHeading>
        <p className="mt-2 text-sm text-zinc-600 dark:text-neutral-400">
          {description}
        </p>
      </div>
      <div ref={rootRef} className="relative mb-8">
        <div
          onClick={() => {
            inputRef.current?.focus();
            setOpen(true);
          }}
          className="flex flex-wrap items-center gap-2 rounded-full border border-zinc-300 bg-white px-5 py-2 focus-within:border-zinc-500 dark:border-neutral-700 dark:bg-neutral-900 dark:focus-within:border-neutral-500"
        >
          {selected.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center gap-1 rounded-full bg-zinc-100 px-2 py-0.5 text-xs text-zinc-800 dark:bg-neutral-800 dark:text-neutral-100"
            >
              {tag}
              <button
                type="button"
                aria-label={`Remove ${tag}`}
                onClick={(e) => {
                  e.stopPropagation();
                  removeTag(tag);
                }}
                className="text-zinc-500 hover:text-zinc-900 dark:hover:text-neutral-50"
              >
                <X className="h-3 w-3" />
              </button>
            </span>
          ))}
          <input
            ref={inputRef}
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setOpen(true);
            }}
            onKeyDown={handleKey}
            onFocus={() => setOpen(true)}
            placeholder={selected.length === 0 ? "Search by tag…" : ""}
            className="min-w-[10ch] flex-1 bg-transparent text-sm text-zinc-900 outline-none placeholder:text-zinc-400 dark:text-neutral-50 dark:placeholder:text-neutral-500"
            aria-autocomplete="list"
            aria-expanded={open && suggestions.length > 0}
          />
          {selected.length > 0 && (
            <button
              type="button"
              aria-label="Clear all tags"
              onClick={(e) => {
                e.stopPropagation();
                clearAll();
              }}
              className="-mr-1 rounded-full p-1 text-zinc-500 hover:bg-zinc-100 hover:text-zinc-900 dark:hover:bg-neutral-800 dark:hover:text-neutral-50"
            >
              <X className="h-4 w-4" />
            </button>
          )}
        </div>
        {open && suggestions.length > 0 && (
          <ul
            role="listbox"
            className="absolute left-0 right-0 top-full z-10 mt-1 max-h-60 overflow-y-auto rounded-2xl border border-zinc-200 bg-white py-1 shadow-lg dark:border-neutral-800 dark:bg-neutral-950"
          >
            {suggestions.slice(0, 20).map((tag, i) => (
              <li key={tag}>
                <button
                  type="button"
                  onMouseDown={(e) => e.preventDefault()}
                  onClick={() => addTag(tag)}
                  onMouseEnter={() => setHighlight(i)}
                  className={`block w-full px-3 py-1.5 text-left text-sm ${
                    i === highlight
                      ? "bg-zinc-100 text-zinc-900 dark:bg-neutral-800 dark:text-neutral-50"
                      : "text-zinc-700 dark:text-neutral-300"
                  }`}
                >
                  {tag}
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
      {filtered.length === 0 ? (
        <p className="text-sm text-zinc-500 dark:text-neutral-400">
          No matches for the current tags.
        </p>
      ) : (
        <AnimatedGrid>
          {filtered.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </AnimatedGrid>
      )}
    </section>
  );
}
