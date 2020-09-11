var mongoose = require('mongoose');
const Schema = mongoose.Schema;


const replySchema = new Schema({
    postedBy: String,
    avatar: String,
    message: String,
  });


const prayerListSchema = new Schema({
    content: String,
    avatar: String,
    postedBy: { type: Schema.Types.ObjectId, ref: 'User'},
    done: Boolean,
    replies: [replySchema]
  }, {
    timestamps: true
  })


  module.exports = mongoose.model('Prayer', prayerListSchema);