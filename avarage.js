var fs = require('fs');

fs.writeFile('ukinode.txt', 'hello uki!', function (err) {
  if (err) throw err;
  console.log('Saved!');
});
