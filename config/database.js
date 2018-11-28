var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/parkFinder', {useNewUrlParser: true});

var db = mongoose.connection;

db.once('open', () => {
    console.log(`Connected to MongoDB ${db.name} at ${db.host}: ${db.port}`);
});