const   mongoose = require('mongoose'),
        CarModel = require('./car'),
        ReserveModel = require('./reserve');

require('../config/db')(mongoose, 'mongodb://localhost:27017/hyundai_db')

const models = {
    Car: mongoose.model('Car'),
    Reserve: mongoose.model('Reserve')
}

models.Car.estimatedDocumentCount((err, count) => {
    if (!count) {
        models.Car.create({ id: 1, model: 'creta', license: 'A111AA750', src: 'https://wroom.ru/i/carsmini/hyundaicreta.jpg' })
        models.Car.create({ id: 2, model: 'elantra', license: 'C009CC77', src: 'https://wroom.ru/i/carsmini/hyundaielantra.jpg' })
    }
})

module.exports = models;
