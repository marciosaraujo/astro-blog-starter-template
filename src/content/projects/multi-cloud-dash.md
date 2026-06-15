---
title: "Multi-Cloud Health Dashboard — every status page in one view"
description: "Edge-native dashboard that aggregates real-time health from Cloudflare, Azure, AWS, GitHub and Oracle Cloud into a single server-rendered view on a Cloudflare Worker."
category: "observability"
tech: ["Cloudflare Workers", "React Router 7", "Tailwind CSS", "Vite", "TypeScript"]
repoUrl: "https://github.com/marciosaraujo/multi-cloud-dash"
demoUrl: "https://multi-cloud-dash.marciosaraujo.workers.dev"
featured: true
coverImage: "/projects/multi-cloud-dash.svg"
date: 2026-06-15
---

A single dashboard that answers "is anything on fire?" across every cloud a team
depends on. Instead of juggling five separate status pages, **Multi-Cloud Health
Dashboard** aggregates real-time health from **Cloudflare, Azure, AWS, GitHub and
Oracle Cloud** into one server-rendered view, running entirely on a **Cloudflare
Worker**.

## Why it matters

During an incident, the first question is always "is it us or is it the
provider?" — and finding out means opening a tab per vendor. This project
collapses that into one screen: a global overview, per-provider service lists,
and drill-down detail pages, all from the edge with no servers to run.

## Architecture

- **Edge-native SSR.** **React Router 7** renders on Cloudflare's edge runtime,
  so the dashboard is fast and crawlable with no client-side fetch waterfall.
- **Parallel health checks.** Every provider is polled concurrently with a 5s
  per-check timeout, so one slow upstream never blocks the page.
- **~60s edge caching.** Responses are cached at the edge to stay fresh without
  hammering provider status APIs on every request.
- **No secrets in the browser.** All upstream calls happen server-side in the
  Worker; nothing sensitive is ever shipped to the client.

## What you see

- **Global overview** — KPIs for healthy providers and impacted services at a
  glance.
- **Per-provider lists** — current status for each monitored service.
- **Service detail** — latency, HTTP status, and endpoint information for a
  single service.

## Why this stack

- **React Router 7** — modern SSR that runs natively on the Workers edge runtime.
- **Tailwind CSS 4** — a "liquid-glass" dark glassmorphism UI built fast.
- **Cloudflare Workers** — global low-latency serverless with edge caching and no
  infrastructure to maintain.
- **TypeScript end to end** — typed provider adapters and a consistent health
  contract across the app.
