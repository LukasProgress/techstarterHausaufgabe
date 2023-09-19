//LOGIN SCRIPT


function makeUsers() {
<<<<<<< HEAD
    // TODO 2. Lösche den standard user und Füge deine eigenen User ein:
    const user1 = {
        name: "Don",
        pw: "123"
    }
    const user2 = {
        name: "Juan",
        pw: "456"
    }
    const user3 = {
        name: "Martinez",
        pw: "789"
    }
    var allUsers = [user1, user2, user3];

=======
 
    
    var allUsers = [admin];
    const user1 = {
        name: "Gagarin",
        pw: "Woschod1"
      };
      const user2 = {
        name: "Tereschkowa",
        pw: "Woschod2"
      };
      const user3 = {
        name: "Leonov",
        pw: "Woschod3"
      };
    
      allUsers.push(user1);
      allUsers.push(user2);
      allUsers.push(user3);
    
>>>>>>> main

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
<<<<<<< HEAD
    // TODO: 3. Programmiere die Funktion validLogin
    for (let i = 0; i < allUsers.length; i++) {
        if (allUsers[i].username === username && allUsers[i].password === password) {
            return true;
        }
    }
    return false;
}
=======
    
  for (let i = 0; i < allUsers.length; i++) {
    
    if (allUsers[i].username === username) {
      
      if (allUsers[i].password === password) {
        // Login ist erfolgreich
        return true;
      }
    }
  }

  // Login ist nicht erfolgreich
  return false;
}
const isLoginValid = validLogin("user1", "123456");
if (!isLoginValid) {
    alert("Benutzername oder Passwort für den Benutzer flasch");
} 
>>>>>>> main
