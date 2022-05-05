<script lang="ts">
	import Button from '$lib/components/Button.svelte';
</script>

<section id="home" class="col fcenter fill">
	<div class="content row fcenter xfill">
		<div class="text-wrapper col">
			<h1>
				<small>hi👋</small>
				<br />
				I'm <strong>verdu</strong>, frontend developer, graphic, UI & UX designer
			</h1>

			<div class="row">
				<Button href="#portfolio">PORTFOLIO</Button>
				<Button type="secondary" href="#contact">CONTACT</Button>
			</div>
		</div>

		<div class="image-wrapper col acenter">
			<img src="/verdu.png" alt="verdu" />
		</div>
	</div>

	<div class="scroller col fcenter">
		<v-div />
		<span>My skills</span>
		<v-div />
	</div>
</section>

<style lang="scss">
	section {
		position: relative;
		@include maxWidth;
		color: $white;
	}

	.text-wrapper {
		width: 60%;
	}

	h1 {
		font-size: 70px;
		line-height: 1.1;
		margin-bottom: 40px;

		* {
			line-height: 1.1;
		}

		strong {
			text-shadow: -35px 0 40px rgba($pri, 0.2), 0 0 40px rgba($sec, 0.2),
				35px 0 40px rgba($ter, 0.2);
		}

		small {
			font-size: 60px;
			padding-left: 2ch;
		}
	}

	.image-wrapper {
		width: 40%;

		img {
			height: 100vh;
			transform: rotateY(180deg);
		}
	}

	.scroller {
		position: absolute;
		bottom: 0;
		left: calc(50% + 7px);
		transform: translateX(-50%);

		v-div {
			width: 2px;
			height: 35px;
			background: $grad;
		}

		span {
			background: #000;
			padding: 5px;
		}
	}
</style>
