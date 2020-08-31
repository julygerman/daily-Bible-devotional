const mongoose = require('mongoose')

        

const bibleSchema = new mongoose.Schema({
    
    version: String,
    bookName: String,
    bookChapter: Number,
}, {
    timestamps: true
})   

module.exports = mongoose.model('Bible', bibleSchema)