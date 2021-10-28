const express = require('express');
const { MongoClient } = require('mongodb');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = 5000;

//middleware
app.use(cors());
app.use(express.json());


const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.upabr.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

async function run() {
    try {
        await client.connect();

        const database = client.db('carMechanic');
        const servicesCollection = database.collection('services');

        //post api
        app.post('/services', async (req, res) => {

            const service = req.body;
            console.log("hit the post api");
            //const result = await servicesCollection.insertOne(service);
            res.send("haha");
        })
    }
    finally {
        //await client.close();
    }
}
run().catch(console.dir);
app.get('/', (req, res) => {
    res.send('running car..');
});

app.listen(port, () => {
    console.log("Running server on port " + port);
});