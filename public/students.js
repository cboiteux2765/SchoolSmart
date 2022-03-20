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
    sort();
}

function sort() {
    for (let i = 0; i < users.length()-1; i++) {
        for (let j = i+1; j < users.length(); j++) {
            if (users[i].compareTo(users[j]) > 0) {
                let temp = users[i];
                users[i] = users[j];
                users[j] = temp;
            }
        }
    }
}

function searchStudent(username, password) {
    for (let i = 0; i < users.length(); i++) {
        if (users[i].username() === username && users[i].password() == password) {
            return users[i];
        }
    }
}

// function generateUsers() {
//     while (fs.readFileSync('usernames.txt') != null) {
//         let i = fs.readFileSync('')
//     }
// }
