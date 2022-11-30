const express = require('express')
const landings = require('./routes/landings')
const neas = require('./routes/neas')

const app = express()
require('./db')()
app.use(express.json())

app.use('/astronomy/landings', landings)
app.use('/astronomy/neas', neas)

app.listen(3000, console.log('Escuchando en el puerto 3000'))
