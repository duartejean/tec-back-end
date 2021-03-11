/* eslint-disable no-unused-vars */
const http = require('http');
const url = require('url');
const fs = require('fs');
const path = require('path');

const host = 'localhost';
const port = 3000;

const mimeTypes = {
  html: 'text/html',
  css: 'text/css',
  js: 'text/javascript',
  png: 'image/png',
  jpeg: 'image/jpeg',
  jpg: 'image/jpg',
  svg: 'image/svg+xml',
  otf: 'font/otf',
  ttf: 'font/ttf',
  woff: 'font/woff',
  woff2: 'font/woff2',
};

http.createServer((req, res) => {
  let acessoURI = url.parse(req.url).pathname;
  let caminhoCompletoRecurso = path.join(process.cwd(), decodeURI(acessoURI));
  let recursoCarregado;

  try {
    recursoCarregado = fs.lstatSync(caminhoCompletoRecurso);

    if (recursoCarregado.isFile()) {
      let mimeType = mimeTypes[path.extname(caminhoCompletoRecurso).substring(1)];

      res.writeHead(200, { 'Content-Type': mimeType });
      fs.createReadStream(caminhoCompletoRecurso).pipe(res);
    } else if (recursoCarregado.isDirectory()) {
      res.writeHead(302, { 'Location': 'index.html' });
      res.end();
    } else {
      res.writeHead(500, { 'Content-Type': mimeTypes['html'] });
      fs.createReadStream('500.html').pipe(res);
    }
  } catch (error) {
    res.writeHead(404, { 'Content-Type': mimeTypes['html'] });
    fs.createReadStream('404.html').pipe(res);
  }
}).listen(port, host, () => {
  console.log(`Server is running at https://${host}:${port}/`);
});