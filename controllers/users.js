const User = require('../models/user');
const Bible = require('../models/bible')

module.exports = {
  index,
};

function index(req, res) {
  User.find({})
  .then(users => {
    res.redirect('bibles/index', { user: req.user, users })
  })
}