class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username is ${this.username}`);
    }
}

class Teacher extends User {
    constructor(username, email, password){
        super(username)
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`${this.username} is adding a course`);
    }
}

const chai = new Teacher('nazeer', 'nazeer@gmail', '1234')
// console.log(chai); // Teacher { username: 'nazeer', email: 'nazeer@gmail', password: '1234' }
// chai.addCourse(); // nazeer is adding a course

const masalaChai = new User('shaik')
masalaChai.logMe(); // Username is shaik

console.log(chai instanceof Teacher); // true
console.log(chai instanceof User); // true
console.log(masalaChai instanceof Teacher); // false