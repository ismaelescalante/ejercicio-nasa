const Nea = require('../models/nea')
const {validate} = require('../models/nea')
const express = require('express')
const router = express.Router()

router.get('/', async (req,res) => {
    if(req.query.class){
        const result = await Nea.find({$toLower: {orbit_class: req.query.class}}).select('designation period_yr')
        res.send(result)
    } else if (req.query.from && req.query.to){
        const result = await Nea.find({year:{$gt: req.query.from, $lt: req.query.to}}).select('designation discovery_date period_yr')
        res.send(result)
    } else if (req.query.from){
        const result = await Nea.find({year:{$gt: req.query.from}}).select('designation discovery_date period_yr')
        res.send(result)
    } else if (req.query.to){
        const result = await Nea.find({year:{ $lt: req.query.to}}).select('designation discovery_date period_yr')
        res.send(result)
    }
    
    
})

router.get('/neas', async (req, res) => {
    const result = await Nea.find({})
    res.send(result)
})

router.post('/create', async (req,res) => {
    const {error} = validate(req.body)
    if (error) return res.status(400).send(error.details[0].message)
    
    const nea = new Nea(req.body)
    await nea.save()
    res.send('Creado con éxito')
})

router.put('/edit/:designation', async (req, res) => {
    const {error} = validate(req.body)
    if (error) return res.status(400).send(error.details[0].message)
   
    const result = await Nea.findOneAndUpdate({designation: req.params.designation}, req.body)
    res.send('Actualizado')
})

router.delete('/delete/:designation', async (req, res) => {
    const result = await Nea.findOneAndDelete({designation: req.params.designation})
    res.send('Eliminado')
})

module.exports = router

