// Object literal in Js
const user = {
    username: "Nazeer",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function () {
        // console.log("Got user details from database");
        // console.log(`Username: ${this.username}`);
        console.log(this); // refers to the current object
    }
}

// console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this); // refers to the global object, returns empty object in node environment and window object in browser


// Constructor function
const User = function (username, loginCount, isLoggedIn) {
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    this.greeting = function(){
        console.log(`Hello ${this.username}`);
    }
    
    return this; // even if you don't return anything, it will by-default return the current object
}

// new keyword creates new instance and memory allocation happens for the object separately, so no other object can overwrite it
const userOne = new User("hitesh", 12, true);
const userTwo = new User("nazeer", 10, false);
console.log(userOne.constructor); // [Function: User] - refers to the constructor function
