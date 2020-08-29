const Bible = require('../models/bible')
const axios = require('axios')

module.exports = {
    index,
}

function index(req, res){
    Bible.find({}).then((bible) =>{
        res.render('bibles/index', {title: 'Bibles', user: req.user, bible})
    })
}