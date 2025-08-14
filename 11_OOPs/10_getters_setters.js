class User {
    constructor(email, password) {
        this.email = email
        this.password = password
    }

    // getters - name of the method should be same as the property and it should return the value
    get email(){
        return this._email;
    }

    // setters - if getter is used then setter will also be used
    set email(val){
        this._email = val;
    }
    get password(){
        return this._password.toUpperCase();
    }

    set password(val){
        this._password = val;
    }
}

const nazeer = new User('nazeer@gmail', 'abc')
console.log(nazeer.email); // nazeer@gmail
console.log(nazeer.password); // ABC