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

function getSouthBeaches(db = connection){
    return db('Waves')
    .where('location_id', '=', '2')
    .select('*')
}

function shareBeach(db = connection) {
    return db('Waves')
    .insert()
    
}

module.exports = {
    getLocation: getLocation,
    getNorthBeaches: getNorthBeaches, 
    getSouthBeaches: getSouthBeaches, 
    shareBeach: shareBeach
}