var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/uki";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  db.createCollection("uki students", function(err, res) {
    if (err) throw err;
    console.log("Table created!");
    db.close();
  });
});
