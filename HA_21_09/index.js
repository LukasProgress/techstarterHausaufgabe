import express  from "express"
import bodyParser from "body-parser"
import * as fs from "fs"


const app = express()
app.use(bodyParser.urlencoded({ extended: true }))


let books = [
    { id: 1, titel: "Dracula", author: "Gutenberg", source: "./dracula.txt" },
    { id: 2, titel: "A Room with a View", author: "Gutenberg", source: "./RoomView.txt" }
    
]




app.get("/", (req, res) => {
    try {
        books = JSON.parse(fs.readFileSync('save.json')) 
    }
    catch(err) {
    console.log("Keine JSON Datei gefunden:", err)
    }

    let html = '<h1>Meine Bibliothek</h1><ul>';
    books.map(book => {
        html += `<li>${book.titel} - ${book.author} 
        <a href="/lesen/${book.source}"><button>lesen</button></a></li>`
    })
    html += `
    <form action="/add" method="get">
        <button type="submit">Buch hinzufügen</button>
    </form>
    `
    html += '</ul>'

    res.send(html)
})


app.get('/lesen/:file', (req, res) => {
    const fileName = req.params.file
    res.sendFile(fileName, { root: "./" })
})

app.get('/add', (req, res) => {
    const neuesBuchForm = `
    <form method="post" action="/add">
        <label for="titel">Titel:</label>
        <input name="titel" type="text" required>
        <label for="author">author:</label>
        <input name="author" type="text" required>
        <label for="URL">URL:</label>
        <input name="URL" type="URL" required>
        <button type="submit">hinzufügen</button>
        
        <button type="button" onclick='window.location.href="/"'>zu den Büchern</button>

    </form>
    `

    
        


    res.send(neuesBuchForm)
})

app.post(`/add`, (req, res) => {
    const { titel, author, URL } = req.body
    const neuesBuch = { id: books.length +1, titel, author, URL}
    console.log(neuesBuch)
    books.push(neuesBuch)
    save()
    res.send(`Buch hinzugefügt: ${titel}`)
})

function save() {
    const jsondata = JSON.stringify(books)
    console.log(jsondata)
    fs.writeFileSync('save.json', jsondata) 
}


app.listen(3000, () => {
    console.log("server listens on port 3000")
})