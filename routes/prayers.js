var router = require('express').Router();
var prayersCtrl = require('../controllers/prayers');

router.get('/', isLoggedIn, prayersCtrl.index)
router.get('/', isLoggedIn, prayersCtrl.new)
router.get('/:id', isLoggedIn, prayersCtrl.show)
router.get('/:id', isLoggedIn, prayersCtrl.edit)
router.post('/prayers/:id', isLoggedIn, prayersCtrl.create)
router.delete('/:id', isLoggedIn, prayersCtrl.delete)
router.put('/:id', isLoggedIn, prayersCtrl.update)


function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) return next();
    res.redirect("/auth/google");
}

module.exports = router;