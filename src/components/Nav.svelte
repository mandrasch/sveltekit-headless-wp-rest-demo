<script>
	import { base } from '$app/paths';
</script>

<nav class="container-fluid">
	<ul>
		<li><a href="{base}/"><strong>Brand</strong></a></li>
	</ul>
	<ul>
		<li><a href="{base}/blocks-demo">Gutenberg Blocks Demo</a></li>
		<li><a href="#">Link</a></li>
		<li><a href="#" role="button">Button</a></li>
		<li>
			<details role="list" dir="rtl">
				<summary aria-haspopup="listbox" role="link" class="contrast">Examples</summary>
				<ul role="listbox">
					<li><a href="../preview/">Preview</a></li>
					<li><a href="../preview-rtl/">Right-to-left</a></li>
					<li><a href="../classless/">Class-less</a></li>
					<li><a href="../basic-template/">Basic template</a></li>
					<li><a href="../company/">Company</a></li>
					<li><a href="../google-amp/">Google Amp</a></li>
					<li><a href="../sign-in/">Sign in</a></li>
					<li><a href="../bootstrap-grid/">Bootstrap grid</a></li>
				</ul>
			</details>
		</li>
	</ul>
</nav>
