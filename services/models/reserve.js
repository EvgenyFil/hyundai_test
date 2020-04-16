const mongoose = require('mongoose');

const reserveScheme = mongoose.Schema({
    car: {
        type: Number,
        unique: false,
        required: true
    },
    beginDate: {
        type: mongoose.Schema.Types.Date,
        unique: false,
        required: true
    },
    endDate: {
        type: mongoose.Schema.Types.Date,
        unique: false,
        required: true
    },
    username: {
        type: String,
        unique: false,
        required: true
    }
});

mongoose.model('Reserve', reserveScheme);
