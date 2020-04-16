const { Car } = require('../models')
const api = {}

api.getCars = (req, res) => {
    Car.find({}, (err, docs) => {
        if (err) {
            return res.status(500).send({ message: `error: ${err}` })
        }
        res.status(200).send(docs)
    })
}

module.exports = api;
