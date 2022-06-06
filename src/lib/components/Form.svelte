<script lang="ts">
	import Button from '$lib/components/Button.svelte';

	async function sendForm() {}
</script>

<form class="col acenter xfill" on:submit|preventDefault={sendForm}>
	<div class="input-wrapper col acenter xfill">
		<label for="name">Contact name</label>
		<input class="xfill" type="text" name="name" id="name" placeholder="Ex. John Doe" required />
	</div>

	<div class="input-wrapper col acenter xfill">
		<label for="email">Email address</label>
		<input
			class="xfill"
			type="email"
			name="email"
			id="email"
			placeholder="Ex. hello@johndoe.com"
			required
		/>
	</div>

	<div class="input-wrapper col acenter xfill">
		<label for="message">Your message</label>
		<textarea class="xfill" name="message" id="message" placeholder="Here your message" required />
	</div>

	<button>SEND</button>
</form>

<style lang="scss">
	form {
		max-width: 500px;
		margin-top: 100px;
		gap: 30px;
	}

	input,
	textarea {
		background: $white;
	}

	textarea {
		height: 200px;
		resize: none;
	}

	button {
		border: 0;
		margin-right: 20px;
		padding: 16px 54px;

		background: $grad;
		background-size: 100% 200%;
		color: $white;
		clip-path: polygon(calc(100% - 15px) 0, 100% 14px, 100% 100%, 0 100%, 0 0);

		&:hover {
			animation: animateGradient 2s ease-in-out infinite !important;
		}
	}
</style>
