let num1 = 5;
let num2 = 10;

function determine(num1, num2) {
  if (num1 % 2 === 0 && num2 % 2 === 0) {
    console.log('Both numbers are even!')
  } else if (num1 % 2 === 0 && num2 % 2 !== 0) {
    console.log('Only num1 is even!')
  } else if (num1 % 2 !== 0 && num2 % 2 === 0) {
    console.log('Only num2 is even!')
  } else if (num1 % 2 !== 0 && num2 % 2 !== 0) {
    console.log('Neither number is even!')
  }
}
//Run the function
console.log('Checking if num1 and num2 are even: ');
determine(num1, num2);
console.log()

//Check other numbers!
num1 = 3
num2 = 7
console.log('Checking if num1 and num2 are even: ');
determine(num1, num2);
console.log()

//Check other numbers again!
num1 = 4
num2 = 6
console.log('Checking if num1 and num2 are even: ');
determine(num1, num2);
console.log()
