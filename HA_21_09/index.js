import express from "express"
import bodyParser from "body-parser"

const port = 3000
const app = express()
app.use(bodyParser.urlencoded({ extended: true }))

const books = [
    {id: "1", title: "Beowulf", author: "Lesslie Hall", source: "Beowulf.txt"},
    {id: "2", title: "Dracula", author: "Bram Stocker", source: "Dracula.txt"},
    {id: "3", title: "Frankenstein", author: "Mary Wollstonecraft Shelley", source: "Frankenstein.txt"},
    {id: "4", title: "Romeo & Julia", author: "William Shakespeare", source: "Romeo_&_Julia.txt"}
]
app.get("/", (req, res) => {
    const bookList = books.map((book) =>`
    <li>
        <h3>${book.title}</h3>
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
        </body>
    </html>
`
res.send(html);

});

app.get('/read/:file', (req, res) =>{
    const fileName = req.params.file;
    res.sendFile(fileName, { root: './'});
})

app.listen(port, () => {
    console.log("server listens on port", port)
})