//LOGIN SCRIPT


function makeUsers() {
 
    
    var allUsers = [admin];
    // Lösche den "admin"
    allUsers = allUsers.filter(user => user.name !== "admin");

    // Füge neue Benutzer hinzu
    const usersToAdd = ["Mathias", "Christoph", "Jonathan", "Bartek"];
    usersToAdd.forEach(user => {
        allUsers.push({
            name: user,
            pw: "123" // Passwort kann an die Bedürfnisse angepasst werden
        });
    });

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
    const allUsers = makeUsers();
    
    for(let i = 0; i < allUsers.length; i++){
        const user = allUsers[i];
        
        if(user.name === username && user.pw === password){
            return true; // Benutzername und Passwort sind gültig
        }
    }
    alert("Ungültige Eingabe")
    return false; // Benutzername und/oder Passwort sind ungültig
}
