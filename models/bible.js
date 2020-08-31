const mongoose = require('mongoose')

        

const bibleSchema = new mongoose.Schema({
    
    type: String,
    version: String,
    book_name: String,
    chapter_nr: Number,
    chapter: String,
    verse_nr: Number,
    verse: String
}, {
    timestamps: true
})   

module.exports = mongoose.model('Bible', bibleSchema)