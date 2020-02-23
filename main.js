// Count 0-100 real quick

/*for(var i = 0; i <= 100; i++){
   console.log(i);
}

console.log('done');*/


// count 0-100 by using text file number to count to 
var fs = require('fs');

count();

function count() {
   fs.readFile('input.txt', 'utf8', function(err, data) {
      if (err) throw err;
   
      var countTo = data;
   
      for(var i = 0; i <= countTo; i++){
         console.log(i);
      }

      done();
    });
}

function done() {
   console.log('done');
}