var mongoose = require('mongoose');

var readingSchema = mongoose.Schema({
    title: String,
    url: String
});

//var Kitten = mongoose.model('Kitten', kittySchema);
module.exports = mongoose.model('Reading', readingSchema);