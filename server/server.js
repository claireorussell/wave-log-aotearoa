const path = require('path')
const express = require('express')

// const routes = require('./routes/routes')
const beachRoutes = require('./routes/beaches')

const server = express()
server.use(express.json())
server.use(express.static(path.join(__dirname, './public')))
server.use('/api/v1', beachRoutes) //referenced in api file 


module.exports = server
