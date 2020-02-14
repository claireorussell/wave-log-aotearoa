const express = require('express')
const db = require('../db')

const router = express.Router()

router.use(express.json())

router.get('/northbeaches', (req, res) => {
  db.getNorthBeaches()
    .then(beaches => res.json(beaches))
    // for the database function that returns athe db table 
})

router.get('/southbeaches', (req, res) => {
  db.getSouthBeaches()
    .then(beaches => res.json(beaches))
    // for the database function that returns athe db table 
})

router.post('/saveBeach', (req, res) => {
  db.saveBeach(req.body)
  .then(id => res.json(id[0]))
})

module.exports = router