//LOGIN SCRIPT


function makeUsers() {
    // TODO 2. Lösche den standard user und Füge deine eigenen User ein:
    const nutzer1 ={
        name: "stefan",
        pw: "asd"
    };
    const nutzer2 ={
        name: "dieter",
        pw: "fgh"
    };
    const nutzer3 ={
        name: "sven",
        pw: "jkl"
    };


    
    var allUsers = [nutzer1, nutzer2, nutzer3];

    
    return allUsers;
    

}


// Die Funktion login wird vom HTML Dokument aus aufgerufen, sobald der login Button gedrückt wird
function login(){
    username = document.getElementsByName("username")[0].value;
    password = document.getElementsByName("password")[0].value;

    //Nachdem username und Passwort ausgelesen werden, wird die validität überprüft. Passt diese, verändern wir den HTML code von "body"
    if (validLogin(username, password)){
        document.getElementById("body").innerHTML = `<h1>Welcome, ${username}!</h1>`;
    } else {
        document.getElementById("error").textContent = "Falscher Name oder falsches Passwort. ";
    }
}

// Die Funktion validLogin wird ein gegebenes username-password paar nach validität überprüfen
// Als Ergebnis muss validLogin einen Boolean zurückgeben!
function validLogin(username, password){
    allUsers = makeUsers();
    // TODO: 3. Programmiere die Funktion validLogin
    for (let i = 0;
        i < allUsers.length; i++) {
            if (allUsers[i].name === username && allUsers[i].pw === password){
               return true;
            }
    }

    return false;
}