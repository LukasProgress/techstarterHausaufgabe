import express from "express";
import axios from "axios";
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Das ist meine erste Website!');
  });

app.get('/greeting', (req, res) => {
    res.send('<h1>Hallo und Herzlich Willkommen</h1>');
});  

app.get('/oldhtml', (req, res) =>{
    res.sendFile('index.html', { root: "./"});
});

app.get('/cat/:says', async (req, res) => {
    try {
        const { says } = req.params;
        const imageUrl = 'https://cataas.com/cat/says/${says}';

        const response = await axios.get(imageUrl, { responseType: 'arraybuffer'});

        res.setHeader('Content-Type', 'image/jpeg');
        res.send(response.data);
    } catch (error){
        res.status(500).send('Ein Fehler ist aufgetreten');
    }
});

  app.listen(port, function(){
    console.log(`Der Server ist gestartet und läuft auf http://localhost:${port}`)
  });