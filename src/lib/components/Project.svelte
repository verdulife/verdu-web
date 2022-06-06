<script lang="ts">
	import Button from '$lib/components/Button.svelte';

	export let src: string,
		alt: string,
		title: string,
		since: string,
		labels: Array<string>,
		url: string,
		github: string;
</script>

<article class="col jend fill">
	<picture class="fill">
		<img class="fill" {src} {alt} {title} />
	</picture>

	<div class="grad" />

	<header class="col acenter xfill">
		<h3>{title} <small>({since})</small></h3>

		<ul class="row jcenter xfill">
			{#each labels as label}
				<li>
					<img src="/logos/{label}.png" alt={label} />
				</li>
			{/each}
		</ul>
	</header>

	<footer class="row jcenter xfill">
		<Button size="small" type="secondary" href={url} target="_blank">VISIT</Button>
		<Button size="small" type="secondary" href={github} target="_blank">GITHUB</Button>
	</footer>
</article>

<style lang="scss">
	article {
		position: relative;
		border-radius: 16px;
		overflow: hidden;

		*:not(picture),
		*:not(.grad) {
			z-index: 1;
		}

		&:hover {
			.grad,
			header,
			footer {
				opacity: 1;
			}
		}
	}

	picture {
		position: absolute;
		inset: 0;
		pointer-events: none;

		img {
			object-fit: cover;
			object-position: top center;
		}
	}

	.grad {
		position: absolute;
		inset: 0;
		background: linear-gradient(to top, rgba($black, 0.9) 25%, rgba($black, 0.3));
		pointer-events: none;
		opacity: 0;
		transition: 200ms;
	}

	header {
		padding: 0 20px;
		opacity: 0;
		transition: 200ms;

		h3 {
			font-size: 18px;
			color: $white;
		}

		ul {
			gap: 10px;
			margin-top: 10px;

			img {
				width: 20px;
				height: 20px;
				object-fit: contain;
			}
		}
	}

	footer {
		gap: 10px;
		padding: 20px;
		opacity: 0;
		transition: 200ms;
	}
</style>
