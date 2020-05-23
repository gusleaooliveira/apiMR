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
