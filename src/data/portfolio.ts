export type TerminalSection = {
  slug: "about" | "projects" | "experience";
  label: string;
  href: string;
  command: string;
  heading: string;
  lines: string[];
};

export type ProjectPreview = {
  title: string;
  year: string;
  description: string;
  image: string;
  tags: string[];
  sourceHref?: string;
};

export type GithubProject = {
  name: string;
  description: string;
  href: string;
  year: string;
  language: string;
  stars: number;
  tags: string[];
  highlighted?: boolean;
};

export type TimelineItem = {
  title: string;
  eyebrow: string;
  description: string;
  marker: "circle" | "oval" | "large";
  media: {
    type: "image" | "github" | "code" | "terminal" | "spark";
    shape: "circle" | "square";
    src?: string;
    alt?: string;
  };
  href?: string;
  side: "left" | "right";
};

export type SocialLink = {
  label: string;
  href: string;
  handle: string;
};

export type HeroAction = {
  label: string;
  href: string;
};

export const terminalAnimation = {
  promptSpeedMs: 35,
  outputSpeedMs: 3,
  cursorBlinkMs: 2500,
};

export const profileName = "Eryk Kściuczyk";

export const socialLinks: SocialLink[] = [
  {
    label: "GitHub",
    href: "https://github.com/erykksc",
    handle: "@erykksc",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/eryk-ksciuczyk",
    handle: "/in/eryk-ksciuczyk",
  },
];

export const heroContent = {
  kicker: "Software developer portfolio",
  title: profileName,
  description:
    "Computer Science master's student at TU Berlin building practical software across web apps, systems tooling, data processing, infrastructure, and small game experiments.",
};

export const heroActions: HeroAction[] = [
  {
    label: "CONTACT ME",
    href: "mailto:your.email@example.com",
  },
  {
    label: "VIEW RESUME",
    href: "/resume.pdf",
  },
];

export const terminalSections: TerminalSection[] = [
  {
    slug: "about",
    label: "About Me",
    href: "/about",
    command: "cat about.txt",
    heading: "About Me",
    lines: [
      "Stats:",
      "- Software developer focused on practical, user-facing systems",
      "- Technische Universitaet Berlin, Master degree 2027",
      "- Technische Universitaet Berlin, Bachelor degree 2025",
      "- Silesian University of Technology",
      "- International Baccalaureate 2021",
    ],
  },
  {
    slug: "projects",
    label: "Projects",
    href: "/projects",
    command: "ls projects && cat highlights.txt",
    heading: "Projects",
    lines: [
      "Pinned GitHub highlights:",
      "- pdf-tools-js: browser PDF merge, cut, and join utility",
      "- busybees: cloud-native group scheduling app for shared free time",
      "- kwikquiz: Go and HTMX quiz platform",
      "- chatreply: CLI bridge from stdin to chat platforms",
      "- citus-mobilitydb: Docker images for MobilityDB with Citus",
      "- Terminal-Tetris: terminal Tetris built on a custom engine",
    ],
  },
  {
    slug: "experience",
    label: "Professional Experience",
    href: "/experience",
    command: "cat professional_experience.txt",
    heading: "Professional Experience",
    lines: [
      "Experience:",
      "- Role One at Company: describe ownership and impact",
      "- Role Two at Company: describe systems, users, and outcomes",
      "- Technologies: TypeScript, React, Astro, Node.js, databases",
      "- Add internships, research work, freelance work, or open-source here",
    ],
  },
];

export const githubHighlights: GithubProject[] = [
  {
    name: "pdf-tools-js",
    description: "React app for merging, cutting, and joining PDF files.",
    href: "https://github.com/erykksc/pdf-tools-js",
    year: "2021",
    language: "TypeScript",
    stars: 5,
    tags: ["React", "PDF", "Web app"],
    highlighted: true,
  },
  {
    name: "busybees",
    description:
      "Cloud-native app for finding common free time in groups across calendar providers, built with SST, AWS, and React Router.",
    href: "https://github.com/erykksc/busybees",
    year: "2025",
    language: "TypeScript",
    stars: 1,
    tags: ["AWS", "Calendar", "Serverless"],
    highlighted: true,
  },
  {
    name: "kwikquiz",
    description: "Quiz platform written in Go and HTMX.",
    href: "https://github.com/erykksc/kwikquiz",
    year: "2024",
    language: "Go",
    stars: 4,
    tags: ["Go", "HTMX", "Web"],
    highlighted: true,
  },
  {
    name: "chatreply",
    description: "CLI tool that lets scripts respond to stdin messages through chat platforms like Discord and Telegram.",
    href: "https://github.com/erykksc/chatreply",
    year: "2024",
    language: "Go",
    stars: 1,
    tags: ["CLI", "Discord", "Automation"],
    highlighted: true,
  },
  {
    name: "citus-mobilitydb",
    description: "Dockerfiles and image configuration for running MobilityDB with the Citus extension.",
    href: "https://github.com/erykksc/citus-mobilitydb",
    year: "2025",
    language: "Dockerfile",
    stars: 1,
    tags: ["Docker", "PostgreSQL", "MobilityDB"],
    highlighted: true,
  },
  {
    name: "Terminal-Tetris",
    description: "Terminal Tetris clone implemented on top of a custom C++ terminal game engine.",
    href: "https://github.com/erykksc/Terminal-Tetris",
    year: "2021",
    language: "C++",
    stars: 1,
    tags: ["C++", "Terminal", "Game"],
    highlighted: true,
  },
];

const otherGithubProjects: GithubProject[] = [
  {
    name: "wikigraph",
    description: "TypeScript web app for visualizing Wikipedia topics as a graph of connected pages.",
    href: "https://github.com/erykksc/wikigraph",
    year: "2026",
    language: "TypeScript",
    stars: 3,
    tags: ["Wikipedia", "Graph", "Visualization"],
  },
  {
    name: "wikiparse-rs",
    description: "Fast Rust parser for Wikipedia SQL dumps with a CLI-oriented data processing workflow.",
    href: "https://github.com/erykksc/wikiparse-rs",
    year: "2026",
    language: "Rust",
    stars: 2,
    tags: ["Rust", "CLI", "Data"],
  },
  {
    name: "Ludum-Dare-46",
    description: "C# game jam project built for Ludum Dare 46.",
    href: "https://github.com/erykksc/Ludum-Dare-46",
    year: "2020",
    language: "C#",
    stars: 2,
    tags: ["Game jam", "C#"],
  },
  {
    name: "LD_45",
    description: "C# game jam project built for Ludum Dare 45.",
    href: "https://github.com/erykksc/LD_45",
    year: "2019",
    language: "C#",
    stars: 2,
    tags: ["Game jam", "C#"],
  },
  {
    name: "escooter-trips-generator",
    description: "Python tool for generating synthetic e-scooter trip datasets for urban mobility simulations.",
    href: "https://github.com/erykksc/escooter-trips-generator",
    year: "2025",
    language: "Python",
    stars: 1,
    tags: ["Python", "Simulation", "Mobility"],
  },
  {
    name: "lres",
    description: "Low Res Entertainment System, a compact C++ project for retro-style experiments.",
    href: "https://github.com/erykksc/lres",
    year: "2023",
    language: "C++",
    stars: 1,
    tags: ["C++", "Retro", "Graphics"],
  },
  {
    name: "JBZD_Downloader",
    description: "Python downloader utility for JBZD content.",
    href: "https://github.com/erykksc/JBZD_Downloader",
    year: "2019",
    language: "Python",
    stars: 1,
    tags: ["Python", "Downloader"],
  },
  {
    name: ".dotfiles",
    description: "Personal development environment configuration covering shell, Neovim, Lua, Nix, and scripts.",
    href: "https://github.com/erykksc/.dotfiles",
    year: "2024",
    language: "Shell",
    stars: 0,
    tags: ["Shell", "Neovim", "Nix"],
  },
  {
    name: "advent-of-code-2025",
    description: "Rust solutions for Advent of Code 2025.",
    href: "https://github.com/erykksc/advent-of-code-2025",
    year: "2025",
    language: "Rust",
    stars: 0,
    tags: ["Rust", "Algorithms"],
  },
  {
    name: "valkey-benchmark",
    description: "Benchmarking and reporting project around Valkey using scripts, Go, Python, infrastructure config, and Typst.",
    href: "https://github.com/erykksc/valkey-benchmark",
    year: "2025",
    language: "Typst",
    stars: 0,
    tags: ["Benchmarking", "Go", "Python"],
  },
  {
    name: "nes-esp",
    description: "C project exploring NES-related work on ESP-style embedded tooling.",
    href: "https://github.com/erykksc/nes-esp",
    year: "2025",
    language: "C",
    stars: 0,
    tags: ["C", "Embedded"],
  },
  {
    name: "crkbd",
    description: "Configuration for a Corne keyboard layout using Nix and shell tooling.",
    href: "https://github.com/erykksc/crkbd",
    year: "2025",
    language: "Nix",
    stars: 0,
    tags: ["Keyboard", "Nix"],
  },
  {
    name: "bachelor-thesis",
    description: "Bachelor thesis repository with TeX writing, Go experiments, and infrastructure scripts.",
    href: "https://github.com/erykksc/bachelor-thesis",
    year: "2025",
    language: "TeX",
    stars: 0,
    tags: ["Thesis", "TeX", "Go"],
  },
  {
    name: "citus-k8s-manager",
    description: "Python and Docker tooling for managing Citus-related Kubernetes workflows.",
    href: "https://github.com/erykksc/citus-k8s-manager",
    year: "2025",
    language: "Python",
    stars: 0,
    tags: ["Python", "Kubernetes", "Citus"],
  },
  {
    name: "busy-bees",
    description: "Early Go prototype for the Busy Bees scheduling idea, including initial .ics parsing experiments.",
    href: "https://github.com/erykksc/busy-bees",
    year: "2025",
    language: "Go",
    stars: 0,
    tags: ["Prototype", "Go", "Calendar"],
  },
  {
    name: "krakjam25",
    description: "Godot game jam project written in GDScript.",
    href: "https://github.com/erykksc/krakjam25",
    year: "2025",
    language: "GDScript",
    stars: 0,
    tags: ["Godot", "Game jam"],
  },
  {
    name: "advent-of-code-2023",
    description: "Advent of Code 2023 solutions across Lua, Go, and Python.",
    href: "https://github.com/erykksc/advent-of-code-2023",
    year: "2025",
    language: "Lua",
    stars: 0,
    tags: ["Algorithms", "Lua"],
  },
  {
    name: "advent-of-code-2024",
    description: "Go solutions for Advent of Code 2024.",
    href: "https://github.com/erykksc/advent-of-code-2024",
    year: "2024",
    language: "Go",
    stars: 0,
    tags: ["Go", "Algorithms"],
  },
  {
    name: "KrakJam24",
    description: "Godot game jam project written in GDScript.",
    href: "https://github.com/erykksc/KrakJam24",
    year: "2024",
    language: "GDScript",
    stars: 0,
    tags: ["Godot", "Game jam"],
  },
  {
    name: "who-asked-frequency-calc",
    description: "Small web app for calculating the frequency of the phrase \"who asked?\".",
    href: "https://github.com/erykksc/who-asked-frequency-calc",
    year: "2023",
    language: "CSS",
    stars: 0,
    tags: ["Web app", "TypeScript"],
  },
  {
    name: "Eroar.github.io",
    description: "Earlier GitHub Pages website project.",
    href: "https://github.com/erykksc/Eroar.github.io",
    year: "2020",
    language: "CSS",
    stars: 0,
    tags: ["Website", "GitHub Pages"],
  },
  {
    name: "terminal-game-engine",
    description: "Small C++ engine for building terminal games, separate from the Tetris game built on top of it.",
    href: "https://github.com/erykksc/terminal-game-engine",
    year: "2021",
    language: "C++",
    stars: 0,
    tags: ["C++", "Terminal", "Engine"],
  },
  {
    name: "silence-eraser",
    description: "Python utility for cutting silence from video files.",
    href: "https://github.com/erykksc/silence-eraser",
    year: "2021",
    language: "Python",
    stars: 0,
    tags: ["Python", "Video"],
  },
  {
    name: "Vim_Team_T3G",
    description: "Small C# project from an early team repository.",
    href: "https://github.com/erykksc/Vim_Team_T3G",
    year: "2019",
    language: "C#",
    stars: 0,
    tags: ["C#"],
  },
  {
    name: "Neural-Net",
    description: "Neural network implemented in Python and NumPy for an International Baccalaureate extended essay.",
    href: "https://github.com/erykksc/Neural-Net",
    year: "2019",
    language: "Python",
    stars: 0,
    tags: ["Python", "NumPy", "ML"],
  },
  {
    name: "Discord-Channel-Filter",
    description: "Go utility for filtering Discord channel content.",
    href: "https://github.com/erykksc/Discord-Channel-Filter",
    year: "2020",
    language: "Go",
    stars: 0,
    tags: ["Go", "Discord"],
  },
  {
    name: "Simple-UML-Class-Designer",
    description: "Python app for reading and creating custom JSON UML class diagram files.",
    href: "https://github.com/erykksc/Simple-UML-Class-Designer",
    year: "2019",
    language: "Python",
    stars: 0,
    tags: ["Python", "UML"],
  },
  {
    name: "Math-Trivial-Sentence-Maker",
    description: "Small Python experiment for generating math-style trivial sentences.",
    href: "https://github.com/erykksc/Math-Trivial-Sentence-Maker",
    year: "2019",
    language: "Python",
    stars: 0,
    tags: ["Python"],
  },
  {
    name: "Quizlet_Downloader",
    description: "Python downloader utility for Quizlet content.",
    href: "https://github.com/erykksc/Quizlet_Downloader",
    year: "2019",
    language: "Python",
    stars: 0,
    tags: ["Python", "Downloader"],
  },
  {
    name: "sorting-visualization",
    description: "Python sorting algorithm visualization experiment.",
    href: "https://github.com/erykksc/sorting-visualization",
    year: "2019",
    language: "Python",
    stars: 0,
    tags: ["Python", "Visualization"],
  },
  {
    name: "Dikipy",
    description: "Python library for the diki.pl dictionary.",
    href: "https://github.com/erykksc/Dikipy",
    year: "2019",
    language: "Python",
    stars: 0,
    tags: ["Python", "Library"],
  },
];

export const allGithubProjects: GithubProject[] = [
  ...githubHighlights,
  ...otherGithubProjects,
];

const projectPreviewImages = [
  "/project-preview-one.svg",
  "/project-preview-two.svg",
  "/project-preview-three.svg",
];

export const projectPreviews: ProjectPreview[] = allGithubProjects.map(
  (project, index) => ({
    title: project.name,
    year: project.year,
    description: project.description,
    image: projectPreviewImages[index % projectPreviewImages.length],
    tags: project.tags,
    sourceHref: project.href,
  }),
);

export const timelineItems: TimelineItem[] = [
  {
    title: "wikiparse-rs",
    eyebrow: "2026",
    description:
      "Rust parser and CLI for streaming Wikipedia SQL dumps into usable data formats for downstream analysis.",
    marker: "circle",
    media: {
      type: "code",
      shape: "circle",
      alt: "Code icon for wikiparse-rs",
    },
    href: "https://github.com/erykksc/wikiparse-rs",
    side: "right",
  },
  {
    title: "busybees",
    eyebrow: "2025",
    description:
      "Serverless scheduling app for university group work, using calendar integrations, Cognito auth, DynamoDB, Redis caching, and React Router.",
    marker: "circle",
    media: {
      type: "github",
      shape: "circle",
      alt: "busybees on GitHub",
    },
    href: "https://github.com/erykksc/busybees",
    side: "left",
  },
  {
    title: "kwikquiz",
    eyebrow: "2024",
    description:
      "Go and HTMX quiz platform showing a preference for small, direct web stacks where they fit the problem.",
    marker: "oval",
    media: {
      type: "terminal",
      shape: "square",
      alt: "Terminal icon for kwikquiz",
    },
    href: "https://github.com/erykksc/kwikquiz",
    side: "right",
  },
  {
    title: "pdf-tools-js",
    eyebrow: "2021-2025",
    description:
      "Practical React app for manipulating PDFs in the browser, including merging, cutting, and joining documents.",
    marker: "large",
    media: {
      type: "spark",
      shape: "square",
      alt: "Spark icon for pdf-tools-js",
    },
    href: "https://github.com/erykksc/pdf-tools-js",
    side: "left",
  },
  {
    title: "terminal-game-engine and Terminal-Tetris",
    eyebrow: "2021",
    description:
      "A custom C++ terminal game engine followed by a Tetris clone implemented using that engine.",
    marker: "circle",
    media: {
      type: "github",
      shape: "circle",
      alt: "Terminal-Tetris on GitHub",
    },
    href: "https://github.com/erykksc/Terminal-Tetris",
    side: "right",
  },
];

export const defaultSection = terminalSections[0];

export function getTerminalSection(slug?: string) {
  return (
    terminalSections.find((section) => section.slug === slug) ?? defaultSection
  );
}
