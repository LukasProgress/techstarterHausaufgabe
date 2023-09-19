import express from "express"
import axios from "axios"

const app = express()

const port = 3000

app.get("/", (req, res) => {
    res.send("Hallo")
});

app.get("/greet", (req, res) => {
    res.send("<h1>Hallo und herzlich willkommen!</h1>")
});

app.get("/oldHTML", (req, res) => {
    res.sendFile({root: "./index.html"}) 
    res.send("File transferred")
});

app.get('/cat/:says', async (req, res) => {
    const says = req.params.says;
    const url = `https://cataas.com/cat/says/${says}`;
    const response = await axios.get(url, { responseType: 'arraybuffer' });
    res.set('Content-Type', 'image/jpeg');
    res.send(response.data);
});

app.listen(port, () => {
    console.log(`Server läuft auf Port: ${port}`)
});

