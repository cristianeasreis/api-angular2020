/**
 * Arquivo: src/routes/index.js
 * Descrição: arquivo responsável pela chamada da Api da aplicação.
 * Data: 28/07/2020
 * Author: Cristiane Araujo Souza Dos Reis
 */


const express = require('express');

const router = express.Router();

router.get('/api', (req, res) => {
  res.status(200).send({
    success: 'true',
    message: 'Seja bem-vindo(a) a API Workshop Mean & Serverless',
    version: '1.0.0',
  });
});

module.exports = router;
