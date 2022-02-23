<script lang="ts">
	import { message } from '$lib/utils';
	import Home from '$lib/Home.svelte';

	console.log(message);
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<div class="scroll">
	<Home />
</div>
