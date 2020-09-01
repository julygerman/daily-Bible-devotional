const Prayer = require('../models/prayer');

module.exports = {
    index,
    show,
    new: newPrayer,
    create,
    delete: deletePrayer,
    edit,
    update
}

function update(req, res) {
    req.body.id = parseInt(req.params.id)
    req.body.done = req.body.done === 'on'
    Prayer.update(req.params.id, req.body)
    res.redirect('/prayers')
}

function edit(req, res) {
    Prayer.findByIdAndUpdate(req.params.id)
    .then((prayer)=>{
        res.render('/prayers', {title: 'Prayer List', user: req.user, prayer})

    })

}
function deletePrayer(req, res) {
    Prayer.findByIdAndDelete(req.params.id)
    .then(()=>{
        res.redirect('/prayers')

    })
}

function create(req, res) {
    console.log(req.body)
    Prayer.create(req.body)
    res.redirect('/prayers')
}

function newPrayer(req, res){
    res.render('prayers')
}

function show(req, res) {
    Prayer.findOne(req.params.id)
    .then((prayer)=>{
        res.render('prayers/show', {title: 'Prayer List', user: req.user, prayer})
    })
}

function index(req, res) {
    Prayer.find({})
    .then((prayer)=>{
        res.render('/prayers', {title: 'Prayer List', user: req.user, prayer})
    })
}
