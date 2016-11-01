
const bookRoute = require('express').Router();
const { searchInmates } = require('../services/randomUser');
const favorites = require('../models/favorites');
const getFavorites = require('../models/favorites');
const deleteFavorite = require('../models/favorites');
const { authenticate } = require('../lib/auth');


bookRoute.get('/',searchInmates, authenticate ,favorites.getFavorites, authenticate,  (req, res) => {
  res.render('book/index', {
    results: res.results || [],
    favorites: res.favorites || [],
    user: res.user ,
  });
});

bookRoute.post('/', searchInmates, favorites.getFavorites, authenticate,  (req, res) => {
  res.render('book/index', {
    results: res.results || [],
    favorites: res.favorites || [],
  });

});

bookRoute.post('/favorites', searchInmates,favorites.saveFavorite, (req, res) => {
  res.redirect('/book');
  console.log(res.saved);
});



bookRoute.delete('book/favorites/:id', favorites.deleteFavorite, (req, res) => {
  res.redirect('/book');
});

module.exports = bookRoute;
