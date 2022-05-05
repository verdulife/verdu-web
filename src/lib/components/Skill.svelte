<script lang="ts">
	export let src: string, alt: string, title: string, since: string;
</script>

<article class="row fcenter">
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
		position: relative;
		width: 300px;

		&:before {
			content: '';
			position: absolute;
			inset: 10px;
			background: rgba(red, 0.3);
      filter: blur(50px);
		}
	}

	aside {
		padding: 20px;

		h3 {
			text-shadow: -35px 0 40px 0 rgba($pri, 0.2), 0 0 40px 0 rgba($sec, 0.2),
				35px 0 40px 0 rgba($ter, 0.2);
		}
	}

	footer {
		gap: 10px;
		margin-top: 10px;

		span {
			height: 1px;
			background: $white;
		}
	}
</style>
