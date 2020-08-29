/**
 * Arquivo: server.js
 * Descrição: arquivo responsável por toda a configuração da aplicação.
 * Data: 28/07/2020
 * Author: Cristiane Araujo Souza Dos Reis
 */

const app = require('./src/app');

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log('Aplicação executando na porta ', port);
});
