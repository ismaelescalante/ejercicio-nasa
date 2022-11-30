const User = require('../models/user')
const express = require('express')
const router = express.Router()

router.get('/', async (req,res) => {
    if(req.query){
        const result = await User.find({email: req.query.email})
        res.send(result)
    } else {
        const result = await User.find({})
        res.send(result)
    }
    
})

router.post('/create', async (req, res) => {
    const user = new User(req.body)
    await user.save()
})

router.put('/edit/:email', async (req, res) => {
    const user = await User.findOneAndUpdate({email: req.params.email}, req.body)
    res.send('Usuario actualizado')
})

router.delete('/delete/:email', async (req, res) => {
    const user = await User.findOneAndDelete({email: req.params.email})
    res.send('Usuario eliminado')
})


module.exports = router