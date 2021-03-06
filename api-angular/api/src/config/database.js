/**
 * Arquivo: config/database.js
 * Descrição: arquivo responsável pelas 'connectionStrings' da aplicação: MongoDb & CosmosDb
 * Data: 28/07/2020
 * Author: Cristiane Araujo Souza Dos Reis
 */

module.exports = {
  local:
  {
    localUrl: 'mongodb://localhost:27017/meanserverless',
  },

  /* cosmosdb:
  {
    name: 'meanserverless',
    url: 'mongodb://<cosmosdb_name>:<primary_master_key>@<cosmosdb_name>.documents.azure.com:10255/meanserverless?ssl=true',
    port: 10255,
  }, */
};
