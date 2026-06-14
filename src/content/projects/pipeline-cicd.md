---
title: "Pipeline de CI/CD com GitHub Actions"
description: "Build, testes e deploy automatizados a cada push, com promoção entre ambientes."
category: "automation"
tech: ["GitHub Actions", "Docker", "Trivy", "Bash"]
repoUrl: "https://github.com/marciosaraujo/cicd-pipeline"
featured: false
coverImage: "/blog-placeholder-4.jpg"
date: 2026-02-28
---

> Projeto de exemplo — substitua pelo conteúdo de um projeto real seu.

## Problema

Builds e deploys manuais são lentos, inconsistentes e abrem espaço para erro
humano.

## Solução

Um pipeline em **GitHub Actions** que constrói a imagem, roda testes e análise de
segurança e promove o artefato entre ambientes de forma controlada.

## Decisões técnicas

- **Trivy** para scan de vulnerabilidades na imagem antes do deploy.
- Deploy em staging automático; produção com aprovação manual.
- Cache de dependências e camadas Docker para builds rápidos.

## Resultado

- Da branch ao deploy em poucos minutos.
- Menos erros e rollback simples por commit.
