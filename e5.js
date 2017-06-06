var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/music";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  db.collection("musicdirector").findOne({}).toArray(function(err, result) {
    if (err) throw err;
    console.log(result.);
    db.close();
  });
});
