//* BOOLEANS

let on = true;
console.log(on);

let off = false;
console.log(off);

//* NULL
let empty = null;
console.log(empty);

//* UNDEFINED
let undef = undefined;
console.log(undef);

let x;
console.log (x)

//* NUMBERS
let degrees = 90;
console.log(degrees)

let precise = 999999999999999;
console.log(precise);

let rounded = 9999999999999999;
console.log(rounded);

let notQuite = 0.2 + 0.1;
console.log(notQuite);

let numbersAreHard = (0.2 * 10 + 0.1 * 10) / 10;
console.log(numbersAreHard);

let a = Number('123');
console.log(a);

//* STRINGS
let stringOne = "double quotes";
let stringTwo = 'single quotes';
let stringThree = 'I\'m home';
let stringFour = `I'm home`;
let stringFive = `You can use ${stringOne} or ${stringTwo}!`

console.log (stringFive);

let first = 1050 + 100;
let second = '1050' + '100';

console.log(first);
console.log(second);

console.log(typeof first);
console.log(typeof second);

let animal = 'dog';

console.log('I have a  ' + animal);
console.log(`I have a ${animal}`);

//* OBJECTS

let frodo = {
    race: 'hobbit',
    rings: 1,
    isShort: true
}


console.log(frodo);
console.log(typeof frodo);

//* ARRAYS
let tacos = ['large', 4, true];
console.log(tacos);
console.log(typeof tacos);



let firstName = 'Joe';
let lastName = 'Essex';
let houseNumber = '9041';
let street = 'Hemingway Drive';
let city = 'Indianapolis';
let state = 'IN';
let zipcode = '46239';

let fullAddress = ['${firstName} + ${lastName} + ${houseNumber} + ${street} + ${city} + ${state} + ${zipcode}'];

console.log('${firstName} + ${lastName} + ${houseNumber} + ${street} + ${city} + ${state} + ${zipcode}')



//* Mini Challenge 1

let firstName = 'Joe';
let lastName = 'Essex';
let houseNumber = '9041';
let street = 'Hemingway Drive';
let city = 'Indianapolis';
let state = 'IN';
let zipCode = '46239';

console.log(`${firstName} ${lastName} ${houseNumber} ${street}, ${city} ${state} ${zipCode}`)
console.log(address);

//* STRING PROPERTIES AND METHODS
let name = 'Joe';
console.log(myName.length);

console.log(myName.toUpperCase());

let home = 'My home is Fishers';
console.log(home.includes('Hello'))

let sent = 'this sentence will be split into individual parts';

console.log(sent.split(''));