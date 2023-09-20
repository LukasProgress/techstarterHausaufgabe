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
    <a href="/register"><button type="button">Neuen Benutzer anlegen</button></a>
</form>
`;
app.get("/register", (req, res) => {
    res.send(`
        <html>
        <head>
            <title>Registrierung</title>
        </head>
        <body>
            <h1>Registrierung</h1>
            <form method="post" action="/register">
                <label for="name">Name:</label>
                <input name="name" type="text">
                <label for="pw">Passwort:</label>
                <input name="pw" type="password">
                <label for="pwRepeat">Passwort wiederholen:</label>
                <input name="pwRepeat" type="password">
                <button type="submit">Registrieren</button>
            </form>
        </body>
        </html>
    `);
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

app.post("/register", (req, res) =>{
    const { name, pw, pwRepeat } = req.body;

    if(pw !== pwRepeat) {
        res.send('Passwort und Passwortwiederholung stimmen nicht überein.');
        return
    }

user.push({name: name, passwort: pw});
res.send('Registrierung erfolgreich');

})

app.listen(port, () => {
    console.log("server listens on port", port)
})