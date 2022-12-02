require('express-async-errors')


const errors = require('../middleware/errors')
const landings = require('../routes/landings')
const neas = require('../routes/neas')
const users = require('../routes/users')
const express = require('express')

module.exports = function (app) {
    app.use(express.json())

    app.use('/api/astronomy/landings', landings)
    app.use('/api/astronomy/neas', neas)
    app.use('/api/users', users)
    
    app.use(errors)
}

