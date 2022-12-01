const express = require('express')
const landings = require('../src/routes/landings')
const neas = require('../src/routes/neas')
const users = require('../src/routes/users')

const app = express()
require('./db')()
app.use(express.json())

app.use('/astronomy/landings', landings)
app.use('/astronomy/neas', neas)
app.use('/users', users)

app.listen(3000, console.log('Escuchando en el puerto 3000'))


