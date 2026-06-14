---
title: "This portfolio — Astro on the Cloudflare edge"
description: "Static site built with Astro and deployed to Cloudflare Workers, with automated deploys."
category: "platform"
tech: ["Astro", "Cloudflare Workers", "Wrangler", "TypeScript", "GitHub Actions"]
repoUrl: "https://github.com/marciosaraujo/astro-blog-starter-template"
featured: true
coverImage: "/projects/this-portfolio.svg"
date: 2026-06-14
---

This very site is a project. It shows, in practice, part of my workflow:
reproducible builds, infrastructure declared as code, and edge deployment.

## Why Astro

[Astro](https://astro.build) is a modern web framework built around a simple
idea: **ship as little JavaScript as possible**. By default it renders pages to
static HTML at build time and strips out any framework runtime the page doesn't
actually need. The result is a site that loads fast, ranks well, and stays cheap
to host.

A few reasons it fits this project well:

- **Content-first.** Projects live as plain Markdown/MDX files in
  `src/content/projects/`, validated by a typed schema (Zod). Adding a project is
  just dropping in a file — no CMS, no database, no admin panel to secure.
- **Islands architecture.** Interactive bits (theme toggle, project filters) ship
  as tiny, isolated scripts; everything else is static HTML. Less client-side code
  means fewer things that can break or slow the page down.
- **Great developer experience.** First-class TypeScript, fast hot-reload dev
  server, scoped component styles, and built-in view transitions for smooth
  navigation — without pulling in a heavy SPA framework.
- **Framework-agnostic.** If a page ever needs React, Svelte, or Vue, Astro can
  mount just that component, only on that page.

## Convenience: low effort to run and maintain

- **One source of truth.** Site metadata, skills and category labels live in
  `src/consts.ts`; content lives in Markdown. Updating the site rarely means
  touching layout code.
- **Reproducible builds.** `npm run build` produces the exact same output anywhere
  — locally or in CI — so "works on my machine" stops being a problem.
- **Single-command validation.** `npm run check` runs `astro build`, `tsc`, and
  `wrangler deploy --dry-run` together, catching build, type, and deploy-config
  errors before anything ships.

## Security

A static, edge-served site has a naturally small attack surface, and the setup
leans into that:

- **No server runtime to exploit.** The site is pre-rendered HTML served as
  static assets — there's no application server, database, or admin login that
  could be compromised.
- **No secrets in the build.** The repository ships only public content and
  config; there are no credentials baked into the output.
- **Cloudflare as a security layer.** Serving from **Cloudflare Workers** puts the
  site behind Cloudflare's global network, with automatic HTTPS/TLS, DDoS
  protection, and edge caching out of the box.
- **Type and config safety.** TypeScript in strict mode plus the Zod content
  schema catch malformed data at build time, and `wrangler deploy --dry-run`
  validates the deployment config before a real deploy.

## Stack and architecture

- **Astro** builds the site as static assets served by a **Cloudflare Worker**.
- **Wrangler** describes the Worker configuration (`wrangler.json`) —
  infrastructure as code, versioned alongside the repository.
- **Observability** enabled on the Worker, with source map upload.

## Automation

- `npm run check` validates everything at once: `astro build`, `tsc`, and
  `wrangler deploy --dry-run`.
- Ready for a CI pipeline that runs this check on every push and publishes via
  `wrangler deploy`.

## Why it matters

A portfolio site that self-hosts on the edge, with versioned config and
one-command deploys, is a concrete demonstration of DevOps/SRE practices applied
even to the smallest project.
