// /*
// CHALLENGE
// ************
//     Bronze:
//     Write an if else statement that checks your name;
//     If it is your name, console log '<name>'
//     If the name does not match, console.log 'Hello, what is your name?'
//     Silver:
//     If It is your name, console log 'Hello, my name is <name>'
//     Gold:
//     If it is not your name, console log 'Hello, is your name <name here> ?'
// */



// // let name = "Joe";


// // if (name == "Joe") {
// //     console.log("name");
// // } else { 
// //     console.log("Hello, what is your name?");
// // }

// // CHALLENGE
// // 
// //     Use this string: let name = 'zAchARy';

// //     Bronze:
// //     Write an if else statement that looks at the first letter of a string. If it is uppercase, console.log the string;
// //     If it is not console.log 'hey, this isn't written correctly'

// //     Silver:
// //     If the first letter of a string is uppercase, only console.log that letter
// //     if it is not, console.log the rest of the string Without the first letter, and change them to lowercase

// //     Gold:
// //     If the first letter of a string is uppercase, console.log that that first letter of a string  plus the rest of the string to lowercase
// //     If it is not, console.log the first letter of the string to uppercase plus the rest of the string to lowercase
// // 

// //* DOT NOTATION

// let student = {
//     name : "Justin",
//     grade : 12
// };

// // Array
// let names = [
//     "Justin",
//     "Adam",
//     "Amy"
// ]

// //* Ways to accessing an object
// // console.log(student.name);
// // console.log(student["name"]);

// //* Ways to accessing an array
// console.log(student.name);
// // console.log(student["name"]); NOT PREFERABLE

// /*
// CHALLENGE
// ************
//     Bronze:
//     Write an if else statement that checks your name;
//     If it is your name, console log '<name>'
//     If the name does not match, console.log 'Hello, what is your name?'
//     Silver:
//     If It is your name, console log 'Hello, my name is <name>'
//     Gold:
//     If it is not your name, console log 'Hello, is your name <name here> ?'
// */
// // let name = "Austin";
// // if (name == "Justin"){
// //     console.log("Hello, my name is", name + "!");
// // } else {
// //     // "Hello, is your name", name + "?"
// //     console.log(`Hello, is your name ${name}?`);
// // }
// /*
// CHALLENGE
// ************

// let student = {
//     name : "Justin",
//     grade : 12
// };
// let names = [
//     "Justin",
//     "Adam",
//     "Amy"
// ]
// // Ways to access an object
// // console.log(student.name);
// // console.log(student["name"]);
// // Ways of accessing an array
// // console.log(names[2])
// let fruit = ['apple', 'orange']
// let apple = fruit[0]
// // console.log(apple);
// // console.log(names.slice(1,3))
// // // Bronze
// // let name = 'zAchARy';
// // if (name[0] == name[0].toUpperCase()) {
// //     console.log(name);
// // } else {
// //     console.log("hey, this isn't written correctly");
// // };
// // silver
// // let name = 'zAchARy';
// // if (name[0] == name[0].toUpperCase()) {
// //     console.log(name[0])
// // } else {
// //     console.log(name.slice(1).toLowerCase());
// // }
// let name = 'zAchARy';
// if (name[0] == name[0].toUpperCase()) {
//     let isUppercase = name[0] + name.slice(1).toLowerCase();
//     console.log('console log #1:', isUppercase)
// } else {
//     let notUppercase = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
//     console.log('console log #2:', notUppercase);


//     for (var i=1; i < 101; i++){
//     if (i % 15 == 0) console.log("FizzBuzz");
//     else if (i % 3 == 0) console.log("Fizz");
//     else if (i % 5 == 0) console.log("Buzz");
//     else console.log(i);
// }for (var i=1; i < 101; i++){



// //* Variable
// for(let i = 1; i <= 100; i++){
//       if(i % 3 === 0 && i % 5 === 0){
//         console.log("FizzBuzz");

//       }else if (i % 3 === 0){
//         console.log("Fizz");

//       }else if (i % 5 === 0){
//         console.log("Buzz");

//       }else{
//         console.log(i);
//       }
// }

// //* Switch
// for(var i = 1; i < 21; i++) {
//     switch(true) {
    
//         case( i % 5 === 0 && i % 3 === 0):
//             console.log("FizzBuzz");
//             break;
    
//         case(i % 5 === 0):
//             console.log("Buzz");
//             break;
    
//         case (i % 3 === 0):
//             console.log("Fizz");
//             break;
//             default:
//                 console.log( i );
//         }
// }

// //* Ternary
// if (i%3) {
//     if (i%5) { 
//         console.log(i);  // i isn't divisible by 3 or 5
//     } else { 
//         console.log('Buzz'); // i is divisible by 5 only
//     }
// } else { 
//     if (i%5) { 
//         console.log('Fizz'); // i is divisible by 3 only
//     } else { 
//         console.log('FizzBuzz'); // i is divible by 3 and 5
//     }
// }

// - write a for loop running between the numbers 0 - 100
//     - for multiples of 3, instead of the number, console.log "Fizz"
//     - for multiples of 5 console.log "Buzz";
//     - for numbers which are multiples of BOTH 3 and 5, console.log "FizzBuzz".
//     - for any other number, console.log the value

//* FOR LOOP
for (var i = 0; i <= 100; i++) {
    var f = i % 3 == 0, b = i % 5 == 0;
    console.log(f ? b ? "FizzBuzz" : "Fizz" : b ? "Buzz" : i);
  }