var fs = require('fs');
var path = require('path');

function callback (err, list) {
  if(!err) {
    var ext = process.argv[3];
    list.forEach(function(filepath) {
      if(path.extname(filepath).substr(1) === ext) {
        console.log(filepath);
      }
    });
  }
}

fs.readdir(process.argv[2], callback);
