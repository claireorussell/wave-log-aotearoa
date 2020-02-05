const environment = process.env.NODE_ENV || 'development'
const config = require('../knexfile')[environment]
const connection = require('knex')(config)


function getLocation(db = connection){
    return db('Island')
    .select('*')
}

function getNorthBeaches(db = connection){
    return db('Waves')
    .where('location_id', '=', '1')
    .select('*')
}

// function addWave(newBeach, db = connection) {
//     // console.log(newBeach)
//     return db('beach')
//     .insert(newBeach)
// }


module.exports = {
    getLocation: getLocation,
    getNorthBeaches: getNorthBeaches, 
    // addWave: addWave,

}