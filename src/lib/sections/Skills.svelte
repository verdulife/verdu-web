<script lang="ts">
	import Skill from '$lib/components/Skill.svelte';
	import { frontend, design, backend, devops, mastering } from '$lib/data/skills';
	import { fade } from 'svelte/transition';

	const skills = [frontend, design, backend, devops];
	const skillsLabel = ['frontend', 'design', 'backend', 'devops'];
	let tabIndex = 0;
	$: currentTab = skills[tabIndex];

	function changeTab(i: number) {
		tabIndex = i;
	}
</script>

<section id="skills" class="col acenter">
	<header class="content col acenter xfill">
		<h1>
			<small>my</small>
			<strong>skills</strong>
		</h1>

		<nav class="row jcenter xfill">
			<ul class="row jaround xfill">
				{#each skillsLabel as skill, i}
					<li class:active={tabIndex === i} on:click={() => changeTab(i)}>{skill}</li>
				{/each}
			</ul>
		</nav>
	</header>

	<div class="skills-wrapper col acenter xfill">
		<ul class="row jcenter xfill">
			{#each currentTab as { ...props }}
				<li transition:fade>
					<Skill {...props} />
				</li>
			{/each}
		</ul>
	</div>

	<footer class="col acenter xfill">
		<p>
			Because one of my passions is to <strong>keep learning</strong>,
			<br />
			these are my current mastering skills
		</p>

		<div class="skills-wrapper col acenter xfill">
			<ul class="row jcenter xfill">
				{#each mastering as { ...props }}
					<Skill {...props} />
				{/each}
			</ul>
		</div>
	</footer>
</section>

<style lang="scss">
	section {
		position: relative;
		@include maxWidth;
		color: $white;
		padding: 10% 0 5% 0;

		@media (max-width: $mobile) {
			padding-top: 100px;
		}
	}

	h1 {
		position: relative;
		font-size: 120px;
		line-height: 1.1;
		margin-bottom: 40px;

		@media (max-width: $mobile) {
			font-size: 80px;
			margin-bottom: 20px;
		}

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

			@media (max-width: $mobile) {
				top: -10px;
				left: 5px;
				font-size: 24px;
			}
		}
	}

	nav {
		padding: 0 60px;

		@media (max-width: $mobile) {
			padding: 0;
		}

		li {
			cursor: pointer;
			position: relative;
			font-size: 28px;
			padding: 16px 32px;
			transition: 200ms;

			&:hover {
				@include textGradient;
			}

			@media (max-width: $tablet) {
				font-size: 20px;
			}

			@media (max-width: $mobile) {
				font-size: 14px;
				padding: 10px;
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

	.skills-wrapper {
		margin-top: 80px;

		@media (max-width: $mobile) {
			margin-top: 40px;
		}

		ul {
			gap: 100px;

			@media (max-width: $tablet) {
				gap: 70px;
			}

			@media (max-width: $mobile) {
				gap: 10px;
			}
		}
	}

	footer {
		padding-top: 15%;

		@media (max-width: $mobile) {
			padding-top: 80px;
		}

		p {
			text-align: center;
			font-size: 28px;

			@media (max-width: $mobile) {
				font-size: 26px;
			}

			strong {
				white-space: nowrap;
			}
		}
	}
</style>
