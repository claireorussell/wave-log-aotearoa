const environment = process.env.NODE_ENV || 'development'
const config = require('../knexfile')[environment]
const connection = require('knex')(config)


function getBeaches(db = connection) {
    return db('waves')
}



// function getNorthBeaches(db = connection){
//     return db('Waves')
//     .where('location_id', '=', '1')
//     .select('*')
// }

// function getSouthBeaches(db = connection){
//     return db('Waves')
//     .where('location_id', '=', '2')
//     .select('*')
// }

function shareBeach(beach, db = connection) { // called from the routes folder
    console.log(beach)
    return db('Waves')
    .insert({
        name: beach.name,
        image: beach.image,
        swell: beach.swell,
        difficulty: beach.difficulty,
        region: beach.region,
        location_id: beach.location_id,
        
    })
    
}

module.exports = {
    // getNorthBeaches: getNorthBeaches, 
    // getSouthBeaches: getSouthBeaches, 
    getBeaches: getBeaches,
    shareBeach: shareBeach
}