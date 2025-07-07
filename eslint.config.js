// ------------------------------------------------------------------------------------------

import js from '@eslint/js';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import { globalIgnores } from 'eslint/config';
import globals from 'globals';
import tseslint from 'typescript-eslint';

// ------------------------------------------------------------------------------------------

const config = tseslint.config([
	globalIgnores([
		'logs',
		'*.log',
		'npm-debug.log*',
		'yarn-debug.log*',
		'yarn-error.log*',
		'pnpm-debug.log*',
		'lerna-debug.log*',
		'node_modules',
		'dist',
		'dist-ssr',
		'*.local',
		'.vscode/*',
		'!.vscode/extensions.json',
		'.idea',
		'.DS_Store',
		'*.suo',
		'*.ntvs*',
		'*.njsproj',
		'*.sln',
		'*.sw?',
	]),
	{
		files: ['**/*.{ts,tsx}'],
		extends: [
			js.configs.recommended,
			tseslint.configs.recommended,
			reactHooks.configs['recommended-latest'],
			reactRefresh.configs.vite,
		],
		languageOptions: {
			ecmaVersion: 2020,
			globals: globals.browser,
		},
	},
]);

// ------------------------------------------------------------------------------------------

export default config;

// ------------------------------------------------------------------------------------------
