/**
 * Full-viewport, fixed background image for the home page. Because it's
 * `position: fixed` it stays pinned to the viewport while the opaque content
 * sheet below the hero scrolls up "on top" of it.
 *
 * Rendered once at the page root, behind everything (-z-10). The two overlays
 * (edge blur + darkening gradient) frame the hero card while the hero is in
 * view; once the content sheet covers the viewport they're hidden behind it.
 */
export function HeroBackground() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/ireland-beach-hero-background.png"
        alt=""
        aria-hidden
        className="absolute inset-0 h-full w-full object-cover object-center"
      />
      <div
        className="absolute inset-0"
        style={{
          backdropFilter: "blur(10px)",
          WebkitBackdropFilter: "blur(10px)",
          maskImage:
            "linear-gradient(to right, black 0%, transparent 25%, transparent 75%, black 100%)",
          WebkitMaskImage:
            "linear-gradient(to right, black 0%, transparent 25%, transparent 75%, black 100%)",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />
    </div>
  );
}
