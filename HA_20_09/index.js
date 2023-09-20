// Importieren der notwendigen Module
import express from "express"
import bodyParser from "body-parser"
import fs from "fs"
import bcrypt from "bcrypt"

// Initialisieren der Express-App und Konfigurieren des Body-Parsers
const app = express()
app.use(bodyParser.urlencoded({ extended: true }))

// Port-Definition für den Server
const port = 3000

// HTML-Formulare als Strings
const form = `
<form method="post" action="/login">
    <label for="name">Name:</label>
    <input name="name" type="text">
    <label for="pw">Passwort:</label>
    <input name="pw" type="password">
    <button type="submit">Login</button>
</form>
<a href="/register"><button type="button">Registrieren</button></a>
`

const formRegistration = `
<form method="post" action="/register">
    <label for="name">Name:</label>
    <input name="name" type="text">
    <label for="pw">Passwort:</label>
    <input name="pw" type="password">
    <label for="pww">Passwort wiederholen:</label>
    <input name="pww" type="password">
    <button type="submit">Registrieren</button>
</form>
`

// Variable für Benutzerdaten
let users

// Anzahl der Runden für bcrypt Salting
const saltRounds = 10

// Laden der Benutzerdaten beim Start des Servers
fs.readFile("users.json", "utf8", (err, data) => {
  if (err) {
    console.error("Fehler beim Lesen der Datei:", err)
    users = [] // Leeres Array als Fallback
  } else {
    if (data) {
      try {
        users = JSON.parse(data)
      } catch (err) {
        console.error("Ungültiges JSON-Format:", err)
        users = [] // Leeres Array als Fallback
      }
    } else {
      users = [] // Leeres Array als Fallback
    }
  }
})

// Route für die Homepage und Anzeigen der Login-Form
app.get("/", (req, res) => {
  res.send(form)
})

// Route für die Registrationform
app.get("/register", (req, res) => {
    res.send(formRegistration)
  })

// Login-Route
app.post("/login", async (req, res) => {
  const { name, pw } = req.body

  for (const existingUser of users) {
    if (existingUser.name === name) {
      const match = await bcrypt.compare(pw, existingUser.passwort)
      if (match) {
        res.send("Login erfolgreich")
        return
      }
    }
  }

  res.send("Login fehlgeschlagen")
})

// Registrierungs-Route
app.post("/register", async (req, res) => {
  const { name, pw, pww } = req.body

  if (pw !== pww) {
    res.send("Die Passwörter stimmen nicht überein")
    return
  }

  for (const existingUser of users) {
    if (existingUser.name === name) {
      res.send("Dieser Benutzername ist bereits vergeben")
      return
    }
  }

  // Hashen des Passworts
  const hashedPassword = await bcrypt.hash(pw, saltRounds)

  const newUser = { name, passwort: hashedPassword }
  users.push(newUser)

  // Speichern der aktualisierten Benutzerliste
  fs.writeFile("users.json", JSON.stringify(users), err => {
    if (err) {
      console.error("Fehler beim Speichern der Datei:", err)
      res.send("Registrierung fehlgeschlagen")
    } else {
      res.send("Registrierung erfolgreich")
    }
  })
})

// Starten des Servers
app.listen(port, () => {
  console.log("Server listens on port", port)
})
