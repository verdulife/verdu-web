<section id="skills" class="col fcenter fill">
	<div class="content row fcenter xfill">
		<h1>
			<small>my</small>
			<strong>skills</strong>
		</h1>
	</div>
</section>

<style lang="scss">
	section {
		position: relative;
		@include maxWidth;
		color: $white;
	}

	h1 {
		position: relative;
		font-size: 120px;
		line-height: 1.1;
		margin-bottom: 40px;

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
		}
	}
</style>
