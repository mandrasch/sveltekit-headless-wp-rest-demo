import adapter from '@sveltejs/adapter-auto';
//import adapter from '@sveltejs/adapter-node';
import sveltePreprocess from 'svelte-preprocess';


/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: sveltePreprocess(),
	kit: {
		adapter: adapter()
	}
};

export default config;
