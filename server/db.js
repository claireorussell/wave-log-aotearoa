const environment = process.env.NODE_ENV || 'development'
const config = require('../knexfile')[environment]
const connection = require('knex')(config)


function getLocation(db = connection){
    return db('Island')
    .select('*')
}

// function getBeaches(id, db = connection){
//     return db('beach')
//     .where('location_id', '=', id)
//     .select('*')
// }

// function addWave(newBeach, db = connection) {
//     // console.log(newBeach)
//     return db('beach')
//     .insert(newBeach)
// }


module.exports = {
    getLocation: getLocation,
    // getBeaches: getBeaches, 
    // addWave: addWave,

}