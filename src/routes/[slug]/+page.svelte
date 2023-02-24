<script>
	import GutenbergBlockContent from '../../components/GutenbergBlockContent.svelte';

	/** @type {import('./$types').PageData} */
	export let data; // from server side
	// expected: data.entries = [] (posts or pages array)

	// TODO: better check / empty result handling needed
	$: entry = data.entries.length > 0 ? data.entries[0] : { title: { rendered: 'Not found' } };
</script>

<svelte:head>
	<title>{entry.title.rendered}</title>
	<!-- TODO: add more SEO tags, e.g. from YOAST or SlimSEO-->
</svelte:head>

<!-- TODO: How to properly implement this in a fail-safe way? -->
<div class="gutenberg-wrapper-container">
	<div class="gutenberg-wrapper-container__title">
		<h2>{entry.title.rendered}</h2>
	</div>
	<div class="gutenberg-wrapper-container__wp-block-post-content">
		{#if entry.hasOwnProperty('content')}
			<GutenbergBlockContent content={entry.content.rendered} />
		{/if}
	</div>
</div>

<!-- {JSON.stringify(data.entries)} -->
