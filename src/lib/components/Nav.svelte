<script lang="ts">
	import { onMount } from 'svelte';
	import { slide } from 'svelte/transition';

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
	let showNavBg = true;

	onMount(() => {
		const scroll = document.querySelector('.scroll') as HTMLElement;
		currentSection = history.state.section;

		scroll.addEventListener('scroll', () => {
			currentSection = history.state.section;

			if (scroll.scrollTop > 100) showNavBg = true;
			else showNavBg = false;
		});
	});
</script>

{#if showNavBg}
	<div class="scroll-bg" transition:slide />
{/if}

<nav class="topbar row jbetween xfill">
	<a class="logo" href="/">
		<img src="/logo-color.svg" alt="verdu" />
	</a>

	<div class="contact row fcenter">
		<a
			class="row fcenter"
			href="https://www.linkedin.com/in/albert-verd%C3%BA-llinares-25ba19134/"
			target="_blank"
		>
			<img src="/icons/linkedin.svg" alt="Light mode" />
		</a>
		<a class="row fcenter" href="https://github.com/verdulife" target="_blank">
			<img src="/icons/github.svg" alt="Light mode" />
		</a>
		<a class="email" href="mailto:verdu@live.com">verdu@live.com</a>
	</div>
</nav>

<nav class="leftbar col jcenter yfill">
	<ul class="col jbetween">
		{#each sections as { label, href }}
			<li><a class:active={label === currentSection} {href}>{label}</a></li>
		{/each}
	</ul>
</nav>

<style lang="scss">
	.scroll-bg {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 95px;
		background-color: rgba(0, 0, 0, 0.1);
		backdrop-filter: blur(10px);
		z-index: 98;
	}

	.topbar {
		position: fixed;
		top: 30px;
		left: 0;
		right: 0;
		@include maxWidth;
		padding: 0 40px;
		z-index: 99;
		pointer-events: none;

		* {
			pointer-events: all;
		}

		.logo {
			position: relative;

			/* &:before {
				content: '';
				position: absolute;
				top: -25%;
				left: -25%;
				display: flex;
				width: 150%;
				height: 150%;
				background: #000;
				filter: blur(30px);
				z-index: -1;
			} */
		}

		.contact {
			position: relative;
			gap: 20px;

			@media (max-width: $mobile) {
				transform: scale(0.9);
				transform-origin: right;
			}

			/* &:before {
				content: '';
				position: absolute;
				top: -25%;
				left: -25%;
				display: flex;
				width: 150%;
				height: 150%;
				background: #000;
				filter: blur(30px);
				z-index: -1;
			} */
		}

		.email {
			color: $white;
			border: 2px solid $white;
			padding: 5px 20px;
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

		@media (max-width: $tablet) {
			display: none;
		}
	}
</style>
