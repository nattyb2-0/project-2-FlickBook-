const express = require('express');
const { getBackground } = require('../services/background');
const homeRoute = express.Router();

// when the homepage is called, render the index page on screen
homeRoute.get('/',getBackground, (req, res) => {
  res.render('index', {
    image: res.image,
  });
});
// when the login clicked, render the login page to user
homeRoute.get('/login', (req, res) => {
  res.render('login');
});

// when a user selects to signup, render the signup page
homeRoute.get('/signup', (req, res) => {
  res.render('signup');
});

// when a guest just wants to browse the site, render the browse view
homeRoute.get('/browse', (req, res) => {
  res.render('browse')
})






module.exports = homeRoute;

