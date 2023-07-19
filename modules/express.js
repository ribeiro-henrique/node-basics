const express = require('express');

const users = [
  {
    name: 'Henrique',
    surname: 'Ribeiro',
    email: 'hesr.ribeiro@gmail.com',
  },
  {
    name: 'Jackson',
    surname: 'Santos',
    email: 'jack3d@gmail.com',
  },
  {
    name: 'Wilson',
    surname: 'Junior',
    email: 'wilsin@gmail.com',
  }
]; 

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

// post

app.post('/users', (req, res) => {
  const {name, surname, email} = req.body;
  users.push({
    name,
    surname,
    email,
  })

  res.send('Criado!')
});

const port = 8080;

app.listen(port, () => {
  console.log(`listening on ${port}`);
})