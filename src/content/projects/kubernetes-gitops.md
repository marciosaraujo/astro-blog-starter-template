---
title: "Kubernetes cluster with GitOps"
description: "Cluster managed declaratively, with automated deploys via ArgoCD."
category: "platform"
tech: ["Kubernetes", "ArgoCD", "Helm", "Kustomize"]
repoUrl: "https://github.com/marciosaraujo/k8s-gitops"
featured: true
coverImage: "/blog-placeholder-1.jpg"
date: 2026-05-20
---

> Example project — replace it with content from a real project of yours.

## Problem

Applying changes to a Kubernetes cluster manually (`kubectl apply`) is not
traceable, is error-prone, and hard to roll back.

## Solution

Adopt **GitOps**: the cluster's desired state lives in Git and **ArgoCD**
reconciles the cluster with the repository automatically.

## Technical decisions

- **Helm + Kustomize** to parameterize manifests per environment.
- Automatic sync with rollback based on health checks.
- Repository as the single source of truth — every change goes through a PR.

## Result

- Auditable, revertible deploys per commit.
- Drift detected and corrected automatically.
