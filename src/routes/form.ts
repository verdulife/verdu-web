import { SMTPClient, Message } from 'emailjs';

function sendEmail({ email: user_email, name: user_name, message: user_message }) {
	const client = new SMTPClient({
		user: 'verdu@live.com',
		password: '88Lifemail',
		host: 'smtp-mail.outlook.com',
		tls: {
			ciphers: 'SSLv3'
		}
	});

	const message = new Message({
		text: 'i hope this works',
		from: 'Albert Verdú <verdu@live.com>',
		to: 'Albert Verdú <verdu@live.com>',
		subject: user_email,
		attachment: [{ data: `<html>${user_name}: <br> ${user_message}</html>`, alternative: true }]
	});

	client.send(message, (err, message) => {
		console.log(err || message);
	});
}

export async function post({ request }) {
	const form = await request.json();

	sendEmail(form);

	return {
		status: 200,
		body: {
			message: form
		}
	};
}
