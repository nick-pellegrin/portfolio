// Infinite-loop marquee of technology logos. Sits below the hero with no
// background of its own, so it blends into the page's solid background.
// Animation is CSS-only (see .logo-marquee in globals.css); this component just
// lays out two copies of the logo set.

// Files live in /public/color-logos. A logo is either a single file
// (`{slug}.svg`) or a themed pair (`{slug}-light.svg` shown in light mode +
// `{slug}-dark.svg` shown in dark mode). Mark the themed ones below.
type Logo = { slug: string; themed?: boolean; label?: string };

const LOGOS: Logo[] = [
  { slug: "python", label: "Python" },
  { slug: "typescript", label: "TypeScript" },
  { slug: "javascript", label: "JavaScript" },
  { slug: "react", themed: true, label: "React" },
  { slug: "nextjs-icon", label: "Next.js" },
  { slug: "nodejs", label: "Node.js" },
  { slug: "tailwindcss", label: "Tailwind CSS" },
  { slug: "html5", label: "HTML5" },
  { slug: "css", label: "CSS" },
  { slug: "c", label: "C" },
  { slug: "c-plusplus", label: "C++" },
  { slug: "java", label: "Java" },
  { slug: "pytorch", label: "PyTorch" },
  { slug: "tensorflow", themed: true, label: "TensorFlow" },
  { slug: "hugging-face", label: "Hugging Face" },
  { slug: "langchain-logo", label: "LangChain" },
  { slug: "polars-logo", label: "Polars" },
  { slug: "openai", themed: true, label: "OpenAI" },
  { slug: "claude-ai-icon", label: "Claude" },
  { slug: "openrouter", themed: true, label: "OpenRouter" },
  { slug: "ollama", themed: true, label: "Ollama" },
  { slug: "mistral-ai-logo", label: "Mistral AI" },
  { slug: "qwen", themed: true, label: "Qwen" },
  { slug: "kimi-icon", label: "Kimi" },
  { slug: "nvidia", themed: true, label: "NVIDIA" },
  { slug: "openwebui", label: "Open WebUI" },
  { slug: "n8n", label: "n8n" },
  { slug: "fastapi", label: "FastAPI" },
  { slug: "flask", themed: true, label: "Flask" },
  { slug: "django", label: "Django" },
  { slug: "postgresql", label: "PostgreSQL" },
  { slug: "mysql", themed: true, label: "MySQL" },
  { slug: "sqlite", label: "SQLite" },
  { slug: "redis", label: "Redis" },
  { slug: "supabase", label: "Supabase" },
  { slug: "firebase", label: "Firebase" },
  { slug: "docker", label: "Docker" },
  { slug: "kubernetes", label: "Kubernetes" },
  { slug: "nginx", label: "Nginx" },
  { slug: "apache-kafka", themed: true, label: "Apache Kafka" },
  { slug: "git", label: "Git" },
  { slug: "github", themed: true, label: "GitHub" },
  { slug: "gitlab", label: "GitLab" },
  { slug: "vercel", themed: true, label: "Vercel" },
  { slug: "cloudflare", label: "Cloudflare" },
  { slug: "amazon-web-services", themed: true, label: "AWS" },
  { slug: "azure", label: "Azure" },
  { slug: "google-cloud", label: "Google Cloud" },
  { slug: "google-colaboratory", label: "Google Colab" },
  { slug: "keycloak", label: "Keycloak" },
  { slug: "electron", label: "Electron" },
  { slug: "framer", themed: true, label: "Framer" },
  { slug: "materialui", label: "Material UI" },
  { slug: "radix-ui", themed: true, label: "Radix UI" },
  { slug: "ui", themed: true, label: "shadcn/ui" },
  { slug: "reactrouter", label: "React Router" },
  { slug: "vite", label: "Vite" },
  { slug: "bun", label: "Bun" },
  { slug: "npm", label: "npm" },
  { slug: "uv", label: "uv" },
  { slug: "postman", label: "Postman" },
  { slug: "prettier", themed: true, label: "Prettier" },
  { slug: "opencode", themed: true, label: "OpenCode" },
  { slug: "raspberry-pi", label: "Raspberry Pi" },
];

const IMG_CLASS = "h-10 w-auto shrink-0";

function LogoItem({ logo }: { logo: Logo }) {
  const alt = logo.label ?? logo.slug;
  if (logo.themed) {
    return (
      <>
        {/* Light-mode variant (dark-colored logo) */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={`/color-logos/${logo.slug}-light.svg`}
          alt={alt}
          className={`${IMG_CLASS} block dark:hidden`}
        />
        {/* Dark-mode variant (light-colored logo) */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={`/color-logos/${logo.slug}-dark.svg`}
          alt=""
          aria-hidden
          className={`${IMG_CLASS} hidden dark:block`}
        />
      </>
    );
  }
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={`/color-logos/${logo.slug}.svg`}
      alt={alt}
      className={IMG_CLASS}
    />
  );
}

export function LogoMarquee() {
  return (
    <section
      aria-label="Technologies I've worked with"
      className="logo-marquee relative overflow-hidden py-8"
    >
      {/* Edge fade: keeps logos from popping in/out hard at the left/right. */}
      <div
        className="pointer-events-none flex"
        style={{
          maskImage:
            "linear-gradient(to right, transparent 0, black 8%, black 92%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent 0, black 8%, black 92%, transparent 100%)",
        }}
      >
        <ul className="logo-marquee-track flex items-center">
          {/* Two identical copies. Every item carries the SAME trailing margin
              (including the last of each copy), so the total width is exactly
              2× one copy and translating -50% lands copy 2 precisely where copy
              1 began — a seamless loop with no jump. */}
          {[...LOGOS, ...LOGOS].map((logo, i) => (
            <li
              key={`${logo.slug}-${i}`}
              className="mr-14 flex shrink-0 items-center"
              title={logo.label ?? logo.slug}
            >
              <LogoItem logo={logo} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
