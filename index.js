const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello, Express web server');
})

const port = process.env.PORT || 3000;

app.listen(port, ()=>{
    console.log(`server listen on port ${port}`);
})