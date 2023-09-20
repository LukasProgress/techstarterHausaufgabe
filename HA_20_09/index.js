import express from "express"
import bodyParser from "body-parser"

const port = 3000
const app = express()
app.use(bodyParser.urlencoded({ extended: true }))

const form = `
<form method="post" action="/login">
    <label for="name">Name:</label>
    <input name="name" type="text">
    <label for="pw">Passwort:</label>
    <input name="pw" type="password">
    <button type="submit">Login</button>
</form>
<br>
<a href="/register">Registrieren</a> <!-- Button zur Registrierung hinzufügen -->
`

const registerForm = ` <!-- Neues Registrierungsformular -->
<form method="post" action="/do-register">
    <label for="name">Name:</label>
    <input name="name" type="text">
    <label for="pw">Passwort:</label>
    <input name="pw" type="password">
    <label for="pw-repeat">Passwort wiederholen:</label>
    <input name="pw-repeat" type="password">
    <button type="submit">Registrieren</button>
</form>
`

const user = [
    {name: "Lukas", passwort: "123"},
    {name: "Bartek", passwort: "321"},
    {name: "Abi", passwort: "Banane"}
]

app.get("/", (req, res) => {
    res.send(form)
})

app.get("/register", (req, res) => {  // Route für die Registrierung hinzufügen
    res.send(registerForm)
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

app.post("/do-register", (req, res) => {  // Route für die Verarbeitung der Registrierungsdaten
    const {name, pw, 'pw-repeat': pwRepeat} = req.body
    if (user.find(u => u.name === name)) {
        res.send("Benutzername bereits vergeben!")
        return
    }
    if (pw !== pwRepeat) {
        res.send("Passwörter stimmen nicht überein!")
        return
    }
    user.push({name, passwort: pw})
    res.send("Registrierung erfolgreich!")
})

app.listen(port, () => {
    console.log("server listens on port", port)
})
