const express = require('express')
const db = require('../db')
const request = require('superagent')
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
    // for the database function that returns the db table 
})

router.post('/saveBeach', (req, res) => {
  db.saveBeach(req.body)
  .then(id => res.json(id[0]))
})

router.get('/raglan', (req, res) => {
  request
  .get('http://magicseaweed.com/api/2fa50ffc116d6e8f142fc2cc978d14cf/forecast/?spot_id=91')
  .then(response => {
    console.log('hello', response)
      res.json(response.body)
    })
})



module.exports = router
