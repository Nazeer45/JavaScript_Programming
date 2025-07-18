let score = "33ab"

// console.log(typeof score) // string

let valueInNumber = Number(score)
// console.log(typeof valueInNumber) // number
// console.log(valueInNumber);

// "33" => 33
// "33ab" => NaN
// true => 1; false => 0
// "hello" => NaN
// null => 0
// undefined => NaN

let loggedIn = 1
let booleanLoggedIn = Boolean(loggedIn)
// console.log(booleanLoggedIn)

// 1 => true; 0 => false
// "" => false
// "hello" => true

let someNumber = 33
let stringNumber = String(someNumber)
// console.log(stringNumber)
// console.log(typeof stringNumber)

// *********************** Operations ***********************

let value = 3
let negValue = -value
// console.log(negValue)

let str1 = "Hello"
let str2 = " World"
let str3 = str1 + str2
// console.log(str3)

// console.log("1"+ 2); // 12
// console.log(1+ "2"); // 12
// console.log("1"+ 2 + 2); // 122
// console.log(1+ 2 + "2"); // 32
// console.log(1+ "2" + 2); // 122


// console.log((3 + 4) * 5 % 3);

// console.log(+true); // 1
// console.log(+""); // 0


let gameScore = 100
console.log(gameScore++); // 100
console.log(++gameScore); // 102


