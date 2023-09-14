//LOGIN SCRIPT


function makeUsers() {
    // TODO 2. Lösche den standard user und Füge deine eigenen User ein:
    const admin = {
        name: "admin",
        pw: "123"
    }
    
    var allUsers = [admin];


    return allUsers;
}


// Die Funktion login wird vom HTML Dokument aus aufgerufen, sobald der login Button gedrückt wird
function login(){
    var loginForm = `
        <input type="text" name="username" value="" placeholder="Username"></input>
        <input type="password" name="password" value="" placeholder="Passwort"></input>
        <button onclick="login()">Login</button>
    `;
    
    username = document.getElementsByName("username")[0].value;
    password = document.getElementsByName("password")[0].value;

    // Nachdem Benutzername und Passwort ausgelesen wurden, wird die Validität überprüft. Passt diese, verändern wir den HTML-Code von "body"
    if (validLogin(username, password)){
        document.getElementById("body").innerHTML = `<h1>Welcome, ${username}!</h1>`;
    } else {
        document.getElementById("body").innerHTML = loginForm; // Zeige das Login-Formular erneut an
        alert("wrong username or password!!"); 
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