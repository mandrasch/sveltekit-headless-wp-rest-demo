<script>
	import { base } from '$app/paths';
</script>

<nav class="container">
	<ul>
		<li><a href="{base}/"><strong>Example Brand</strong></a></li>
	</ul>
	<ul>
		<li><a href="{base}/blocks-demo">Gutenberg Demo Content</a></li>
		<!-- <li><a href="#">Link</a></li> -->

		<li>
			<details role="list">
				<summary aria-haspopup="listbox" role="link" class="contrast">Dropdown</summary>
				<ul role="listbox">
					<li><a href="../preview/">This is just a</a></li>
					<li><a href="../classless/">test to check</a></li>
					<li><a href="../basic-template/">whether dropdowns</a></li>
					<li><a href="../company/">are accessible.</a></li>
				</ul>
			</details>
		</li>
		<li>
			<a href="https://github.com/mandrasch/sveltekit-headless-wp-rest-demo" role="button">GitHub</a
			>
		</li>
	</ul>
</nav>
