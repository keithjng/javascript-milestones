//Using loops!
//Brings me back to learning how to use scratch
//Y'all ever use that?

//Looping with numbers:

//Print out the numbers from 40 to 60
function fortyToSixty() {
  for (let i = 40; i <= 60; i++) { //This is super basic loop boy
    console.log(i);
  }
}
//Run the function
console.log('Printing the numbers from 40 to 60: ');
fortyToSixty();
console.log();

//Print out the even numbers from 40 to 60
function fortyToSixtyEven() {
  for (let i = 40; i <= 60; i += 2) { //By using += 2, only the even digits will be printed!
    console.log(i);
  }
}
//Run the function
console.log('Printing the even numbers from 40 to 60: ');
fortyToSixtyEven();
console.log();

//Print out the numbers from min to max
let min = 5
let max = 10
function minToMax() {
  for (let i = min; i <= max; i++) { //Same idea, except now we can use any number range!
    console.log(i);
  }
}
//Run the function
console.log(`Printing the numbers from ${min} to ${max}: `);
minToMax();
console.log();

//Print out the even numbers from min to max
function minToMaxEven() {
  for (let i = min; i <= max; i++) { //Now there's a challenge, the range starts at an odd number, so adding 2 won't work!
    if (i % 2 === 0) { //To solve the previous issue, I'm gonna add a check for if the number is even or odd
      console.log(i);
    }
  }
}
//Run the function
console.log(`Printing the even numbers from ${min} to ${max}: `);
minToMaxEven();
console.log();

//Print the first 10 multiples of 7
function mult7() {
  for (let i = 1; i <= 10; i++) { //If I started i at 0 this time, the first number printed would be 0, so I started at 1 instead!
    console.log(i * 7)
  }
}
//Run the function
console.log(`Printing the first 10 multiples of 7: `);
mult7();
console.log();

//Print the first k multiples of 7
let k = 5
function multK() {
  for (let i = 1; i <= k; i++) {
    console.log(i * 7)
  }
}
//Run the function
console.log(`Printing the first 10 multiples of ${k}: `);
multK();
console.log();

//Print the first k multiples of n
let n = 10
function multN() {
  for (let i = 1; i <= k; i++) {
    console.log(i * n)
  }
}
//Run the function
console.log(`Printing the first ${n} multiples of ${k}: `);
multN();
console.log();

//Looping with arrays:

let coolArray = ['flour', 'yeast', 'water', 'salt', 'cheese', 'garlic powder']
//Print every element of coolArray
function printAll(coolArray) {
  for (let i = 0; i < coolArray.length; i++) {
    console.log(coolArray[i])
  }
}
//Run the function
console.log(`Printing all the elements in coolArray: `);
printAll(coolArray);
console.log();

//Print every other element of coolArray
function printHalf(coolArray) {
  for (let i = 0; i < coolArray.length; i += 2) {
    console.log(coolArray[i])
  }
}
//Run the function
console.log(`Printing every other element in coolArray: `);
printHalf(coolArray);
console.log();

//Print every element of coolArray in reverse order
function printBackward(coolArray) {
  for (let i = coolArray.length - 1; i >= 0; i--) { //I put a '- 1' after the length because that's how indexes work
    console.log(coolArray[i])
  }
}
//Run the function
console.log(`Printing every element in coolArray backwards: `);
printBackward(coolArray);
console.log();

let listOfNumbers = [-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5];
let currentNum = 0;
//Print the largest number
function largest(listOfNumbers) {
  for (let i = 0; i <= listOfNumbers.length; i++) {
    if (currentNum < listOfNumbers[i]) {
      currentNum = listOfNumbers[i];
    }
  }
  return currentNum
}
//Run the function
console.log(`Printing the largest number from listOfNumbers:`);
console.log(largest(listOfNumbers))
console.log();

//Print the smallest number
function smallest(listOfNumbers) {
  for (let i = 0; i <= listOfNumbers.length; i++) {
    if (currentNum > listOfNumbers[i]) {
      currentNum = listOfNumbers[i];
    }
  }
  return currentNum
}
//Run the function
console.log(`Printing the smallest number from listOfNumbers:`);
console.log(smallest(listOfNumbers))
console.log();

//Print all the numbers above 0
let newArray = [];
function above0(listOfNumbers) {
  for (let i = 0; i <= listOfNumbers.length; i++) {
    if (listOfNumbers[i] > 0) {
      newArray.push(listOfNumbers[i]);
    }
  }
  return newArray
}
//Run the function
console.log(`Printing the numbers above 0 from listOfNumbers:`);
console.log(above0(listOfNumbers))
console.log();

//Print all the numbers above k
newArray = []; //Resets newArray
k = 2 //k can be any number!
function aboveK(listOfNumbers) {
  for (let i = 0; i <= listOfNumbers.length; i++) {
    if (listOfNumbers[i] > k) {
      newArray.push(listOfNumbers[i]);
    }
  }
  return newArray
}
//Run the function
console.log(`Printing the numbers above ${k} from listOfNumbers:`);
console.log(aboveK(listOfNumbers))
console.log();

//Print out all even numbers
newArray = [];
function printEven(listOfNumbers) {
  for (let i = 0; i <= listOfNumbers.length; i++) {
    if (listOfNumbers[i] % 2 === 0) {
      newArray.push(listOfNumbers[i]);
    }
  }
  return newArray
}
//Run the function
console.log(`Printing the even numbers from listOfNumbers:`);
console.log(printEven(listOfNumbers))
console.log();

//Sort from largest to smallest
newArray = [];
listOfNumbers = [-5, -3, -1, 1, 3, 5, 4, 2, 0, -2, -4];
function largeToSmall(listOfNumbers) {
  listOfNumbers.sort(function(a, b){return b - a}); //This uses a mini function that returns a smaller number after a bigger number
  return listOfNumbers
}
//Run the function
console.log(`Printing the numbers of listOfNumbers from largest to smallest:`);
console.log(largeToSmall(listOfNumbers))
console.log();

//Sort from largest to smallest
newArray = [];
listOfNumbers = [-5, -3, -1, 1, 3, 5, 4, 2, 0, -2, -4];
function smallToLarge(listOfNumbers) {
  listOfNumbers.sort(function(a, b){return a - b}); //This basically does the opposite of the previous by using a - b
  return listOfNumbers
}
//Run the function
console.log(`Printing the numbers of listOfNumbers from smallest to largest:`);
console.log(smallToLarge(listOfNumbers));
console.log();

//Moving on to strings
let listOfStrings = ['flour', 'yeast', 'water', 'salt', 'cheese', 'garlic powder', 'anchovies', 'egg', 'baking soda', 'arrowroot']

//Print out the longest string
function longestStr(listOfStrings) {
  let longest = '';
  for (let i = 0; i <= listOfStrings.length - 1; i++) {
    if (listOfStrings[i].length > longest.length) {
      longest = listOfStrings[i]
    }
  }
  return longest
}
//Run the function
console.log(`Printing the longest string in ${listOfStrings}:`);
console.log(longestStr(listOfStrings));
console.log();

//Print out the shortest string
function shortestStr(listOfStrings) {
  let shortest = listOfStrings[0];
  for (let i = 0; i <= listOfStrings.length - 1; i++) {
    if (listOfStrings[i].length < shortest.length) {
      shortest = listOfStrings[i]
    }
  }
  return shortest
}
//Run the function
console.log(`Printing the shortest string in ${listOfStrings}:`);
console.log(shortestStr(listOfStrings));
console.log();

//Print out all strings longer than 3 characters
newArray = [];
function longer3(listOfStrings) {
  for (let i = 0; i <= listOfStrings.length - 1; i++) {
    if (listOfStrings[i].length > 3) {
      newArray.push(listOfStrings[i])
    }
  }
  let newStr = newArray.join(', ')
  return newStr
}
//Run the function
console.log(`Printing the strings longer than 3 characters in ${listOfStrings}:`);
console.log(longer3(listOfStrings));
console.log();

//Print out all strings longer than minLength characters
newArray = [];
let minLength = 5
function longerMin(listOfStrings) {
  for (let i = 0; i <= listOfStrings.length - 1; i++) {
    if (listOfStrings[i].length > minLength) {
      newArray.push(listOfStrings[i])
    }
  }
  let newStr = newArray.join(', ')
  return newStr
}
//Run the function
console.log(`Printing the strings longer than ${minLength} characters in ${listOfStrings}:`);
console.log(longerMin(listOfStrings));
console.log();

//Print the first string to start with A
function printA(listOfStrings) {
  for (let i = 0; i <= listOfStrings.length - 1; i++) {
    if (listOfStrings[i][0] === 'a') {
     return listOfStrings[i]
    }
  }
}
//Run the function
console.log('Printing the first word that starts "a":');
console.log(printA(listOfStrings));
console.log();

//Print 'found it' if 'needle' is in listOfStrings
function findNeedle(listOfStrings) {
  for (let i = 0; i <= listOfStrings.length - 1; i++) {
    if (listOfStrings[i] === 'needle') {
     return 'found it'
    }
  }
  return 'needle not found!'
}
//Run the function
console.log('Searching for needle in listOfStrings:');
console.log(findNeedle(listOfStrings));
console.log();

//Add "needle" to listOfStrings
listOfStrings.push('needle');

//Now it should find a needle!
console.log('Searching for needle in listOfStrings again:');
console.log(findNeedle(listOfStrings));
console.log();

//Print out elements in listOfStrings alphabetically
function alphabetical(listOfStrings) {
  listOfStrings.sort();
  let spaced = listOfStrings.join(', ');
  return spaced
}
//Run the function
console.log('Printing elements in listOfStrings in alphabetical order:');
console.log(alphabetical(listOfStrings));
console.log();

//Print out elements in listOfStrings reverse alphabetically
function revAlphabetical(listOfStrings) {
  listOfStrings.reverse();
  let spaced = listOfStrings.join(', ');
  return spaced
}
//Run the function
console.log('Printing elements in listOfStrings in reverse alphabetical order:');
console.log(revAlphabetical(listOfStrings));
console.log();

//Looping with objects time!
let coolObject = {
  "food": 'pizza',
  "drink": 'kombucha',
  "snack": 'chips',
  "bed": 'soft',
  "hobby": 'fencing',
  "siblings": 2
};

console.log(coolObject);
console.log();

//Sort elements in coolObject alphabetically
function alphabeticalObj(coolObject) {
  let keysSorted = {};
  Object.keys(coolObject).sort().forEach(function(key) { //forEach will help with alphabetizing
    keysSorted[key] = coolObject[key];
  });
  return keysSorted
}
console.log('Printing elements in coolObject in alphabetical order:');
console.log(alphabeticalObj(coolObject));
console.log();

function revAlphabeticalObj(coolObject) {
  let keysSorted = {};
  Object.keys(coolObject).sort().reverse().forEach(function(key) { //.reverse reverses the order! Surprising isn't it?
    keysSorted[key] = coolObject[key];
  });
  return keysSorted
}
console.log('Printing elements in coolObject in reverse alphabetical order:');
console.log(revAlphabeticalObj(coolObject));
console.log();

let daysInMonth = {};
daysInMonth.January = 31;
daysInMonth.February = 30;
daysInMonth.March = 31;
daysInMonth.April = 30;
daysInMonth.May = 31;
daysInMonth.June = 30;
daysInMonth.July = 31;
daysInMonth.August = 31;
daysInMonth.September = 30;
daysInMonth.October = 31;
daysInMonth.November = 30;
daysInMonth.December = 31;
function moreThan31(daysInMonth) {
  let months31 = [];
  for (let i = 1; i <= 12; i++) {
    if (daysInMonth.January === 31) {
      months31.push(daysInMonth.key)
    }
  }
  return months31
}
console.log('The months with 31 days are: ' + moreThan31(daysInMonth))
//I didn't manage to figure this last one out...
//I feel like my understanding of objects are still fuzzy?
//I don't really know how to interact with them! 
