
const bookRoute = require('express').Router();
const { searchInmates} = require('../services/randomUser');
const favorites = require('../models/favorites');
const getFavorites = require('../models/favorites');
const deleteFavorite = require('../models/favorites');
const { authenticate } = require('../lib/auth');

bookRoute.get('/', favorites.getFavorites, authenticate, (req, res) => {
  res.render('book/index', {
    results: res.results || [],
    favorites: res.favorites || [],
  });
});

bookRoute.post('/search', searchInmates, favorites.getFavorites, authenticate, (req, res) => {
  res.render('book/index', {
    results: res.results || [],
    favorites: res.favorites || [],
  });
});
bookRoute.post('/favorites', favorites.saveFavorite, (req, res) => {
  res.redirect('/book');
  console.log(favorites);
});

bookRoute.delete('/favorites/:id', favorites.deleteFavorite, (req, res) => {
  res.redirect('/book');
});

module.exports = bookRoute;
