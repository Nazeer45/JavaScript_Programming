// reduce method - applies a function to an array and returns a single value

// For first iteration initial value is assigned to accumulator (acc) and currval is assigned from the first element of the array

const myNums = [1,2,3]

// const myTotal = myNums.reduce(function (acc, currval){
//     console.log(`acc: ${acc} and currval: ${currval}`)
//     return acc + currval
// },0)

// using arrow function
// const myTotal = myNums.reduce((acc, currval) => acc + currval, 0)

// console.log(myTotal);

const shoppingCart = [
    {
        name: 'shoes',
        price: 1200
    },
    {
        name: 'pant',
        price: 2200
    },
    {
        name: 'shirt',
        price: 3200
    }
]

let totalPrice = shoppingCart.reduce((acc,currval) => acc + currval.price,0)
console.log(totalPrice);