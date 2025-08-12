// ES6 

class User {
    constructor(username, email, password){
        this.username = username
        this.email = email
        this.password = password
    }

    encryptPassword(){
        return `${this.password}a1b2c3`
    }
    changeUsername(){
        return `${this.username.toUpperCase()}`
    }

}

const user1 = new User("Nazeer", "nazeer@google", "1234")
// console.log(user1.encryptPassword()); // 1234a1b2c3
// console.log(user1.changeUsername()); // NAZEER

// behind scene

function Users(username, email, password){
    this.username = username
    this.email = email
    this.password = password
}
Users.prototype.encryptPassword = function(){
    return `${this.password}a1b2c3`
}
Users.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`
}

const tea = new Users("shaik", "shaik@google", "1234")
console.log(tea.encryptPassword()); // 1234a1b2c3
console.log(tea.changeUsername()); // SHAIK

