//LOGIN SCRIPT


function makeUsers() {
    // TODO 2. Lösche den standard user und Füge deine eigenen User ein:
    const abi = {
        name: "abi",
        pw: "123"
    }
    
    const rico = {
        name: "rico",
        pw: "456"
    }

    const dennis = {
        name: "dennis",
        pw: "789"
    }

    var allUsers = [abi, rico, dennis];


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

    //Nachdem username und Passwort ausgelesen werden, wird die validität überprüft. Passt diese, verändern wir den HTML code von "body"
    if (validLogin(username, password)){
        document.getElementById("body").innerHTML = `<h1>Welcome, ${username}!</h1>`;
    }

    else {
        document.getElementById("body").innerHTML = loginForm; // Zeige das Login-Formular erneut an        
        alert("Password or Username incorrect, please try again!");     }

    return undefined;
}

// Die Funktion validLogin wird ein gegebenes username-password paar nach validität überprüfen
// Als Ergebnis muss validLogin einen Boolean zurückgeben!
function validLogin(username, password){
    allUsers = makeUsers();
    // TODO: 3. Programmiere die Funktion validLogin
    for (let i=0;i<allUsers.length;i++){
        const user = allUsers[i];

    if (user.name === username) {
        if(user.pw === password){
            return true;
        }
    }
}
return false;
}
