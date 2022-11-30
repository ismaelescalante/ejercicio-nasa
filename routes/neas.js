const Nea = require('../models/nea')
const express = require('express')
const router = express.Router()

router.get('/', async (req,res) => {

    const result = await Nea.find({$toLower: {orbit_class: req.query.class}}).select('designation period_yr')
    res.send(result)
    
})

router.get('/', async (req,res) => {
    
})

router.post('/create', async (req,res) => {
    const nea = new Nea(req.body)
    await nea.save()
    res.send('Creado con éxito')
})

router.put('/edit/:designation', async (req, res) => {
    const result = await Nea.findOneAndUpdate({designation: req.params.designation}, req.body)
    res.send('Actualizado')
})

router.delete('/delete/:designation', async (req, res) => {
    const result = await Nea.findOneAndDelete({designation: req.params.designation})
    res.send('Eliminado')
})

module.exports = router

