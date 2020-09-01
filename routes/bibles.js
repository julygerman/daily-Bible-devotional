const router = require('express').Router()
const biblesCtrl = require('../controllers/bibles')

router.get('/index',  biblesCtrl.index)
router.get('/:id', biblesCtrl.show)
// router.get('/:type', isLoggedIn, biblesCtrl.show)


function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) return next();
    res.redirect("/auth/google");
  }

module.exports = router;