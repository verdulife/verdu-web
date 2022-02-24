<script lang="ts">
	import 'verdu/fonts/operator.css';
	import '$fonts/gosha.css';

	import Nav from '$lib/Nav.svelte';
</script>

<main>
	<Nav />
	<slot />
</main>

<style lang="scss">
	:global {
		@import 'verdu/verdu.scss';
		@import './src/_reset.scss';
	}

	main {
		background: url('/bg.svg') no-repeat center;
		background-size: calc(100% - (100% / 6) * 2);
	}
</style>
