//schema of database
const mongoose = require('mongoose');


//create schema
const bookSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    author:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Book',bookSchema);