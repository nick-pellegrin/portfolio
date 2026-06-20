import { FilteredGrid } from "@/components/sections/filtered-grid";
import { competitions, projects } from "@/app/projects";
import { HeroSection } from "@/components/sections/hero-section";
import { LogoMarquee } from "@/components/sections/logo-marquee";
import { HomeScrollRestore } from "@/components/ui/home-scroll-restore";
import { GradientHeading } from "@/components/ui/gradient-heading";

export default function Home() {
  return (
    <>
      <HomeScrollRestore />
      <HeroSection />
      {/* <LogoMarquee /> */}
      <div className="mx-auto w-full max-w-5xl px-6">
        <section id="about" className="py-16 sm:py-20 scroll-mt-16">
          <div className="mb-6">
            <GradientHeading>About</GradientHeading>
            <p className="mt-2 text-sm text-zinc-600 dark:text-neutral-400">
              A little about me and what I work on.
            </p>
          </div>
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
        </section>

        <FilteredGrid
          id="competitions"
          title="AI/ML Competitions"
          description="Public leaderboards and challenges I've entered."
          items={competitions}
        />

        <FilteredGrid
          id="projects"
          title="Projects"
          description="A selection of things I've built."
          items={projects}
        />
      </div>
    </>
  );
}
