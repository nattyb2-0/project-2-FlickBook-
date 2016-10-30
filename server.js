const dotEnv = require('dotenv').config({ silent: true });
const express = require('express');
const morgan = require('morgan');
const path = require('path');
const bodyParser = require('body-parser');
const book = require('./models/favorites');

const app = express();
const PORT =process.argv[2] || process.env.PORT || 3000;

const homeRoute = require('./routes/index.js');

const bookRoute = require('./routes/book');

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(morgan('dev'));

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: true }));


app.listen(PORT, () => {
  console.log('server is running on port ', PORT);
})


app.use('/', homeRoute);
app.use('/book', bookRoute)
/*
% for(let i = 0; i < favorites.length; i++){ %>
            <li class="item">
              <img src="<%= favorites[i].picture.medium %>" alt="" />
              <h4><%= favorites[i].register %></h4>
              <form class="" action="favorites/<%= favorites[i]._id %>?_method=DELETE" method="post">
                <input type="submit" name="name" value="Delete">
              </form>
            </li>
          <% }; %>*/

          //favorites[i].picture.medium
          //<h4><%= favorites[i].register %></h4>
