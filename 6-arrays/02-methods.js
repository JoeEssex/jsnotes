let food = ['Pecan pie', 'Shrimp', 'Quesadilla', 'Cheese cake', 'Hotdog'];

food.push('Pizza')
console.log('push:', food);

food.splice(1, 1, 'Bananas');
console.log('splice:', food);

food.splice(2, 0, 'Sweet Potato Pie');
console.log('splice2:', food);

food.splice(0, 3, 'Turkey');
console.log('splice3:', food);

food.pop()
console.log('pop:', food);

food.shift();
console.log('shift:', food);

food.unshift('Popcorn', 'Steak');
console.log('shift:', food);

let dogs = ['Shiba Inu', 'Greyhound', 'Shih Zhu', "German Shepherd",];

let newArr = dogs.push('Bull Terrier');
let newArr2 = newArr2.unshift('Bull Terrier', 'Husky')

console.log(dogs)


let dogs = ['Shiba Inu', 'Greyhound', 'Shih Zhu', "German Shepherd",];

//* regular for loop
// for (i = 0; i < dogs.lenght; i++) {
//     console.log(dogs [i]);
// }

//* forEach()
dogs.forEach(dog => console.log(dog))

dogs.forEach(function(dog) {
    console.log(dog)
})

dogs.forEach((dog, index) =>{
    console.log(dog)
    console.log(index)
})

//* Challenge 2
// - (Go look at MDN docs to remind you):
// - Create an array containing movies
// - Use .forEach() to list your movies
// - Add another movie at the end
// - And replace one of your existing movies with another one

let movies = ['The Holiday', 'Bad Boys', 'Justice League', 'Pulp Fiction', 'Remember the Titans', 2001];

movies.forEach(movies => console.log(movies))

movies.push('Jurrasic Park')
console.log('push:', movies);

movies.splice(4, 1, 'Jumanji');
console.log('splice1:', movies);

movies.splice(3, 1, 'Napolean Dynamite');
console.log('splice:', movies);



let arr = [1, 2, 3, 4, 5]

If (arr instanceof Array){
    let revArr = arr.reverse()
    revArr.forEach(num => console.log(num))
} else {
    console.log('not an array')
}


//* Additional notes on Truthy & Falsey + types
//* "" false   "string" true
//* 0 false   1 true
console.log(typeof 2001)
console.log(typeof "2001")
console.log(typeof true);
console.log(typeof "true")



//* Reverse Array  (from MDN)
// const array1 = ['one', 'two', 'three'];
// console.log('array1:', array1);
// expected output: "array1:" Array ["one", "two", "three"]

// const reversed = array1.reverse();
// console.log('reversed:', reversed);
// expected output: "reversed:" Array ["three", "two", "one"]

// Careful: reverse is destructive -- it changes the original array.
// console.log('array1:', array1);
// expected output: "array1:" Array ["three", "two", "one"]
