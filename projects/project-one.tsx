import {
  ProjectLayout,
  type ProjectPageProps,
} from "@/components/sections/project-layout";
import { H2, P, UL, LI } from "@/components/ui/prose";

export default function ProjectOne({ project }: ProjectPageProps) {
  return (
    <ProjectLayout project={project}>
      <H2>Overview</H2>
      <P>
        Longer project write-up placeholder. Talk about the problem you set out
        to solve, who it&apos;s for, and why it mattered enough to build.
        Mention any constraints (time, budget, team size) that shaped the
        solution.
      </P>

      <H2>Highlights</H2>
      <UL>
        <LI>First notable achievement or metric worth showing off.</LI>
        <LI>Second thing that made this project interesting.</LI>
        <LI>Third win — could be a clever optimization or a tough bug fix.</LI>
      </UL>

      <H2>Technical Notes</H2>
      <P>
        Describe the stack choices and any interesting technical decisions. What
        did you learn? What would you do differently next time?
      </P>

      <H2>Status</H2>
      <P>
        Current state of the project — shipped, archived, in-progress, or
        actively maintained. Link to relevant deploys, release notes, or
        follow-up projects.
      </P>
    </ProjectLayout>
  );
}
