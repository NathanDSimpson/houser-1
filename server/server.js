require('dotenv').config()
const express = require('express')
const massive = require('massive')
const controller = require('./controller')
const {CONNECTION_STRING, SERVER_PORT} = process.env

// EXPRESS APP
const app = express()
// TOP-LEVEL MIDDLEWARE
app.use(express.json())

// ENDPOINTS
app.get('/api/houses', controller.getAllHouses)
app.post('/api/new-house', controller.addNewHouse)
app.delete('/api/houses/:id', controller.deleteHouse)

massive(CONNECTION_STRING).then(connection=> {
    app.set('db', connection)
    app.listen(SERVER_PORT, () => console.log(`${SERVER_PORT} Bob Ross chia pets`))
})
