const dotEnv = require('dotenv').config({ silent: true });
const express = require('express');
const morgan = require('morgan');
const path = require('path');
const bodyParser = require('body-parser');
const book = require('./models/favorites');
const methodOverride = require('method-override');
const session = require('express-session');
const cookieParser = require('cookie-parser');


const app = express();
const SECRET = 'tacos3000';

const PORT = process.argv[2] || process.env.PORT || 3000;

const homeRoute = require('./routes/index.js');
const userRoute = require('./routes/users');
const bookRoute = require('./routes/book');
const authRoute = require('./routes/auth');

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(morgan('dev'));

// middleware for method override
app.use(methodOverride('_method'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: true }));
// This is how we read the cookies sent over from the browser
app.use(cookieParser());

app.listen(PORT, () => {
  console.log('server is running on port ', PORT);
});
app.use(session({
  resave: false,
  saveUninitialized: false,
  secret: SECRET,
}));

app.use('/auth', authRoute);
app.use('/users', userRoute);
app.use('/', homeRoute);
app.use('/book', bookRoute);
