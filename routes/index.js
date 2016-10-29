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





module.exports = homeRoute;

