const express = require('express');

const server = express();

const database = require('./database');

server.use(express.json())

server.get('/',async function(request, response) {
    const contatos = await database.read();
    response.json(contatos);
})


 //localhost:3000/123o9123-123-1-1231233
 server.get('/:id', function(request, response) {
     const id = request.params.id;
     const contato = await database.find(id);
     response.json(result);
 })

server.post('/', async function(request, response){
    const nome = request.body.nome;
    const telefone = request.body.telefone;

    const result = await database.create(nome, telefone);
    response.status(201).send();
})

server.listen(process.env.PORT || 3000);