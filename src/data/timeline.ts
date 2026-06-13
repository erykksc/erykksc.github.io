import { LogoMarker } from '../components/markers/LogoMarker';

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
      'Develop and maintain full-stack plaform of Maxmed with multi-user management, observability, backups, CI deployments, transactional emails, GDPR compliance, telemetry and analytics.',
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
    markerComponent: LogoMarker,
    markerProps: {
      src: '/krakjam24-screenshot.png',
      size: 'wide',
      objectFit: 'cover',
    },
    links: [
      { label: 'Play Demo', href: 'https://eroar.itch.io/glab-pocztowy' },
      {
        label: 'View Source',
        href: 'https://github.com/erykksc/KrakJam24',
        color: 'pink',
      },
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
    eyebrow: '2021',
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
    title: 'Text4Videos',
    eyebrow: '2020',
    description:
      'Ran a small business offering subtitle creation and translation services for videos, from Polish to English. \
      Subtitles were auto-generated using my custom software and then manually corrected, making it the first service of its kind in Poland. \
      One of my clients was the University of Warsaw.',
    category: 'work',
    href: 'https://text4videos.eryk.one/',
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
    markerComponent: LogoMarker,
    markerProps: {
      src: '/surviving-neon-lights.png',
      alt: 'Survive in Neon Lights screenshot',
      size: 'wide',
      objectFit: 'cover',
    },
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
    markerComponent: LogoMarker,
    markerProps: {
      src: 'https://github.com/user-attachments/assets/d6cc2b2b-15a3-46fa-baec-d78069b90d07',
      size: 'wide',
      objectFit: 'cover',
    },
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
