// let x = 12;

// function scope(){
//     let x = 33;
//     console.log(x);
// }

// scope();
// console.log(x);


// let y = 12;
// function scope() {
//    let y = 33;
//     console.log(y);
// }

// scope()
// console.log(y);

//* VAR vs LET
// var x = 12;

// function varTest() {
//     var x = 33;
//     if (1 == 1) {
//         var x = 45;
//         console.log(x)
//     }
//     console.log(x);
// }

varTest()
console.log(x);

let x = 12;
function letTest() {
    var x = 33
    if (1 == 1) {
        let x = 45;
        console.log(x)
    }
    console.log(x)
}
console.log('Hello')
letTest();
console.log(x)