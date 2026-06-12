import { EmeraldsMarker } from '../components/markers/EmeraldsMarker';
import { LogoMarker } from '../components/markers/LogoMarker';

export type TerminalSection = {
  slug: 'about' | 'projects' | 'experience';
  label: string;
  href: string;
  command: string;
  files: string[];
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

export type TimelineItemCategory = 'education' | 'work' | 'project';

export type TimelineButtonColor =
  | 'yellow'
  | 'pink'
  | 'blue'
  | 'green'
  | 'orange'
  | 'surface';

export type TimelineButton = {
  label: string;
  href: string;
  color?: TimelineButtonColor;
};

export type TimelineItem = {
  title: string;
  eyebrow: string;
  description: string;
  category: TimelineItemCategory;
  href?: string;
  image?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  markerComponent?: React.ComponentType<any>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  markerProps?: Record<string, any>;
  links?: TimelineButton[];
};

export type SocialLink = {
  label: string;
  href: string;
  handle: string;
};

export type Language = {
  name: string;
  level: string;
};

export const languages: Language[] = [
  { name: 'Polish', level: 'Native' },
  { name: 'Silesian', level: 'Native' },
  { name: 'English', level: 'C2' },
  { name: 'German', level: 'C1' },
  { name: 'Spanish', level: 'B1' },
];

export type HeroAction = {
  label: string;
  href: string;
};

export const terminalAnimation = {
  promptSpeedMs: 35,
  outputSpeedMs: 3,
  cursorBlinkMs: 2500,
};

export const profileName = 'Eryk Kściuczyk';

export const socialLinks: SocialLink[] = [
  {
    label: 'GitHub',
    href: 'https://github.com/erykksc',
    handle: '@erykksc',
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/eryk-ksciuczyk',
    handle: '/in/eryk-ksciuczyk',
  },
];

export const heroContent = {
  kicker: 'Software developer portfolio',
  title: profileName,
  description:
    "Computer Science master's student at TU Berlin , Open-source contributor, full-stack web developer, and hobbist game-developer \
	I use neovim and daily drive linux btw. ;) \
	",
};

export const heroActions: HeroAction[] = [
  {
    label: 'CONTACT ME',
    href: 'mailto:your.email@example.com',
  },
  {
    label: 'VIEW RESUME',
    href: '/resume.pdf',
  },
];

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
    ],
  },
];

export const githubHighlights: GithubProject[] = [
  {
    name: 'pdf-tools-js',
    description: 'React app for merging, cutting, and joining PDF files.',
    href: 'https://github.com/erykksc/pdf-tools-js',
    year: '2021',
    language: 'TypeScript',
    stars: 5,
    tags: ['React', 'PDF', 'Web app'],
    highlighted: true,
  },
  {
    name: 'busybees',
    description:
      'Cloud-native app for finding common free time in groups across calendar providers, built with SST, AWS, and React Router.',
    href: 'https://github.com/erykksc/busybees',
    year: '2025',
    language: 'TypeScript',
    stars: 1,
    tags: ['AWS', 'Calendar', 'Serverless'],
    highlighted: true,
  },
  {
    name: 'kwikquiz',
    description: 'Quiz platform written in Go and HTMX.',
    href: 'https://github.com/erykksc/kwikquiz',
    year: '2024',
    language: 'Go',
    stars: 4,
    tags: ['Go', 'HTMX', 'Web'],
    highlighted: true,
  },
  {
    name: 'chatreply',
    description:
      'CLI tool that lets scripts respond to stdin messages through chat platforms like Discord and Telegram.',
    href: 'https://github.com/erykksc/chatreply',
    year: '2024',
    language: 'Go',
    stars: 1,
    tags: ['CLI', 'Discord', 'Automation'],
    highlighted: true,
  },
  {
    name: 'citus-mobilitydb',
    description:
      'Dockerfiles and image configuration for running MobilityDB with the Citus extension.',
    href: 'https://github.com/erykksc/citus-mobilitydb',
    year: '2025',
    language: 'Dockerfile',
    stars: 1,
    tags: ['Docker', 'PostgreSQL', 'MobilityDB'],
    highlighted: true,
  },
  {
    name: 'Terminal-Tetris',
    description:
      'Terminal Tetris clone implemented on top of a custom C++ terminal game engine.',
    href: 'https://github.com/erykksc/Terminal-Tetris',
    year: '2021',
    language: 'C++',
    stars: 1,
    tags: ['C++', 'Terminal', 'Game'],
    highlighted: true,
  },
];

const otherGithubProjects: GithubProject[] = [
  {
    name: 'wikigraph',
    description:
      'Interactive audio-visual installation visualizing Wikipedia as a graph of connected pages.',
    href: 'https://github.com/erykksc/wikigraph',
    year: '2026',
    language: 'TypeScript',
    stars: 3,
    tags: ['Wikipedia', 'Graph', 'React'],
  },
  {
    name: 'wikiparse-rs',
    description:
      'Fast Rust parser for Wikipedia SQL dumps with a CLI-oriented data processing workflow.',
    href: 'https://github.com/erykksc/wikiparse-rs',
    year: '2026',
    language: 'Rust',
    stars: 2,
    tags: ['Rust', 'CLI', 'Data'],
  },
  {
    name: 'Ludum-Dare-46',
    description:
      'Video game written in 72h for Ludum Dare 46 in an interdisciplinary team using Unity game engine and C#.',
    href: 'https://github.com/erykksc/Ludum-Dare-46',
    year: '2020',
    language: 'C#',
    stars: 2,
    tags: ['Game jam', 'C#'],
  },
  {
    name: 'LD_45',
    description:
      'Video game written in 72h for Ludum Dare 45 in an interdisciplinary team using Unity game engine and C#.',
    href: 'https://github.com/erykksc/LD_45',
    year: '2019',
    language: 'C#',
    stars: 2,
    tags: ['Game jam', 'C#'],
  },
  {
    name: 'escooter-trips-generator',
    description:
      'Generate synthetic e-scooter trip datasets for urban mobility simulations.',
    href: 'https://github.com/erykksc/escooter-trips-generator',
    year: '2025',
    language: 'Python',
    stars: 1,
    tags: ['Python', 'Simulation', 'Mobility'],
  },
  {
    name: 'lres',
    description:
      'Low Res Entertainment System, a compact C++ project for retro-style experiments.',
    href: 'https://github.com/erykksc/lres',
    year: '2023',
    language: 'C++',
    stars: 1,
    tags: ['C++', 'Retro', 'Graphics'],
  },
  {
    name: 'JBZD_Downloader',
    description: 'Python downloader utility for jbzd.com.pl content.',
    href: 'https://github.com/erykksc/JBZD_Downloader',
    year: '2019',
    language: 'Python',
    stars: 1,
    tags: ['Python', 'Downloader'],
  },
  {
    name: '.dotfiles',
    description:
      'Personal development environment configuration covering shell, Neovim, Lua, Nix, and scripts.',
    href: 'https://github.com/erykksc/.dotfiles',
    year: '2024',
    language: 'Shell',
    stars: 0,
    tags: ['Shell', 'Neovim', 'Nix'],
  },
  {
    name: 'advent-of-code-2025',
    description: 'Rust solutions for Advent of Code 2025.',
    href: 'https://github.com/erykksc/advent-of-code-2025',
    year: '2025',
    language: 'Rust',
    stars: 0,
    tags: ['Rust', 'Algorithms'],
  },
  {
    name: 'valkey-benchmark',
    description:
      'Benchmark with report of horizontal and vertical scalability of Valkey.',
    href: 'https://github.com/erykksc/valkey-benchmark',
    year: '2025',
    language: 'Typst',
    stars: 0,
    tags: ['Benchmarking', 'Go', 'Python'],
  },
  {
    name: 'nes-esp',
    description: 'C project for Networked Embedded Systems module at TU Berlin',
    href: 'https://github.com/erykksc/nes-esp',
    year: '2025',
    language: 'C',
    stars: 0,
    tags: ['C', 'Embedded'],
  },
  {
    name: 'crkbd',
    description:
      'Configuration for a Corne keyboard layout using Nix and shell tooling.',
    href: 'https://github.com/erykksc/crkbd',
    year: '2025',
    language: 'Nix',
    stars: 0,
    tags: ['Keyboard', 'Nix'],
  },
  {
    name: 'bachelor-thesis',
    description:
      'Bachelor thesis repository with TeX writing, Go experiments, and infrastructure scripts.',
    href: 'https://github.com/erykksc/bachelor-thesis',
    year: '2025',
    language: 'TeX',
    stars: 0,
    tags: ['Thesis', 'TeX', 'Go'],
  },
  {
    name: 'citus-k8s-manager',
    description:
      'Python and Docker tooling for managing Citus-related Kubernetes workflows.',
    href: 'https://github.com/erykksc/citus-k8s-manager',
    year: '2025',
    language: 'Python',
    stars: 0,
    tags: ['Python', 'Kubernetes', 'Citus'],
  },
  {
    name: 'busy-bees',
    description:
      'Early Go prototype for the Busy Bees scheduling idea, including initial .ics parsing experiments.',
    href: 'https://github.com/erykksc/busy-bees',
    year: '2025',
    language: 'Go',
    stars: 0,
    tags: ['Prototype', 'Go', 'Calendar'],
  },
  {
    name: 'krakjam25',
    description:
      'Video game written in 48h in a team in Godot game engine and GDScript. \
		Developed in a team for KrakJam 2025.',
    href: 'https://github.com/erykksc/krakjam25',
    year: '2025',
    language: 'GDScript',
    stars: 0,
    tags: ['Godot', 'Game jam'],
  },
  {
    name: 'advent-of-code-2023',
    description: 'Advent of Code 2023 solutions in Lua, Go, and Python.',
    href: 'https://github.com/erykksc/advent-of-code-2023',
    year: '2025',
    language: 'Lua',
    stars: 0,
    tags: ['Algorithms', 'Lua'],
  },
  {
    name: 'advent-of-code-2024',
    description: 'Go solutions for Advent of Code 2024.',
    href: 'https://github.com/erykksc/advent-of-code-2024',
    year: '2024',
    language: 'Go',
    stars: 0,
    tags: ['Go', 'Algorithms'],
  },
  {
    name: 'KrakJam24',
    description:
      'Video game written in 48h in a team in Godot game engine and GDScript. \
		Developed in a team for KrakJam 2024.',
    href: 'https://github.com/erykksc/KrakJam24',
    year: '2024',
    language: 'GDScript',
    stars: 0,
    tags: ['Godot', 'Game jam', 'Video game'],
  },
  {
    name: 'who-asked-frequency-calc',
    description:
      'Small web app for calculating the frequency of the phrase "who asked?".',
    href: 'https://github.com/erykksc/who-asked-frequency-calc',
    year: '2023',
    language: 'CSS',
    stars: 0,
    tags: ['Web app', 'TypeScript'],
  },
  {
    name: 'Eroar.github.io',
    description: 'Earlier GitHub Pages website project.',
    href: 'https://github.com/erykksc/Eroar.github.io',
    year: '2020',
    language: 'CSS',
    stars: 0,
    tags: ['Website', 'GitHub Pages'],
  },
  {
    name: 'terminal-game-engine',
    description:
      'Custom C++ engine for building terminal games built from scratch with no external dependencies.',
    href: 'https://github.com/erykksc/terminal-game-engine',
    year: '2021',
    language: 'C++',
    stars: 0,
    tags: ['C++', 'Terminal', 'Engine'],
  },
  {
    name: 'silence-eraser',
    description:
      'Python utility for cutting silence from video files. \
		Project developed as a freelance project for a video editor.',
    href: 'https://github.com/erykksc/silence-eraser',
    year: '2021',
    language: 'Python',
    stars: 0,
    tags: ['Python', 'Video'],
  },
  {
    name: 'Vim_Team_T3G',
    description: 'Small C# project from an early team repository.',
    href: 'https://github.com/erykksc/Vim_Team_T3G',
    year: '2019',
    language: 'C#',
    stars: 0,
    tags: ['C#'],
  },
  {
    name: 'Neural-Net',
    description:
      'Neural network implemented in pure Python and NumPy without usage of external macihne learning libraries. \
		It was written for an International Baccalaureate extended essay.',
    href: 'https://github.com/erykksc/Neural-Net',
    year: '2019',
    language: 'Python',
    stars: 0,
    tags: ['Python', 'NumPy', 'ML'],
  },
  {
    name: 'Discord-Channel-Filter',
    description: 'Go utility for filtering Discord channel content.',
    href: 'https://github.com/erykksc/Discord-Channel-Filter',
    year: '2020',
    language: 'Go',
    stars: 0,
    tags: ['Go', 'Discord'],
  },
  {
    name: 'Simple-UML-Class-Designer',
    description:
      'Python app for reading and creating custom JSON UML class diagram files.',
    href: 'https://github.com/erykksc/Simple-UML-Class-Designer',
    year: '2019',
    language: 'Python',
    stars: 0,
    tags: ['Python', 'UML'],
  },
  {
    name: 'Math-Trivial-Sentence-Maker',
    description:
      "comedic small Python script for generating math-style 'trivial' sentences.",
    href: 'https://github.com/erykksc/Math-Trivial-Sentence-Maker',
    year: '2019',
    language: 'Python',
    stars: 0,
    tags: ['Python'],
  },
  {
    name: 'Quizlet_Downloader',
    description:
      'Python utility for exporting flashcard decks from Quizlet.\
		This tools aids students from transfering their flashcards into other systems such as open-source alternative: Anki',
    href: 'https://github.com/erykksc/Quizlet_Downloader',
    year: '2019',
    language: 'Python',
    stars: 0,
    tags: ['Python', 'Downloader'],
  },
  {
    name: 'sorting-visualization',
    description: 'Sorting algorithm visualization written in Python.',
    href: 'https://github.com/erykksc/sorting-visualization',
    year: '2019',
    language: 'Python',
    stars: 0,
    tags: ['Python', 'Visualization'],
  },
  {
    name: 'Dikipy',
    description: 'Python library for the diki.pl dictionary.',
    href: 'https://github.com/erykksc/Dikipy',
    year: '2019',
    language: 'Python',
    stars: 0,
    tags: ['Python', 'Library'],
  },
];

export const allGithubProjects: GithubProject[] = [
  ...githubHighlights,
  ...otherGithubProjects,
];

const projectPreviewImages = [
  '/project-preview-one.svg',
  '/project-preview-two.svg',
  '/project-preview-three.svg',
];

export const projectPreviews: ProjectPreview[] = allGithubProjects.map(
  (project, index) => ({
    title: project.name,
    year: project.year,
    description: project.description,
    image: projectPreviewImages[index % projectPreviewImages.length],
    tags: project.tags,
    sourceHref: project.href,
  })
);

export const timelineItems: TimelineItem[] = [
  {
    title: 'Computer Science M.Sc. at Technische Universität Berlin',
    eyebrow: '2025-Present',
    description: 'I continued my studies at TU Berlin at master level.',
    category: 'education',
    href: 'https://www.tu.berlin/en/',
    markerComponent: LogoMarker,
    markerProps: { src: '/tu-berlin-logo.png', aspectRatio: '5/4' },
  },
  {
    title: 'Maxmed',
    eyebrow: '2025-Present',
    description:
      'Develop and maintain full-stack plaform of Maxmed with multi-user management, observability, transactional emails, GDPR compliance, telemetry and analytics.',
    category: 'work',
    href: 'https://maxmed.edu.pl',
    links: [
      {
        label: 'View Live',
        href: 'https://maxmed.edu.pl',
        color: 'pink',
      },
    ],
  },
  {
    title: 'Project: wikigraph',
    eyebrow: '2026',
    description:
      'Built an interactive audio-visual graph visualization that maps Wikipedia articles and their connections, inspired by the Obsidian graph view.',
    category: 'project',
    href: 'https://github.com/erykksc/wikigraph',
    markerComponent: LogoMarker,
    markerProps: {
      src: '/wikigraph-marker.png',
      size: 'wide',
      objectFit: 'cover',
    },
    links: [
      {
        label: 'Live Demo',
        href: 'https://wikigraph.eryk.one',
        color: 'yellow',
      },
      {
        label: 'Watch Demo',
        href: 'https://github.com/erykksc/wikigraph#wikigraph',
        color: 'green',
      },
      {
        label: 'View Source',
        href: 'https://github.com/erykksc/wikigraph',
        color: 'pink',
      },
    ],
  },
  {
    title: 'Project: wikiparse-rs',
    eyebrow: '2026',
    description:
      'Developed a rust parser and CLI for streaming Wikipedia SQL dumps into usable data formats for downstream analysis.',
    category: 'project',
    href: 'https://github.com/erykksc/wikiparse-rs',
    links: [
      { label: 'View Source', href: 'https://github.com/erykksc/wikiparse-rs' },
    ],
  },
  {
    title: 'Spanish B1.2 course at ZEMS',
    eyebrow: '2026',
    description:
      'I continued learning Spanish and finished the course and exam of Spanish at B1.2 level at Modern Language Center (ZEMS) at TU Berlin',
    category: 'education',
    href: 'https://www.tu.berlin/en/zems/about-us/mission-statement',
  },
  {
    title: 'Project: Master Application Platform for TU Berlin',
    eyebrow: '2025-2026',
    description:
      'Developed a platform for applying and reviewing applications for master degrees at TU Berlin. \
		The platform has been used by TU Berlin for the applications for ISM progam.',
    category: 'project',
  },
  {
    title: 'Computer Science B.Sc. at Technische Universität Berlin',
    eyebrow: '2022-2025',
    description:
      'I graduated Computer Science B.Sc. at Technische Universität.\
		My bachelor thesis was comparing horizontal and vertical scalability of two distributed spatiotemporal database systems (MobilityDB+Citus vs CrateDB) with custom Kubernetes and infrastrucutre deployments.',
    category: 'education',
    markerComponent: LogoMarker,
    markerProps: { src: '/tu-berlin-logo.png', aspectRatio: '5/4' },
  },
  {
    title: 'KrakJam 2025: Boba Tea Tycoon',
    eyebrow: 'Jan 2025',
    description:
      'Led an interdisciplinary team in building a 3D first-person bubble tea cooking game in 48 hours for KrakJam 2025 using Godot 4.3 and GDScript. Orchestrated development across programming, art, and design to deliver a complete game within the jam timeframe.',
    category: 'project',
    href: 'https://github.com/erykksc/krakjam25',
    links: [
      { label: 'View Source', href: 'https://github.com/erykksc/krakjam25' },
    ],
  },
  {
    title: 'Project: busybees',
    eyebrow: '2025',
    description:
      "Developed a serverless scheduling app for university group work, using calendar integrations, Cognito auth, DynamoDB, Redis caching, and React Router.\
		The project was being developed in a team of 2, where I've handled the backend and infrastrucutre.",
    category: 'project',
    href: 'https://github.com/erykksc/busybees',
    links: [
      { label: 'View Source', href: 'https://github.com/erykksc/busybees' },
    ],
  },
  {
    title: 'Project: valkey-benchmark',
    eyebrow: '2025',
    description:
      'Benchmark comparing horizontal and vertical scalability of Valkey, with a full report.',
    category: 'project',
    href: 'https://github.com/erykksc/valkey-benchmark',
    links: [
      {
        label: 'View Source',
        href: 'https://github.com/erykksc/valkey-benchmark',
      },
    ],
  },
  {
    title: 'Project: citus-mobilitydb',
    eyebrow: '2025',
    description:
      'Dockerfiles and image configuration for running MobilityDB with the Citus extension for distributed spatiotemporal queries.',
    category: 'project',
    href: 'https://github.com/erykksc/citus-mobilitydb',
    links: [
      {
        label: 'View Source',
        href: 'https://github.com/erykksc/citus-mobilitydb',
      },
    ],
  },
  {
    title: 'Project: escooter-trips-generator',
    eyebrow: '2025',
    description:
      'Generate synthetic e-scooter trip datasets for urban mobility simulations.',
    category: 'project',
    href: 'https://github.com/erykksc/escooter-trips-generator',
    links: [
      {
        label: 'View Source',
        href: 'https://github.com/erykksc/escooter-trips-generator',
      },
    ],
  },
  {
    title: 'Project: kwikquiz',
    eyebrow: '2024',
    description: 'Developed a quiz platform using Go and HTMX in a team.',
    category: 'project',
    href: 'https://github.com/erykksc/kwikquiz',
    links: [
      { label: 'View Source', href: 'https://github.com/erykksc/kwikquiz' },
    ],
  },
  {
    title: 'Project: chatreply',
    eyebrow: '2024',
    description:
      'CLI bridge that lets scripts respond to stdin messages through chat platforms like Discord and Telegram.',
    category: 'project',
    href: 'https://github.com/erykksc/chatreply',
    links: [
      { label: 'View Source', href: 'https://github.com/erykksc/chatreply' },
    ],
  },
  {
    title: 'KrakJam 2024: Głąb Pocztowy',
    eyebrow: 'Jan 2024',
    description:
      'Led an interdisciplinary team in building a 3D post office management game in 48 hours for KrakJam 2024 using Godot 4.2 and GDScript. Coordinated programmers and artists to ship a complete game under tight time constraints.',
    category: 'project',
    href: 'https://github.com/erykksc/KrakJam24',
    links: [
      { label: 'View Source', href: 'https://github.com/erykksc/KrakJam24' },
    ],
  },
  {
    title: 'KrakJam 2023: Bobry VS Drzewa',
    eyebrow: 'Feb 2023',
    description:
      'Led an interdisciplinary team in creating a beaver dam-building game in 48 hours for KrakJam 2023 using Godot and GDScript. Guided development across disciplines to deliver a polished game from concept to playable build within the jam weekend.',
    category: 'project',
    href: 'https://github.com/erykksc/KrakJam2k23',
    links: [
      { label: 'View Source', href: 'https://github.com/erykksc/KrakJam2k23' },
    ],
  },
  {
    title: 'Project: pdf-tools-js',
    eyebrow: '2021-2025',
    description:
      'Created a practical React app for manipulating PDFs in the browser, including merging, cutting, and joining documents.',
    category: 'project',
    href: 'https://github.com/erykksc/pdf-tools-js',
    links: [
      { label: 'Live Demo', href: 'https://pdf.eryk.one', color: 'yellow' },
      {
        label: 'View Source',
        href: 'https://github.com/erykksc/pdf-tools-js',
        color: 'pink',
      },
    ],
  },
  {
    title: 'Bitwa o Śląsk boxing',
    eyebrow: '2021-2024',
    description:
      'Built and maintained the website for Bitwa o Śląsk, a recurring boxing gala series. The project involved full-stack development, deployment, and direct coordination with designers, social media managers, and event organizers.',
    category: 'work',
    href: 'https://bitwa-slask.eryk.one',
    links: [
      {
        label: 'See Archival Demo',
        href: 'https://bitwa-slask.eryk.one',
        color: 'pink',
      },
    ],
  },
  {
    title: 'Engie Zielona Energia',
    eyebrow: 'TODO: 2021-2024',
    description:
      "Worked at Engie Zielona Energia, a multinational energy company, hiring more than XYZ employeed worldwide. \
		There I've been building, deplying and maintining interal tools using a diverse set of technologies for business users.",
    category: 'work',
    href: 'https://www.engie-zielonaenergia.pl/',
    markerComponent: LogoMarker,
    markerProps: { src: '/engie-logo.png', objectFit: 'cover' },
  },
  {
    title:
      '2 semesters of Computer Science B.Sc. at Silesian University of Technology',
    eyebrow: '2020-2021',
    description:
      "Completed 2 semesters of Computer Science B.Sc. at Silesian University of Technology.\
		Due to COVID, I started my studies in Poland instead of abroad.\
		I've completed full 2 semesters at Silesian University of Technology",
    category: 'education',
    href: 'https://www.polsl.pl/en/',
    markerComponent: LogoMarker,
    markerProps: {
      src: '/polsl-logo.jpg',
      alt: 'Silesian University of Technology logo',
      aspectRatio: '744/957',
    },
  },
  {
    title: 'Project: Terminal-Tetris',
    eyebrow: '2021',
    description:
      'Tetris clone playable entirely in the terminal, built on a custom C++ character-based game engine. Features grayscale and color modes, scales to fill large terminal windows, and runs on low-end hardware. It uses no third-party libraries.',
    category: 'project',
    image: '/terminal-tetris.gif',
    href: 'https://github.com/erykksc/Terminal-Tetris',
    links: [
      {
        label: 'View Source',
        href: 'https://github.com/erykksc/Terminal-Tetris',
      },
    ],
  },
  {
    title: 'LanguageCert Test of English C2 (Listening, Reading)',
    eyebrow: 'Jul 2021',
    description:
      'Earned the LanguageCert Level 3 Certificate in ESOL International for C2 English listening and reading, issued by LanguageCert through PeopleCert.',
    category: 'education',
    href: 'https://badges.peoplecert.org/Badge/en/E0BDB160-9446-46CC-A712-43891D9D561E',
    links: [
      {
        label: 'View Certificate',
        href: 'https://badges.peoplecert.org/Badge/en/E0BDB160-9446-46CC-A712-43891D9D561E',
      },
    ],
  },
  {
    title: 'International Baccalaureate in Gliwice (Poland)',
    eyebrow: '2020',
    description:
      "Graduated International Baccalaureate Program where I've completed higher level of Computer Science, Mathematics, English and German. \
		The whole school was completed in English and thus I've acquired a C1 English certificate that is recognized by Universities",
    category: 'education',
    href: 'https://ibo.org/',
    markerComponent: LogoMarker,
    markerProps: { src: '/ib-logo.png', shape: 'circle' },
  },
  {
    title: 'German Language Certificate: DSD II',
    eyebrow: 'May 2020',
    description:
      'Earned the Deutsches Sprachdiplom Stufe II der Kultusministerkonferenz (German Language Certificate Level II of the Education Ministers Conference), issued by the Kultusministerkonferenz (German education authorities).',
    category: 'education',
    href: 'https://www.auslandsschulwesen.de/DE/Deutsch-lernen/DaF/DSD/DSD-II/dsd-II_node.html',
    markerComponent: LogoMarker,
    markerProps: {
      src: '/dsd-logo.jpg',
      alt: 'DSD II logo',
      aspectRatio: '1000/725',
    },
  },
  {
    title: "Ludum Dare 46: Baby, Don't Hurt Me",
    eyebrow: 'Apr 2020',
    description:
      'Led the programming team in an interdisciplinary group of 10 (5 programmers, 2 artists, 2 level designers, a musician) building a tower defense game in 72 hours for Ludum Dare 46 using Unity and C#. Coordinated development across the team to deliver a complete game under jam pressure.',
    category: 'project',
    href: 'https://github.com/erykksc/Ludum-Dare-46',
    links: [
      {
        label: 'View Source',
        href: 'https://github.com/erykksc/Ludum-Dare-46',
      },
    ],
  },
  {
    title: 'Ludum Dare 45: Survive in Neon Lights',
    eyebrow: 'Oct 2019',
    description:
      'Led the programming team in a group of 6 programmers building a tower defense game in 72 hours for Ludum Dare 45 using Unity and C#. Directed the technical architecture and coordinated efforts to ship a playable game within the jam deadline.',
    category: 'project',
    href: 'https://github.com/erykksc/LD_45',
    links: [{ label: 'View Source', href: 'https://github.com/erykksc/LD_45' }],
  },
  {
    title: 'Project: Emeralds',
    eyebrow: '2019',
    description:
      'Multiplayer board game with a server-client architecture — a Pygame renderer displays the shared game board while players connect via their phones through WebSockets to control their characters. \
    Collect gems, avoid traps, and gather relics.',
    category: 'project',
    href: 'https://github.com/erykksc/Emeralds',
    markerComponent: EmeraldsMarker,
    links: [
      {
        label: 'View Source',
        href: 'https://github.com/erykksc/Emeralds',
      },
      {
        label: 'Watch Demo',
        href: 'https://github.com/erykksc/emeralds/tree/master#demo',
        color: 'green',
      },
    ],
  },
  {
    title: 'Project: Neural-Net',
    eyebrow: '2019',
    description:
      'Neural network implemented in pure Python and NumPy for an International Baccalaureate extended essay, built without ML libraries.',
    category: 'project',
    href: 'https://github.com/erykksc/Neural-Net',
    links: [
      { label: 'View Source', href: 'https://github.com/erykksc/Neural-Net' },
    ],
  },
];

export const defaultSection = terminalSections[0];

export function getTerminalSection(slug?: string) {
  return (
    terminalSections.find((section) => section.slug === slug) ?? defaultSection
  );
}
