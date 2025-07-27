// for of

const myNewArray = [200, 400, 100, 300]

for(let price of myNewArray){
    // console.log(price);
}

const greetings = "Hello World!"

for(let char of greetings){
    // console.log(char);
}

// Maps - stores unique key value pairs and insertion order is preserved

const myMap = new Map()
myMap.set("name", "Nazeer")
myMap.set("age", 22)
myMap.set("IN", "India")

// console.log(myMap);

for (const [key, value] of myMap) {
    // console.log(key, ':-', value)
}

//Object

const myObj = {
    name : "Nazeer",
    age : 22
}

// for (const [key, value] of myObj) { // error - objects are not iterable
//     console.log(key, ':-', value)
// }