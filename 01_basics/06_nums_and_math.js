const score = 400
// console.log(score);

const balance = new Number(100)
// console.log(balance);

// console.log(balance.toString()); // 100
// console.log(balance.toString().length); // 3
// console.log(balance.toFixed(2)); // 100.00 , 2 decimal places after point

const otherNumber = 1123.8976
// console.log(otherNumber.toPrecision(3)); // 23.8976 --> 23.9, 123.8976 --> 124 , 1123.8976 --> 1.12e+3

const hundreds = 10000000
// console.log(hundreds.toLocaleString("en-IN")); // 1,00,00,000 in indian format


// ++++++++++++++++ Maths +++++++++++++++
// console.log(Math); // Math object
// console.log(Math.abs(-4)); // 4
// console.log(Math.round(4.3)); // 4.4 -> 4 , 4.5 -> 5
// console.log(Math.ceil(4.3)); // 5
// console.log(Math.floor(4.9)); // 4
// console.log(Math.min(3,4,5,6,7)); // 3
// console.log(Math.max(3,4,5,6,7)); // 7
// console.log(Math.random()); // random number between 0 and 1
// console.log(Math.random() * 10); // random number between 0 and 10
// console.log(Math.floor(Math.random() * 10) + 1); // random number between 1 and 10

const min = 10
const max = 20
console.log(Math.floor(Math.random() * (max - min + 1) + min)); // random number between 10 and 20