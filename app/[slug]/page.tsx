import type { ComponentType } from "react";
import { notFound } from "next/navigation";
import { competitions, projects, type Project } from "@/app/projects";

type ProjectPage = ComponentType<{ project: Project }>;

function findProject(slug: string): Project | undefined {
  return (
    competitions.find((p) => p.slug === slug) ??
    projects.find((p) => p.slug === slug)
  );
}

// Loads a project's page component from its `filepath`. The field points at a
// TSX module under projects/; we strip the directory prefix and extension so
// the import is scoped to that folder, then resolve its default export.
async function loadPage(project: Project): Promise<ProjectPage | undefined> {
  if (!project.filepath) return undefined;
  const name = project.filepath
    .replace(/^projects\//, "")
    .replace(/\.tsx$/, "");
  const mod = await import(`@/projects/${name}`);
  return mod.default as ProjectPage;
}

export function generateStaticParams() {
  return [...competitions, ...projects].map((p) => ({ slug: p.slug }));
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = findProject(slug);
  if (!project) notFound();
  const ProjectPageContent = await loadPage(project);
  if (!ProjectPageContent) notFound();

  return <ProjectPageContent project={project} />;
}
