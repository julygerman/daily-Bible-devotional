var mongoose = require('mongoose');
const Schema = mongoose.Schema;


const prayerListSchema = new Schema({
    content: String,
    postedBy: String,
    done: Boolean
  }, {
    timestamps: true
  })


  module.exports = mongoose.model('Prayer', prayerListSchema);