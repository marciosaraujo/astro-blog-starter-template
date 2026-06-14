---
title: "AI Gateway Edge — Gemini behind your own API"
description: "Full-stack AI gateway on a single Cloudflare Worker: a React UI and a Hono API that proxy prompts to Gemini, keeping the provider key off the browser."
category: "platform"
tech: ["Cloudflare Workers", "Hono", "React", "Vite", "TypeScript"]
repoUrl: "https://github.com/marciosaraujo/ai-gateway-edge"
demoUrl: "https://ai-gateway-edge.marciosaraujo.workers.dev/"
featured: true
coverImage: "/projects/ai-gateway-edge.svg"
date: 2026-06-10
---

A full-stack **AI gateway** running as a single **Cloudflare Worker**: a
**React + Vite** frontend and a **Hono** backend that proxy prompts to Google AI
Studio (Gemini).

The whole point is the architecture: **the browser never touches the provider
credential.** The frontend only calls same-origin `/api/*` endpoints; the Worker
reads the key from its environment and makes the upstream call. So the repo can
be public while the key stays private — a clean "model gateway" pattern for
putting AI behind your own internal API.

## Why it matters

Dropping an AI provider key into a frontend is one of the most common ways teams
leak credentials. This project shows the safe alternative: a thin edge gateway
that owns the key, enforces what callers can do, and exposes a stable contract —
the kind of internal AI proxy a DevOps/SRE team would actually run.

## Architecture

- **One Worker, one origin.** Static assets are served first; `/api/*` is handled
  by Hono and everything else is delegated to the `ASSETS` binding with SPA
  fallback, so deep links like `/playground` work on direct load and refresh.
- **Credential isolation.** The key lives only in the Worker environment — never
  in `VITE_*`, the bundle, logs, or responses. The browser → Worker → Gemini hop
  keeps the secret server-side.
- **Typed end to end.** The request/response contract is typed on both client and
  server, so integration mistakes fail at compile time.

## Abuse protection

- Curated **model allowlist** (Gemini 3.x + 2.5) — easy to extend, hard to abuse.
- Payload size cap, 30s upstream timeout, and best-effort per-IP rate limiting.
- Sanitized logs and generic error messages — no secret or stack-trace leakage.
- Standard response envelope: `{ success, data, error, requestId }`.

## Why this stack

- **React + Vite** — reactive UI, instant HMR in dev, small optimized bundle.
- **Hono** — tiny, fast, Express-style framework that runs natively on the Workers
  edge runtime.
- **Cloudflare Workers** — serverless at the edge: low global latency,
  autoscaling, no servers, deploys in seconds.
- **TypeScript everywhere** — a single shared contract across frontend and backend.

One repository, one build, one deploy command — frontend and backend share the
same origin (no CORS), with no separate infrastructure to maintain. The provider
key is set as a Worker **secret** (`wrangler secret put`), and a GitHub Actions
workflow deploys `main` automatically.
