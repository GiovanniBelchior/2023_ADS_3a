const express = require('express');

//Rotas (quando o servidor for acessado, pra onde ele vai ?)
const router = express.Router();
router.get('/',(req,res)=>{
    res.send('olá Mundo 2023!!!');
});

router.get('/cadastro',(req,res)=>{
    res.send('Página de cadastro de aplicação');
});

router.get('/contato',(req,res)=>{
    res.send('Página com informação de contato');
});

module.exports = router