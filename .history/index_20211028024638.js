const express = require('express');
const { MongoClient } = require('mongodb');
require('dotenv').config();

const app = express();
const port = 5000;



const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.upabr.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

async function run() {
    try {

    }
    finally {
        await client.close();
    }
}
run().catch(console.dir);
app.get('/', (req, res) => {
    res.send('running car..');
});

app.listen(port, () => {
    console.log("Running server on port " + port);
});