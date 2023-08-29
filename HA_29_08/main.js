//LOGIN SCRIPT


function makeUsers() {
    // Erstelle 3 Benutzer und füge sie in das Array allUsers ein
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

    // Entferne den Admin-Benutzer mit Passwort "123"
    allUsers = allUsers.filter(user => !(user.name === "admin" && user.pw === "123"));

    return allUsers;
}// TODO 2. Lösche den standard user und Füge deine eigenen User ein:
    const admin = {
        name: "admin",
        pw: "123"
    }
    
    var allUsers = [admin];


    return allUrs;



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