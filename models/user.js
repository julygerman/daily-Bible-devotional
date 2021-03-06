var mongoose = require('mongoose');
const Schema = mongoose.Schema;



const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  avatar: String,
  googleId: String,
  bio: String,
  friends: [{ type: Schema.Types.ObjectId, ref: 'User'}],
}, {
  timestamps: true
});



module.exports = mongoose.model('User', userSchema);