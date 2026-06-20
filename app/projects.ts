export type Project = {
  slug: string;
  title: string;
  description: string;
  tags: string[];
  /** Card banner image (top third of the card). Path under /public. */
  image?: string;
  github?: string;
  demo?: string;
  kaggle?: string;
  /** Path to the TSX page under projects/, e.g. "projects/project-one.tsx". */
  filepath?: string;
};

export const competitions: Project[] = [
  {
    slug: "kaggle-competition-one",
    image: "/birdclef-2026.png",
    title: "Kaggle: Competition One",
    description:
      "Placement and a one-line summary of the task. Replace with the real competition, your rank, and the technique that mattered most.",
    tags: ["XGBoost", "Feature engineering", "Stacking"],
    github: "https://github.com/yourusername/kaggle-comp-one",
    kaggle: "https://www.kaggle.com/competitions/example-one",
    filepath: "projects/kaggle-competition-one.tsx",
  },
  {
    slug: "kaggle-competition-two",
    image: "/recod_ai_cover.png",
    title: "Kaggle: Competition Two",
    description:
      "Another competition placeholder. Swap for a real entry — dataset, model family you settled on, and final leaderboard position.",
    tags: ["PyTorch", "CNN", "Computer vision"],
    github: "https://github.com/yourusername/kaggle-comp-two",
    kaggle: "https://www.kaggle.com/competitions/example-two",
    demo: "https://www.kaggle.com/competitions/example",
  },
  {
    slug: "drivendata-challenge",
    image: "/arc-agi-2-cover.png",
    title: "DrivenData Challenge",
    description:
      "Non-Kaggle competition placeholder. One sentence on the task, one on the approach, one on the result.",
    tags: ["LightGBM", "Tabular", "Time series"],
    demo: "https://www.drivendata.org/competitions/example",
  },
  {
    slug: "kaggle-competition-three",
    image: "/stanford-rna-folding-2026.png",
    title: "Kaggle: Competition Three",
    description:
      "Placeholder for an NLP competition. Describe the corpus, how you handled tokenization, and your final score.",
    tags: ["Transformers", "NLP", "HuggingFace"],
    github: "https://github.com/yourusername/kaggle-comp-three",
    kaggle: "https://www.kaggle.com/competitions/example-three",
  },
  {
    slug: "kaggle-competition-four",
    image: "/playground-s5-e2.png",
    title: "Kaggle: Competition Four",
    description:
      "Tabular regression placeholder. Note the target metric, the baseline you beat, and any cross-validation trick that worked.",
    tags: ["CatBoost", "Regression", "K-Fold CV"],
    github: "https://github.com/yourusername/kaggle-comp-four",
    kaggle: "https://www.kaggle.com/competitions/example-four",
    demo: "https://www.kaggle.com/competitions/example-four",
  },
  {
    slug: "aicrowd-challenge",
    image: "/playground-s6-e2.png",
    title: "AICrowd Challenge",
    description:
      "Reinforcement learning placeholder. One line on the environment, one on the agent architecture, one on the outcome.",
    tags: ["RL", "PPO", "Gymnasium"],
    demo: "https://www.aicrowd.com/challenges/example",
  },
  {
    slug: "zindi-africa-competition",
    image: "/playground-s5-e3.png",
    title: "Zindi: Africa Competition",
    description:
      "Social-good competition placeholder. Mention the problem domain, the dataset size, and the leaderboard rank you finished at.",
    tags: ["Scikit-learn", "Imbalanced data", "SMOTE"],
    github: "https://github.com/yourusername/zindi-comp",
  },
  {
    slug: "neurips-competition",
    title: "NeurIPS Competition Track",
    description:
      "Research-flavored competition placeholder. Swap for the track, team, and what made your submission novel.",
    tags: ["JAX", "Research", "Benchmark"],
    github: "https://github.com/yourusername/neurips-comp",
    demo: "https://neurips.cc/Conferences/example",
  },
  {
    slug: "mlcontests-time-series",
    title: "MLContests: Forecasting",
    description:
      "Time-series forecasting placeholder. Note horizon, evaluation metric, and whether ensembling moved the needle.",
    tags: ["Prophet", "Ensembling", "Forecasting"],
    github: "https://github.com/yourusername/mlcontests-forecasting",
  },
];

export const projects: Project[] = [
  {
    slug: "project-one",
    title: "Project One",
    description:
      "A short description of this project. Replace with details about what you built, the problem it solves, and why it matters.",
    tags: ["Next.js", "TypeScript", "Tailwind"],
    github: "https://github.com/yourusername/project-one",
    demo: "https://example.com",
    filepath: "projects/project-one.tsx",
  },
  {
    slug: "project-two",
    title: "Project Two",
    description:
      "Another example project. Swap this out for something you're proud of — side project, open-source contribution, or coursework.",
    tags: ["React", "Node.js", "Postgres"],
    github: "https://github.com/yourusername/project-two",
  },
  {
    slug: "project-three",
    title: "Project Three",
    description:
      "Placeholder entry for a third project. Keep descriptions tight: one sentence on what it is, one on what you learned.",
    tags: ["Python", "FastAPI"],
    demo: "https://example.com",
  },
  {
    slug: "project-four",
    title: "Project Four",
    description:
      "CLI tool placeholder. Describe the pain point, the ergonomics choice, and any install stats worth mentioning.",
    tags: ["Rust", "CLI", "Cargo"],
    github: "https://github.com/yourusername/project-four",
  },
  {
    slug: "project-five",
    title: "Project Five",
    description:
      "Mobile app placeholder. One line on the platform, one on the primary user flow, one on what made it tricky.",
    tags: ["React Native", "Expo", "TypeScript"],
    github: "https://github.com/yourusername/project-five",
    demo: "https://example.com",
  },
  {
    slug: "project-six",
    title: "Project Six",
    description:
      "Data pipeline placeholder. Mention the data source, the orchestration layer, and how you verified correctness.",
    tags: ["Airflow", "dbt", "BigQuery"],
    github: "https://github.com/yourusername/project-six",
  },
  {
    slug: "project-seven",
    title: "Project Seven",
    description:
      "Browser extension placeholder. Swap for what it does, the APIs it taps, and any install count you want to show off.",
    tags: ["Chrome Extension", "Vite", "TypeScript"],
    github: "https://github.com/yourusername/project-seven",
    demo: "https://chrome.google.com/webstore/detail/example",
  },
  {
    slug: "project-eight",
    title: "Project Eight",
    description:
      "Infra placeholder. One line on what you deployed, one on the cost/perf profile, one on lessons learned.",
    tags: ["Terraform", "AWS", "Docker"],
    github: "https://github.com/yourusername/project-eight",
  },
  {
    slug: "project-nine",
    title: "Project Nine",
    description:
      "Game or creative coding placeholder. Mention the engine, the loop you're most proud of, and where someone can play it.",
    tags: ["Godot", "GDScript", "Shaders"],
    github: "https://github.com/yourusername/project-nine",
    demo: "https://example.itch.io/example",
  },
];
