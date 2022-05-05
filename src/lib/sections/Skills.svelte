<script lang="ts">
	import Skill from '$lib/components/Skill.svelte';

	const skills = [
		{
			src: '/logos/html5.png',
			alt: 'HTML5 logotype',
			title: 'HTML5',
			since: '2015'
		},
		{
			src: '/logos/css3.png',
			alt: 'CSS3 logotype',
			title: 'CSS3',
			since: '2015'
		},
		{
			src: '/logos/js.png',
			alt: 'Javascript logotype',
			title: 'Javascript',
			since: '2015'
		},
		{
			src: '/logos/scss.png',
			alt: 'SCSS logotype',
			title: 'SCSS',
			since: '2016'
		},
		{
			src: '/logos/svelte.png',
			alt: 'Svelte logotype',
			title: 'Svelte',
			since: '2019'
		},
		{
			src: '/logos/pwa.png',
			alt: 'PWA logotype',
			title: 'PWA',
			since: '2018'
		}
	];
</script>

<section id="skills" class="col acenter">
	<header class="content col acenter xfill">
		<h1>
			<small>my</small>
			<strong>skills</strong>
		</h1>

		<nav class="row jcenter xfill">
			<ul class="row jaround xfill">
				<li class="active">frontend</li>
				<li>design</li>
				<li>backend</li>
				<li>devOps</li>
			</ul>
		</nav>
	</header>

	<div class="tabs-wrapper col acenter xfill">
		<ul class="row jcenter xfill">
			{#each skills as { ...props }}
				<Skill {...props} />
			{/each}
		</ul>
	</div>
</section>

<style lang="scss">
	section {
		position: relative;
		@include maxWidth;
		color: $white;
		padding: 10% 0;
	}

	h1 {
		position: relative;
		font-size: 120px;
		line-height: 1.1;
		margin-bottom: 40px;

		* {
			line-height: 1.1;
		}

		strong {
			text-shadow: -70px 0 80px rgba($pri, 0.2), 0 0 80px rgba($sec, 0.2),
				70px 0 80px rgba($ter, 0.2);
		}

		small {
			position: absolute;
			top: -15px;
			left: 5px;
			font-size: 40px;
		}
	}

	nav {
		li {
			cursor: pointer;
			position: relative;
			font-size: 28px;
			padding: 16px 32px;
			transition: 200ms;

			&:hover {
				@include textGradient;
			}
		}

		.active:after {
			content: '';
			position: absolute;
			bottom: 0;
			left: 0;
			width: 100%;
			height: 2px;
			background: $grad;
		}
	}

	.tabs-wrapper {
		margin-top: 60px;
		
		ul {
			gap: 40px;
		}
	}
</style>
