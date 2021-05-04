// asyncBreeds.js
const fs = require('fs');

const breedDetailsFromFile = function(breed, callback) {
  console.log('breedDetailsFromFile: Calling readFile...');
  fs.readFile(`../cats/data/${breed}.txt`, 'utf8', (error, data) => {
    console.log("In readFile's Callback: it has the data.");
    if (!error) callback(data);
  });
};

// we try to get the return value
const bombay = breedDetailsFromFile('Bombay', (data) => {
  console.log('Return Value: ', data); 
});