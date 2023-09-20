import express from 'express'
import fetch from 'node-fetch'

const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send(`
    <h1>Hallo Welt!</h1>
    <ul>
      <li><a href="/oldhtml">Alte HTML Seite</a></li>
      <li><a href="/cat/Hello">Katze sagt Hello</a></li>
    </ul>
  `)
})

app.get('/greet', (req, res) => {
  res.send('<h1>Hallo und HErzlich Willkommen!</h1>')
})

app.get('/oldhtml', (req, res) => {
  res.sendFile('/home/rico003/ha_13_09_23/index.html')
});

app.get('/cat/:says', async (req, res) => {
  const { says } = req.params
  try {
    const response = await fetch(`https://cataas.com/cat/says/${says}`)
    const arrayBuffer = await response.arrayBuffer()
    const buffer = Buffer.from(arrayBuffer)
    res.setHeader('Content-Type', 'image/png')
    res.send(buffer)
  } catch (error) {
    res.status(500).send('Es gab einen Fehler beim Abrufen des Katzenbildes.')
  }
})

app.listen(port, () => {
  console.log(`Server läuft auf http://localhost:${port}`)
})
