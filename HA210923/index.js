import express from "express"
import bodyParser from "body-parser"
import fs from 'fs/promises';
import fetch from 'node-fetch'; 


const port = 3000
const app = express()
app.use(bodyParser.urlencoded({ extended: true }))


class book {
    constructor(id, titel, author, source, filename) {
        this.id = id,
        this.titel = titel,
        this.author = author,
        this.source = source
    }
}


const library = []

library.push(new book(library.length +1, "Little Woman", "Luisa May Alcot", "./book1.txt"))
library.push(new book(library.length +1, "The Complete Works of William Shakespeare","William Shakespeare", "./book2.txt"))
library.push(new book(library.length +1, "The Blue Castle", "L. M. Montgomery", "./book3.txt"))
library.push(new book(library.length +1, "The Enchanted April", "Elizabeth Von Arnim", "./book4.txt"));


//console.log(library)

app.get("/", (req, res) => {
    const bookList = library.map((book) =>`
    <li>
        <h3>${book.titel}</h3>
        <p>Author: ${book.author}</p>
        <a href="/read/${book.source}" target="_blank"><button>Lesen</button></a>
    </li>
    `).join('')

const html = `
    <html>
        <head>
            <title>Meine Bibliothek</title>
        </head>
        <body>
            <h1>Meine Bibliothek</h1>
            <ul>${bookList}</ul>
            <br>
            <a href="/add"><button type="button">Buch hinzufügen</button></a>
        </body>
    </html>
`
res.send(html);

});

app.get('/read/:file', (req, res) =>{
    const fileName = req.params.file;
    res.sendFile(fileName, { root: './'});
})


app.get('/add', (req, res) => {
    res.send(`
    <html>
    <head>
        <title>Buch hinzufügen</title>
    </head>
    <body>
        <h1>Neues Buch</h1>
        <form method="post" action="/addBook">
            <label for="name">Titel:</label>
            <input name="name" type="text">
            <label for="author">Author:</label>
            <input name="name" type="text">
            <label for="url">URL:</label>
            <input name="url" type="url">
            <button type="submit">Buch hinzufügen</button>
        </form>
    </body>
    </html>
    `)
})

app.post('/addBook', async (req, res) => {
    const { title, author, url } = req.body

    try {
        const response = await fetch(url);
        const text = await response.text();
        const filename = `./${title}.txt`
        await fs.writeFile(filename, text, 'utf-8');

        library.push({
            id:library.length + 1,
            titel: title,
            author: author,
            source: filename
        });

        await fs.writeFile('./library.json', JSON.stringify(library), 'utf-8');
        
        res.redirect('/');
    } catch (error) {
        res.send('Fehler aufgetreten ' + error.message);
    }
})

console.log(library)

app.listen(port, () => {
    console.log("Server läuft auf Port ", port)
})
