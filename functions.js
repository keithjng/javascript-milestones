const readlineSync = require('readline-sync');

function greet() {
  let name = readlineSync.question('What is your name? \n');
  console.log(`Hello ${name}!`);
}
//Run the function
greet();
console.log();

function hotOrCold() {
  let num = readlineSync.question('Enter a number! \n');
  if (num > 100) {
    console.log('hot');
  } else if (num === 100) {
    console.log('correct');
  } else if (num < 100) {
    console.log('cold');
  } else {
    console.log('was that a number?')
  }
}
//Run the function
hotOrCold();
console.log();

let arrayNum = [4, 5];
let total = 0;
function add() {
  for (let i = 0; i < arrayNum.length; i++) {
    total = total + arrayNum[i]
  }
  return total
}
//Run the function
console.log('Returning the sum (and printing it): ')
console.log(add());
console.log();

function sum() {
  arrayNum = [1, 2, 3, 4, 5];
  let newSum = add();
  console.log(newSum);
  return newSum
}
//Run the function
console.log('Printing the sum: ')
sum();
console.log();

arrayNum = [4, 5];
let biggest = 0
function larger() {
  for (let i = 0; i < arrayNum.length; i++) {
    if (biggest < arrayNum[i]) {
      biggest = arrayNum[i];
    }
  }
  return biggest
}
//Run the function
console.log('Printing the larger number: ');
console.log(larger());
console.log();

function largest() {
  arrayNum = [1, 2, 3, 4, 5];
  let newBiggest = larger();
  console.log(newBiggest);
  return newBiggest
}
//Run the function
console.log('Printing the largest number: ');
largest();
console.log();

let arrayStrings = ['mine', 'yours'];
let longString = '';
function longer() {
  for (let i = 0; i < arrayStrings.length; i++) {
    if (longString.length < arrayStrings[i].length) {
      longString = arrayStrings[i];
    }
  }
  return longString
}
//Run the function
console.log('Printing the longer string: ');
console.log(longer());
console.log();

function longest() {
  arrayStrings = ['mine', 'yours', 'theirs', 'ours', 'his', 'hers'];
  let longestString = longer();
  console.log(longestString);
  return longestString
}
//Run the function
console.log('Printing the longest string: ');
longest();
console.log();

function reverse() {
  arrayStrings = ['mine', 'yours', 'theirs', 'ours', 'his', 'hers'];
  let newArray = [];
  for (let i = arrayStrings.length - 1; i >= 0; i--) {
    newArray.push(arrayStrings[i])
  }
  return newArray
}
//Run the function
console.log('Printing the array in reverse: ');
console.log(reverse());
console.log();

function isChicagoPhoneNumber() {
  let number = readlineSync.question('Enter your number: \n');
  let numberArray = number.split('')
  if (numberArray[0] === '7' && numberArray[1] === '7' && numberArray[2] === '3') {
    return true
  } else if (numberArray[0] === '3' && numberArray[1] === '1' && numberArray[2] === '2') {
    return true
  } else if (numberArray[0] === '8' && numberArray[1] === '7' && numberArray[2] === '2') {
    return true
  } else {
    return false
  }
}
//Run the function
console.log('Is your number from Chicago? ');
console.log(isChicagoPhoneNumber());
console.log();

//Count the number of times a letter appears in a string
let input = "we don't know where we go when we sleep";
let letterObj = {};
function letterCounts() {
  let splitArray = input.split('');
  for (let i = 0; i < splitArray.length; i++) {
    if (letterObj.hasOwnProperty(splitArray[i]) === false) { //This was based off of textalyze!
      letterObj[splitArray[i]] = 1;
    } else {
      letterObj[splitArray[i]] += 1;
    }
  }
  return letterObj
}
//Run the function
console.log('Checking letters in ' + input);
console.log(letterCounts());
