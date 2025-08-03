const user = {
    username: "Nazeer",
    price: 999,

    welcomeMessage: function () {
        console.log(`Welcome ${this.username}`);
        // console.log(this); // refers to the current object
    }
}

// user.welcomeMessage() // Welcome Nazeer
// user.username = "sam"
// user.welcomeMessage() // Welcome sam
// console.log(this); // {} - refers to the global object

// function chai(){
//     let price = 999
//     console.log(this.price); // undefined - this does not refer in a regular function 
//     console.log(this); //  generates output - refering to the global object
// }
// chai()

// const chai1 = () => {
//     let price = 999
//     console.log(this); // {} - retruns empty object refers to the global object
//     console.log(this.price); // undefined - this also does not refer in arrow function
// }
// chai1()

const addTwo = (num1, num2) => {
    return num1 + num2
}

// implicit return
// const addTwo = (num1, num2) => num1 + num2 // one way of writing
// const addTwo = (num1, num2) => (num1 + num2) // another way of writing - if parentheses are used then return is implicit
// const addTwo = (num1, num2) => {return (num1 + num2)} // another way of writing - if curly braces are used then return needs to be explicitly written

// const addTwo = (num1, num2) => ({username: "Nazeer"})

console.log(addTwo(3, 5)); // 8