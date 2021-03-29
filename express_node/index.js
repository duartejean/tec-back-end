const express = require('express');
const app = express();

const APP_PORT = 3000;

app.use(express.urlencoded({ extended: false }));

app.use('/contato', express.static(__dirname + '/public/contato'));

app.post('/contato', (req, res) => {
	console.log(`Usuário: ${req.body.user}`);
	console.log(`E-mail: ${req.body.email}`);
	console.log(`Comentário: ${req.body.comentario}`);

	res.status(201).send({ 'mensagem': 'Seu comentário foi enviado!' });
});

app.get('/*', (req, res) => {
	res.status(404).send({ 'erro': 'Página não encontrada.' });
})

app.listen(APP_PORT, () =>
	console.log(`Servidor disponível em http://localhost:${APP_PORT}`)
);