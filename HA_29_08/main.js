//LOGIN SCRIPT


function makeUsers() {
    // TODO 2. Lösche den standard user und Füge deine eigenen User ein:
    const dennis = {
        name: "dennis",
        pw: "asdf"
    }
    const encrico = {
        name: "enrico",
        pw: "fdsa"
    }
    const abi = {
        name: "abi",
        pw: "hallo"
    }
    var allUsers = [dennis, encrico, abi];


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
    for (let i = 0; i < allUsers.length; i++) {
        const user = allUsers[i];

        if (user.name === username) {
            if(user.pw === password) {
                return true;
            }
        }
    }
    return false;
}
