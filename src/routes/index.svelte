<script lang="ts">
	import { message } from '$lib/utils';
	import Home from '$lib/sections/Home.svelte';
	import Skills from '$lib/sections/Skills.svelte';

	console.log(message);
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<div class="scroll">
	<Home />
	<Skills />
</div>

<style lang="scss">
	.scroll {
		&::-webkit-scrollbar {
			width: 14px;
		}

		&::-webkit-scrollbar-track {
			background-color: #000;
		}

		&::-webkit-scrollbar-thumb {
			background: $grad;
			border: 5px solid #000;
		}
	}
</style>
