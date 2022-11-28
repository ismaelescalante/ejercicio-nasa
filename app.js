const express = require('express')
const mongoose = require('mongoose')
const app = express()

app.use(express.json())

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

async function connection(){
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/api-nasa')
        console.log('Hay conexión')
    } catch (error) {
        console.log('Ha habido un error')
    }
}

app.get('/astronomy/landings', async (req, res) => {
        console.log(req.query)
        await connection()
        const result = await Landing.find({mass: {$gte: `${req.query.minimum_mass}`}}).select('name mass')
        res.send(result).status(200)
})

app.get('/astronomy/landings/mass/:mass', async (req, res) => {
    await connection()
    const result = await Landing.find({mass: req.params.mass}).select('name mass')

    console.log(result)

    res.send(result).status(200)
})

app.get('/astronomy/landings/class/:class', async (req, res) => {
    await connection()
    const result = await Landing.find({recclass: req.params.class}).select('name recclass')

    console.log(result)

    res.send(result).status(200)
})

app.get('/astronomy/landings/dates', async (req, res) => {
    await connection()
    console.log(req.query)
})

app.post('/astronomy/landings/create', async (req, res) => {
    await connection()
    const landing = new Landing({
        name: "Agen",
        id: "392",
        nametype: "Valid",
        recclass: "H5",
        mass: "30000",
        fall: "Fell",
        year: "1874-01-01T00:00:00.000",
        reclat: "44.216670",
        reclong: "0.616670",
        geolocation: { "latitude": "44.21667", "longitude": "0.61667" }
    })

    await landing.save()
    console.log('guardado')
})

app.put('/astronomy/landings/edit', async (req, res) => {
    await connection()
    
})


app.listen(3000, console.log('Escuchando en el puerto 3000'))
