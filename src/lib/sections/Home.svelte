<script lang="ts">
	import Button from '$lib/components/Button.svelte';
</script>

<section id="home" class="col fcenter fill">
	<div class="content row fcenter xfill">
		<div class="text-wrapper col">
			<h1>
				<small>hi👋</small>
				<br />
				I'm <strong>verdu</strong>, frontend developer, graphic,
				<br>
				UI & UX designer
			</h1>

			<div class="cta row xfill">
				<Button href="#projects">PROJECTS</Button>
				<Button type="secondary" href="#contact">CONTACT</Button>
			</div>
		</div>

		<div class="image-wrapper col acenter">
			<img src="/verdu.png" alt="verdu" />
		</div>
	</div>

	<div class="scroller col fcenter">
		<v-div />
		<span><a href="#skills">My skills</a></span>
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
		z-index: 1;

		@media (max-width: $tablet) {
			width: 100%;
		}
	}

	h1 {
		font-size: 4.5vw;
		line-height: 1.1;
		margin-bottom: 40px;

		@media (max-width: $tablet) {
			font-size: 50px;
		}
		
		@media (max-width: $mobile) {
			font-size: 45px;
		}

		* {
			line-height: 1.1;
		}

		strong {
			text-shadow: -35px 0 40px rgba($pri, 0.2), 0 0 40px rgba($sec, 0.2),
				35px 0 40px rgba($ter, 0.2);
		}

		small {
			font-size: 3.5vw;
			padding-left: 3.1ch;
			
			@media (max-width: $tablet) {
				font-size: 40px;
			}
			
			@media (max-width: $mobile) {
				padding-left: 2.7ch;
			}
		}
	}

	.cta {
		gap: 10px;

		@media (max-width: $mobile) {
			justify-content: center;
		}
	}

	.image-wrapper {
		width: 40%;

		img {
			height: 140vh;
			max-height: 1000px;
			transform: rotateY(180deg);
		}

		@media (max-width: $tablet) {
			position: absolute;
			top: -1%;
			right: -15%;
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

			a {
				color: $white;
			}
		}
	}
</style>
