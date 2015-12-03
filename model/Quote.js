var mongoose = require('mongoose');


var quoteSchema = mongoose.Schema({
    quote: {type: String},
    author: {type: String},
    pic: {type: String}
});

module.exports = mongoose.model('Quote', quoteSchema);