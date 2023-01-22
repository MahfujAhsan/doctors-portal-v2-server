const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion } = require('mongodb');
const port = process.env.PORT || 5000;

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

const uri = `mongodb+srv://${process.env.DB_ADMIN}:${process.env.DB_SECURITY_KEY}@doctorsportaldb.emopfua.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

async function run() {
    try {

    }
    finally {

    }
};



app.get('/', async(req, res) => {
    res.send('Doctors Portal Server is Running...')
});

app.listen(port, () => {
    console.log(`Doctors Portal Running On ${port}`);
})