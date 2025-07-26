var a = 10
let b = 20
const c = 30
// console.log(a, b, c); // 10 20 30

if(true){
    var d = 40
    let b = 50 // inner scope
    const f = 60
    // console.log(d, b, f); // 40 50 60
}
// console.log(d); // 40
// console.log("Outer: ", b); // outer scope
// console.log(f); // error - out of scope

function one(){
    const username = "Nazeer"
    function two(){
        const website = "youtube"
        // console.log(username);
    }
    // console.log(website); // error - out of scope
    two()
}

one()

if(true){
    const username = "Nazeer"
    if(username === "Nazeer"){
        const website = "youtube"
        // console.log(username + " " + website);
    }
    // console.log(website); // error - out of scope
}
// console.log(username);

//++++++++++++++++++++++++++ interesting +++++++++++++++++++++++++++++++



// console.log(addOne(5)); // 6 - before declaration
function addOne(num){
    return num + 1
}
// console.log(addOne(5)); // 6 - after declaration


// console.log(addTwo(5)); // error - before declaration
const addTwo = function(num){
    return num + 2
}
// console.log(addTwo(5)); // 7 - after declaration