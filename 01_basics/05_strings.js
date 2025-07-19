const name = "Nazeer"
const repoCount = 20

// Concatenation
// console.log("Hello my name is " + name + " and my repo count is " + repoCount) // outdated

// Template Literals, string interpolation
// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`)


// another way od declaring string
const gameName = new String("Candy-Crush")
// console.log(gameName[0]);
// console.log(gameName.__proto__); // prototype of gameName is String

// String Properties and Methods
// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf("y"));

const newString =  gameName.substring(0,4) // Cand
let newString1 =  gameName.substring(4) // y-Crush 
newString1 =  gameName.substring(-4) // Candy-Crush 
// console.log(newString1);

const anotherString = gameName.slice(-4) // rush
const anotherString1 = gameName.slice(0,4) // Cand
const anotherString2 = gameName.slice(4) // y-Crush
// console.log(anotherString1); 

const newStringOne = "    Nazeer   "
// console.log(newStringOne);
// console.log(newStringOne.trim()); // remove space from start and end

const url = "https://nazeer.com/nazeer%20shaik"
// console.log(url.replace("%20", "-")); // replace %20 with space
// console.log(url.includes("nazeer")); // true
// console.log(gameName.split("-")); // ["Candy", "Crush"]
