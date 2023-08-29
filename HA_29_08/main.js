//LOGIN SCRIPT


function makeUsers() {}
    // TODO 2. Lösche den standard user und Füge deine eigenen User ein:
    const admin = {
        name: "Jonathan_Epp",
        pw: "12345"
    }
    
    var allUsers = [admin];

    // Weitere Benutzer hinzufügen
    const user1 = {
        name: "Benutzer1",
        pw: "passwort1"
    };
    const user2 = {
        name: "Benutzer2",
        pw: "passwort2"
    };
    const user3 = {
        name: "Benutzer3",
        pw: "passwort3"
    };

    allUsers.push(user1, user2, user3);

    // Admin mit Passwort 123 löschen
    for (var i = 0; i < allUsers.length; i++) {}
        if (allUsers[i].name === "admin" && allUsers[i].pw === "123") {
            allUsers.splice(i, 1);

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
    return true
}