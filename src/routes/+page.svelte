<script>
	/** @type {import('./$types').PageData} */
	export let data; // from server side
</script>

<h1>Welcome to SvelteKit + WP</h1>

<h2>Latest posts</h2>

<div class="posts">
	{#each data.posts as post, index (post.id)}
		<div class="post">
			<a href={'/p/' + post.slug}>
				{#if post._embedded.hasOwnProperty('wp:featuredmedia')}
					<img src={post._embedded['wp:featuredmedia']['0'].source_url} alt="" />
				{/if}
				{post.title.rendered}
			</a>
		</div>
	{/each}
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
