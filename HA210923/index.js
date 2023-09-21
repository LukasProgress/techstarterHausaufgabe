import express from "express"
import bodyParser from "body-parser"

const port = 3000
const app = express()
app.use(bodyParser.urlencoded({ extended: true }))

app.listen(port, () => {
    console.log("Server läuft auf Port", port)
})