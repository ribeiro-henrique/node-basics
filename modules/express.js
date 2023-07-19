const express = require('express');
const crypto = require('crypto');
let users = require('./data');

const app = express();
app.use(express.json());

// get e send

app.get('/home', (req, res) => {
  res.status(200).send('<h1>Welcome!</h1>');
});

// get e json send

app.get('/users', (req, res) => {

  res.status(200).json(users);
});

// post (appending) criação

app.post('/users', (req, res) => {
  const {name, email} = req.body;

  if (!name) {
    return res.status(400).send('Faltou o nome!');
  }

  if (typeof name !== 'string') {
    return res.status(400).send('Nome deve ser uma string!');
  }

  users.push({
    name,
    email,
    id: crypto.randomUUID().toString(),
  })

  res.status(201).end();
});

// delete method

app.delete('/users/:id', (req, res) => {

  const { id } = req.params;

  const exists = users.find((user) => user.id === id);
  if (!exists) { return res.status(404).end(); }

  users = users.filter((user) => user.id !== id);

 res.status(204).end();
});

// put atualiza tudo

app.put('/users/:id', (req, res) => {

  const { id } = req.params;
  const { name, email } = req.body;

  const exists = users.find((user) => user.id === id);
  if (!exists) { return res.status(404).end(); }

  users = users.map((user) => {
    if (user.id === id) {
      return {
        name,
        email,
        id,
      };
    }
    return user;
  });

  res.status(204).end();

});

// PATCH atualiza parcialmente

app.patch('/users/:id/name', (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  users = users.map((user) => {
    if (user.id === id) {
      return {
        ...user,
        name,
      };
    }
    return user;
  });

  res.status(204).end();
  
});

const port = 8080;

app.listen(port, () => {
  console.log(`listening on ${port}`);
})