const express = require('express');

const server = express();

server.get('/', function(request, response) {

    let nome = request.query.nome;

    response.json({nome : nome ?? 'usuário'});
})

server.listen(process.env.PORT || 3000);