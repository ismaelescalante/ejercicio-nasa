const mongoose = require('mongoose')

const neaSchema = new mongoose.Schema({
    designation: String,
    discovery_date: String,
    h_mag: String,
    moid_au: String,
    q_au_1: String,
    q_au_2: String,
    period_yr: String,
    i_deg: String,
    pha: String,
    orbit_class: String
})

const Nea = mongoose.model('neas', neaSchema)

function validateNea(nea){
    const schema = Joi.object({
        designation: Joi.string(),
        discovery_date: Joi.string(),
        h_mag: Joi.string(),
        moid_au: Joi.string(),
        q_au_1: Joi.string(),
        q_au_2: Joi.string(),
        period_yr: Joi.string(),
        i_deg: Joi.string(),
        pha: Joi.string(),
        orbit_class: Joi.string()
    })

    return schema.validate(nea)
}

module.exports = Nea;
exports.neaSchema = neaSchema;
module.exports.validate = validateNea;