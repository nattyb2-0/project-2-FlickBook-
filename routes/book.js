
const bookRoute = require('express').Router();
const { searchInmates} = require('../services/randomUser');
const favorites = require('../models/favorites');

bookRoute.get('/', (req,res) => {
  res.render('book/index', {
    results: res.results || [],
  });
});

bookRoute.post('/search', searchInmates,  (req,res) => {
  res.render('book/index', {

    results: res.results || [],
    favorites: res.favorites || [],

  });

});
bookRoute.post('/favorites', favorites.saveFavorite, (req, res) => {
  res.redirect('/book');
  console.log(favorites);

});



module.exports =bookRoute;

//favorites.
//getFavorites
