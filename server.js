const dotEnv = require('dotenv').config({ silent: true });
const express = require('express');
const morgan = require('morgan');
const path = require('path');
const bodyParser = require('body-parser');


const app = express();
const PORT =process.argv[2] || process.env.PORT || 3000;

const homeRoute = require('./routes/index.js');

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(morgan('dev'));

app.use(express.static(path.join(__dirname, 'public')));


app.listen(PORT, () => {
  console.log('server is running on port ', PORT);
})


app.use('/', homeRoute);
