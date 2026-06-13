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

export const heroContent = {
  kicker: 'Software developer portfolio',
  title: 'Eryk Kściuczyk',
  description:
    "Computer Science master's student at TU Berlin, Open-source contributor, full-stack web developer, and hobbyist game developer",
  personalNote:
    'I use neovim and daily drive linux btw. ;)<br> -\
  <a style="color:var(--color-primary);text-decoration:underline" href="https://github.com/erykksc/.dotfiles">My dotfiles</a>',
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
