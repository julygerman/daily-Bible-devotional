const mongoose = require('mongoose')

        

const bibleSchema = new mongoose.Schema({
    
    id: String,
    bibleId: String,
    number: Number,
    bookId: String,
    reference: String,
    copyright: String,
    content: String,
    next: {
    id: String,
    number: Number,
    bookId: String
    },
    previous: {
    id: String,
    number: Number,
    bookId: String
    }
},{
    timestamps: true
})

module.exports = mongoose.model('Bible', bibleSchema)