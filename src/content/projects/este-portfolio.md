---
title: "Este portfólio — Astro na borda da Cloudflare"
description: "Site estático construído com Astro e implantado em Cloudflare Workers, com deploy automatizado."
category: "platform"
tech: ["Astro", "Cloudflare Workers", "Wrangler", "TypeScript", "GitHub Actions"]
repoUrl: "https://github.com/marciosaraujo/astro-blog-starter-template"
featured: true
coverImage: "/blog-placeholder-5.jpg"
date: 2026-06-14
---

Este próprio site é um projeto. Ele mostra, na prática, parte do meu fluxo de
trabalho: build reprodutível, infraestrutura declarada em código e deploy na
borda.

## Stack e arquitetura

- **Astro** gera o site como assets estáticos servidos por um **Cloudflare Worker**.
- **Wrangler** descreve a configuração do Worker (`wrangler.json`) — infraestrutura
  como código, versionada junto ao repositório.
- **Observabilidade** habilitada no Worker, com upload de source maps.

## Automação

- `npm run check` valida tudo de uma vez: `astro build`, `tsc` e
  `wrangler deploy --dry-run`.
- Pronto para um pipeline de CI que roda esse check a cada push e publica via
  `wrangler deploy`.

## Por que é relevante

Um site de portfólio que se auto-hospeda na borda, com config versionada e deploy
de um comando, é uma demonstração concreta de práticas de DevOps/SRE aplicadas até
no menor projeto.
