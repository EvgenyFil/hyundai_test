const mongoose = require('mongoose');

const carScheme = mongoose.Schema({
    id: {
        type: Number,
        unique: true,
        required: true
    },
    model: {
        type: String,
        unique: false,
        required: true
    },
    license: {
        type: String,
        unique: false,
        required: true
    },
    src: {
        type: String,
        unique: false,
        required: false
    }
});

mongoose.model('Car', carScheme);
