# AGENTS.md

## Commands

- Use `npm run dev` for the Astro dev server and `npm run build` for the main production verification step.
- Use `npm run format:check` for Prettier formatting verification and `npm run lint` for ESLint.
- There are no repo scripts for test or typecheck; do not invent them.
- The project requires Node `>=22.12.0` and uses `package-lock.json`, so prefer npm commands.
- `astro.config.mjs` defines `site` for the `eryk.one` custom domain and sitemap generation.

## Structure

- `src/pages/index.astro` is the only page entrypoint; it renders `src/components/PortfolioPage.astro` inside `src/layouts/Layout.astro`.
- Global styling lives in `src/styles/global.css`; Tailwind v4 is loaded via `@import "tailwindcss"` and the Vite plugin in `astro.config.mjs` rather than a Tailwind config file.
- Portfolio content, terminal sections, GitHub/project data, and timeline data are centralized in `src/data/portfolio.ts`.
- Public project preview placeholders live in `public/project-preview-*.svg`.
- Institution logos and marker images live in `public/*.png|.jpg|.gif` and are tracked with Git LFS.
- Custom marker React components live in `src/components/markers/`.

## Terminal

- `src/components/TerminalFrame.astro` intentionally renders a static terminal fallback first; keep it readable for no-JS users.
- The enhanced terminal is `src/components/AnimatedTerminal.tsx`, mounted with `client:only="react"`; JS-enabled CSS hides the static fallback.
- Terminal tab close/reopen behavior, command typing, and the Projects popup are custom React state logic, not a third-party typing/modal library.
- When changing terminal command output, update both the static fallback data in `portfolio.ts` and any enhanced-only behavior in `AnimatedTerminal.tsx` if needed.

## Theme And Motion

- Theme initialization is inline in `Layout.astro` to avoid first-paint flicker; preserve the early `data-theme` setup if changing theme behavior.
- Dark/light palette and the theme toggle are CSS-variable driven in `global.css`.
- Timeline scroll animation is inline in `SketchTimeline.astro`; no-JS should still show content, and reduced-motion should skip animated reveals.

## Timeline Markers

The timeline's circular/square icons are React components in `src/components/markers/`:

- **`LogoMarker.tsx`** — general-purpose marker for institution logos and simple images. Props:
  - `shape: 'circle' | 'square'` — circular (IB only) or square/rectangle.
  - `size: 'logo' | 'wide'` — standard icon size or large 16:9 preview (Emeralds/wikigraph).
  - `objectFit: 'contain' | 'cover'` — `contain` respects full logo, `cover` fills without background bleed.
  - `aspectRatio?: string` — e.g. `'5/4'` for TU Berlin. Only needed with `size: 'logo'` to avoid empty space.
  - `src`, `alt`, `title`, `href` — standard props.
- **`EmeraldsMarker.tsx`** — standalone custom component for the Emeralds preview (large 16:9 with hardcoded screenshot URL). Only when `LogoMarker` props aren't enough.
- Assign via `markerComponent` + `markerProps` in `portfolio.ts`:
  ```ts
  markerComponent: LogoMarker,
  markerProps: { src: '/tu-berlin-logo.png', aspectRatio: '5/4' },
  ```
- Terminal-Tetris uses the legacy `image` field (string path), not `LogoMarker`.

## Docs

- `README.md` is still the default Astro starter README and is not a reliable source for this portfolio’s actual architecture.
