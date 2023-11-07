const express = require('express');
const cors = require('cors');
const logger = require("./logger");

const app = express();
app.use(cors());
app.use(express.json())
app.use(logger)

const medievalQs = require('./medieval')
const industrialQs = require("./industrialRev")

const port = 3000;

app.listen(port, () => {
    console.log(`API listening on port ${port}.`);
})

app.get('/', (req, res) => {
    res.send(`Welcome to team 3 project!`);
})

app.get('/medieval', (req, res) => {
    res.status(200).send(medievalQs)
})

app.get('/random/medieval', (req, res) => {
    const randomQ = Math.floor(Math.random()*medievalQs.length)
    res.status(200).send(medievalQs[randomQ])
})

app.get("/industrialrevolution", (req,res)=>{
    res.status(200).send(industrialQs)
})

app.get("/random/industrialrevolution", (req,res)=>{
    const randomQ = Math.floor(Math.random()*industrialQs.length)
    res.status(200).send(industrialQs[randomQ])
})