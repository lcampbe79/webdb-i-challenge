const express = require('express');

//const db = require('./data/dbConfig.js');
const accountsRouter = require('./data/accounts/accountsRouter');

const server = express();

server.use(express.json());
server.use('/api/accounts', accountsRouter)
//server.use('/api/accounts', accountsRouter)
// server.get('/accounts', (req, res) => {
//   db
//     .select('*')
//     .from('accounts')
//     .then(accounts => {
//       res.status(200).json(accounts)
//     })
//     .catch(error => {
//       res.status(500).json({Error: 'Failed to get accounts from database'})
//     })
// })

server.get('/', (req, res) => {
  res.status(200).send('Initial GET on 4000')
})

module.exports = server;