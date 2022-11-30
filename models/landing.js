const mongoose = require('mongoose')

const landingSchema = new mongoose.Schema({
    name: String,
    id: String,
    nametype: String,
    recclass: String,
    mass: String,
    fall: String,
    year: Date,
    reclat: String,
    reclong: String,
    geolocation: {latitude: String, longitude: String}
})

const Landing = mongoose.model('landings', landingSchema)

module.exports = Landing;