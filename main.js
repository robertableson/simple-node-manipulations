// Count 0-100 real quick

/*for(var i = 0; i <= 100; i++){
   console.log(i);
}

console.log('done');*/


// count 0-100 by using text file number to count to 
var fs = require('fs');

count();

function count() {
   fs.readFile('input.txt', 'utf8', function(err, countToInFile) {
      if(err) 
         throw err;
         
      var numberTypeCastedCountToInFile = Number(countToInFile);

      if(!Number.isInteger(numberTypeCastedCountToInFile) || numberTypeCastedCountToInFile <= 0){
         printMessage('Number needs to be a positive integer.');
         return;
      }
   
      var countTo = numberTypeCastedCountToInFile;
   
      for(var i = 0; i <= countTo; i++){
         console.log(i);
      }

      printMessage('Done.');
    });
}

function printMessage(message = '') {
   console.log(message);
}