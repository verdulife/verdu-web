<script lang="ts">
	export let type = 'primary';
	export let href: string;
</script>

<a class="btn {type}" {href}>
	<slot />
</a>

<style lang="scss">
	a.btn {
		border: 0;
		margin-right: 20px;
		padding: 16px 54px;
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
		color: $white;

		&:hover {
			opacity: 0.7;
		}
	}
</style>
