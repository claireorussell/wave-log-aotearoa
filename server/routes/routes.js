const express = require('express')
const db = require('../db')
const router = express.Router()

router.get('/locations', (req, res) => {
    console.log('hi')
    db.getLocation()
        .then((island) => {
            console.log(island)
            res.json(island) // gives this to the body of the request 
        })
})


router.get('/northBeaches', (req, res) => {
    console.log("I'm a wave i'm a wave i'm a wave")
    db.getNorthBeaches()
        .then((beaches) => {
            console.log(beaches)
            res.json(beaches) // gives this to the body of the request 
        })
})





module.exports = router