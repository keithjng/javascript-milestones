//Welcome to a set of basic functions meant to manipulate numbers!

//First, defining variables as numbers:
//(Remember to use "let" and a single "=" sign when defining)
let num1 = 10; //My favorite number
let num2 = 5; //My girlfriend's favorite number
//Print the numbers!
console.log('The first number is: ' + num1);
console.log('The second number is: ' + num2);

//A function to add two numbers
function add(num1, num2) {
  let sum = num1 + num2; //"+" adds (duh)
  return sum //returning "sum" means the function will end here and give "sum"
}
//Run the function
console.log('The sum of ' + num1 + ' and ' + num2 + ' is ' + add(num1, num2));

//A function to subtract two numbers
function subtract(num1, num2) {
  let difference = num1 - num2; //"-" subtracts (also duh)
  return difference
}
//Run the function
console.log('The difference between ' + num1 + ' and ' + num2 + ' is ' + subtract(num1, num2));

//A function to multiply two numbers
function multiply(num1, num2) {
  let product = num1 * num2; //"*" multiplies (less obvious, since "x" is the usual symbol)
  return product
}
//Run the function
console.log('The product of ' + num1 + ' and ' + num2 + ' is ' + multiply(num1, num2));

//A function to divide two numbers
function divide(num1, num2) {
  let quotient = num1 / num2; //"/" divides (it's like making a fraction!)
  return quotient
}
//Run the function
console.log('The quotient of ' + num1 + ' and ' + num2 + ' is ' + divide(num1, num2));

//A function that returns the remainder
function remainder(num1, num2) {
  let surplus = num1 % num2; //"%" divides, then gives the remainder
  return surplus
}
//Run the function
console.log('The remainder after dividing ' + num1 + ' by ' + num2 + ' is ' + remainder(num1, num2));
//I guess 10 and 5 is a bad example, so let's throw in different numbers
//We can change variables by stating it then "=" it to something new
num1 = 17 //an ugly number
num2 = 3 //a somewhat tolerable number
console.log('The remainder after dividing ' + num1 + ' by ' + num2 + ' is ' + remainder(num1, num2));

//A function that gives a number to a power of
function exponent(num1, num2) {
  let power = num1 ** num2; //"**" does that power thingy, where the first number is the base and the number after "**" is the power
  return power
}
//Run the function
console.log('With base ' + num1 + ' and exponent ' + num2 + ', the result is ' + exponent(num1, num2));

//A function that rounds down after dividing
function divideDown(num1, num2) {
  let quotient = Math.floor(num1 / num2); //Math.floor is a built-in math function that rounds down (to the floor)
  return quotient
}
//Run the function
console.log('The quotient of ' + num1 + ' and ' + num2 + ' rounded down is ' + divideDown(num1, num2));

//A function that rounds up after dividing
function divideUp(num1, num2) {
  let quotient = Math.ceil(num1 / num2); //Math.ceil is the opposite of Math.floor; it rounds up instead
  return quotient
}
//Run the function
console.log('The quotient of ' + num1 + ' and ' + num2 + ' rounded up is ' + divideUp(num1, num2));

//A function that rounds after dividing
function divideRound(num1, num2) {
  let quotient = Math.round(num1 / num2); //Math.round follows standard rounding rules, less than 0.5 is down, 0.5 or greater goes up
  return quotient
}
//Run the function
console.log('The quotient of ' + num1 + ' and ' + num2 + ' rounded is ' + divideRound(num1, num2));

//Now on to more complicated math stuff
let blah = 6142019 //Significant for certain reasons

//Figure out the last digit
function farRight(blah) {
  let digit = blah % 10; //If we divide by 10, the remainder will be the last digit!
  return digit
}
//Run the function
console.log('The last digit of ' + blah + ' is ' + farRight(blah));

//Figure out if number is even or odd
function evenOdd(blah) {
  let check = blah % 2; //If the remainder is 0, the number is even!
  if (check === 0) {
    console.log(blah + ' is even!');
  } else {
    console.log(blah + ' is odd!');
  }
}
//Run the function
evenOdd(blah)

//Function to increment by 1
function incre1(blah) {
  let num = blah + 1;
  return num
}
//Run the function
console.log(blah + ' incremented by one is ' + incre1(blah));

//Function to increment by 2
function incre2(blah) {
  let num = blah + 2;
  return num
}
//Run the function
console.log(blah + ' incremented by two is ' + incre2(blah));

//Function to increment by 10
function incre10(blah) {
  let num = blah + 10;
  return num
}
//Run the function
console.log(blah + ' incremented by ten is ' + incre10(blah));

//Function to increment by k
let k = 614 //'k' can be any number!
function increK(blah) {
  let num = blah + k;
  return num
}
//Run the function
console.log(blah + ' incremented by ' + k + ' is ' + increK(blah));

//Function to decrement by 1
function decre1(blah) {
  let num = blah + 1;
  return num
}
//Run the function
console.log(blah + ' decremented by one is ' + decre1(blah));

//Function to decrement by 2
function decre2(blah) {
  let num = blah + 2;
  return num
}
//Run the function
console.log(blah + ' decremented by two is ' + decre2(blah));

//Function to decrement by 10
function decre10(blah) {
  let num = blah - 10;
  return num
}
//Run the function
console.log(blah + ' decremented by ten is ' + decre10(blah));

//Function to decrement by k
k = 614 //'k' can be any number!
function decreK(blah) {
  let num = blah - k;
  return num
}
//Run the function
console.log(blah + ' decremented by ' + k + ' is ' + decreK(blah));
