const http = require('http');

const host = 'localhost';
const port = '3000';

http.createServer((req, res) => {
	res.writeHead(200, { 'Content-Type': 'application/json' });
	res.end(JSON.stringify({ 'message': 'Hello World!' }));
}).listen(port, host, () => {
	console.log(`O servidor está sendo executado em http://${host}:${port}`);
});