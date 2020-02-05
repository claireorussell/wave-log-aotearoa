const express = require('express')
const db = require('../db')
const router = express.Router()

router.get('/locations', (req, res) => {
    db.getLocation()
        .then((island) => {
            console.log(island)
            res.json(island) // gives this to the body of the request 
        })
})


router.get('/northBeaches', (req, res) => {
    db.getNorthBeaches()
        .then(beaches => {
            console.log(beaches)
            res.json(beaches) // gives this to the body of the request 
        })
})


router.get('/southBeaches', (req, res) => {
    db.getSouthBeaches()
    .then(beaches => {
        console.log(beaches)
        res.json(beaches)
    })
})


router.get('/share', (req, res) => {
    console.log('i like to share')
    db.shareBeach()
    .then(beach => {
        console.log(beach)
        res.json(beach)
    })
})




module.exports = router