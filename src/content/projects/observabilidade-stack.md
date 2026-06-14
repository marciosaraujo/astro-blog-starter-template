---
title: "Stack de observabilidade"
description: "Métricas, logs e alertas centralizados com Prometheus, Grafana e Loki."
category: "observability"
tech: ["Prometheus", "Grafana", "Loki", "Alertmanager"]
repoUrl: "https://github.com/marciosaraujo/observability-stack"
featured: false
coverImage: "/blog-placeholder-3.jpg"
date: 2026-03-22
---

> Projeto de exemplo — substitua pelo conteúdo de um projeto real seu.

## Problema

Sem visibilidade unificada, incidentes demoram a ser detectados e diagnosticados.

## Solução

Uma stack de observabilidade completa: **Prometheus** para métricas, **Loki**
para logs, **Grafana** para dashboards e **Alertmanager** para alertas acionáveis.

## Decisões técnicas

- Métricas e logs correlacionados no Grafana.
- Alertas baseados em SLOs, não em ruído.
- Configuração versionada e provisionada automaticamente.

## Resultado

- Tempo de detecção de incidentes reduzido.
- Dashboards padronizados por serviço.
