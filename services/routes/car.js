module.exports = (app) => {
    const api = require('../controllers/car');

    app.route('/api/car')
        .get(api.getCars);
}
