
const bookRoute = require('express').Router();
const { searchInmates } = require('../services/randomUser');
const favorites = require('../models/favorites');
const getFavorites = require('../models/favorites');
const deleteFavorite = require('../models/favorites');
const { authenticate } = require('../lib/auth');
const posts = require('../models/posts');
const getPost = require('../models/posts');
const deletePost = require('../models/posts');


bookRoute.get('/',searchInmates, authenticate ,favorites.getFavorites, authenticate, posts.getPost, (req, res) => {
  res.render('book/index', {
    results: res.results || [],
    favorites: res.favorites || [],
    posts: res.post,
    user: res.user ,
  });
});

bookRoute.post('/', searchInmates, favorites.getFavorites, authenticate, posts.getPost, (req, res) => {
  res.render('book/index', {
    results: res.results || [],
    favorites: res.favorites || [],
  });

});

bookRoute.post('/favorites', searchInmates,favorites.saveFavorite, posts.savePost, (req, res) => {
  res.redirect('/book');
  console.log(res.saved);
});

bookRoute.post('/post', posts.savePost, (req, res) => {
  res.redirect('/book');
  console.log(res.saved);
});

bookRoute.delete('book/favorites/:id', favorites.deleteFavorite, posts.deletePost, (req, res) => {
  res.redirect('/book');
});

module.exports = bookRoute;
