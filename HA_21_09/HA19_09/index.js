import express from "express";

const app = express()
const port = 3000

const url = `http://localhost:${port}`

app.get("/", (req, res) => {
    res.send("Test")

})

app.listen(port, () => {
    console.log(`der server läuft auf ${url}`)
})

app.get("/Lebenslauf", (req, res) => {
    res.send("Das ist mein Lebenslauf")
})

app.get("/greet", (req, res) => {
    res.send("<h1>Hallo und Herzlich Willkommen!</h1>")
})

app.get("/oldhtml", (req, res) => {
    res.sendFile("index.html", {root: "./"})
})

app.get("/cat/:says", (req, res) => {
    const says = req.params.says
    const imageUrl = 'https://cataas.com/cat/says/${says}'
    res.send(imageUrl)
  
})


