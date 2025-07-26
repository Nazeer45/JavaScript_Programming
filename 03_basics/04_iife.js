// Immediately Invoked Function Expression (IIFE)

// Named IIFE
(function chai() {
    console.log(`IIFE`);
})(); // IIFE functions needs to explicitly closed with semicolon

// unnamed IIFE with parameters
( (name)=>{
    console.log(`DB CONNECTED TO ${name}`);
})('Nazeer');