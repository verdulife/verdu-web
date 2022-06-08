<script lang="ts">
	let send_btn = 'SEND';

	async function sendForm() {
		send_btn = 'SENDING...';

		const form = document.querySelector('form');
		const data = Object.fromEntries(new FormData(form) as any);

		const req = await fetch('/form', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(data)
		});

		if (!req.ok) alert('An error occurred while sending the form. Please try again.');
		else {
			setTimeout(() => {
				send_btn = 'MESSAGE SENT 😉';

				setTimeout(() => {
					send_btn = 'SEND';
				}, 2000);
			}, 1000);
		}

		form.reset();
	}
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

	<button>{send_btn}</button>
</form>

<style lang="scss">
	form {
		max-width: 500px;
		margin-top: 100px;
		gap: 30px;
		
		@media (max-width: $mobile) {
			margin-top: 50px;
		}
	}

	input,
	textarea {
		background: $white;
		border-radius: 0;
	}

	textarea {
		height: 200px;
		resize: none;
	}

	button {
		background: $grad;
		background-size: 100% 200%;
		color: $white;
		clip-path: polygon(calc(100% - 15px) 0, 100% 14px, 100% 100%, 0 100%, 0 0);
		border: 0;
		padding: 16px 54px;

		&:hover {
			animation: animateGradient 2s ease-in-out infinite !important;
		}

		@media (max-width: $mobile) {
			min-width: 200px;
		}
	}
</style>
