const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Welcome to Heroku webserver');
})

app.get('/api', (req, res) => {
    res.send('This is for API');
})

const port = process.env.PORT || 3000;

app.listen(port, ()=>{
    console.log(`server listen on port ${port}`);
})