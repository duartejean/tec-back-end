const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = 3000;

/* Retorna JSON com informações sobre o usuário */
app.get('/about', (req, res) => {
	res.status(200).json({
		id: "123",
		name: "Jean Duarte",
		email: "jeaan.duarte@hotmail.com",
	});
});

/* Permite a busca de um usuário informando APENAS o ID e exclusivamente um valor numérico */
app.get('/user/:id(\\d+$)', (req, res) => {
	res.status(200).send(`Usuário <strong>${req.params.id}</strong>`);
});

/* Realiza a autenticação do usuário */
app.post('/auth/login', (req, res) => {
	/**
	 * TODO: Implementar autenticação do usuário
	 * let user = req.body.user;
	 * let pwd = req.body.password;
	 */

	res.status(200).send('Realizou uma requisição POST para o login.');
});

/* Tratamento de requisições inexistentes */
app.get('*', (req, res) => {
	res.status(404).send('404 - Página não encontrada.');
});

/* Define que o servidor deve ficar aguardando novas requisições em determinada porta */
app.listen(PORT, () => {
	console.log(`Servidor escutando em http://localhost:${PORT}`);
});