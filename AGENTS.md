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
- Public project preview placeholders live in `public/project-preview-*.svg` and are referenced by `projectPreviews`.

## Terminal

- `src/components/TerminalFrame.astro` intentionally renders a static terminal fallback first; keep it readable for no-JS users.
- The enhanced terminal is `src/components/AnimatedTerminal.tsx`, mounted with `client:only="react"`; JS-enabled CSS hides the static fallback.
- Terminal tab close/reopen behavior, command typing, and the Projects popup are custom React state logic, not a third-party typing/modal library.
- When changing terminal command output, update both the static fallback data in `portfolio.ts` and any enhanced-only behavior in `AnimatedTerminal.tsx` if needed.

## Theme And Motion

- Theme initialization is inline in `Layout.astro` to avoid first-paint flicker; preserve the early `data-theme` setup if changing theme behavior.
- Dark/light palette and the theme toggle are CSS-variable driven in `global.css`.
- Timeline scroll animation is inline in `SketchTimeline.astro`; no-JS should still show content, and reduced-motion should skip animated reveals.

## Docs

- `README.md` is still the default Astro starter README and is not a reliable source for this portfolio’s actual architecture.
