const User = {
    _email: 'nazeer@gmail.com',
    _password: 'abcd',

    get email(){
        return this._email.toUpperCase()
    },
    set email(value){
        this._email = value
    }
}

const tea = Object.create(User)
console.log(tea.email); // NAZEER@gmail.com