const Bible = require('../models/bible')
const axios = require('axios')

module.exports = {
    index,
    show,
    search,
}

function index(req, res){
    Bible.find({}).then((bible) =>{
        res.render('bibles/index', {title: 'Bibles', user: req.user, bible})
    })
}

function show(req, res) {
    axios
      .get(`http://getbible.net/json?passage=genesis`)
      .then(response => {
        console.log('hello', response.data.url);
        console.log('there', response.data.explanation);
      })
         
}
  
  function search(req, res) {
    axios
      .get(`http://getbible.net/json?passage=${req.body.query}`)
      .then((response) => {
        console.log(response.data.results)
        res.render('bibles/new', {
          title: 'Bible Search',
          user: req.user ? req.user : null,
          results: response.data.results
        })
      })
}