import express from "express"
import bodyParser from "body-parser"
import nodemon from "nodemon"

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
    <button type="button" onclick="window.location.href='/register'"> Hier geht es zum Regi</button>
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
app.get("/register", (req, res) => {
    const regiForm = `
    <form method="post" action="/register">
        <label for="name">Name:</label>
        <input name="name" type="text" required>
        <label for="pw">Passwort:</label>
        <input name="pw" type="password" required>
        <label for="pw-again">Passwort wiederholen:</label>
        <input name="pw-again" type="password" required>
        

    </form>
        <button type="submit">Registrieren</button>
    `
    res.send(regiForm)
})
app.post("/register", (req, res) => {
    const {name, pw} = req.body

    user.push({name, passwort: pw})
    res.send(`Erfolgrreich Benutzer: ${name} registriert`)
})


app.listen(port, () => {
    console.log("server listens on port", port)
})