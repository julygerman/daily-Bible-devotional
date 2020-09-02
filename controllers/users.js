const User = require('../models/user');
const Bible = require('../models/bible')

module.exports = {
  index,
  showProfile,
  update,
  show,
  addFriend,
  removeFriend,
  getName
};

function getName(req, res) {
  res.json(req.user.name)
}

function addFriend(req, res) {
  req.user.friends.push(req.params.id)
  req.user.save().then(() => {
    res.redirect(`/users/${req.params.id}`)
  })
}

function removeFriend(req, res) {
  let idx = req.user.friends.indexOf(req.params.id)
  req.user.friends.splice(idx, 1)
  req.user.save().then(() => {
    res.redirect(`/users/${req.params.id}`)
  })
}

function show(req, res) {
  
}

function update(req, res) {
  User.findByIdAndUpdate(req.user._id, req.body, { new: true })
  .then(() => {
    res.redirect('/users/profile')
  })
}

function showProfile(req, res) {
  User.findById(req.user._id).populate('friends').then((user) => {
      res.render('users/profile', { title: 'Profile Page', user})
    }
  )
}

function index(req, res) {
  User.find({})
  .then(users => {
    res.render('users/index', { user: req.user, users })
  })
}