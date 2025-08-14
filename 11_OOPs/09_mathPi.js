const value = Object.getOwnPropertyDescriptor(Math, 'PI');

// console.log(value); // { value: 3.141592653589793, writable: false, enumerable: false, configurable: false }

const chai = {
    name : "Chai",
    price : 100,
    isAvailable : true
}

// console.log(Object.getOwnPropertyDescriptor(chai, 'name')); // { value: 'Chai', writable: true, enumerable: true, configurable: true }

// making a property non-configurable
Object.defineProperty(chai, 'name', {
    writable : false, // writable if false then it will not be changed
    enumerable : false // enumerable if false then it will not be iterated and accessed
})

// console.log(Object.getOwnPropertyDescriptor(chai, 'name')); // { value: 'Chai', writable: false, enumerable: false, configurable: true }

chai.name = 'Masala Chai'
// console.log(chai);  // { name: 'Chai', price: 100, isAvailable: true }

for (let [key, value] of Object.entries(chai)) {
    if(typeof value !== 'function'){
        console.log(`${key} :- ${value}`); // name :- Chai, price :- 100, isAvailable :- true (key, value);
    }
}
