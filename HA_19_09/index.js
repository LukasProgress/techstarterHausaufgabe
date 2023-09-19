const express = require("express"); 
const path = require('path');
//const fs = require("fs");

const app = express(); // lädt express funktionen auf app

app.set("view engine", "ejs");
app.set("views", "./views");
//app.set("oldhtml", "./oldhtml"); -->VERSUCH

app.use(express.static("./public")); // makes the file "public" accecable



// Route "/"
// startseite
app.get("/", (req, res) => {  // WIESO FUNKTIONIERT STYLE.css NICHT ?!?
  
  const html = `
    <html>
      <head>
      <title>Startseite für Die Cat HA</title>
        <link rel="stylesheet" type="text/css" href="/style.css" />  
      </head>
      <body>
        <h1>Startseite</h1>
        <p>2 Hyperlinks:</p>
        <a href="/cat/:says">Cat :says</a>
        <a href="/oldhtml">Zur old.html</a>
        <h5> Hausaufgabe am 19.09 By Timour Miagol </h5>
      </body>
    </html>
  `;

  // Sende die HTML-Antwort
  res.send(html);
});


  // Kopiere die HTML-Datei in den Projektordner

  
// Route /oldhtml

app.get('/oldhtml', (req, res) => {
  res.sendFile('old.html', { root: './' });
});

app.get('/cat/:says', (req, res) => {
  const { says } = req.params;
  const imageUrl = `https://cataas.com/cat/says/${says}`;
  res.send(`<img src="${imageUrl}" alt="Cat" />`);
});

   

app.listen(5000, () => {
    console.log("App wurde gestartet auf localhost:5000");})
    