const Bible = require('../models/bible')
const axios = require('axios')
const { response } = require('express')
const { request } = require('../server')

module.exports = {
    index,
    show,
    // search,
}



function index(req, res){
    axios
    .get('https://raw.githubusercontent.com/julygerman/Bible-kjv/master/John.json')
    .then((response) =>{
        console.log('this is your data', response.data)
        res.render('bibles/index', {title: 'Daily Scriptures', user: req.user, results: response.data})
    })
}

 function show(req, res) {
    axios
    .get(`https://raw.githubusercontent.com/julygerman/Bible-kjv/master/${req.params.id}.json`)
    .then((response) =>{
        console.log(response)
        res.render('bibles/index', {title: `${req.params.id}`, user: req.user, results: response.data})
    })
 }   
      

  
//   function search(req, res) {
//     axios
//       .get(`http://getbible.net/json?passage=${req.body.query}`)
//       .then((response) => {
//         console.log(response.data.results)
//         res.render('bibles/new', {
//           title: 'Bible Search',
//           user: req.user ? req.user : null,
//           results: response.data.results
//         })
//     })
// }