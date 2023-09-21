import express from "express"
import bodyParser from "body-parser"

const port = 3000
const app = express()
app.use(bodyParser.urlencoded({ extended: true }))


class book {
    constructor(id, titel, author, source, filename) {
        this.id = id,
        this.titel = titel,
        this.author = author,
        this.source = source,
        this.filename = filename;
    }
}


const library = []

library.push(new book(library.length +1, "Little Woman", "Luisa May Alcot", "./book1.txt", "book1.txt"))
library.push(new book(library.length +1, "The Complete Works of William Shakespeare","William Shakespeare", "./book2.txt", "book2.txt"))
library.push(new book(library.length +1, "The Blue Castle", "L. M. Montgomery", "./book3.txt", "book3.txt"))
library.push(new book(library.length +1, "The Enchanted April", "Elizabeth Von Arnim", "./book4.txt", "book4.txt"));


console.log(library)

let form = '<h1> Meine Bibliothek </h1> <body><ul>'
    for (let book of library) {
        form += `<li>${book.titel} by ${book.author} <button id="readButton" type="submit">Lesen</button></li>
        <br>
        <script type="text/javascript">document.getElementById("readButton").onclick = function() {
            location.href = "http://localhost:3000/read/${book.filename}";
        }
        </script>`
    }
    form += '</ul></body>';


app.get("/", (req, res) => {
    
    res.send(form)
})

app.get(`/read/:${library.book.filename}`, (req, res) => {
    res.sendFile(library.book.filename, {root: "./"})
})


app.listen(port, () => {
    console.log("Server läuft auf Port", port)
})
