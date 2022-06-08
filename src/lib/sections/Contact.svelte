<script lang="ts">
	import Form from '$lib/components/Form.svelte';
</script>

<section id="contact" class="col acenter xfill">
	<h2>
		If you want to contact me, you can use this <a
			href="https://www.linkedin.com/in/albert-verd%C3%BA-llinares-25ba19134/"
			target="_blank"><strong>linkedin link</strong></a
		>, but if you feel oldschool, you can fill this form.
	</h2>

	<Form />

	<div class="end-line xfill" />
</section>

<style lang="scss">
	section {
		position: relative;
		@include maxWidth;
		color: $white;
		padding-top: 10%;

		@media (max-width: $mobile) {
			padding-top: 100px;
		}
	}

	h2 {
		max-width: 600px;
		font-size: 50px;
		line-height: 1.1;
		text-align: center;

		@media (max-width: $mobile) {
			font-size: 26px;
		}

		strong {
			white-space: nowrap;
		}
	}

	.end-line {
		max-width: 350px;
		height: 5px;
		background: $grad;
		border-radius: 10px;
		margin: 200px 0 50px 0;

		@media (max-width: $mobile) {
			max-width: 250px;
			margin: 100px 0 30px 0;
		}
	}
</style>
