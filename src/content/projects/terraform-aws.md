---
title: "Infraestrutura como código na AWS"
description: "Provisionamento reproduzível de ambientes na AWS com Terraform."
category: "infra"
tech: ["Terraform", "AWS", "VPC", "EKS"]
repoUrl: "https://github.com/marciosaraujo/terraform-aws"
featured: true
coverImage: "/blog-placeholder-2.jpg"
date: 2026-04-18
---

> Projeto de exemplo — substitua pelo conteúdo de um projeto real seu.

## Problema

Criar ambientes na nuvem pelo console não é repetível e gera diferenças sutis
entre dev, staging e produção.

## Solução

Toda a infraestrutura — rede, cluster, IAM — descrita em **Terraform**, com
módulos reutilizáveis e estado remoto compartilhado.

## Decisões técnicas

- **Módulos** versionados para VPC, EKS e políticas de IAM.
- **State remoto** em S3 com lock via DynamoDB.
- `terraform plan` no CI para revisar mudanças antes do apply.

## Resultado

- Ambientes idênticos criados em minutos.
- Mudanças de infra revisadas como código, via PR.
