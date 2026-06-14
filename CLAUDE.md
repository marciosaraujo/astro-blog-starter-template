# CLAUDE.md

Personal **portfolio** site built on Astro (originally the Astro blog starter), server-rendered via the Cloudflare adapter and deployed to Cloudflare Workers. Showcases DevOps/SRE projects grouped by area (`infra`, `observability`, `automation`, `platform`). UI copy and project content are in English (`lang="en"`).

## Commands

- `npm run dev` — local Astro dev server at `localhost:4321`
- `npm run build` — build production site to `./dist/` (emits a `_worker.js`)
- `npm run preview` — build, then run the Worker locally via `wrangler dev`
- `npm run check` — full validation: `astro build && tsc && wrangler deploy --dry-run`
- `npm run deploy` — deploy the built site to Cloudflare Workers (`wrangler deploy`)
- `npm run cf-typegen` — regenerate `worker-configuration.d.ts` from `wrangler.json`
- `npx wrangler tail` — stream live Worker logs (observability is enabled)

No test runner or linter is configured; `npm run check` is the gate before deploying.

## Architecture

- **Framework**: Astro 5 with `@astrojs/mdx`, `@astrojs/sitemap`, `@astrojs/rss`. Requires Node >= 22.
- **Adapter**: `@astrojs/cloudflare` with `platformProxy` enabled, so Cloudflare bindings are available in `astro dev`.
- **Routing**: file-based under `src/pages/`. Home (`index.astro`) shows hero + skills + featured projects; `/projects` is the filterable gallery; each project renders through `src/pages/projects/[...slug].astro`, which uses `getStaticPaths()` over the `projects` collection.
- **Content**: projects live in `src/content/projects/` as `.md`/`.mdx`. The `projects` collection is defined in `src/content.config.ts` using a `glob` loader and a Zod frontmatter schema (`title`, `description`, `category` enum, `tech[]`, optional `repoUrl`/`demoUrl`/`coverImage`, `featured`, `date`). Add a project by dropping a file here — it appears in the gallery automatically, and on the home page if `featured: true`.
- **Layouts/components**: project page layout in `src/layouts/ProjectPost.astro`; `src/components/` has `ProjectCard`, `TechBadge`, plus `BaseHead`, `Header`, `Footer`, `HeaderLink`, `ThemeToggle`, `FormattedDate`. The `/projects` filter is plain client-side JS (no UI framework).
- **Styling / design system**: `src/styles/global.css` holds the design tokens (CSS custom properties on `:root` and `:root[data-theme="dark"]`) — accent (a sober indigo/slate-blue), surface/border/glow colors, radii, and the legacy RGB triples (`--black`, `--gray`, …) the components rely on. Fonts are Inter (body) + Space Grotesk (headings), loaded from Google Fonts in `BaseHead`. Component styles are scoped `<style>` blocks. Visual style is "dev/SaaS minimalist": ambient glow + subtle grid background on `body`, spotlight-on-hover cards, blurred sticky header.
- **Theming**: light/dark toggle. `BaseHead` has an inline script that applies the saved/system theme before paint (`data-theme` on `<html>`) and re-applies it on `astro:after-swap`; `ThemeToggle` uses a document-delegated click handler. Both are written this way so the theme survives Astro's view transitions (`ClientRouter`, also wired in `BaseHead`).
- **Global config**: `src/consts.ts` holds site metadata plus `AUTHOR`, `TAGLINE`, `SOCIAL` (github/email), `SKILLS` (grouped tech list), and `CATEGORY_LABELS`. The canonical `site` URL is set in `astro.config.mjs` (currently `https://example.com` — update before deploy for correct SEO/sitemap/RSS).
- **Static assets**: `public/`.

## Deployment notes

- `wrangler.json` is the Worker config: `main` points at the built `./dist/_worker.js/index.js`, `dist` is served via the `ASSETS` binding, `nodejs_compat` flag is on, and observability + source map upload are enabled.
- TypeScript extends `astro/tsconfigs/strict` with `strictNullChecks`.
- `worker-configuration.d.ts` is generated; do not hand-edit it.
