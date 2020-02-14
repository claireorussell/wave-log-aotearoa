const express = require('express')
const db = require('../db')

const router = express.Router()

router.use(express.json())

router.get('/beaches', (req, res) => {
  db.getBeaches()
    .then(beaches => res.json(beaches))

    // for the database function that returns athe db table 

})

module.exports = router