const TAG_COLORS: Record<string, { bg: string; fg: string }> = {
  react: { bg: '#61dafb', fg: '#111111' },
  'web-app': { bg: '#61dafb', fg: '#111111' },
  typescript: { bg: '#61dafb', fg: '#111111' },
  visualization: { bg: '#61dafb', fg: '#111111' },
  website: { bg: '#61dafb', fg: '#111111' },
  'github-pages': { bg: '#61dafb', fg: '#111111' },
  aws: { bg: '#ff9900', fg: '#111111' },
  serverless: { bg: '#ff9900', fg: '#111111' },
  benchmarking: { bg: '#ff9900', fg: '#111111' },
  go: { bg: '#00add8', fg: '#111111' },
  htmx: { bg: '#00add8', fg: '#111111' },
  cli: { bg: '#00add8', fg: '#111111' },
  automation: { bg: '#00add8', fg: '#111111' },
  rust: { bg: '#dea584', fg: '#111111' },
  c: { bg: '#dea584', fg: '#111111' },
  'c-': { bg: '#dea584', fg: '#111111' },
  engine: { bg: '#dea584', fg: '#111111' },
  embedded: { bg: '#dea584', fg: '#111111' },
  python: { bg: '#ffd43b', fg: '#111111' },
  numpy: { bg: '#ffd43b', fg: '#111111' },
  ml: { bg: '#ffd43b', fg: '#111111' },
  data: { bg: '#ffd43b', fg: '#111111' },
  simulation: { bg: '#ffd43b', fg: '#111111' },
  docker: { bg: '#2496ed', fg: '#ffffff' },
  kubernetes: { bg: '#2496ed', fg: '#ffffff' },
  postgresql: { bg: '#2496ed', fg: '#ffffff' },
  mobilitydb: { bg: '#2496ed', fg: '#ffffff' },
  citus: { bg: '#2496ed', fg: '#ffffff' },
  calendar: {
    bg: 'var(--color-primary)',
    fg: 'var(--color-primary-foreground)',
  },
  pdf: { bg: 'var(--color-primary)', fg: 'var(--color-primary-foreground)' },
  wikipedia: {
    bg: 'var(--color-primary)',
    fg: 'var(--color-primary-foreground)',
  },
  graph: { bg: 'var(--color-primary)', fg: 'var(--color-primary-foreground)' },
  downloader: {
    bg: 'var(--color-primary)',
    fg: 'var(--color-primary-foreground)',
  },
  library: {
    bg: 'var(--color-primary)',
    fg: 'var(--color-primary-foreground)',
  },
  discord: { bg: '#5865f2', fg: '#ffffff' },
  game: { bg: '#5865f2', fg: '#ffffff' },
  'game-jam': { bg: '#5865f2', fg: '#ffffff' },
  godot: { bg: '#5865f2', fg: '#ffffff' },
  retro: { bg: '#5865f2', fg: '#ffffff' },
  graphics: { bg: '#5865f2', fg: '#ffffff' },
  terminal: { bg: '#5865f2', fg: '#ffffff' },
  nix: { bg: 'var(--color-secondary)', fg: 'var(--color-foreground)' },
  shell: { bg: 'var(--color-secondary)', fg: 'var(--color-foreground)' },
  neovim: { bg: 'var(--color-secondary)', fg: 'var(--color-foreground)' },
  keyboard: { bg: 'var(--color-secondary)', fg: 'var(--color-foreground)' },
  algorithms: { bg: 'var(--color-secondary)', fg: 'var(--color-foreground)' },
  prototype: { bg: 'var(--color-secondary)', fg: 'var(--color-foreground)' },
  thesis: { bg: 'var(--color-secondary)', fg: 'var(--color-foreground)' },
  tex: { bg: 'var(--color-secondary)', fg: 'var(--color-foreground)' },
  lua: { bg: 'var(--color-secondary)', fg: 'var(--color-foreground)' },
};

const DEFAULT_COLOR = {
  bg: 'var(--color-background)',
  fg: 'var(--color-foreground)',
};

function slugifyTag(tag: string): string {
  return tag
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}

export function getTagStyle(tag: string): React.CSSProperties {
  const slug = slugifyTag(tag);
  const color = TAG_COLORS[slug] ?? DEFAULT_COLOR;
  return {
    '--badge-bg': color.bg,
    '--badge-fg': color.fg,
  } as React.CSSProperties;
}
