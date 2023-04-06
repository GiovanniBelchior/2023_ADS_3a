//fazer a importação do express
const express = require('express');

const router = require('./routes/index.js')

//configurações basícas do aplicativo
const app = express();
app.use('/', router);//passamos apenas uma rota,pois foi criada 1

module.exports = app;//exportamos o app pois iremos usa-lo no servidor