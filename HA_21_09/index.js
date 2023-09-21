import express from "express"
import bodyParser from "body-parser"
import fs from "fs"

// Booookkksfs

const app = express()
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static("/books")); // makes the file "books" public accesable, aber geht trotzdem net ewrewrewr




// just the list
const books = 
[    
    {id: "1", title: "Dracula", author: "Bram Stocker", source: "Dracula.txt"},
    {id: "1", title: "Beowulf", author: "Lesslie Hall", source: "Beowulf.txt"},
    {id: "3", title: "holmes", author: "Arthur Conan Doyle", source: "holmes.txt"},
    
]

app.get("/", (req, res) => { // lists all up
    const bookList = books.map((book) =>`
    <li>
        <h3>${book.title}</h3>
        <p>Author: ${book.author}</p>
        <a href="/read/${book.source}" target="_blank"><button>Lesen</button></a>
    </li>
    `).join('')
// fügt alle strings together
// booklist ruft mit map alle Bücher auf

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

app.get('/read/:file', (req, res) =>{ ///read/books:file FUNZT nicht sad sad
    const fileName = req.params.file;
    res.sendFile(fileName, { root: './'});
})

app.get('/', (req, res) => {
    res.sendFile('index.html',{ root: './' }); // springt zur Html
  });
  
app.get('/add', (req, res) => {
    res.send(`
    <html>
    <head>
        <title>Buch hinzufügen</title>
    </head>
    <body>
        <h1>Fügen Sie ein neues Buch Hinzu</h1>
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

app.listen(5000, () => {
    console.log("server listens on port", 5000)
})