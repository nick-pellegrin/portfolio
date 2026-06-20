import type { ReactNode } from "react";

// Section heading filled with the same warm gradient as the hero heading and
// the "See projects" button. Uses background-clip: text with a transparent
// fill; w-fit keeps the gradient spanning just the text width.
export function GradientHeading({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <h2
      style={{
        backgroundImage: "linear-gradient(135deg, #ff9666 0%, #ff9d83 100%)",
        WebkitBackgroundClip: "text",
        backgroundClip: "text",
        color: "transparent",
      }}
      className={`w-fit text-4xl font-semibold tracking-tight sm:text-5xl ${className}`}
    >
      {children}
    </h2>
  );
}
