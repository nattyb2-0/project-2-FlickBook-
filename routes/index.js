const express = require('express');

const homeRoute = express.Router();

// This is the route that serves your '/' homepage
homeRoute.get('/', (req, res) => {
  res.render('index');
});


module.exports = homeRoute;

