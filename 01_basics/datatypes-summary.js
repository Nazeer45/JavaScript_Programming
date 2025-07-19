//Primitive

// 7 types : string, number, boolean, null, undefined, symbol, bigint


// Stack (Primitive), Heap (Non-primitive)

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')
// console.log(id);
// console.log(anotherId);

// console.log(id === anotherId) // false, symbol assigns unique value


// BigInt
const hugeNumber = 1234567890123456789012345678901234567890n // bigInt literal
// console.log(hugeNumber);


// Reference (Non-primitive)

// array, objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "Nazeer",
    age: 22
}

const myFunction = function(){
    console.log("Hello World!");
}

console.log(typeof heros); // object
console.log(typeof myObj); // object
console.log(typeof myFunction); // function
console.log(typeof hugeNumber); // bigint
console.log(typeof id); // symbol
console.log(typeof Symbol); // function




// ++++++++++++++++++++++++++++++++++

// Stack (Primitive), Heap (Non-primitive)

// Examples of primitive data types
let myname="Nazeer"
let anotherName=myname
anotherName="Shaik"
// console.log(myname); // Nazeer
// console.log(anotherName); // Shaik

// Examples of non-primitive data types
const obj1={
    name:"Nazeer"
}
const obj2=obj1
obj2.name="Shaik"
// console.log(obj1); // Shaik
// console.log(obj2); // Shaik

