//LOGIN SCRIPT

function makeUsers() {
    // TODO 2. Lösche den standard user und Füge deine eigenen User ein:
    const user0 = {
        name: "user0",
        pw: "123"
    }
    const user1 = {
        name: "user1",
        pw: "345"
    };

    const user2 = {
        name: "user2",
        pw: "567"
    };
    var allUsers = [user0, user1, user2];

    return allUsers;
}

// Die Funktion login wird vom HTML Dokument aus aufgerufen, sobald der login Button gedrückt wird
function login(){
    username = document.getElementsByName("username")[0].value;
    password = document.getElementsByName("password")[0].value;

    // Nachdem username und Passwort ausgelesen werden, wird die Validität überprüft.
    // Passt diese, verändert es den HTML-Code von "body"
    if (validLogin(username, password)){
        document.getElementById("body").innerHTML = `<h1>Welcome, ${username}!</h1>`;
    } else {
        alert("Invalid username or password");
    }
    return undefined;
}

// Die Funktion validLogin wird ein gegebenes username-password Paar nach Validität überprüfen
// Als Ergebnis muss validLogin einen Boolean zurückgeben!
function validLogin(username, password){
    allUsers = makeUsers();
    
    // Durchlaufe das allUsers-Array, um nach übereinstimmenden Anmeldeinformationen zu suchen
    for (let i = 0; i < allUsers.length; i++) {
        if (allUsers[i].name === username && allUsers[i].pw === password) {
            return true; // Rückgabe true, wenn gültige Anmeldeinformationen gefunden wurden
        }
    }
    
    return false; // Rückgabe false, wenn keine gültigen Anmeldeinformationen gefunden wurden
}
