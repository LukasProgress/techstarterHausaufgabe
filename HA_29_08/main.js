//LOGIN SCRIPT

// TODO 2. Lösche den standard user und Füge deine eigenen User ein:
function makeUsers() {
    // eigene Benutzer
    const user1 = {
        name: "user1",
        pw: "pass1"
    };

    const user2 = {
        name: "user2",
        pw: "pass2"
    };

    const user3 = {
        name: "user3",
        pw: "pass3"
    };

    const user4 = {
        name: "user4",
        pw: "pass4"
    };

    // alle Benutzer im Array
    const allUsers = [user1, user2, user3, user4];
}

// LOGIN SCRIPT

// TODO: 2. Lösche den standard user und Füge deine eigenen User ein:
function makeUsers() {
    const admin = {
        name: "admin",
        pw: "123"
    };
    
    const user1 = {
        name: "user1",
        pw: "pass1"
    };

    const user2 = {
        name: "user2",
        pw: "pass2"
    };

    // Füge weitere Benutzer hinzu, falls nötig

    const allUsers = [admin, user1, user2]; // Füge die neuen Benutzer hinzu

    return allUsers;
}

// TODO: 3. Programmiere die Funktion validLogin
// Die Funktion validLogin wird ein gegebenes username-password Paar auf Validität überprüfen
// Als Ergebnis muss validLogin einen Boolean zurückgeben!
function validLogin(username, password) {
    console.log("Verifiziere:", username, password);
    const allUsers = makeUsers();
    
    for (let i = 0; i < allUsers.length; i++) {
        const user = allUsers[i];
        console.log("Check:", user.name, user.pw);
    
        if (user.name === username && user.pw === password) {
            console.log("Login OK");
            return true; // Gültige Anmeldedaten
        }
    }
    
    console.log("Login nicht ok");
    return false; // Ungültige Anmeldedaten
}

// Die Funktion login wird vom HTML Dokument aus aufgerufen, sobald der Login-Button gedrückt wird
function login() {
    username = document.getElementsByName("username")[0].value;
    password = document.getElementsByName("password")[0].value;
    
    console.log("Username:", username);
    console.log("Password:", password);

    if (validLogin(username, password)) {
        console.log("Login OK");
        document.getElementById("body").innerHTML = `<h1>Willkommen, ${username} ! </h1>`;
    } else {
        console.log("Login nicht ok");
    }
    return undefined;
}

// Die Funktion validLogin wird ein gegebenes username-password paar nach Validität überprüfen
// Als Ergebnis muss validLogin einen Boolean zurückgeben!
function validLogin(username, password){
    allUsers = makeUsers();
    // TODO: 3. Programmiere die Funktion validLogin
    return true; // Hier sollte die Validitätsprüfung implementiert werden
}