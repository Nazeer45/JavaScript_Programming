const accountId = 144553
let accountEmail = "nazeer@google.com"
var accountPassword= "12345"
accountCity = "Hyderabad" // variable can be declared without var or let or const but not recommended
let accountState; // if not declared it will be undefined by default

// accountId = 3 // Reassignment is not allowed in constant

accountEmail = "test@mail.com"
accountPassword = "121212"
accountCity = "Bangalore"

console.log(accountId);

/* 
Prefer not to use var because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])