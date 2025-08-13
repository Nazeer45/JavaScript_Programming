class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username: ${this.username}`);
    }

    // static method is used to block the access of the method to the objects and child classes created from this class
    static createId(){
        return `123`
    }
}

const user1 = new User('nazeer')
console.log(user1.logMe()); // Username: nazeer
// console.log(user1.createId()); // error - cannot access static method

class Teacher extends User{
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const teacher1 = new Teacher('nazeer', 'nazeer@gmail')
// console.log(teacher1.createId()); // error - cannot access static method