// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://tesharienjoer.github.io',
	base: '/tartarus-wiki',

	integrations: [
		starlight({
			title: 'Tartarus Archive',

			social: [
				{
					icon: 'github',
					label: 'GitHub',
					href: 'https://github.com/TeshariEnjoer/tartarus-wiki',
				},
			],

			sidebar: [
				{
					label: 'Документация',
					items: [
						{ label: 'Главная', slug: 'index' },
					],
				},
			],
		}),
	],
});