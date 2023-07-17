const http = require('http');

const port = 8080;

const server = http.createServer((req, res) => {
  if (req.url === '/home') {
    res.writeHead(200, {'content-type': 'text/html'});
    res.end('<h1>Home Page</h1>');
  }

  if (req.url === '/users') {
    res.writeHead(200, {'content-type': 'application/json'});
    const users = [
      {
        name: 'Henrique',
        surname: 'Ribeiro',
        email: 'hesr.ribeiro@gmail.com',
      },
      {
        name: 'Thamires',
        surname: 'Yolanda',
        email: 'tthamires.ribeiro@gmail.com',
      }
    ];

    res.end(JSON.stringify(users));
  }
});

server.listen(port, () => console.log(`Rodando na porta ${port}`));