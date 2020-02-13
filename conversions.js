//To convert from a number to a string:
let num = 123;
let str = '123';
function numStr(num) {
  return num.toString(); //Simply use .toString()
}
//Run the function
console.log('The number 123 is now a string: ' + numStr(num));
//To prove the new output is a string and not a number, write a check:
console.log('Checking if output is a string: ');
console.log(numStr(num) === str);

//To convert a string to a number:
function strNum(str) {
  return Number(str); //The Number(string) function turns a string into a number
}
//Run the function
console.log("The string '123' is now a number: " + strNum(str));
//To prove the new output is a number and not a string, write a check:
console.log('Checking if output is a number: ');
console.log(strNum(str) === num);

str = 'apples'
let array = []
//To convert a string to an array:
function strArray(str) {
  let newStr = str.split('');
  array.push(newStr);
  return array
}
//Run the function
console.log("The string 'apples' is now an array: ");
console.log(strArray(str));

array = ['one', '--two--', 'three']
//To convert an array to a string:
function arrayStr(array) {
  let newArray = array.join('');
  return newArray.toString();
}
//Run the function
console.log(`The split array ${array} is now a string: `)
console.log(arrayStr(array))

array = ['one', 'two', 'three']
//To join an array with separators:
function arrayStrSep(array) {
  let newStr = array.toString();
  return newStr.replace(/,/g, '|') //Use the .replace method
}
console.log(`The split array ${array} is now a string with separators: `)
console.log(arrayStrSep(array))
