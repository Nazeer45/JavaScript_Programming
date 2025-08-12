function SetUsername(username){
    this.username = username
    console.log("called");
}

function createUser(username, email, password){
    // SetUsername(username) // this will not work as SetUsername is a function, so once it is called after execution value of this will be lost
    SetUsername.call(this, username) // call method is used to call a function with a reference to a different this keyword to preserve this keyword
    this.email = email
    this.password = password
}

const chai = new createUser('nazeer', 'nazeer@gmail', '1234')
console.log(chai);