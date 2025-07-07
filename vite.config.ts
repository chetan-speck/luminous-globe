// ------------------------------------------------------------------------------------------

import { defineConfig } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';

import react from '@vitejs/plugin-react';

// ------------------------------------------------------------------------------------------

const config = defineConfig({
	base: './',
	plugins: [
		react(),
		VitePWA({
			registerType: 'autoUpdate',
			devOptions: {
				enabled: false,
			},
			includeAssets: [
				'icons/*.ico',
				'icons/*.png',
				'screenshots/*.png',
				'assets/audios/*.mp3',
				'assets/logos/*.svg',
				'assets/textures/*.jpg',
				'assets/textures/*.png',
			],
			manifest: {
				short_name: 'Luminous Globe',
				name: 'An interactive 3D Earth visualization with smooth controls, atmospheric lighting, and a visually rich representation of the planet.',
				icons: [
					{
						src: './icons/favicon.ico',
						sizes: '64x64 32x32 24x24 16x16',
						type: 'image/x-icon',
					},
					{
						src: './icons/icon-192x192.png',
						sizes: '192x192',
						type: 'image/png',
					},
					{
						src: './icons/icon-512x512.png',
						sizes: '512x512',
						type: 'image/png',
					},
				],
				screenshots: [
					{
						src: './screenshots/screenshot-720x720.png',
						sizes: '720x720',
						type: 'image/png',
						form_factor: 'wide',
					},
				],
				start_url: '.',
				display: 'standalone',
				theme_color: '#0d0e13',
				background_color: '#0d0e13',
				scope: '/',
			},
			workbox: {
				globPatterns: ['**/*.{js,css,html,ico,png,jpg,svg,mp3}'],
				globDirectory: 'dist/',
				globIgnores: [],
				maximumFileSizeToCacheInBytes: 100 * 1024 * 1024,
			},
		}),
	],
	resolve: {
		alias: {
			'@': '/src',
		},
	},
	build: {
		outDir: 'dist',
	},
});

// ------------------------------------------------------------------------------------------

export default config;

// ------------------------------------------------------------------------------------------
