const fs = require('fs')

let users = [];
let username = document.getElementById('input_username');
let password = document.getElementById('input_password');

class User {
    constructor(username, password) {
        this.username = username;
        this.password = password;
    }

    username() {
        return this.username;
    }

    password() {
        return this.password;
    }
}

function addStudent(username, password) {
    let newUser = new User(username, password);
    users.push(newUser);
    fs.writeFileSync('usernames.txt', username);
    fs.writeFileSync('passwords.txt', password);
}
