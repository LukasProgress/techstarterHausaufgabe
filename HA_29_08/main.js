

//LOGIN SCRIPT


function makeUsers() {
    // TODO 2. Lösche den standard user und Füge deine eigenen User ein:
   
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

    
    
    var allUsers = [user1, user2,user3];


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
    for (let i = 0; i < allUsers.length; i++) { // in dem fall 3
        if (allUsers[i].name === username && allUsers[i].pw === password) {
            return true; // Anmeldedaten stimmen überein
        }
    }
    return false; // Anmeldedaten stimmen NICHT überein