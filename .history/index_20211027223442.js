const express = require('express');
const { MongoClient } = require('mongodb');
const app = express();
const port = 5000;
const uri = "mongodb+srv://mydbuser1:<password>@cluster0.upabr.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
    const collection = client.db("test").collection("devices");
    // perform actions on the collection object
    client.close();
});
app.get('/', (req, res) => {
    res.send('running car..');
})

app.listen(port, () => {
    console.log("Running server on port " + port);
})