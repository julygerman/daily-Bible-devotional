var router = require('express').Router();
var prayersCtrl = require('../controllers/prayers');

router.get('/', isLoggedIn, prayersCtrl.index)
router.get('/new', isLoggedIn, prayersCtrl.new)
router.get('/:id/show', isLoggedIn, prayersCtrl.show)
router.post('/:id/replies', isLoggedIn, prayersCtrl.reply)
router.post('/', isLoggedIn, prayersCtrl.create)
router.delete('/:id', isLoggedIn, prayersCtrl.delete)
router.put('/:id', isLoggedIn, prayersCtrl.update)
router.get('/:id', isLoggedIn, prayersCtrl.edit)


function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) return next();
    res.redirect("/auth/google");
}

module.exports = router;