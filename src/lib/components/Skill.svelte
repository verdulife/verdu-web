<script lang="ts">
	export let src: string, alt: string, title: string, since: string, color: string;
</script>

<article class="row fcenter" style="--bg-color: {color}">
	<picture>
		<img {src} {alt} {title} />
	</picture>

	<aside class="col grow">
		<h3>{title}</h3>
		<footer class="row acenter xfill">
			<p>since</p>
			<span class="grow" />
			<p>{since}</p>
		</footer>
	</aside>
</article>

<style lang="scss">
	article {
		--bg-color: white;
		position: relative;
		width: 300px;

		&:before {
			content: '';
			position: absolute;
			inset: 10px 10px 10px -40px;
			background: var(--bg-color);
			filter: blur(60px);
			opacity: 0.3;
		}

		@media (max-width: $tablet) {
			width: 280px;
		}
	}

	img {
		width: 80px;
		height: 80px;
		object-fit: contain;

		@media (max-width: $tablet) {
			width: 70px;
			height: 70px;
		}

		@media (max-width: $mobile) {
			width: 50px;
			height: 50px;
		}
	}

	aside {
		padding: 20px;
		padding-right: 0;

		h3 {
			text-shadow: -35px 0 40px 0 rgba($pri, 0.2), 0 0 40px 0 rgba($sec, 0.2),
				35px 0 40px 0 rgba($ter, 0.2);

			@media (max-width: $mobile) {
				line-height: 1;
			}
		}
	}

	footer {
		gap: 10px;
		margin-top: 10px;

		@media (max-width: $mobile) {
			gap: 10px;
			margin-top: 0;
		}

		span {
			height: 1px;
			background: $white;
		}
	}
</style>
