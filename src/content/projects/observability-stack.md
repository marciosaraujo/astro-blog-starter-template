---
title: "Observability stack"
description: "Centralized metrics, logs and alerts with Prometheus, Grafana and Loki."
category: "observability"
tech: ["Prometheus", "Grafana", "Loki", "Alertmanager"]
repoUrl: "https://github.com/marciosaraujo/observability-stack"
featured: false
coverImage: "/blog-placeholder-3.jpg"
date: 2026-03-22
---

> Example project — replace it with content from a real project of yours.

## Problem

Without unified visibility, incidents take longer to detect and diagnose.

## Solution

A complete observability stack: **Prometheus** for metrics, **Loki** for logs,
**Grafana** for dashboards, and **Alertmanager** for actionable alerts.

## Technical decisions

- Metrics and logs correlated in Grafana.
- Alerts based on SLOs, not on noise.
- Configuration versioned and provisioned automatically.

## Result

- Reduced incident detection time.
- Standardized dashboards per service.
