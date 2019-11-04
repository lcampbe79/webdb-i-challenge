const express = require('express');

const db = require('./data/dbConfig.js');

const server = express();

server.use(express.json());

server.get('/', (req, res) => {
  res.status(200).send('Initial GET on 4000')
})

module.exports = server;