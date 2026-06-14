# Template Portfolio

Template de **portfólio** construído com **Astro** e implantado na borda da **Cloudflare Workers**. Os projetos são definidos como conteúdo em Markdown/MDX e organizados por área (Infraestrutura, Observabilidade, Automação/CI-CD e Plataforma). Inclui tema claro/escuro.

🔗 **Demo ao vivo:** https://astro-portfolio.marcioaraujo.workers.dev/
💻 **GitHub:** [@marciosaraujo](https://github.com/marciosaraujo)

## Destaques

- ✅ Vitrine de projetos com galeria filtrável por categoria
- ✅ Página dedicada por projeto, com stack, demo e link do código
- ✅ Tema claro/escuro (segue o sistema, com toggle manual e persistência)
- ✅ 100/100 de performance no Lighthouse
- ✅ SEO com URLs canônicas, OpenGraph e sitemap
- ✅ Feed RSS dos projetos
- ✅ Markdown & MDX para o conteúdo
- ✅ Logging de observabilidade embutido (Cloudflare)

## Estrutura

```
src/
├── content/projects/         # Um arquivo .md/.mdx por projeto (o conteúdo do portfólio)
├── content.config.ts         # Schema da coleção "projects"
├── consts.ts                 # Dados do site: título, autor, tagline, skills, links, categorias
├── env.d.ts
├── pages/
│   ├── index.astro           # Home: hero + skills + projetos em destaque
│   ├── about.astro           # Sobre / contato
│   ├── rss.xml.js            # Feed RSS dos projetos
│   └── projects/
│       ├── index.astro       # Galeria filtrável por categoria
│       └── [...slug].astro   # Página de cada projeto
├── layouts/
│   └── ProjectPost.astro     # Layout da página de projeto
├── components/
│   ├── BaseHead.astro        # <head>, metadados e script anti-flash do tema
│   ├── Header.astro          # Navegação + links sociais + toggle de tema
│   ├── Footer.astro
│   ├── HeaderLink.astro
│   ├── ProjectCard.astro     # Card de projeto na galeria/home
│   ├── TechBadge.astro       # Badge de tecnologia
│   ├── ThemeToggle.astro     # Botão de tema claro/escuro
│   └── FormattedDate.astro
└── styles/
    └── global.css            # Estilos globais + variáveis dos temas claro/escuro
```

## Como adicionar um projeto

Crie um arquivo em `src/content/projects/`, por exemplo `meu-projeto.md`:

```markdown
---
title: "Nome do projeto"
description: "Uma frase sobre o que ele faz."
category: "platform"           # infra | observability | automation | platform
tech: ["Terraform", "AWS"]
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

> Os projetos em `src/content/projects/` são exemplos — substitua pelos seus.

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

1. Ajuste seus dados em `src/consts.ts` (título, autor, tagline, skills, links, categorias).
2. Confirme o `site` em `astro.config.mjs` (já aponta para a URL do Worker).
3. Substitua os projetos de exemplo pelos seus.
4. `npm run check` e depois `npm run deploy`.

---

Construído sobre o template [Astro Blog Starter](https://github.com/cloudflare/templates/tree/main/astro-blog-starter-template) da Cloudflare, baseado no tema [Bear Blog](https://github.com/HermanMartinus/bearblog/).
