let marvel_heroes = ["thor", "ironman", "spiderman"]
let dc_heroes = ["superman", "flash", "batman"]

// marvel_heroes.push(dc_heroes) // adds total array at the end as a single element
// console.log(marvel_heroes);


let all_heroes = marvel_heroes.concat(dc_heroes) // adds elements one by one
// console.log(all_heroes);

// Spread operator
const all_new_heroes = [...marvel_heroes, ...dc_heroes]
// console.log(all_new_heroes); // [ 'thor', 'ironman', 'spiderman', 'superman', 'flash', 'batman' ]


const another_array = [1,2,3, [4,5,6], [7,[8,9]],10,11,12]
const real_another_array = another_array.flat(Infinity) // flattens the array
// console.log(real_another_array); // [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 ]

// console.log(Array.isArray([1,2,3])) // true
// console.log(Array.isArray("hello")) // false
// console.log(Array.from("Nazeer")) // [ 'N', 'a', 'z', 'e', 'e', 'r' ] - converts string to array
console.log(Array.from({name: "Shaik"})) // [] - [Object: null prototype]

let score1 = 100
let score2 = 200
let score3 = 300

// console.log(Array.of(score1, score2, score3)) // [ 100, 200, 300 ]