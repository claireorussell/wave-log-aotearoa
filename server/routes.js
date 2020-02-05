const express = require('express')
const db = require('./db')
const router = express.Router()

router.get('/', (req, res) => {
    console.log('hi')
    db.getLocation()
        .then((island) => {
            console.log(island)
            res.json(island) // gives this to the body of the request 
        })
})


// router.get('/waves/:id', (req, res) => {
//     db.getBeaches(req.params.id)
//         .then((beach) => {
//             res.render('beaches', {beach: beach})
//         })
// })


// router.get('/add', (req, res) => {
//     res.render('add')
// })


// router.post('/add', (req, res) => {
//     let newBeach = {
//         wave_name: req.body.wave_name, 
//         swell: req.body.swell, 
//         image: req.body.image, 
//         difficulty: req.body.difficulty, 
//         region: req.body.region, 
//         location_id: req.body.location}
//     db.addWave(newBeach)
//         .then(() => {
//             res.redirect('/')
//         })
//     })




module.exports = router