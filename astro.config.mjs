// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import rehypeMermaid from 'rehype-mermaid';

// https://astro.build/config
export default defineConfig({
	site: "https://archambaultv-prof.github.io",
	base: "programmation-python",
	integrations: [
		starlight({
			title: 'Programmation objet',
			social: {
				github: 'https://github.com/archambaultv-prof/programmation-python',
			},
			editLink: {
				baseUrl: 'https://github.com/archambaultv-prof/programmation-python/edit/main/',
			  },
			credits: true,
			lastUpdated: true,
			locales: {
				root: {
					label: 'Français',
					lang: 'fr',
				},
			},
			// sidebar: [
			// 	{
			// 		label: 'Guides',
			// 		items: [
			// 			// Each item here is one entry in the navigation menu.
			// 			{ label: 'Example Guide', slug: 'guides/example' },
			// 		],
			// 	},
			// 	{
			// 		label: 'Reference',
			// 		autogenerate: { directory: 'reference' },
			// 	},
			// ],
		}),
	],
	markdown: {
		rehypePlugins: [rehypeMermaid],
	}
});
