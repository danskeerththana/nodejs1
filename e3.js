var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/music";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var myobj = [
    { songname: 'thaniye thananthaniye'},
    { songname: 'evano oruvan'},
    { songname: 'raja poonthottom'},
    { songname: 'vennilave vennilave innaithaandi'},
    { songname: 'sollamal thottu chellum thendral'}
  ];
  db.collection("song details").insert(myobj, function(err, res) {
    if (err) throw err;
    console.log("Number of records inserted: " + res.insertedCount);
    db.close();
  });
});
