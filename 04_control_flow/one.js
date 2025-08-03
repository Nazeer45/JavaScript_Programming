// if
// const isUserloggedIn = true

if(isUserloggedIn){
 console.log("User is logged in");
}

// <, >, <=, >=, ==, !=, ===, !==

// if (score > 100){
//     const power = "fly"
//     console.log(`User power: ${power}`);
// }
// console.log(`User power: ${power}`); //

const balance = 1000
// if(balance > 500) console.log("test"),console.log("test2"); // not good practice

// if(balance > 500){
//     console.log("less thsn 500");
// }else if (balance < 750){
//     console.log("less than 750");
// } else if(balance < 900){
//     console.log("less than 900");
// }else{
//     console.log("greater than 1200");
// }

const isUserloggedIn = true
const debitCard = true
const loggedInFromGoogle = true
const loggedInFromEmail = true

if (isUserloggedIn && debitCard){
    console.log("Allow user to buy course");
}

if(loggedInFromGoogle || loggedInFromEmail){
    console.log("User logged in");
}