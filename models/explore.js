const { MongoClient } = require('mongodb');
const { ObjectID } = require('mongodb');


const dbConnection = process.env.MONGODB_URI || 'mongodb://localhost:27017/flickbook';
function showAll(req,res,next) {
MongoClient.connect(dbConnection, (err, db) => {
    if (err) return next(err);

    db.collection('favorites')
      .find()
      .toArray((arrayError, data) => {
        if (arrayError) return next(arrayError);

        // return the data
        res.all = data;
        db.close();
        return next();
      });
    return false;
  });
  return false;
}



module.exports = { showAll }



