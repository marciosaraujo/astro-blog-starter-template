# Portfolio Template

A **portfolio** template built with **Astro** and deployed to the **Cloudflare Workers** edge. Projects are authored as Markdown/MDX content and organized by area (Infrastructure, Observability, Automation/CI-CD and Platform). Includes a light/dark theme.

🔗 **Live demo:** https://marcio-portfolio.marciosaraujo.workers.dev/

## Highlights

- ✅ Project showcase with a category-filterable gallery
- ✅ Dedicated page per project, with stack, demo and source links
- ✅ Light/dark theme (follows the system, with a manual toggle and persistence) that survives view transitions
- ✅ "Dev/SaaS minimalist" design: Inter + Space Grotesk type, ambient glow, subtle grid background, spotlight-on-hover cards and a blurred sticky header
- ✅ Smooth client-side navigation via Astro view transitions
- ✅ SEO with canonical URLs, OpenGraph and sitemap
- ✅ RSS feed of the projects
- ✅ Markdown & MDX for the content
- ✅ Built-in observability logging (Cloudflare)

## Structure

```
src/
├── content/projects/         # One .md/.mdx file per project (the portfolio content)
├── content.config.ts         # "projects" collection schema
├── consts.ts                 # Site data: title, author, tagline, skills, links, categories
├── env.d.ts
├── pages/
│   ├── index.astro           # Home: hero + skills + featured projects
│   ├── about.astro           # About / contact
│   ├── rss.xml.js            # Projects RSS feed
│   └── projects/
│       ├── index.astro       # Category-filterable gallery
│       └── [...slug].astro   # Per-project page
├── layouts/
│   └── ProjectPost.astro     # Project page layout
├── components/
│   ├── BaseHead.astro        # <head>, metadata, theme anti-flash script + view transitions
│   ├── Header.astro          # Navigation + social links + theme toggle
│   ├── Footer.astro
│   ├── HeaderLink.astro
│   ├── ProjectCard.astro     # Project card in the gallery/home
│   ├── TechBadge.astro       # Technology badge
│   ├── ThemeToggle.astro     # Light/dark theme button
│   └── FormattedDate.astro
└── styles/
    └── global.css            # Global styles + design tokens for the light/dark themes
```

## How to add a project

Create a file in `src/content/projects/`, for example `my-project.md`:

```markdown
---
title: "Project name"
description: "A sentence about what it does."
category: "platform"           # infra | observability | automation | platform
tech: ["Terraform", "AWS"]
repoUrl: "https://github.com/your-username/my-project"
demoUrl: "https://my-project.example.dev"   # optional
featured: true                  # shows on the home page
coverImage: "/my-cover.svg"     # optional, in public/
date: 2026-06-01
---

## Problem
...
## Solution
...
```

The project shows up automatically in the gallery and (if `featured: true`) on the home page.

> The projects in `src/content/projects/` are examples — replace them with your own.

## 🧞 Commands

| Command             | Action                                            |
| :------------------ | :------------------------------------------------ |
| `npm install`       | Install dependencies                              |
| `npm run dev`       | Development server at `localhost:4321`            |
| `npm run build`     | Build the production site to `./dist/`            |
| `npm run preview`   | Build + local preview via Wrangler               |
| `npm run check`     | Validate everything: build + `tsc` + deploy dry-run |
| `npm run deploy`    | Publish to Cloudflare Workers                     |
| `npx wrangler tail` | Stream live Worker logs                           |

## Before publishing

1. Update your data in `src/consts.ts` (title, author, tagline, skills, links, categories).
2. Confirm `site` in `astro.config.mjs` (already points to the Worker URL).
3. Replace the example projects with your own.
4. Run `npm run check`, then `npm run deploy`.

---

Built on Cloudflare's [Astro Blog Starter](https://github.com/cloudflare/templates/tree/main/astro-blog-starter-template) template, based on the [Bear Blog](https://github.com/HermanMartinus/bearblog/) theme.
