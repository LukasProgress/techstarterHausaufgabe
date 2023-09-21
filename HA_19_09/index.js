//  Express.js importieren
const express = require('express');

//  Einen Port zwischen 3000 und 8000 festlegen
const port = 3000;

//  Eine Express-Anwendung erstellen
const app = express();

//  Route für den Wurzelpfad ("/") definieren
app.get('/', (req, res) => {
    res.send('Grüß dich Lukas Probst von techstarter.de');
});

//  Route für "/greet" hinzufügen zum aufrufen http://localhost:3000/
app.get('/greet', (req, res) => {
    res.send('<h1>Wilkommen auf der Seute</h1>');
});

//  Route für "/oldhtml" hinzufügen zum aufrufen http://localhost:3000/oldhtml
app.get('/oldhtml', (req, res) => {
    res.sendFile('old.html', { root: './' });
});

//  Route für "/cat/:says" hinzufügen zum aufrufen http://localhost:3000/greet
app.get('/cat/:says', (req, res) => {
    const text = req.params.says;
    const catImageUrl = `https://cataas.com/cat/says/${text}`;
    res.send(`<img src="${catImageUrl}" alt="Cat"/>`);
});

//  Den Express-Server auf dem ausgewählten Port starten
app.listen(port, () => {
    console.log(`Der Server ist gestartet und hört auf Port ${port}`);
});
