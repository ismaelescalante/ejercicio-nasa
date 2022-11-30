const mongoose = require('mongoose')
const {neaSchema} = require('./nea')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    nickname: String,
    email: String,
    picture: String,
    affiliatedNumber: {
        type: Number,
        unique: true,
        required: true
    },
    affiliationDate: Date,
    occupation: String,
    birthdate: Date,
    neas_discovered: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'nea'
    }]
    
})

const User = mongoose.model('users', userSchema)


   



module.exports = User