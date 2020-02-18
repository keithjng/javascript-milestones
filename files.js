const fs = require('fs');

let readData = fs.readFileSync('data.txt', 'utf-8');
console.log(readData);

let arrayed = readData.split('\n');
console.log(arrayed);

//Find the longest line from data.txt
function longest() {
  let longLine = '';
  for (let i = 0; i < arrayed.length - 1; i++) {
    if (longLine.length < arrayed[i].length) {
      longLine = arrayed[i];
    }
  }
  return longLine
}
//Run the function
console.log('Printing the longest line from ' + arrayed[0]);
console.log(longest());
console.log();

//Find the shortest line from data.txt
function shortest() {
  let shortLine = longest();
  for (let i = 0; i < arrayed.length - 1; i++) {
    if (shortLine.length > arrayed[i].length) {
      shortLine = arrayed[i];
    }
  }
  return shortLine
}
//Run the function
console.log('Printing the shortest line from ' + arrayed[0]);
console.log(shortest());
console.log();
