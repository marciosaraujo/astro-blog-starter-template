---
title: "CI/CD pipeline with GitHub Actions"
description: "Automated build, tests and deploy on every push, with promotion across environments."
category: "automation"
tech: ["GitHub Actions", "Docker", "Trivy", "Bash"]
repoUrl: "https://github.com/marciosaraujo/cicd-pipeline"
featured: false
coverImage: "/blog-placeholder-4.jpg"
date: 2026-02-28
---

> Example project — replace it with content from a real project of yours.

## Problem

Manual builds and deploys are slow, inconsistent, and leave room for human error.

## Solution

A **GitHub Actions** pipeline that builds the image, runs tests and security
analysis, and promotes the artifact across environments in a controlled way.

## Technical decisions

- **Trivy** for vulnerability scanning of the image before deploy.
- Automatic staging deploy; production with manual approval.
- Caching of dependencies and Docker layers for fast builds.

## Result

- From branch to deploy in a few minutes.
- Fewer errors and simple rollback per commit.
