let garden = {
    vegatable: 'zucchini',
    flower: 'sun flower',
    fruit: 'grape',
    water: true,
    sun: true,
    size: 10
}

let test = Object.keys(garden);
console.log(test);
console.log(typeof test[0]);

console.log(garden.vegatable);
console.log(garden['vegatable']);

let baking = {}
baking["zucchini"] =  "better make some bread!";
console.log(baking);

