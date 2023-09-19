const express = require('express')
const axios = require('axios');

const app = express();

app.get('/greet', (req, res) => {
    res.send("Hallo und Herzlich Willkommen!")
})

app.get('/oldhtml', (req, res) => {
    res.sendFile('old.html', {root: './'})
})

app.get('/cat/:says', async (req, res) => {
    const { says } = req.params;

    try {
        // Get the image from the external service
        const response = await axios.get(`https://cataas.com/cat/says/${says}`, {
            responseType: 'arraybuffer'  // This ensures the data is received as a buffer
        });

        // Set the appropriate headers for the image type (in this case, I'm assuming JPEG. You might need to adjust based on actual content type)
        res.setHeader('Content-Type', 'image/jpeg');

        // Send the image data to the client
        res.send(Buffer.from(response.data, 'binary'));
    } catch (error) {
        res.status(500).send('Error fetching cat image.');
    }
});

app.listen(3000, () => {
    console.log('Server listening to Port 3000')
})