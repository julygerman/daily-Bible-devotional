const mongoose = require('mongoose')

        

const bibleSchema = new mongoose.Schema({
    
    type: String,
    version: String,
    book_name: String,
    book_nr: Number,
    direction: String,
}, {
    timestamps: true
})   

module.exports = mongoose.model('Bible', bibleSchema)