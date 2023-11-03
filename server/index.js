const express = require('express');
const cors = require('cors');
const logger = require("./logger");

const app = express();
app.use(cors());
app.use(express.json())

const port = 3000;

app.listen(port, () => {
    console.log(`API listening on port ${port}.`);
})

// app.use(logger);


app.get('/', (req, res) => {
    res.send(`Welcome to team 3 project!`);
})