var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/music";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var songdetails = [
    { songname: 'Thaniye Thananthaniye', film: 'Rhythm', musicdirector: 'A.R.Rahaman', singer: 'Shankar mahadevan'},
    { songname: 'Evano Oruvan', film: 'Alai Payuthey', musicdirector: 'A.R.Rahman', singer: 'Swarnalatha'},
    { songname: 'Roja Poonthottam', film: 'Kannukkul Nilavu', musicdirector: 'Ilaiyaraaja', singer: 'Unnikrishnan Anuradha Sriram'},
    { songname: 'Vennilavae Vennilavae Vinnaithaandi', film: 'Minsara Kanavu', musicdirector: 'A.R.Rahman', singer: 'Hariharan'},
    { songname: 'Sollamal Thottu Chellum Thendral', film: 'Dheena', musicdirector: 'Yuvan Shankar Raja', singer: 'Hariharan'}
  ];
  db.collection("songdetails").insert(songdetails, function(err, res) {
    if (err) throw err;
    console.log("Number of records inserted: " + res.insertedCount);
    db.close();
  });
});
