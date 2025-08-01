// map method - applies a condition to each element of an array and returns a new array
const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNumbers.map((num) => num + 2)
// console.log(newNums);


// chaining of methods
const newNums1 = myNumbers
                    .map((num) => num * 10)
                    .map((num) => num + 1)
                    .filter((num) => num >= 40)
console.log(newNums1);