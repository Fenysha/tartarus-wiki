// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import { GAME_SERVER_URL } from './src/lib/game-server.ts';

export { GAME_SERVER_URL };

export default defineConfig({
	site: 'https://tesharienjoer.github.io',
	base: '/tartarus-wiki',

	integrations: [
		starlight({
			title: 'Tartarus Project Wiki',
			description:
				'Архивные документы сервера Tartarus Project: секретные материалы, события и сущности мира.',
			locales: {
				root: {
					label: 'Русский',
					lang: 'ru',
				},
				en: {
					label: 'English',
					lang: 'en',
				},
			},
			defaultLocale: 'root',
			tableOfContents: false,

			social: [
				{
					icon: 'github',
					label: 'GitHub',
					href: 'https://github.com/TeshariEnjoer/tartarus-wiki',
				},
			],

			sidebar: [
				{
					label: 'Главная',
					items: [{ label: 'Главная', slug: '' }],
				},
				{
					label: 'Игровой сервер',
					items: [{ label: 'Подключиться к серверу', link: '/tartarus-wiki/join' }],
				},
				{
					label: 'Документы',
					items: [{ autogenerate: { directory: 'docs' } }],
				},
				{
					label: 'Лор',
					items: [{ autogenerate: { directory: 'lore' } }],
				},
				{
					label: 'Эвенты',
					items: [{ autogenerate: { directory: 'events' } }],
				},
				{
					label: 'Руководства',
					items: [{ autogenerate: { directory: 'guides' } }],
				},
			],
			customCss: ['./src/styles/custom.css'],
		}),
	],
});