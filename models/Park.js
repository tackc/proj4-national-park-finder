const mongoose = require('mongoose');

const parkSchema = new mongoose.Schema({
    parkId: {
        type: String,
        required: [true]
    },
    parkFullName: {
        type: String,
        required: [true]
    },
    commentId: {
        type: String,
        required: [false]
    }
});

const Park = mongoose.model('Park', parkSchema);

module.exports = Park;