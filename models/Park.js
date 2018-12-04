const mongoose = require('mongoose');
var Schema = mongoose.Schema;

const parkSchema = new mongoose.Schema({
    parkId: {
        type: String
    },
    Comment: [{type: Schema.Types.ObjectId, ref: 'Comment'}]
});

const Park = mongoose.model('Park', parkSchema);

module.exports = Park;