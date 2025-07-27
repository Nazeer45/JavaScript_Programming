const userEmail = BigInt(0n);

// if (userEmail) {
//     console.log("Greeting User");
// }else{
//     console.log("User not logged in");
// }

//falsy values
// false, 0, -0, "", null, undefined, NaN, BigInt 0n


//truthy values - except above remaining values are considered truthy
// some confusing truthy values
// "0", 'false', " ", [], {}, function(){}, true

// To check if array is empty
// const emptyArray = []
// if (emptyArray.length === 0) {
//     console.log("Array is empty");
// }

// To check if object is empty
// const emptyObject = {}
// if (Object.keys(emptyObject).length === 0) {
//     console.log("Object is empty");
// }

// console.log(false == 0) // true
// console.log(false == "") // true
// console.log(0 == "") // true
// console.log(undefined == null) // true
// console.log(false == null) // false
// console.log(undefined == false) // false

// Nullish Coalescing Operator (??): null undefined - used to assign a default value  
let val1;
// val1 = 5 ?? 10 // 5
// val1 = null ?? 10 // 10
// val1 = undefined ?? 10 // 10
// val1 = null ?? 10 ?? 20 // 10 - first available value is assigned to val
// console.log(val1)

// Ternary Operator
// condition ? true : false
const iceTeaPrice = 100 
iceTeaPrice >= 80 ? console.log("Iced Tea Price is more than 80") : console.log("Iced Tea Price is less than 80") 