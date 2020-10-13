//* DECLARATIONS
function hi() {
    console.log('HI')
}

hi();


// * EXPRESSIONS
let hello = function() {
    console.log('Hello!')
}

hello();

//* FUNCTION EXAMPLES
function addIt() {
    console.log(5+10)
};

addIt()

function counting() {
    for (i = 1; i <= 10; i++){
        console.log (i) 
    }
}

counting()

// - Given the array, create a function that lists out the values individually.
let arr = ['This', 'is', 'really', 'cool'];

function arrList () {
    for (word of arr) {
        console.log(word)
    }
}

arrList();