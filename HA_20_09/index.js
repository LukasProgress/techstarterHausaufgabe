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
<a href="/register">Register</a>
`

const user = [
    {name: "Lukas", passwort: "123"},
    {name: "Bartek", passwort: "321"},
    {name: "Abi", passwort: "Banane"}
]

app.get("/", (req, res) => {
    res.send(form)
})

const registerForm = `
<form method="post" action="/register">
    <label for="name">Name:</label>
    <input name="name" type="text">
    <label for="pw">Passwort:</label>
    <input name="pw" type="password">
    <label for="pwRepeat">Passwort wiederholen:</label>
    <input name="pwRepeat" type="password">
    <button type="submit">Registrieren</button>
</form>
`;

app.get("/register", (req, res) => {
    res.send(registerForm);
});


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

app.post('/register', (req, res) => {
    const {name, pw, pwRepeat} = req.body;
    
    if(pw !== pwRepeat) {
        res.send('die passwoerter stimmen nicht ueberein');
        return;
    }
    const existingUser = user.find(u => u.name === name);
    if(existingUser) {
        res.send('Benutzername bereits vergeben')
        return;
    }

    user.push({name, passwort: pw});
    res.send('Registrierung erfolgreich!');
})


app.listen(port, () => {
    console.log("server listens on port", port)
})