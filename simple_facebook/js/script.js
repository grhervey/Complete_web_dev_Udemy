var database = [
    {
        username: 'Graham',
        password: 'secret',
    }
];

var newsFeed = [
    {
        username: 'Bobby',
        timeline: "So tired from all that learning",
    },
    {
        username: 'Sally',
        timeline: "javascript is really cool!"
    },
];

var userNamePrompt = prompt("what's your username?");
var passwordPrompt = prompt("what's your password?");

function isUserValid(username, password) {
    for (var i=0; i< database.length(); i++) {
        if( username === database[0].username &&
            password === database[0].password) {
            return true;
        }
    }
    return false;
}

function signIn(username, password){
    if(isUserValid(username, password)) {
        console.log(newsfeed);
    } else {
        alert("Sorry, wrong username and password");
    }

}

signIn(userNamePrompt, passwordPrompt);
