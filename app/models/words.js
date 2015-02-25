var mongoose = require('mongoose');

var wordSchema = mongoose.Schema({
    def: String
});


module.exports = mongoose.model('dictionary', wordSchema, 'dictionary');