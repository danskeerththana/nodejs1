var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/uki";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var myobj = [
    { name: 'Jana', address: 'velanai'},
    { name: 'sanga', address: 'savaseri'},
    { name: 'thanisan', address: 'velanai'},
    { name: 'ramana', address: 'nelliyadi'},
    { name: 'tharsan', address: 'jaffna'},
    { name: 'yaksan', address: 'jaffna'},
    { name: 'thuvarakan', address: 'jaffna'},
    { name: 'shama', address: 'jaffna'},
    { name: 'minarva', address: 'jaffna'},
    { name: 'abi', address: 'jaffna'},
    { name: 'janusha', address: 'jaffna'},
    { name: 'keerththana', address: 'jaffna'},
    { name: 'mayoori', address: 'velanai'},
    { name: 'thchajini', address: 'velanai'},
    { name: 'dilani', address: 'karainakar'}

  ];
  db.collection("customers").insert(myobj, function(err, res) {
    if (err) throw err;
    console.log("Number of records inserted: " + res.insertedCount);
    db.close();
  });
});
