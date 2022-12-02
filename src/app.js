const express = require('express')
const landings = require('../src/routes/landings')
const neas = require('../src/routes/neas')
const users = require('../src/routes/users')
require('dotenv').config()

const app = express()


require('./startup/db')()
require('./startup/routes')(app)




const port = process.env.PORT || 3000
app.listen(port, console.log('Escuchando en el puerto 3000'))


