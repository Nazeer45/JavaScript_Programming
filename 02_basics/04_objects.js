// singleton object - objects created with constructor function is called singleton object
const tinderUser = new Object();

tinderUser.id = "123abc"
tinderUser.name = "Nazeer"
tinderUser.isLoggedIn = false

// console.log(tinderUser); // { id: '123abc', name: 'Nazeer', isLoggedIn: false }

const regularUser = {
    email : "some@gmail.com",
    fullName : {
        userFullName : {
            firstName : "Nazeer",
            lastName : "Shaik"
        }
    }
}

// console.log(regularUser.email); // some@gmail.com
// console.log(regularUser.fullName.userFullName.firstName); // Nazeer

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}
const obj3 = {5: "e", 5: "f"}

// const obj4 = {obj1, obj2} // { obj1: { 1: 'a', 2: 'b' }, obj2: { 3: 'c', 4: 'd' } }

// const obj4 = Object.assign({}, obj1, obj2, obj3) // { 1: 'a', 2: 'b', 3: 'c', 4: 'd', 5: 'e' } // it will merge all objects in empty object 

const obj4 = {...obj1, ...obj2, ...obj3} // { 1: 'a', 2: 'b', 3: 'c', 4: 'd', 5: 'e' }
// console.log(obj4);


const users = [
    {
        userId : 1,
        email : "nazeer@gmail",
        name : "Nazeer"
    },
    {
        userId : 2,
        email : "shaik@gmail",
        name : "Shaik"
    },
    {
        userId : 3,
        email : "random@gmail",
        name : "Random"
    }
]

// console.log(users[1].email) // shaik@gmail

// console.log(tinderUser)
// console.log(Object.keys(tinderUser)); // [ 'id', 'name', 'isLoggedIn' ]

// console.log(Object.values(tinderUser)); // [ '123abc', 'Nazeer', false ] 

console.log(Object.entries(tinderUser)); // [ [ 'id', '123abc' ], [ 'name', 'Nazeer' ], [ 'isLoggedIn', false ] ]

console.log(tinderUser.hasOwnProperty("isLoggedIn")); // true - checks if the object has the property