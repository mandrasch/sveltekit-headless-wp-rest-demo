<script>
	import { base } from '$app/paths';
	import PostCards from '../components/PostCards.svelte';
	/** @type {import('./$types').PageData} */
	export let data; // from server side

	console.log(data.posts);
</script>

<div class="container" style="margin-top:50px;">
	<h1>Welcome to SvelteKit + WordPress (REST API)</h1>

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
