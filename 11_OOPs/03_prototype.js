// Array 
let myHeros = ["thor", "ironman", "spiderman"]

// Object
let heroPower = {
    thor : "hammer",
    ironman : "suit",
    spiderman : "silk",

    getSpiderPower : function(){
        console.log("Spiderman power is", this.spiderman);
    }
}

// Adding custom properties to parent object, so that it can be accessed by all objects, functions and arrays
Object.prototype.nazeer = function(){
    console.log("Nazeer is present in all objects");
}

// myHeros.nazeer() // Nazeer is present in all objects
// heroPower.nazeer() // Nazeer is present in all objects


// old syntax of inheriting properties
const User = {
    name: "chai",
    email: "nazeer@gmail"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: true
}

const TASupport = {
    makeAssignments: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport // TASupport is inheriting properties from TeachingSupport
}

Teacher.__proto__ = User // Teacher is inheriting properties from User


// Modern syntax of inheriting properties
Object.setPrototypeOf(TeachingSupport, Teacher) // TeachingSupport is inheriting properties from Teacher

// Example of adding custom method to the parent object
let anotherUsername = "ChaiAurCode       "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()