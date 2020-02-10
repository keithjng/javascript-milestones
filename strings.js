//Now, instead of just numbers, we're gonna manipulate strings (of characters)!

//First, define the strings
let str1 = 'apple'; //chosen because apple appears inside pineapple!
let str2 = 'pineapple';
//Print the strings!
console.log('First string is ' + str1);
console.log('Second string is ' + str2);

//Concatenate the two strings!
console.log('The strings combined: ' + str1.concat(str2));

//See if first string is in second string
function isIn(str1, str2) {
  let check = str2.includes(str1); //using the string.includes function
  if (check === true) {
    console.log(str1 + ' is contained in ' + str2 + '!');
  } else {
    console.log(str1 + ' is not in ' + str2);
  }
}
isIn(str1, str2);

//Test other side of isIn
str1 = 'apple';
str2 = 'papaya';
isIn(str1, str2);

//New string!
let waffles = 'Watermelon';

//Determine the length of waffles
function strLength(waffles) {
  num = waffles.length;
  return num
}
//Run the function
console.log('The number of letters in ' + waffles + ' is ' + strLength(waffles));

//Make it uppercase
function toUpper(waffles) {
  newString = waffles.toUpperCase();
  return newString
}
//Run the function
console.log(waffles + ' in all caps looks like ' + toUpper(waffles));

//Make it lowercase
function toLower(waffles) {
  newString = waffles.toLowerCase();
  return newString
}
//Run the function
console.log(waffles + ' in all lowercase looks like ' + toLower(waffles));

//Determine the first character in waffles
function firstChar(waffles) {
  let char = waffles.slice(0, 1);
  return char
}
//Run the function
console.log('The first character in ' + waffles + ' is ' + firstChar(waffles));

//Determine the second character in waffles
function secChar(waffles) {
  let char = waffles.slice(1, 2);
  return char
}
//Run the function
console.log('The second character in ' + waffles + ' is ' + secChar(waffles));

//Determine the last character in waffles
function lastChar(waffles) {
  let char = waffles.slice(-1);
  return char
}
//Run the function
console.log('The last character in ' + waffles + ' is ' + lastChar(waffles));

//Determine the "kth" character in waffles
let k = 5 //Any number! (I guess the only condition is the word has to be at least k many characters.)
function kChar(waffles) {
  let char = waffles.slice(k - 1, k);
  return char
}
//Run the function
console.log('The ' + k + ' character in ' + waffles + ' is ' + kChar(waffles));

//Append an "a" to waffles
function addA(waffles) {
  let newString = waffles.concat('a')
  return newString
}
//Run the function
console.log(waffles + ' with an "a" looks like ' + addA(waffles));

//New string again
let firstName = 'Iann' //Can be any name (or string)

//Make the terminal greet you
function sayHi(firstName) {
  console.log(`Hi ${firstName}!`); //Uses "`" instead of "'"
}
//Run the function
sayHi(firstName)
