const { Reserve } = require('../models')
const api = {}

api.getReserve = (req, res) => {
    Reserve.find({ car: req.query['car'] }, (err, docs) => {
        if (err) {
            return res.status(500).send({ message: `error: ${err}` })
        }
        res.status(200).send(docs)
    })
}

api.addReserve = (req, res) => {
    Reserve.create(req.body, (err, doc) => {
        if (err) {
            return res.status(500).send({ message: `error: ${err}` })
        }
        res.status(200).send({ id: doc })
    })
}

api.clearReserve = (req, res) => {
    Reserve.remove({}, (err, doc) => {
        if (err) {
            return res.status(500).send({ message: `error: ${err}` })
        }
        res.status(200).send({})
    })
}

module.exports = api;
