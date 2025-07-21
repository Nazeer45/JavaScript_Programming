// singleton object - objects created with constructor function is called singleton object
// ex: Object.create()

// Object literals

// Symbol keys can only be accessed using bracket notation
const mySym = Symbol("key1")

const JsUser = {
    name : "Nazeer",
    "age" : 22, // keys in string can only be accessed using bracket notation
    [mySym] : "mykey1",
    email : "nazeer@google",
    location : "Hyderabad",
    blogs : ["why mac and cheese rules", "10 things to make with marmite"],
    login(){
        console.log("The user logged in");
    },
    logout(){
        console.log("The user logged out");
    }
}

// console.log(JsUser.email) // nazeer@google
// console.log(JsUser["email"]) // nazeer@google
// console.log(JsUser["age"]) // 22
// console.log(JsUser[mySym]) // mykey1

// JsUser.email="test@mail.com"
// Object.freeze(JsUser) // freezes the object
// JsUser.email="random@mail.com"
// console.log(JsUser.email); // test@mail.com
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello User");
}
JsUser.greeting2 = function(){
    console.log(`Hello User, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greeting2());