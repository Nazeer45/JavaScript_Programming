// array

const myArr = [1,2,3,4,5]
const myHeros = ["thor", "ironman", "spiderman"]

const myArr2 = new Array(1,2,3,4,5)
// console.log(myArr[0]);

// Arrays methods
myArr.push(6) // adds at the end
myArr.push(7) // adds at the end
myArr.pop() // removes the last element

myArr.unshift(1) // adds the first element
myArr.shift() // removes the first element

// console.log(myArr.includes(4)); // true
// console.log(myArr.indexOf(4)); // 3

const newArr = myArr.join() // converts array to string
// console.log(myArr); // [ 1, 2, 3, 4, 5 ]
// console.log(typeof newArr); // string



// slice, splice
// console.log("A before splice", myArr); // A before splice ( 1, 2, 3, 4, 5 ",)

const myn1 = myArr.slice(1,3) // returns a new array
// console.log("result of slice", myn1); // ( 2, 3 )
// console.log("B after splice", myArr); // B after splice ( 1, 2, 3, 4, 5 )

const myn2 = myArr.splice(1,3) // splice changes the original array and includes the end index
// console.log("result of splice", myn2); // ( 2, 3, 4 )
// console.log("C after splice", myArr); // C after splice ( 1, 5 )

