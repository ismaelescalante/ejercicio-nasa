const Landing = require('../models/landing')
const express = require('express')
const router = express.Router()


router.get('/', async (req, res) => {
    if(req.query.minimum_mass){
        const result = await Landing.find({$expr : {$gt : [{$toDecimal : "$mass"}, +req.query.minimum_mass]}})
        res.send(result).status(200)
    } else if (req.query.from && req.query.to){
        const result = await Landing.find({year:{$gt: req.query.from, $lt: req.query.to}}).select('name mass year')
        res.send(result)
    }
})

router.get('/mass/:mass', async (req, res) => {
const result = await Landing.find({mass: req.params.mass}).select('name mass')

console.log(result)

res.send(result).status(200)
})

router.get('/class/:class', async (req, res) => {
const result = await Landing.find({recclass: req.params.class}).select('name recclass')

res.send(result).status(200)
})

router.post('/create', async (req, res) => {
const landing = new Landing(req.body)

await landing.save()
console.log('guardado')
})

router.put('/edit/:id', async (req, res) => {
    const result = await Landing.findOneAndUpdate({_id: req.params.id}, req.body)
    res.send(result)
})

router.delete('/delete/:id', async (req, res) => {
    const result = await Landing.findOneAndDelete({_id: req.params.id})
    res.send('Eliminado')
})

module.exports = router;