const express = require("express");
const bodyParser = require("body-parser");


const port = 3000;
const app = express();

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());



const form = `
<form method="post" action="/login">
    <label for="name">Name:</label>
    <input name="name" type="text"><br>
    <label for="pw">Passwort:</label>
    <input name="pw" type="password">
    <button type="submit">Login</button>
</form>

<button onclick="window.location.href='/register'">Zur Registrierung</button>

<form action="/register" method="post">
    <label for="regName">Name:</label>
    <input type="text" id="regName" name="name" required><br>
    <label for="regPassword">Passwort:</label>
    <input type="password" id="regPassword" name="password" required><br>
    <label for="confirmPassword">Passwort wiederholen:</label>
    <input type="password" id="confirmPassword" name="confirmPassword" required><br>
    <input type="submit" value="Registrieren">
</form>
`;

app.listen(port, () => {
    console.log(`Server läuft auf Port ${port}`);
  });
  
  
  const user = [
      {name: "Lukas", passwort: "123"},
      {name: "Bartek", passwort: "321"},
      {name: "Abi", passwort: "Banane"}
  ]
  
  app.get("/", (req, res) => {
      res.send(form)
  })
  
  app.post("/login", (req, res) => {
      const {name, pw} = req.body
  
      for (let i = 0; i < user.length; i++){
          if (name === user[i].name && pw === user[i].passwort){
              res.send(`Login erfolgreich`)
              return
          } 
      }
  
      res.send(`Login fehlgeschlagen`)
  })
  