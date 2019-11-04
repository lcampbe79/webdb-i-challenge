const express = require('express');

const knex = require('../data/dbConfig');

const router = express.Router()

router.get('/', (req, res) => {
  knex
    .select('*')
    .from('accounts')
    .then(accounts => {
      res.status(200).json(accounts)
    })
    .catch(error => {
      res.status(500).json({error: "Failed to get accounts from the database"})
    })
});

module.exports = router;