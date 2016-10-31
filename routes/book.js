
const bookRoute = require('express').Router();
const { searchInmates} = require('../services/randomUser');
const favorites = require('../models/favorites');


bookRoute.get('/', favorites.getFavorites, (req,res) => {
  res.render('book/index', {
    results: res.results || [],
    favorites: res.favorites|| [],
  });
});

bookRoute.post('/search', searchInmates, favorites.getFavorites,  (req,res) => {
  res.render('book/index', {
    results: res.results || [],
    favorites: res.favorites || [],

  })
});
bookRoute.post('/favorites', favorites.saveFavorite, (req, res) => {
  res.redirect('/book');
  console.log(favorites);

});

bookRoute.delete('/favorites/:id', favorites.deleteFavorite, (req,res)=>{
  res.redirect('/book');
});



module.exports =bookRoute

//favorites.
//getFavorites
//favorites.
//favorites.saveFavorite,
//index
