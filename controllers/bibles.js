const Bible = require('../models/bible')
const axios = require('axios')
const { response } = require('express')

module.exports = {
    index,
    // show,
    // search,
}



function index(req, res){
    axios
    .get('https://raw.githubusercontent.com/aruljohn/Bible-kjv/master/1John.json')
    .then((response) =>{
        console.log('this is your data', response.data)
        res.render('bibles/index', {title: 'Daily Scriptures', user: req.user ? req.user : null, results: response.data})
    })
}

// function show(req, res) {
//     axios
//       .get('http://getbible.net/json?passage=genesis&version=asv')
//       .then((bible) => {
//           console.log('hello world my name is francis')
//         if (bible) {
//           res.render("bibles/index", {
//             title: "Genesis",
//             user: req.user,
//             book: response.data,
//             chapter: bible.chapter,
//             bibleId: bible._id,
//           });
//         }
//     })
// }
  
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