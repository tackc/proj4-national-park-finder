const mongoose = require('mongoose');
var Schema = mongoose.Schema;

const parkSchema = new mongoose.Schema({
    parkId: {
        type: String,
        required: [true]
    },
    parkFullName: {
        type: String,
        required: [true]
    },
    Comment: [{type: Schema.Types.ObjectId, ref: 'Comment'}]
});

const Park = mongoose.model('Park', parkSchema);

module.exports = Park;