<script lang="ts">
	let sortBy = 'recent';
</script>

<section id="skills" class="col acenter">
	<header class="content col acenter xfill">
		<h2>Projects</h2>
		<p>Here you can see a curated list of some of my projects</p>

		<nav class="row acenter xfill">
			<ul class="filters row acenter grow">
				<li class="active">WEB / APP</li>
				<li>LOGOTYPE</li>
				<li>LAYOUT</li>
				<li>ANIMATION</li>
			</ul>

			<button>SORT BY {sortBy.toLocaleUpperCase()}</button>
		</nav>
	</header>

	<ul class="grid">
		<li>
			<article class="row fill" />
		</li>
		<li>
			<article class="row fill" />
		</li>
		<li>
			<article class="row fill" />
		</li>
		<li>
			<article class="row fill" />
		</li>
		<li>
			<article class="row fill" />
		</li>
		<li>
			<article class="row fill" />
		</li>
	</ul>
</section>

<style lang="scss">
	section {
		position: relative;
		@include maxWidth;
		color: $white;
	}

	h2 {
		font-size: 50px;
		line-height: 1.1;
	}

	p {
		font-size: 20px;
		margin-bottom: 40px;
	}

	.filters {
		gap: 20px;

		li {
			padding: 10px 20px;
			background: $black;
			font-size: 14px;
			border-radius: 100px;
			box-shadow: inset -1px -1px 1px -1px rgba($white, 0.2);
			transition: 200ms;
		}

		.active {
			background: $grad;
		}
	}

	button {
		color: $white;
	}

	.grid {
		width: 100%;
		height: 600px;
		display: grid;
		grid-template-rows: repeat(2, 1fr);
		grid-template-columns: repeat(4, 1fr);
		grid-gap: 20px;
		margin-top: 40px;

		li:nth-of-type(1) {
			grid-row: 1 ;
			grid-column: 1;
		}

		li:nth-of-type(2) {
			grid-row: 1 / 3;
			grid-column: 2;
		}

		li:nth-of-type(3) {
			grid-row: 1;
			grid-column: 3;
		}

		li:nth-of-type(4) {
			grid-row: 1;
			grid-column: 4;
		}

		li:nth-of-type(5) {
			grid-row: 2;
			grid-column: 1;
		}

		li:nth-of-type(6) {
			grid-row: 2;
			grid-column: 3 / 5;
		}

		article {
			background: $grad;
			border-radius: 16px;
		}
	}
</style>
