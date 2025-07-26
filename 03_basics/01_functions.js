function sayMyName(){
    console.log("N");
    console.log("a");
    console.log("z");
    console.log("e");
    console.log("e");
    console.log("r");
}

// sayMyName();

function addTwoNumbers(number1, number2){
    let result = number1 + number2;
    return result
}

// addTwoNumbers(3, 5);
// addTwoNumbers(3, "5");

const result = addTwoNumbers(3, 5)
// console.log("Result: ",result);

function loginUser(name = "bob", password = "567"){
    if(name === "shaik" && password === "1234"){
        return `User logged in`;
    } else{
        console.log(`${name} Invalid credentials`);
    }
}

// console.log(loginUser("shaik", "1234"));
// loginUser();

function calculateCartPrice(val1, val2, ...num1){
    return num1
}
// console.log(calculateCartPrice(200, 400, 500, 200, 300)); // [ 500, 200, 300 ]

const user = {
    username: "Nazeer",
    price: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user);

// handleObject({
//     username: "Naaz",
//     price: 200
// })

const myNewArray = [200, 400, 100, 300]
function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
// console.log(returnSecondValue([200, 400, 100, 300]));

