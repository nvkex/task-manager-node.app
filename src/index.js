const express = require('express');

const app = express();
const port = process.env.PORT || 3001;

app.post('/users', (req,res) => {
    res.send('Working');
});

app.listen(port, () =>{
    console.log(port);
});