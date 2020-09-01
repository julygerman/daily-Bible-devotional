var mongoose = require('mongoose');
const Schema = mongoose.Schema;


const prayerListSchema = new Schema({
    List: String,
  }, {
    timestamps: true
  })


  module.exports = mongoose.model('Prayer', prayerListSchema);