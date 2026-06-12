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

export type ProjectPreview = {
  title: string;
  year: string;
  description: string;
  image: string;
  tags: string[];
  sourceHref?: string;
};

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
      'Neural network implemented in pure Python and NumPy without usage of external machine learning libraries. \
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
