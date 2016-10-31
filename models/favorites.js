//const { ObjectID } = require('mongodb');
//const { getDB }    = require('../lib/dbConnect.js');
//comment

const { MongoClient } = require('mongodb');
const { ObjectID } = require('mongodb');

const dbConnection = 'mongodb://localhost:27017/flickbook';

function saveFavorite(req, res, next) {

  // creating an empty object for the insertObj
  const insertObj = {};

  // copying all of req.body into insertObj
  for(key in req.body) {
    insertObj[key] = req.body[key];
  }

  // Adding userId to insertObj
  insertObj.favorite.userId = req.session.userId;

  MongoClient.connect(dbConnection, (err, db) => {
    if (err) return next(err);

    db.collection('favorites')
    .insert(/*req.body.favorite,*/insertObj.favorite, (insertErr, result) => {
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

function getFavorites(req, res, next) {
  MongoClient.connect(dbConnection, (err, db) => {
    if (err) return next(err);

    db.collection('favorites')
      .find({ userId: { $eq: req.session.userId } })
      .toArray((arrayError, data) => {
        if (arrayError) return next(arrayError);

        // return the data
        res.favorites = data;
        db.close();
        return next();
      });
    return false;
  });
  return false;
}

function deleteFavorite(req, res, next) {
  MongoClient.connect(dbConnection, (err, db) => {
    if (err) return next(err);

    db.collection('favorites')
      .findAndRemove({ _id: ObjectID(req.params.id) }, (removeErr, reult) => {
        if (removeErr) return next(removeErr);

        // return the data
        res.removed = result;
        db.close();
        return next();
      });
    return false;
  });
  return false;
}


module.exports = {
  saveFavorite,getFavorites,deleteFavorite
}

