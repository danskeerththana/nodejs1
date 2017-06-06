var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/music";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  db.createCollection("song details", function(err, res) {
    if (err) throw err;
    console.log("Table created!");
    db.close();
  });
});
