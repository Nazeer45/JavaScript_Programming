// const promiseOne = new Promise(function (resolve, reject){
//     //Do an async task
//     //DB calls, cryptography, network calls
//     setTimeout(() => {
//         console.log("Task completed");
//         resolve();
// },1000);
// });

// promiseOne.then(function(){
//     console.log("Promise resolved");
// });


// Another way
// new Promise(function(resolve, reject){
//     setTimeout(function(){
//         console.log("Async Task2 completed");
//         resolve();
//     })
// }).then(function(){
//     console.log("Promise2 resolved");
// })



// const promiseThree = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         resolve({name: "Nazeer", age: 22})
//     },1000)
// })

// // receiving data from promise
// promiseThree.then(function(user){
//     console.log(user);
// })


// const promiseFour = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         let error = false;
//         if(!error){
//             resolve({name: "Shaik", age: 23})
//         }else{
//             reject("Error: Something went wrong")
//         }
//     },1000)
// })

// promiseFour
// .then((user) => {
//     console.log(user);
//     return user.name; // returning again
// })
// .then((username) => {
//     console.log(username);
// })
// .catch(function(error){
//     console.log(error);
// }).finally(()=>{
//     console.log("Promise is either resolved or rejected");
// })


// Consuming promises with async await
// const promiseFive = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         let error = true;
//         if(!error){
//             resolve({name: "JavaScript", password: 1234})
//         }else{
//             reject("Error: JS went wrong")
//         }
//     })
// });

// errors need to be handled by try catch in async await
// async function consumePromiseFive(){
//     try {
//         const response = await promiseFive;
//         console.log(response);
//     } catch (error) {
//         console.log(error);
//     }
// }

// consumePromiseFive();


// fetching from API with async await
// async function getAllUsers(){
//     try{
//         const response = await fetch("https://jsonplaceholder.typicode.com/users");
//         const data = await response.json();
//         console.log(data);
//     }catch(error){
//         console.log("Error: ",error);
//     }
// }
// getAllUsers();

// fetching from API with then, catch 
fetch("https://jsonplaceholder.typicode.com/users")
.then((response) => {
    return response.json();
})
.then((data) => {
    console.log(data);
})
.catch((error) => {
    console.log("Error: ",error);
})