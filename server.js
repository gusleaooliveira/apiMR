const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');

const knex = require('knex')({
  client: 'mysql',
  connection: {
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'api_rest'
  }
});

let app = express();

app.use(bodyParser.json());

app.get('/usuario', (requisicao, resposta, next) => {
  knex('tbl_usuario').then((dados) => {
    res.send(dados);
  }, next);
});

app.post('/usuario', (requisicao, resposta, next) => {
  knex('tbl_usuario')
    .insert(requisicao.body)
    .then((dados) => {
      resposta.send(dados);
    }, next);
});

app.delete('/usuario/:id', (requisicao, resposta, next) => {
  let id = requisicao.params.id;
  knex('tbl_usuario')
    .where('id', id)
    .delete()
    .then(() => {
      resposta.send('Apagado o usuário de id: '+id);
    }, next);
});

app.put('/usuario/:id', (requisicao, resposta, next) => {
  let id = requisicao.params.id;
  knex('tbl_usuario')
    .where('id', id)
    .update(requisicao.body)
    .then((dados) => {
      resposta.send(dados);
    }, next);
});


app.get('/usuario/:id', (requisicao, resposta, next) => {
  let id = requisicao.params.id;
  knex('tbl_usuario')
    .where('id', id)
    .first()
    .then((dados) => {
      res.send(dados);
    }, next);
});

http.createServer(app).listen(9999, () => {
  console.log('http://localhost:9999/');
});
