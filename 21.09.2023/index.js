import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Hier können Sie Ihren Express-Server-Code schreiben

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});