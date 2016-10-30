//const { ObjectID } = require('mongodb');
//const { getDB }    = require('../lib/dbConnect.js');


const { MongoClient } = require('mongodb');
const { ObjectID } = require('mongodb');

const dbConnection = 'mongodb://localhost:27017/flickbook';

function saveFavorite(req, res, next) {
  MongoClient.connect(dbConnection, (err, db) => {
    if (err) return next(err);

    db.collection('favorites')
    .insert(req.body.favorite, (insertErr, result) => {
      if (insertErr) return next(insertErr);

      res.saved = result;
      //console.log(res.favorites)

      db.close();
      return next();
    });
    return false;
  });
  return false;
}


module.exports = {
  saveFavorite,
};
