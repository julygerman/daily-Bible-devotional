const mongoose = require('mongoose')

           

const metaSchema = new mongoose.Schema({

    fums: String,
    fumsId: String,
    fumsJsInclude: String,
    fumsJs: String,
    fumsNoScript: String
        
})



const bibleSchema = new mongoose.Schema({
    
    id: String,
    bibleId: String,
    number: Number,
    bookId: String,
    reference: String,
    copyright: String,
    content: String,
    metta: [{ type: Schema.Types.ObjectId, ref: 'Bible'}],
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