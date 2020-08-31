const router = require('express').Router()
const biblesCtrl = require('../controllers/bibles')

router.get('/index', isLoggedIn,  biblesCtrl.index)


function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) return next();
    res.redirect("/auth/google");
  }

module.exports = router;