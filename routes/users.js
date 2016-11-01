const { createUser }    = require('../models/user.js');
const { authenticate }   = require('../lib/auth');
const express      = require('express');
const { searchInmates } = require('../services/randomUser');
const usersRouter  = express.Router();

/**
 * Creates a new user by handling the POST request from a form with action `/users`
 * It uses the createUser middleware from the user model
 */
usersRouter.post('/', createUser, (req, res) => {
  res.redirect('/');
});


/**
 * Takes the user to its profile by handling any GET request to `/users/profile`
 * It redirects to /login when attempted to be reached by a non logged in user
 * It is "protected" by the authenticate middleware from the auth library
 */
usersRouter.get('/profile', authenticate, (req, res) => {
  res.render('users/profile', {
    user: res.user });
});

usersRouter.post('/search', searchInmates, (req,res) => {
   res.render('users/profile', {
    results: res.results || [],
    user: res.user || [],

  });
});

module.exports = usersRouter;

