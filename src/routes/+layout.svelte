<script lang="ts">
	import favicon from '$lib/assets/favicon.png';
	import '../app.css';
	import { Navbar } from '$lib';

	let { children } = $props();
</script>

<svelte:head>
	<title>PT Arta Loka Wisala</title>
	<link rel="icon" href={favicon} />
</svelte:head>

<Navbar />

<main>
	{@render children()}
</main>

