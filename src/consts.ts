// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = "Marcio Araujo — Portfolio Template";
export const SITE_DESCRIPTION =
	"Projetos práticos de desenvolvimento full-stack: frontend, backend/APIs e dados/IA.";

export const AUTHOR = "Marcio Araujo";
export const TAGLINE = "DevOps / SRE";

export const SOCIAL = {
	github: "https://github.com/marciosaraujo",
	email: "marcio@marcioaraujo.net",
};

// Tecnologias destacadas na home, agrupadas por área.
export const SKILLS: { group: string; items: string[] }[] = [
	{ group: "Containers & Orquestração", items: ["Docker", "Kubernetes", "Helm"] },
	{ group: "IaC & CI/CD", items: ["Terraform", "Ansible", "GitHub Actions", "GitLab CI", "ArgoCD"] },
	{ group: "Cloud & Infra", items: ["AWS", "Cloudflare", "Linux", "Nginx"] },
	{ group: "Observabilidade", items: ["Prometheus", "Grafana", "Loki", "OpenTelemetry"] },
	{ group: "Scripting", items: ["Bash", "Python", "Go"] },
];

// Rótulos legíveis para as categorias de projeto.
export const CATEGORY_LABELS: Record<string, string> = {
	infra: "Infraestrutura",
	observability: "Observabilidade",
	automation: "Automação / CI-CD",
	platform: "Plataforma",
};
