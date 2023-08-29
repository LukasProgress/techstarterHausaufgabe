//LOGIN SCRIPT


function makeUsers() {
    // TODO 2. Lösche den standard user und Füge deine eigenen User ein:
    //Creating 3 new random users 
    const user1 = {
        name: "Tommy",
        pw: "password777"
    };

    const user2 = {
        name: "Lucas",
        pw: "password505"
    };

    const user3 = {
        name: "John",
        pw: "password1337"
    };

    //Adding all 3 new users to the allUsers array    
    var allUsers = [user1, user2, user3];
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
function validLogin(username, password) {
    const allUsers = makeUsers(); 
    
    // Filter out users with corresponding usernames
    const filteredUsers = allUsers.filter(user => user.name === username);
    
    // Check if any of the filtered users have matching passwords
    return filteredUsers.some(user => user.pw === password);
    }

    //Looping through allUsers array to find a matching user
    for (let i = 0; i < allUsers.length; i++){
        const user=allUsers[i];
        if (user.name === username && user.pw === password)
        return true;
    }
