
const { MongoClient } = require('mongodb');
const { ObjectID } = require('mongodb');

const dbConnection = 'mongodb://localhost:27017/flickbook';

function savePost(req, res, next) {

  // creating an empty object for the insertObj
  const insertObj = {
    post: {},
   // body:
    //userID:
    /*comments: [

    ],*/

  };

  // copying all of req.body into insertObj
  for(key in req.body) {
    insertObj[key] = req.body[key];
  }

  // Adding userId to insertObj
  insertObj.post.userId = req.session.userId;

  MongoClient.connect(dbConnection, (err, db) => {
    if (err) return next(err);

    db.collection('post')
    .insert(/*req.body.favorite,*/insertObj.post, (insertErr, result) => {
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


function getPost(req, res, next) {
  MongoClient.connect(dbConnection, (err, db) => {
    if (err) return next(err);

    db.collection('post')
      .find({ userId: { $eq: req.session.userId } })
      .toArray((arrayError, data) => {
        if (arrayError) return next(arrayError);

        // return the data
        res.post = data;
        db.close();
        return next();
      });
    return false;
  });
  return false;
}


function deletePost(req, res, next) {
  MongoClient.connect(dbConnection, (err, db) => {
    if (err) return next(err);

    db.collection('post')
      .findAndRemove({ _id: ObjectID(req.params.id) }, (removeErr, result) => {
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
  savePost,getPost,deletePost
}


