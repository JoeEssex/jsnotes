function hi(name) {
    console.log(`Hi ${name}`)
}

hi ('keegan');
hi ('Justin');
hi ('Amanda');

function addIt(x, y) {
    console.log(x+y);
};

addIt(2, 9);
addIt(8, 15);
addIt(7, 4);

// - Write a function that takes two parameters:
//         - one parameter is for a first name,
//         - the other parameter is for a last name;
//         - have them come together in a variable inside the function.
//         - console.log 'Hello, my name is <your name>'
//         - call (or invoke) your function

function myName(firstName, lastName){
    let fullName = firstName + '' + lastName
      console.log(`Hello my name is ${fullName}.`)
}

myName('Joe', 'Essex')
