import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';
import autoprefixer from 'autoprefixer';
import { resolve } from 'path';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: preprocess({
		scss: {
			prependData: '@import "./src/_vars.scss";'
		},
		postcss: {
			plugins: [autoprefixer]
		}
	}),

	kit: {
		adapter: adapter(),
		vite: {
			resolve: {
				alias: {
					$content: resolve("./src/content"),
					$fonts: resolve("./src/fonts"),
				}
			}
		}
	}
};

export default config;