const express = require('express');
const { MongoClient } = require('mongodb');
const app = express();
const port = 5000;

app.get('/', (req, res) => {
    res.send('running car..');
})

app.listen(port, () => {
    console.log("Running server on port " + port);
})