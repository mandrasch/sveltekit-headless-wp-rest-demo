<script>
	import { base } from '$app/paths';
	import PostCards from '../components/PostCards.svelte';
	/** @type {import('./$types').PageData} */
	export let data; // from server side

	console.log(data.posts);
</script>

<svelte:head>
	<title>SvelteKit Headless WP REST API demo</title>
</svelte:head>

<div class="container" style="margin-top:50px;">
	<h1>Welcome to SvelteKit + WordPress (REST API)</h1>

	<p>
		This demo connects to <a href="https://nature-blog.mandrasch.eu/">nature-blog.mandrasch.eu/</a>
		via REST API, see
		<a href="https://github.com/mandrasch/sveltekit-headless-wp-rest-demo">GitHub</a> for all infos.
	</p>

	<h2>Latest posts</h2>

	<PostCards posts={data.posts} />
</div>

<!-- {JSON.stringify(data.posts)} -->
<style lang="scss">
	.posts {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
		grid-gap: 50px;

		.post {
			border: 2px solid var(--primary);
		}
	}
</style>
