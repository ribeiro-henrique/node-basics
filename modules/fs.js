const fs = require('fs');
const path = require('path');

// Criar pasta
// fs.mkdirSync(path.join(__dirname, 'test'), (error) => {
//   if (error) {
//     return console.log(error);
//   }

//   console.log('Pasta criada com sucesso');
// });

// Criar um arquivo
// fs.writeFile(path.join(__dirname, '/test', 'test.txt'), 'hello node!', (err) => {
//   if (err) {
//     return console.log('Erro: ', err);
//   }

//   console.log('Criado com sucesso!')
// });

// Adicionar conteúdo a um arquivo existente
// fs.appendFile(path.join(__dirname, '/test', 'test.txt'), 'Alô, Bahia!', (err) => {
//   if (err) {
//     return console.log('Erro: ', err);
//   }

//   console.log('Criado com sucesso');
// });

// Ler arquivo
fs.readFile(path.join(__dirname, '/test', 'test.txt'), 'utf8', (err, data) => {
  if (err) {
    return console.log('Erro: ', err);
  }

  console.log(data);
});