module.exports = (app) => {
    const api = require('../controllers/reserve')

    app.route('/api/reserve')
        .post(api.addReserve)
        .get(api.getReserve)
        .delete(api.clearReserve);
}
