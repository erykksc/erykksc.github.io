export type TerminalSection = {
  slug: 'about' | 'projects' | 'experience';
  label: string;
  href: string;
  command: string;
  files: string[];
  heading: string;
  lines: string[];
};

export const terminalAnimation = {
  promptSpeedMs: 35,
  outputSpeedMs: 3,
  cursorBlinkMs: 2500,
};

export const terminalSections: TerminalSection[] = [
  {
    slug: 'about',
    label: 'About Me',
    href: '/about',
    command: 'cat about.txt',
    files: ['about.txt'],
    heading: 'About Me',
    lines: [
      'Education:',
      '- M.Sc. Computer Science @ TU Berlin (2025-Present)',
      '- B.Sc. Computer Science @ TU Berlin (2022-2025)',
      '- 2 semesters @ Silesian University of Technology (2020-2021)',
      '- International Baccalaureate @ Gliwice, Poland (2020)',
      '',
      'Languages:',
      '- English C2 (International Baccalaureate and LanguageCert)',
      '- German C1 (DSD II)',
      '- Spanish B1.2 (ZEMS @ TU Berlin)',
      '- Polish (Native), Silesian (Native)',
    ],
  },
  {
    slug: 'projects',
    label: 'Projects',
    href: '/projects',
    command: 'ls projects && cat highlights.txt',
    files: ['projects/', 'highlights.txt'],
    heading: 'Projects',
    lines: [
      'Pinned highlights:',
      '- pdf-tools-js: browser PDF merge, cut, and join utility',
      '- wikigraph: interactive Wikipedia graph visualization',
      '- Emeralds: multiplayer WebSocket board game (phone-as-controller)',
      '- busybees: serverless group scheduling app',
      '- kwikquiz: Go + HTMX quiz platform',
      '- Terminal-Tetris: terminal Tetris on a custom C++ engine',
      '- chatreply: CLI bridge from stdin to Discord/Telegram',
      '',
      'Game jams:',
      '- KrakJam 2025 (Boba Tea Tycoon) — 1st person cooking game in Godot',
      '- KrakJam 2024 (Głąb Pocztowy) — post office management in Godot',
      '- KrakJam 2023 (Bobry VS Drzewa) — beaver dam-building in Godot',
      '- Ludum Dare 46 — tower defence in Unity (team of 10)',
      '- Ludum Dare 45 — tower defence in Unity (team of 6)',
    ],
  },
  {
    slug: 'experience',
    label: 'Professional Experience',
    href: '/experience',
    command: 'cat professional_experience.txt',
    files: ['professional_experience.txt'],
    heading: 'Professional Experience',
    lines: [
      'Work Experience:',
      '- Maxmed (2025-Present)',
      '- Bitwa o Śląsk boxing (2021-2024)',
      '- Engie Zielona Energia (2021-2024)',
      '- Text4Videos (2020-2021)',
    ],
  },
];

export const defaultSection = terminalSections[0];

export function getTerminalSection(slug?: string) {
  return (
    terminalSections.find((section) => section.slug === slug) ?? defaultSection
  );
}
