//LOGIN SCRIPT


function makeUsers() {
    const employee1 = {
        name: "John",
        pw: "123"
    }

    const employee2 = {
        name: "Peter",
        pw: "456"
    }

    const employee3 = {
        name: "Tom",
        pw: "789"
    }

    var allUsers = [employee1, employee2, employee3];

    return allUsers;
}


// Die Funktion login wird vom HTML Dokument aus aufgerufen, sobald der login Button gedrückt wird
function login(){
    username = document.getElementsByName("username")[0].value;
    password = document.getElementsByName("password")[0].value;

    //Nachdem username und Passwort ausgelesen werden, wird die validität überprüft. Passt diese, verändern wir den HTML code von "body"
    if (validLogin(username, password)){
        document.getElementById("body").innerHTML = `<h1>Welcome, ${username}!</h1>`;
    }
    return undefined;
}

// Die Funktion validLogin wird ein gegebenes username-password paar nach validität überprüfen
// Als Ergebnis muss validLogin einen Boolean zurückgeben!
function validLogin(name, pw){
    allUsers = makeUsers();

    for (var i = 0; i < allUsers.length; i++) {
        if (allUsers[i].name === name && allUsers[i].pw === pw) {
            return true;
        }
    }
    return false
}

var nameToCheck = "Benutzername";
var pwToCheck = "Passwort";

if (validLogin(nameToCheck, pwdToCheck)) {
    console.log("Anmeldung erfolgreich.");
} else {
    console.log("Anmeldung fehlgeschlagen. Benutzername oder Passwort ist falsch.");
}

