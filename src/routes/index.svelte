<script lang="ts">
	import { onMount } from 'svelte';

	import Home from '$lib/sections/Home.svelte';
	import Skills from '$lib/sections/Skills.svelte';
	import Projects from '$lib/sections/Projects.svelte';
	import Contact from '$lib/sections/Contact.svelte';

	onMount(() => {
		const scroll = document.querySelector('.scroll') as HTMLElement;
		const home = document.querySelector('#home') as HTMLElement;
		const skills = document.querySelector('#skills') as HTMLElement;
		const projects = document.querySelector('#projects') as HTMLElement;
		const contact = document.querySelector('#contact') as HTMLElement;

		function checkHash() {
			let padding = 100;

			if (scroll.scrollTop >= home.offsetTop - padding && scroll.scrollTop < skills.offsetTop) {
				history.replaceState({ section: 'home' }, 'home', '#home');
			}

			if (scroll.scrollTop >= skills.offsetTop - padding && scroll.scrollTop < projects.offsetTop) {
				history.replaceState({ section: 'skills' }, 'skills', '#skills');
			}

			if (
				scroll.scrollTop >= projects.offsetTop - padding &&
				scroll.scrollTop < contact.offsetTop
			) {
				history.replaceState({ section: 'projects' }, 'projects', '#projects');
			}

			if (scroll.scrollTop >= contact.offsetTop - padding) {
				history.replaceState({ section: 'contact' }, 'contact', '#contact');
			}
		}

		checkHash();
		scroll.addEventListener('scroll', checkHash);
	});
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<div class="scroll">
	<Home />
	<Skills />
	<Projects />
	<Contact />
</div>

<style lang="scss">
	.scroll {
		scroll-behavior: smooth;

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
