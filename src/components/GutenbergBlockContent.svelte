<script>
	import { PUBLIC_WP_REST_API_DOMAIN } from '$env/static/public';
	import { base } from '$app/paths';

	/** @type {string} */
	export let content;

	// We must fix internal links!
	// https://developers.wpengine.com/blog/gutenberg-in-headless-wordpress-render-blocks-as-html
	// (We could do it in SvelteKit or in WordPress, decided to it)
	$: transformedContent = content
		.replaceAll(`href="${PUBLIC_WP_REST_API_DOMAIN}/`, `href="${base}/`)
		.replaceAll(`href='${PUBLIC_WP_REST_API_DOMAIN}/`, `href='${base}/`);
</script>

{@html transformedContent}

<style lang="scss">
	// See _gutenberg-wrapper-container.css (via [slug]/+page.svelte
</style>
