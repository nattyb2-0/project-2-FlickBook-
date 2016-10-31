const express = require('express');
const show = require('../models/explore');
const homeRoute = express.Router();

// when the homepage is called, render the index page on screen
homeRoute.get('/', (req, res) => {
  res.render('index');
});
// when the login clicked, render the login page to user
homeRoute.get('/login', (req, res) => {
  res.render('login');
});

// when a user selects to signup, render the signup page
homeRoute.get('/signup', (req, res) => {
  res.render('signup');
});

homeRoute.get('/browse', show.showAll, (req, res) =>{
  res.render('browse', {
    browse: res.all || [],
  })
})


module.exports = homeRoute;
