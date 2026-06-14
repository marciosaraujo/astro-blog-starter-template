---
title: "Cluster Kubernetes com GitOps"
description: "Cluster gerenciado de forma declarativa, com deploys automatizados via ArgoCD."
category: "platform"
tech: ["Kubernetes", "ArgoCD", "Helm", "Kustomize"]
repoUrl: "https://github.com/marciosaraujo/k8s-gitops"
featured: true
coverImage: "/blog-placeholder-1.jpg"
date: 2026-05-20
---

> Projeto de exemplo — substitua pelo conteúdo de um projeto real seu.

## Problema

Aplicar mudanças em um cluster Kubernetes manualmente (`kubectl apply`) não é
rastreável, é propenso a erro e difícil de reverter.

## Solução

Adotar **GitOps**: o estado desejado do cluster vive em Git e o **ArgoCD**
reconcilia o cluster com o repositório automaticamente.

## Decisões técnicas

- **Helm + Kustomize** para parametrizar manifests por ambiente.
- Sync automático com rollback baseado em health checks.
- Repositório como única fonte de verdade — toda mudança passa por PR.

## Resultado

- Deploys auditáveis e reversíveis por commit.
- Drift detectado e corrigido automaticamente.
