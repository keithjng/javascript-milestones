let coolArray = ['flour', 'yeast', 'water', 'salt', 'cheese', 'garlic powder']

//Determine the length of the array
console.log('The number of elements within the array is ' + coolArray.length)

//Cherry pick certain parts of the array
function first(coolArray) { //Determine the first element of coolArray
  let element = coolArray[0]; //We use index 0 because indexes start at 0 for some reason!
  return element
}
//Run the function
console.log('The first element in coolArray is ' + first(coolArray));

function second(coolArray) { //Determine the second element of coolArray
  let element = coolArray[1];
  return element
}
//Run the function
console.log('The second element in coolArray is ' + second(coolArray));

function last(coolArray) { //Determine the last element of coolArray
  let element = coolArray[coolArray.length - 1]; //This works because it goes to the point after the last element, then - 1 makes it go back one!
  return element
}
//Run the function
console.log('The last element in coolArray is ' + last(coolArray))

let k = 5 //Looking for the fifth element
function kElement(coolArray) { //Determine the "k" element of coolArray
  let element = coolArray[k - 1]; //This works similar to looking for the last element
  return element
}
//Run the function
console.log(`The ${k} element in coolArray is ` + kElement(coolArray))

//Change the values of coolArray
function changeFirst(coolArray) { //Change the first element of coolArray
  coolArray.shift(); //This isn't the most efficient method, but I added it to showcase "shift" and "unshift"
  coolArray.unshift('sugar');
  return coolArray
}
//Run the function
console.log('The new coolArray after changing the first is ' + changeFirst(coolArray));

function changeSecond(coolArray) {
  coolArray.splice(1, 1, 'baking soda') //Replaces the element at index 1 with the new string
  return coolArray
}
//Run the function
console.log('The new coolArray after changing the second is ' + changeSecond(coolArray));

function changeLast(coolArray) {
  coolArray.pop(); //Again, this isn't the most efficient, but I wanted to take note of "pop" and "push"
  coolArray.push('lemon juice')
  return coolArray
}
//Run the function
console.log('The new coolArray after changing the end is ' + changeLast(coolArray));

//We defined "k" as 5 awhile ago
function changeK(coolArray) {
  coolArray.splice(k - 1, 1, 'cinnamon') //Replaces the element at index k with the new string
  return coolArray
}
//Run the function
console.log(`The new coolArray after changing ${k} is ` + changeK(coolArray));

//Add an element to the end
let newItem = 'eggs' //We can change this to whatever
  function addEnd(coolArray) {
  coolArray.push(newItem) //Oops, turns out we use push and pop here anyway
  return coolArray
}
//Run the function
console.log(`The new coolArray after adding ${newItem} is ` + addEnd(coolArray));

//Take away the last element
function delEnd(coolArray) {
  coolArray.pop()
  return coolArray
}
console.log(`The new coolArray after removing the last item is ` + delEnd(coolArray));

//Add an element to the beginning
  function addBegin(coolArray) {
  coolArray.unshift(newItem) //newItem was defined previously as "eggs"
  return coolArray
}
//Run the function
console.log(`The new coolArray after adding ${newItem} to the start is ` + addBegin(coolArray));

//Take away the first element
function delBegin(coolArray) {
  coolArray.shift()
  return coolArray
}
console.log(`The new coolArray after removing the first item is ` + delBegin(coolArray));
