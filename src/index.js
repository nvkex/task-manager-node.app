const express = require('express');

const app = express();

// Set default Port
const port = process.env.PORT || 3001;

// JSON Parser 
app.use(express.json());

app.post('/users', (req,res) => {
    res.send('Working');
});

app.listen(port, () =>{
    console.log(port);
});