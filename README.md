# Portfólio — Marcio Araujo

Portfólio de projetos full-stack construído com **Astro** e implantado na borda da **Cloudflare Workers**. Os projetos são definidos como conteúdo em Markdown/MDX e organizados por área (Frontend, Backend/APIs, Dados/IA e Full-stack).

🔗 **Demo ao vivo:** _adicione aqui a URL do seu Worker depois do primeiro deploy_
💻 **GitHub:** [@marciosaraujo](https://github.com/marciosaraujo)

## Destaques

- ✅ Vitrine de projetos com galeria filtrável por categoria
- ✅ Página dedicada por projeto, com stack, demo e link do código
- ✅ 100/100 de performance no Lighthouse
- ✅ SEO com URLs canônicas, OpenGraph e sitemap
- ✅ Feed RSS dos projetos
- ✅ Markdown & MDX para o conteúdo
- ✅ Logging de observabilidade embutido (Cloudflare)

## Stack

- **Web:** Astro, TypeScript, JavaScript, React, HTML/CSS
- **Backend / Infra:** Node.js, Cloudflare Workers, APIs REST, bancos de dados
- **Dados / IA:** Python, LLMs (API Claude), análise de dados

## Estrutura

```
src/
├── content/projects/      # Um arquivo .md/.mdx por projeto (o conteúdo do portfólio)
├── content.config.ts      # Schema da coleção "projects"
├── consts.ts              # Dados do site: nome, tagline, skills, links sociais
├── pages/
│   ├── index.astro        # Home: hero + skills + projetos em destaque
│   ├── about.astro        # Sobre / contato
│   └── projects/          # Galeria (index) e página de cada projeto ([...slug])
├── components/            # ProjectCard, TechBadge, Header, Footer, ...
└── layouts/ProjectPost.astro
```

## Como adicionar um projeto

Crie um arquivo em `src/content/projects/`, por exemplo `meu-projeto.md`:

```markdown
---
title: "Nome do projeto"
description: "Uma frase sobre o que ele faz."
category: "fullstack"          # frontend | backend | data-ai | fullstack
tech: ["Astro", "TypeScript"]
repoUrl: "https://github.com/marciosaraujo/meu-projeto"
demoUrl: "https://meu-projeto.exemplo.dev"   # opcional
featured: true                  # aparece na home
coverImage: "/minha-capa.jpg"   # opcional, em public/
date: 2026-06-01
---

## Problema
...
## Solução
...
```

O projeto aparece automaticamente na galeria e (se `featured: true`) na home.

> Os 4 projetos atuais em `src/content/projects/` são exemplos — substitua pelos seus.

## 🧞 Comandos

| Comando            | Ação                                              |
| :----------------- | :------------------------------------------------ |
| `npm install`      | Instala as dependências                           |
| `npm run dev`      | Servidor de desenvolvimento em `localhost:4321`   |
| `npm run build`    | Gera o site de produção em `./dist/`              |
| `npm run preview`  | Build + preview local via Wrangler                |
| `npm run check`    | Valida tudo: build + `tsc` + deploy dry-run       |
| `npm run deploy`   | Publica na Cloudflare Workers                      |
| `npx wrangler tail`| Logs em tempo real do Worker                       |

## Antes de publicar

1. Ajuste seus dados em `src/consts.ts` (nome, tagline, skills, links).
2. Troque o `site` em `astro.config.mjs` pela URL real do seu site.
3. Substitua os projetos de exemplo pelos seus.
4. `npm run check` e depois `npm run deploy`.

---

Construído sobre o template [Astro Blog Starter](https://github.com/cloudflare/templates/tree/main/astro-blog-starter-template) da Cloudflare, baseado no tema [Bear Blog](https://github.com/HermanMartinus/bearblog/).
