var router = require('express').Router();
var prayersCtrl = require('../controllers/prayers');

router.get('/', isLoggedIn, prayersCtrl.index)
router.get('/new', isLoggedIn, prayersCtrl.new)
router.get('/:id', isLoggedIn, prayersCtrl.show)
router.post('/', isLoggedIn, prayersCtrl.create)
router.delete('/:id', isLoggedIn, prayersCtrl.delete)



function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) return next();
    res.redirect("/auth/google");
}

module.exports = router;