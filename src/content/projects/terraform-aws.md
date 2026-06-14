---
title: "Infrastructure as code on AWS"
description: "Reproducible provisioning of AWS environments with Terraform."
category: "infra"
tech: ["Terraform", "AWS", "VPC", "EKS"]
repoUrl: "https://github.com/marciosaraujo/terraform-aws"
featured: true
coverImage: "/blog-placeholder-2.jpg"
date: 2026-04-18
---

> Example project — replace it with content from a real project of yours.

## Problem

Creating cloud environments through the console is not repeatable and leads to
subtle differences between dev, staging and production.

## Solution

All infrastructure — network, cluster, IAM — described in **Terraform**, with
reusable modules and shared remote state.

## Technical decisions

- Versioned **modules** for VPC, EKS and IAM policies.
- **Remote state** in S3 with locking via DynamoDB.
- `terraform plan` in CI to review changes before apply.

## Result

- Identical environments created in minutes.
- Infra changes reviewed as code, via PR.
