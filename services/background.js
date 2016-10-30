const fetch = require('node-fetch');

const BACKGROUNDAPI_URL = 'https://api.unsplash.com/photos/random/?client_id=';
const PHOTO_KEY = process.env.PHOTO_KEY;

function getBackground(req, res, next) {
 fetch(`${BACKGROUNDAPI_URL}${PHOTO_KEY}`)
 .then(r => r.json())
 .then((result) => {
   res.image = result;
    console.log(result);
   next();
 })
 .catch((err) => {
   res.err = err;
   next();
 });
}

module.exports = { getBackground}
