// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = "Marcio Araujo — Portfolio";
export const SITE_DESCRIPTION =
	"Hands-on DevOps/SRE projects: infrastructure, automation, observability and reliability.";

export const AUTHOR = "Marcio Araujo";
export const TAGLINE = "DevOps / SRE";

export const SOCIAL = {
	github: "https://github.com/marciosaraujo",
	email: "marcio@marcioaraujo.net",
};

// Featured technologies on the home page, grouped by area.
export const SKILLS: { group: string; items: string[] }[] = [
	{ group: "Containers & Orchestration", items: ["Docker", "Kubernetes", "Helm", "Rancher"] },
	{ group: "IaC & CI/CD", items: ["Azure DevOps", "Terraform", "Ansible", "GitHub Actions", "GitLab CI", "ArgoCD"] },
	{ group: "Cloud & Infra", items: ["Azure", "AWS", "Cloudflare", "Linux", "Nginx"] },
	{ group: "Observability", items: ["Grafana", "New Relic", "DataDog", "Splunk", "Jira Service Management"] },
	{ group: "Scripting", items: ["Bash", "Python", "Go"] },
];

// Human-readable labels for project categories.
export const CATEGORY_LABELS: Record<string, string> = {
	infra: "Infrastructure",
	observability: "Observability",
	automation: "Automation / CI-CD",
	platform: "Platform",
};
