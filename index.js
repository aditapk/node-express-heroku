const express = require('express');
const app = express();
const MongoClient = require('mongodb').MongoClient;

const uri = "mongodb+srv://aditap:Lacky1234@cluster0.j3bjd.mongodb.net"

config = {useNewUrlParser: true}


app.get('/', (req, res) => {
    res.send('Welcome to Heroku webserver');
})

app.get('/api', (req, res) => {
    res.send('This is for API');
})

async function getData(dbname, collection) {
    try {
        const client = await MongoClient.connect(uri)
        const data = await client.db(dbname).collection(collection).find({}).toArray()
        client.close()
        return data
    }catch (err) {
        throw err
    }
}

app.get('/api/:database/:collection', async (req, res)=>{
    const dbname = req.params.database
    const collection = req.params.collection

    try {
        const data = await getData(dbname, collection)
        res.send(data)
    }
    catch (err) {
        res.send(err)
    }
    // send out database 
})

const port = process.env.PORT || 3000;

app.listen(port, ()=>{
    console.log(`server listen on port ${port}`);
})