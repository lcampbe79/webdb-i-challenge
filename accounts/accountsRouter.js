const express = require('express');

const db = require('../data/dbConfig');

const router = express.Router()

router.get('/', (req, res) => {
  db
    .select('*')
    .from('accounts')
    .then(accounts => {
      res.status(200).json(accounts)
    })
    .catch(error => {
      res.status(500).json({error: "Failed to get accounts from the database"})
    })
});

router.get('/:id', (req, res) => {
  db
    .select('*')
    .from('accounts')
    .where('id', '=', req.params.id)
    .then(accounts => {
      res.status(200).json(accounts)
    })
    .catch(error => {
      res.status(500).json({error: `Failed to get accounts with the id from the database`})
    })
})

router.post('/', (req,res) => {
  db
    .insert(req.body, 'id')
    .into('accounts')
    .then(ids => {
      res.status(200).json(ids)
    })
    .catch(error => {
      res.status(500).json({error: `Failed to add account`})
    })
})

router.put('/:id', (req, res) => {
  const {id} = req.params;
  const changes = req.body;
  db('accounts')
    .where({id})
    .update(changes)
    .then(count => {
      res.status(201).json(count)
    })
    .catch(error => {
      res.status(500).json({error: `Failed to update account ${id}`})
    })
})

router.delete('/:id', (req, res) => {
  const {id} = req.params;
  db('accounts')
    .where({id})
    .del()
    .then(count => {
      res.status(200).json(count)
    })
    .catch(error => {
      res.status(500).json({error: "Failed to delete account."})
    })
})

module.exports = router;