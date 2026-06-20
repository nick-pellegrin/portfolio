import { FilteredGrid } from "@/components/sections/filtered-grid";
import { competitions, projects } from "@/app/projects";
import { HeroSection } from "@/components/sections/hero-section";
import { LogoMarquee } from "@/components/sections/logo-marquee";
import { HomeScrollRestore } from "@/components/ui/home-scroll-restore";
import { GradientHeading } from "@/components/ui/gradient-heading";
import { HalfPeekSection } from "@/components/ui/half-peek-section";

export default function Home() {
  return (
    <>
      <HomeScrollRestore />
      <HeroSection />
      {/* <LogoMarquee /> */}

      {/* About lives in its own enlarged card whose center lines up with the
          bottom of the hero image (exactly half of it peeks into the hero). */}
      <HalfPeekSection
        id="about"
        className="relative z-10 mx-auto w-full max-w-5xl scroll-mt-24 px-6"
      >
        <div className="rounded-3xl border border-zinc-200 bg-white p-8 shadow-xl sm:p-12 dark:border-neutral-800 dark:bg-neutral-900">
          <div className="mb-6">
            <GradientHeading>About</GradientHeading>
            <p className="mt-2 text-sm text-zinc-600 dark:text-neutral-400">
              A little about me and what I work on.
            </p>
          </div>
          <div className="flex flex-col gap-8 sm:flex-row sm:items-start">
            <div className="max-w-2xl space-y-4 text-base leading-7 text-zinc-600 dark:text-neutral-400">
              <p>
                I'm a software engineer interested in building thoughtful, technically challenging applications. My interests
                span full-stack development, machine learning, and system design, with a focus on turning complex ideas into
                practical software.
              </p>
              <p>
                I enjoy working across disciplines, from designing user-facing experiences and backend systems to developing
                AI solutions. Outside of work, I spend time competing in machine learning competitions,
                where difficult problems, imperfect data, and open-ended solution spaces create opportunities for experimentation
                and creative problem-solving.
              </p>
              <p>
                Below are a few projects that reflect the kinds of problems I enjoy tackling.
              </p>
            </div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/Nick_Pokemon_Sprite.png"
              alt="Pixel-art sprite of Nick"
              width={125}
              height={190}
              className="mx-auto w-32 shrink-0 self-center sm:mx-0 sm:w-40"
              style={{ imageRendering: "pixelated" }}
            />
          </div>
        </div>
      </HalfPeekSection>

      <div className="mx-auto w-full max-w-5xl px-6">
        <FilteredGrid
          id="competitions"
          title="AI/ML Competitions"
          description="" // "Public leaderboards and challenges I've entered."
          items={competitions}
        />

        <FilteredGrid
          id="projects"
          title="Projects"
          description="" // "A selection of things I've built."
          items={projects}
        />
      </div>
    </>
  );
}
