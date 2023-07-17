const path = require('path');

// Nome do arquivo
console.log(path.basename(__filename));

// Nome do Dir
console.log(path.dirname(__dirname));

// Extensão do arquivo
console.log(path.extname(__filename));

// Criar objeto path
console.log(path.parse(__filename));

// Juntar caminhos de arquivos
console.log(path.join(__dirname, 'teste', 'teste.html'));