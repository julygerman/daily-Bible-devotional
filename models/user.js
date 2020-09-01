var mongoose = require('mongoose');
const Schema = mongoose.Schema;

const prayerListSchema = new Schema({
  List: String,
}, {
  timestamps: true
})

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  avatar: String,
  googleId: String,
  friends: [{ type: Schema.Types.ObjectId, ref: 'User'}],
  prayerList: [prayerListSchema]
}, {
  timestamps: true
});



module.exports = mongoose.model('User', userSchema);