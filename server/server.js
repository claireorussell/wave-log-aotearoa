const path = require('path')
const express = require('express')

const routes = require('./routes/routes')

const server = express()
server.use(express.json())
server.use(express.static(path.join(__dirname, './public')))
server.use('/', routes) //referened in api file 


module.exports = server
