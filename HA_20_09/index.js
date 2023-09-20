const express = require("express"); 
const path = require('path');
//import bodyParser from "body-parser"  wieso funktioniert import nicht
const bodyParser = require("body-parser");
const fs = require('fs');

const port = 3000
const app = express()
app.use(bodyParser.urlencoded({ extended: true }))
//hierraus name pw



const log = `
<form method="post" action="/login">
    <label for="name">Name:</label>
    <input name="name" type="text">   
    <label for="pw">Passwort:</label>
    <input name="pw" type="password"> 
    <button type="submit">Login</button>  
    <a href="/Register">Registrieren</a>
</form>
`//nach login klick kommt man zu login


app.get('/Register', (req, res) => {
    res.sendFile('Register.html',{ root: './' }); // springt zur Html
  });

 

const user = [
    {name: "Lukas", passwort: "123"},
    {name: "Bartek", passwort: "321"},
    {name: "Abi", passwort: "Banane"}
]


app.get("/", (req, res) => { // hauptseite
    res.send(log)
})


app.post("/login", (req, res) => {
    const {name, pw} = req.body                 // nur aufrufbar mit den variablen auf

    for (let i = 0; i < user.length; i++){
        if (name === user[i].name && pw === user[i].passwort){
            res.send(`Login erfolgreich. Sie werden weitergeleitet (wohin?)`)
             // res.
            return 0;
        } 
    }
    res.send(`Login fehlgeschlagen`)
}) 

app.get('/register', (req, res) => {
    res.sendFile('Registerhtml.html', { root: './' });  // FUNKTIONIERT NUR wenn es DAS EINZIGE VERZEICHNIS ist, ohne andere we
  });


  app.post('/registration', (req, res) => {
    const { name, passwort, password_confirm } = req.body;
  
    // Überprüfen, ob die Passwörter übereinstimmen
    if (passwort !== password_confirm) {
        res.send(`Registrierung fehlgeschlagen, Passwörter stimmen nicht überein`) // Funktioniert
      return;
    }
  
    // Neuer benutzer
    const newuser = {
      name,
      passwort,
    };
  
    // benutzer anhängen
    user.push(newuser);
  
    // Benutzer erfolgreich registriert?
    res.sendStatus(200);
  });

// Daten in die Datei schreiben Nach register schriebeiben, ansonsten kp was noch
// Liste der Benutzer in eine Datei schreiben

  
const jsonData = JSON.stringify(user); // funktioniert leider nicht ganz, was solls

// JSON-Zeichenfolge in eine Datei schreiben
fs.writeFile('users.json', jsonData, (err) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log('Datei erfolgreich geschrieben');
});
   


app.listen(port, () => {
    console.log("server listens on port", port)
})






console.log(user) // wieso wird nichts angefügt?