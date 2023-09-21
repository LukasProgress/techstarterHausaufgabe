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
<a href="/register"><button type="button">Registrieren</button></a>
`

const form2 =`
<form method="post" action="/register">
    <label for="name">Name:</label>
    <input name="name" type="text">
    <label for="pw">Passwort:</label>
    <input name="pw" type="password">
    <label for="pw2" >Passwort wiederholen:</label>
    <input name="pw2" type="password">
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

app.get("/register", (req, res) => {
    res.send(form2)
})

app.post("/register", (req, res) => {
    const {name, pw, pw2} = req.body

    if (pw !== pw2) {
        res.send("Sie müssen zwei mal das gleiche Passwort eingeben")
        return
    }
    
    const newUser = {name, passwort: pw}
    user.push(newUser)

    res.send("Neuer Benutzer angelegt!")
    

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


    
    
/* Konsolenausgabe: Uncaught (in promise) Error: Illegal argument undefined
    at e.exports (content.js:33:95534)
    at content.js:73:1477043
    at p (content.js:73:185751)
    at Generator._invoke (content.js:73:185504)
    at Generator.next (content.js:73:186114)
    at r (content.js:73:192157)
    at s (content.js:73:192360)
*/
})

app.listen(port, () => {
    console.log("server listens on port", port)
})