<script>
	import Footer from '../components/Footer.svelte';
	import Nav from '../components/Nav.svelte';

	import '../scss/main.scss';
</script>

<Nav />
<main>
	<slot />
</main>
<Footer />
