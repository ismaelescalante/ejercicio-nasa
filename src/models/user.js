const Joi = require('joi')
Joi.objectId = require('joi-objectid')(Joi)
const mongoose = require('mongoose')





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

function validateUser(user){
    const schema = Joi.object({
        name: Joi.string().required(),
        nickname: Joi.string(),
        email: Joi.string(),
        picture: Joi.string(),
        affiliatedNumber: Joi.number().required(),
        affiliationDate: Joi.string(),
        occupation: Joi.string(),
        birthdate: Joi.string(),
        neas_discovered: Joi.string()
    })

    return schema.validate(user)
}

module.exports = User
module.exports.validate = validateUser 