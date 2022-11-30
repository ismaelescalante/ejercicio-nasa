const mongoose = require('mongoose')

module.exports = function () {
    mongoose.connect('mongodb://127.0.0.1:27017/api-nasa')
    .then(() => console.log("Hay conexión"))
    .catch(() => console.log("Ha habido un error", err))
}