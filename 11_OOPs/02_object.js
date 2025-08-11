function multipleBy5(num){
    return num * 5
}

multipleBy5.power = 2 // static property means it is not dependent on the object itself but on the function 

// console.log(multipleBy5(5)); // 25
// console.log(multipleBy5.power); // 2 - function behaves as function as well as object, so can access static properties
// console.log(multipleBy5.prototype) // {} - empty 

function createUser(username, price){
    this.username = username
    this.price = price
}

createUser.prototype.increment = function(){
    this.price++
}

// adding a custom method to the object
createUser.prototype.printMe = function(){
    console.log(`Username is ${this.username} and price is ${this.price}`);
}

const user1 = new createUser("Nazeer", 500);
const user2 = new createUser("Shaik", 300);

user1.printMe() // Username is Nazeer and price is 500
user1.increment()
user1.printMe() //  Username is Nazeer and price is 501