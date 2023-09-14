//LOGIN SCRIPT


function makeUsers() {
<<<<<<< HEAD
    const employee1 = {
        name: "John",
        pw: "123"
    }

    const employee2 = {
        name: "Peter",
        pw: "456"
    }

    const employee3 = {
        name: "Tom",
        pw: "789"
    }

    var allUsers = [employee1, employee2, employee3];
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
    
>>>>>>> cccc3f6ecc6c5f6371360e7898ed481b7f4ba417

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
function validLogin(name, pw){
    allUsers = makeUsers();
<<<<<<< HEAD

    for (var i = 0; i < allUsers.length; i++) {
        if (allUsers[i].name === name && allUsers[i].pw === pw) {
            return true;
        }
    }
    return false
}

var nameToCheck = "Benutzername";
var pwToCheck = "Passwort";

if (validLogin(nameToCheck, pwdToCheck)) {
    console.log("Anmeldung erfolgreich.");
} else {
    console.log("Anmeldung fehlgeschlagen. Benutzername oder Passwort ist falsch.");
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
>>>>>>> cccc3f6ecc6c5f6371360e7898ed481b7f4ba417
