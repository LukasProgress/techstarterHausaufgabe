//LOGIN SCRIPT


function makeUsers() {
    // TODO 2. Lösche den standard user und Füge deine eigenen User ein:
    const admin = {
        name: "admin",
        pw: "123"
    }
    
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
   
    for (var i = 0; i < allUsers.length; i++) {
        const user = allUsers[1];
        
        if (allUsers[i].name === username && allUsers[i].pw === password) {
            return true;
        }
    }
    alert("Ungültige Kombination von Benutzename und Passwort")
    return false;
}