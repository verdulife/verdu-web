<script lang="ts">
	export let size = 'normal';
	export let type = 'primary';
	export let target = '_self';
	export let href: string;
</script>

<a class="btn {size} {type}" {href} {target}>
	<slot />
</a>

<style lang="scss">
	a.btn {
		border: 0;
	}

	.normal {
		font-size: 14px;
		padding: 16px 54px;
	}

	.small {
		font-size: 14px;
		padding: 10px 20px;
	}

	.primary {
		background: $grad;
		background-size: 100% 200%;
		color: $white;
		clip-path: polygon(calc(100% - 15px) 0, 100% 14px, 100% 100%, 0 100%, 0 0);

		&:hover {
			animation: animateGradient 2s ease-in-out infinite !important;
		}
	}

	.secondary {
		background: rgba(#000, 0.3);
		backdrop-filter: blur(10px);
		color: $white;
	}
</style>
