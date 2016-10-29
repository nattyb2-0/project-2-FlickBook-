
const bookRoute = require('express').Router();
const { searchInmates} = require('../services/randomUser');

bookRoute.get('/', (req,res) => {
  res.render('book/index', {
    results: res.results || [],
  });
});

bookRoute.post('/search', searchInmates, (req,res) => {
  res.render('book/index', {
    results: res.results || []

  });

});

module.exports =bookRoute
