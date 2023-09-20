import express from "express";
import bodyParser from "body-parser";
import fs from "fs"; // Importiere fs-Modul

const port = 3000;
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

// Lade Benutzerdaten aus einer Datei beim Start des Servers
let user = loadUsers();

const form = `
<form method="post" action="/login">
    <label for="name">Name:</label>
    <input name="name" type="text">
    <label for="pw">Passwort:</label>
    <input name="pw" type="password">
    <button type="submit">Login</button>
</form>
<br>
<a href="/register">Registrieren</a> <!-- Hinzugefügter Link zur Registrierungsseite -->
`;

// Funktion zum Laden der Benutzerdaten aus der Datei
function loadUsers() {
  try {
    const data = fs.readFileSync("users.json", "utf-8");
    return JSON.parse(data);
  } catch (error) {
    return [];
  }
}

// Funktion zum Speichern der Benutzerdaten in die Datei
function saveUsers() {
  fs.writeFileSync("users.json", JSON.stringify(user, null, 2), "utf-8");
}

app.get("/", (req, res) => {
  res.send(form);
});

app.get('/register', (req, res) => {
  const registrationForm = `
    <form method="post" action="/register">
        <label for="name">Name:</label>
        <input name="name" type="text">
        <label for="password">Passwort:</label>
        <input name="password" type="password">
        <label for="confirmPassword">Passwort wiederholen:</label>
        <input name="confirmPassword" type="password">
        <button type="submit">Registrieren</button>
    </form>
  `;
  res.send(registrationForm);
});

app.post('/register', (req, res) => {
  const { name, password, confirmPassword } = req.body;

  if (password !== confirmPassword) {
    res.send('Passwörter stimmen nicht überein. Bitte versuchen Sie es erneut.');
  } else {
    // Füge neuen Benutzer zur Liste hinzu
    user.push({ name, passwort: password });
    saveUsers(); // Speichere Benutzerdaten in die Datei
    res.send('Registrierung erfolgreich! Sie können sich jetzt anmelden.');
  }
}); 

app.post("/login", (req, res) => {
  const { name, pw } = req.body;

  for (let i = 0; i < user.length; i++) {
    if (name === user[i].name && pw === user[i].passwort) {
      res.send(`Login erfolgreich`);
      return;
    }
  }

  res.send(`Login fehlgeschlagen`);
});

app.listen(port, () => {
  console.log("Server listens on port", port);
});