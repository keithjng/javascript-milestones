//Start by creating an empty object
let personData = {};

//Format for adding information to object: objectName.infoName = data
//In this case, objectName would be personData
personData.firstName = 'Jean-Luc';
personData.lastName = 'Picard';
personData.age = 79;
console.log(personData);

let daysInMonth = {};
//Store values in this empty object
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
//We can now call on an element within the object
console.log('The number of days in April are: ' + daysInMonth.April)
