export type TerminalSection = {
  slug: "about" | "projects" | "experience";
  label: string;
  href: string;
  command: string;
  heading: string;
  lines: string[];
};

export type TimelineItem = {
  title: string;
  eyebrow: string;
  description: string;
  marker: "circle" | "oval" | "large";
  side: "left" | "right";
};

export type SocialLink = {
  label: string;
  href: string;
  handle: string;
};

export const terminalAnimation = {
  promptSpeedMs: 35,
  outputSpeedMs: 3,
};

export const socialLinks: SocialLink[] = [
  {
    label: "GitHub",
    href: "https://github.com/your-username",
    handle: "@your-username",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/your-username",
    handle: "/in/your-username",
  },
];

export const heroContent = {
  kicker: "Software developer portfolio",
  title: "Eryk Kściuczyk",
  description:
    "Replace this introduction with a short, specific summary of who you are, what you build, and what kind of work you want to be known for.",
};

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
      "Featured work:",
      "- Project One: replace this with a concise product-oriented summary",
      "- Project Two: mention the problem, stack, and measurable outcome",
      "- Project Three: link this to a deeper case study later",
      "- More projects appear in the timeline below",
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

export const timelineItems: TimelineItem[] = [
  {
    title: "Project / Achievement One",
    eyebrow: "2026",
    description:
      "Replace this with a short story about what you built, why it mattered, and what technical decisions were important.",
    marker: "circle",
    side: "right",
  },
  {
    title: "Project / Achievement Two",
    eyebrow: "2025",
    description:
      "Use this card for a strong portfolio item. Keep the copy specific: problem, contribution, stack, and result.",
    marker: "circle",
    side: "left",
  },
  {
    title: "Project / Achievement Three",
    eyebrow: "2025",
    description:
      "This layout is static HTML, so crawlers can read it even though the visual presentation looks hand drawn.",
    marker: "oval",
    side: "right",
  },
  {
    title: "Project / Achievement Four",
    eyebrow: "2024",
    description:
      "Add links later if useful. The visual markers intentionally vary in size to match the sketch rather than a standard timeline.",
    marker: "large",
    side: "left",
  },
  {
    title: "Project / Achievement Five",
    eyebrow: "2023",
    description:
      "Use this final item for an earlier milestone, education achievement, award, or foundational project.",
    marker: "circle",
    side: "right",
  },
];

export const defaultSection = terminalSections[0];

export function getTerminalSection(slug?: string) {
  return (
    terminalSections.find((section) => section.slug === slug) ?? defaultSection
  );
}
