//Kort Andreas Hausaufgaben 29.08.2023

//LOGIN SCRIPT 

let loginAttempts = 0; // Maximal 5 Versuche
const originalLoginForm = document.getElementById("body").innerHTML;

// Erstelle 3 Benutzer und füge sie in das Array allUsers ein!
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

    let allUsers = [user1, user2, user3];

    return allUsers;
}

// Die Funktion login wird vom HTML Dokument aus aufgerufen, sobald der Login-Button gedrückt wird
function login(){
    const username = document.getElementsByName("username")[0].value;
    const password = document.getElementsByName("password")[0].value;

    if (validLogin(username, password)){
        document.getElementById("body").innerHTML = `<h1>Welcome, ${username}!</h1>`;
    } else {
        loginAttempts++; // Erhöhe den Zähler für Login-Versuche
        if (loginAttempts < 5) {
            document.getElementById("body").innerHTML = `<p>Ungültige Anmeldedaten. Du hast noch ${5 - loginAttempts} Versuch(e) übrig.</p>`;
        } else {
            document.getElementById("body").innerHTML = `<p>Du hast alle Versuche aufgebraucht.</p>`;
            document.querySelector("button").disabled = true; // Deaktiviere den Login-Button nach fünf fehlgeschlagenen Versuchen
            setTimeout(() => {
                // Nach einer Verzögerung von 2 Sekunden wird die Seite zurückgesetzt
                document.getElementById("body").innerHTML = originalLoginForm;
                document.querySelector("button").disabled = false;
                loginAttempts = 0; // Zurücksetzen der Login-Versuche
            }, 4000); // 4000 Millisekunden (4 Sekunden) Verzögerung
        }
    }
}

// Die Funktion validLogin wird ein gegebenes Benutzername-Passwort-Paar nach Validität überprüfen
// Als Ergebnis muss validLogin einen Boolean zurückgeben!
function validLogin(username, password){
    let allUsers = makeUsers(); // Verwende let, um die Variable zu deklarieren

    // Hier wird der Admin-Benutzer mit Passwort "123" entfernt
    allUsers = allUsers.filter(user => !(user.name === "admin" && user.pw === "123"));

    // Jetzt können wir die Validität überprüfen
    const user = allUsers.find(user => user.name === username && user.pw === password);
    return !!user; // Gibt true zurück, wenn ein übereinstimmender Benutzer gefunden wurde, andernfalls false
}
// Qwellen 
// https://developer.mozilla.org/en-US
// https://www.w3schools.com/
// https://stackoverflow.com/
// https://github.com/