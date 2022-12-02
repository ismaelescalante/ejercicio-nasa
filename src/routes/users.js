const User = require('../models/user')
const {validate} = require('../models/user')
const express = require('express')
const router = express.Router()

router.get('/', async (req,res) => {
    if(req.query.email){
        const result = await User.find({email: req.query.email})
        res.send(result)
     } else {
        const result = await User.find({})
        res.send(result)
    }
    
})

router.post('/create', async (req, res) => {
    const {error} = validate(req.body)
    if (error) return res.status(400).send(error.details[0].message)
    
    const user = new User(req.body)
    res.send('Creado nuevo usuario')
    await user.save()
})

router.put('/edit/:email', async (req, res) => {
    const {error} = validate(req.body)
    if (error) return res.status(400).send(error.details[0].message)

    const user = await User.findOneAndUpdate({email: req.params.email}, req.body)
    res.send('Usuario actualizado')
})

router.delete('/delete/:email', async (req, res) => {
    const user = await User.findOneAndDelete({email: req.params.email})
    res.send('Usuario eliminado')
})


module.exports = router