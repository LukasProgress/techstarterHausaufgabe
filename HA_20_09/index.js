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
`

const user = [
    {name: "Lukas", passwort: "123"},
    {name: "Bartek", passwort: "321"},
    {name: "Abi", passwort: "Banane"},
    {name:"Anka",passwort:"Hanna"}
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

app.listen(port, () => {
    console.log("server listens on port", port)
})