<script lang="ts">
	import { onMount } from 'svelte';

	const sections = [
		{
			label: 'home',
			href: '#home'
		},
		{
			label: 'skills',
			href: '#skills'
		},
		{
			label: 'projects',
			href: '#projects'
		},
		{
			label: 'contact',
			href: '#contact'
		}
	];

	let currentSection: string;

	onMount(() => {
		const scroll = document.querySelector('.scroll') as HTMLElement;
		currentSection = history.state.section;

		scroll.addEventListener('scroll', () => {
			currentSection = history.state.section;
		});
	});
</script>

<nav class="topbar row jbetween xfill">
	<a href="/">
		<img src="/logo-color.svg" alt="verdu" />
	</a>

	<button>
		<img src="/icons/light-mode.svg" alt="Light mode" />
	</button>
</nav>

<nav class="leftbar col jcenter yfill">
	<ul class="col jbetween">
		{#each sections as { label, href }}
			<li><a class:active={label === currentSection} {href}>{label}</a></li>
		{/each}
	</ul>
</nav>

<style lang="scss">
	.topbar {
		position: fixed;
		top: 30px;
		left: 0;
		right: 0;
		@include maxWidth;
		z-index: 99;
		pointer-events: none;

		* {
			pointer-events: all;
		}

		button {
			opacity: 0.5;
		}
	}

	.leftbar {
		position: fixed;
		top: 0;
		left: 30px;
		z-index: 99;
		pointer-events: none;

		a {
			color: $grey;
			font-weight: bold;
			text-transform: uppercase;
			writing-mode: vertical-rl;
			transform: rotate(180deg);
			padding: 24px 12px;
			transition: 200ms;
			pointer-events: all;

			&:hover {
				@include textGradient;
			}
		}

		.active {
			@include textGradient;
		}
	}
</style>
