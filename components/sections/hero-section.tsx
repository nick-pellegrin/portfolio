import { ArrowRight } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative isolate -mt-14 h-screen w-full overflow-hidden">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/ireland-beach-hero-background.png"
        alt=""
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "center",
          zIndex: -20,
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          zIndex: -15,
          backdropFilter: "blur(10px)",
          WebkitBackdropFilter: "blur(10px)",
          maskImage:
            "linear-gradient(to right, black 0%, transparent 25%, transparent 75%, black 100%)",
          WebkitMaskImage:
            "linear-gradient(to right, black 0%, transparent 25%, transparent 75%, black 100%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-black/50 via-black/30 to-black/60"
      />
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
