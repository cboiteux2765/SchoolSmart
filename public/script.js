let numPoints = 0;
const subjects = ["Math", "Science", "Social Science", "English", "Languages", "Technology", "Arts", "Business", "Test Prep"];
let studyGroupName = document.getElementById('createstudygroup').value;
let you = new User("John Doe", "123", "johndoe@gmail.com");

function createStudyGroup() {
    if (numPoints < 3) {
        // TODO
    }
}

function login() {
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;

    if (users.has(username) && users.get(username) === password) {
        you = new User(username, password);
    }
    
}

function forgotPassword() {
    let input = document.getElementById('input_email_forgot_password');
    if (input.value == you.email) {
        window.open(`mailto:${you.email}`);
    }
}

class User {
    static userId;
    #password;
    static maxGroupsOwned = 5;
    static maxGroupsJoined = 5;

    constructor(username, password, email) {
        this.username = username;
        this.#password = password;
        this.email = email;
        this.numPoints = 0;
        this.groupsJoined = [];
        this.groupsOwned = [];
        this.userId = 0;
        userId++;
    }

    

    set #changePassword(newPassword) {
        this.#password = newPassword;
    }

    set changeUsername(newUsername) {
        this.username = newUsername;
    }

}

class StudyGroup {

    constructor(owner, subject, visibility, numMembers = 3) {
        this.owner = owner; // type User
        this.subject = subject;
        this.visibility = visibility;
        this.numMembers = numMembers;
        this.productivity = 0;
        this.dateCreated = new Date().getDate;
    }


    set transferOwnership(newOwner) {
        this.owner = newOwner;
    }

    // TODO
    // deleteGroup() {
    
    // }


}


