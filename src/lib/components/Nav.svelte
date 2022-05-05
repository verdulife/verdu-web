<nav class="topbar row jbetween xfill">
	<a href="/#home">
		<img src="/logo-color.svg" alt="verdu" />
	</a>

	<button>
		<img src="/icons/light-mode.svg" alt="Light mode" />
	</button>
</nav>

<nav class="leftbar col jcenter yfill">
	<ul class="col jbetween">
		<li><a href="/#home">HOME</a></li>
		<li><a href="/#skills">SKILLS</a></li>
		<li><a href="/#portfolio">PORTFOLIO</a></li>
		<li><a href="/#contact">CONTACT</a></li>
	</ul>
</nav>

<style lang="scss">
	.topbar {
		position: fixed;
		top: 30px;
		left: 0;
		right: 0;
		@include maxWidth;
		z-index: 99;
		pointer-events: none;

		* {
			pointer-events: all;
		}

		button {
			opacity: 0.5;
		}
	}

	.leftbar {
		position: fixed;
		top: 0;
		left: 30px;
		z-index: 99;
		pointer-events: none;

		a {
			color: $grey;
			font-weight: bold;
			writing-mode: vertical-rl;
			transform: rotate(180deg);
			padding: 24px 12px;
			transition: 200ms;
			pointer-events: all;

			&:hover {
				@include textGradient;
			}
		}
	}
</style>
