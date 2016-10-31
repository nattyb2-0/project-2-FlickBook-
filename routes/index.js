const express = require('express');

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

// when a guest just wants to browse the site, render the browse view
homeRoute.get('/browse', (req, res) => {
  res.render('browse');
});

module.exports = homeRoute;
