// Make a function called greet
function greet() {
    console.log("Hello")
}

// say Hi

let say_hi () => console.log("Hi")

//hello

let hello = () => {
    console.log("Hello")
}

// greet_two
let greetTwo = function() {
    console.log('Greet Again')
}

arrList = ["Justin", "Ahaman"]

function printList (){
    console.log(arrList)
}
printList()

function betterPrint (listParam){
    console.log(listParam)
}
betterPrint(arrList)

function varLoop(n){
    for(let i =1; i <= n; i++){
        console.log(i);
    }
}

varLoop(20)


function print_name(name){
    console.log(name);
}
// name = "Justin"
print_name("Justin")
/*
function print_name("Justin"){
    console.log("Justin")
}
*/
// name = "Adam"
print_name("Adam")
// Write out how this works with 20
function var_loop(n){
    for(let i = 1; i <= n; i++){
        console.log(i);
    }
}
var_loop(20)

// Make a Function that taes in 3 things
// and prints them on sep lines
function multiPrint(a, b, c){
    console.log(a);
    console.log(b);
    console.log(c);
}
function listPrint(wordList){
    // for (word in wordList){
        // console.log(wordList[word]);
    // }
        for (word in wordList){
        console.log(wordList[word]);
     }
}

listPrint(["Justin", "Adam", "Amy", "Joe"])