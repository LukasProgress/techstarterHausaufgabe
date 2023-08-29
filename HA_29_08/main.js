//LOGIN SCRIPT


function makeUsers() {
    // TODO 2. Lösche den standard user und Füge deine eigenen User ein:
    const admin = {
        name: "ali",
        pw: "123"
    };

    const user2 = {
        name: "dirk",
        pw: "456"
    };

    const user3 = {
        name: "henry",
        pw: "789"
    };

    var allUsers = [ali, dirk, henry];


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
function validLogin(username, password){
    allUsers = makeUsers();
    // TODO: 3. Programmiere die Funktion validLogin
    const users = [
        { username: "ali", password: "123" },
        { username: "dirk", password: "456" },
        { username: "henry", password: "789" }
    ];

    for (const user of users) {
        if (user.username === username && user.password === password) {
            return true; // Valid login
        }
    }

    return false; // Invalid login
}
const inputUsername = "user1";
const inputPassword = "wrongpass";

if (validLogin(inputUsername, inputPassword)) {
    console.log("Login erfolgreich");
} else {
    console.log("Login fehlgeschlagen, prüfe deine Einloggdaten.");
}