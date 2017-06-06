var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/music";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var myobj = [
    { songname: 'thaniye thananthaniye', film: 'rhythm', musicdirector: 'a.r rahaman', singer: 'shankar mahadevan'},
    { songname: 'evano oruvan', film: 'alai payuthey', musicdirector: 'a.r rahaman', singer: 'swarnalatha'},
    { songname: 'raja poonthottam', film: 'kannukkul nilavu', musicdirector: 'llaiyaraaja', singer: 'unnikrishnan anuradhasriram',},
    { songname: 'vennilave vennilave vinnaithaandi', film: 'minsara kanavu', musicdirector: 'a.r rahaman', singer : 'hariharan sadhana sargam'},
    { songname: 'sollamal thottu chellum thendral', film: 'dheena', musicdirector: 'vavan shankar raja', singer: 'hariharan'}
  ];
  db.collection("song details").insert(myobj, function(err, res) {
    if (err) throw err;
    console.log("Number of records inserted: " + res.insertedCount);
    db.close();
  });
});
