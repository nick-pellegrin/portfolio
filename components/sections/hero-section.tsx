import { ArrowRight } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative -mt-14 h-screen w-full">
      {/* Background image lives in <HeroBackground>, a fixed full-viewport layer
          rendered at the page root so it stays pinned while content scrolls. */}
      <div className="flex h-full w-full items-center justify-center px-6 pb-32">
        <div className="hero-card flex w-full max-w-xl flex-col items-start gap-6 rounded-3xl border border-white/20 bg-white/5 p-8 shadow-2xl backdrop-blur-md sm:p-10">
          <h1
            style={{
              backgroundImage: "var(--primary-color)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
            }}
            className="text-left text-5xl font-bold italic tracking-tight drop-shadow-lg sm:text-6xl lg:text-7xl"
          >
            Hi, I'm Nick
          </h1>
          <p className="max-w-md text-left text-base leading-7 text-zinc-100 drop-shadow">
            A short intro about yourself goes here — what you work on, what you
            care about, and what you&apos;re looking for next. Keep it to two or
            three sentences.
          </p>
          <div className="flex items-center gap-3 pt-2">
            <a
              href="#competitions"
              style={{
                backgroundImage: "var(--primary-color)",
              }}
              className="inline-flex h-10 items-center gap-1.5 rounded-full px-5 text-sm font-medium text-black transition-opacity hover:opacity-90"
            >
              See My Work
              <ArrowRight className="h-4 w-4" />
            </a>
            {/* <a
              href="#projects"
              className="inline-flex h-10 items-center gap-1.5 rounded-full bg-white px-5 text-sm font-medium text-black transition-opacity hover:opacity-90"
            >
              Projects
              <ArrowRight className="h-4 w-4" />
            </a> */}
          </div>
          
        </div>
      </div>
    </section>
  );
}
