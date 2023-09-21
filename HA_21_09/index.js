import express  from "express"
import bodyParser from "body-parser"

const app = express()
app.use(bodyParser.urlencoded({ extended: true }))


let books = [
    { id: 1, titel: "Dracula", author: "Gutenberg", source: "./dracula.txt" },
    { id: 2, titel: "A Room with a View", author: "Gutenberg", source: "./RoomView.txt" }
    
]




app.get("/", (req, res) => {
    let html = '<h1>Meine Bibliothek</h1><ul>';
    books.map(book => {
        html += `<li>${book.titel} - ${book.author} 
        <a href="/lesen/${book.source}"><button>lesen</button></a></li>`
    })
    html += '</ul>'
    res.send(html)
})
app.get('/lesen/:file', (req, res) => {
    const fileName = req.params.file
    res.sendFile(fileName, { root: "./" })
})



app.listen(3000, () => {
    console.log("server listens on port 3000")
})