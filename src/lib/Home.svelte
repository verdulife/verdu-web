<section id="home" class="col fcenter fill">
	<div class="content row fcenter xfill">
		<div class="text-wrapper col">
			<h1>
				<small>hi👋</small>
				<br />
				I'm <strong>verdu</strong>, frontend developer, graphic, UI & UX designer
			</h1>

			<div class="row">
				<a class="btn" href="/#portfolio">PORTFOLIO</a>
				<a class="btn" href="/#contact">CONTACT</a>
			</div>
		</div>

		<div class="image-wrapper col">
			<img src="/verdu.png" alt="verdu" />
		</div>
	</div>
</section>

<style lang="scss">
	section {
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

		small {
			font-size: 60px;
			padding-left: 2ch;
		}
	}

	a.btn {
		background: $grad;
		color: $white;
		clip-path: polygon(calc(100% - 15px) 0, 100% 14px, 100% 100%, 0 100%, 0 0);
		border: 0;
		margin-right: 20px;
		padding: 16px 54px;
	}

	.image-wrapper {
		width: 40%;
		mix-blend-mode: luminosity;
	}
</style>
