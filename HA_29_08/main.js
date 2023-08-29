//LOGIN SCRIPT

// Erstelle 3 Benutzer und füge sie in das Array allUsers ein
function makeUsers() {
    const user1 = {
        name: "Nummer1",
        pw: "12345"
    };

    const user2 = {
        name: "Nummer2",
        pw: "12345"
    };

    const user3 = {
        name: "Nummer3",
        pw: "12345"
    };

    var allUsers = [user1, user2, user3];

    return allUsers;
}

// Die Funktion login wird vom HTML Dokument aus aufgerufen, sobald der Login-Button gedrückt wird
function login(){
    username = document.getElementsByName("username")[0].value;
    password = document.getElementsByName("password")[0].value;

    // Nachdem Benutzername und Passwort ausgelesen werden, wird die Validität überprüft. Passt diese, verändern wir den HTML-Code von "body"
    if (validLogin(username, password)){
        document.getElementById("body").innerHTML = `<h1>Welcome, ${username}!</h1>`;
    }
    return undefined;
}

// Die Funktion validLogin wird ein gegebenes Benutzername-Passwort-Paar nach Validität überprüfen
// Als Ergebnis muss validLogin einen Boolean zurückgeben!
function validLogin(username, password){
    const allUsers = makeUsers();
    
    // Hier wird der Admin-Benutzer mit Passwort "123" entfernt
    allUsers = allUsers.filter(user => !(user.name === "admin" && user.pw === "123"));

    // Jetzt können wir die Validität überprüfen
    const user = allUsers.find(user => user.name === username && user.pw === password);
    return !!user; // Gibt true zurück, wenn ein übereinstimmender Benutzer gefunden wurde, andernfalls false
}
