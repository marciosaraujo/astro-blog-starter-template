import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import { SITE_TITLE, SITE_DESCRIPTION } from "../consts";

export async function GET(context) {
	const projects = await getCollection("projects");
	return rss({
		title: SITE_TITLE,
		description: SITE_DESCRIPTION,
		site: context.site,
		items: projects
			.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf())
			.map((project) => ({
				title: project.data.title,
				description: project.data.description,
				pubDate: project.data.date,
				link: `/projects/${project.id}/`,
			})),
	});
}
