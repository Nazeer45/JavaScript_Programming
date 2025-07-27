// const coding = ["js", "react", "node", "python", "java", "c++"]

// const values = coding.forEach((item)=>{
//     console.log(item);
//     return item;
// })

// console.log(values); // undefined as forEach will not return anything even if we try to return

// filter method - applies a filter to an array and returns a new array
// const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const newNums = myNums.filter((num) => num > 4) // one way of writing
// const newNums1 = myNums.filter((num) => {return num > 4}) // another way of writing
// console.log(newNums); // [ 5, 6, 7, 8, 9, 10 ]
// console.log(newNums1); // [ 5, 6, 7, 8, 9, 10 ]

const books = [
    { title : 'Book 1', genre : 'Fiction', publish : 1990 },
    { title : 'Book 2', genre : 'History', publish : 2000 },
    { title : 'Book 3', genre : 'Science', publish : 2010 },
    { title : 'Book 4', genre : 'Non-Fiction', publish : 2020 },
    { title : 'Book 5', genre : 'Social', publish : 2030 },
    { title : 'Book 6', genre : 'Biography', publish : 2040 }
];

let userBooks = books.filter((bk)=> bk.genre === 'Non-Fiction')
userBooks = books.filter((bk)=> {return bk.publish >= 2010})
console.log(userBooks);