const express = require('express');

// Connect mongoose
require('./db/mongoose');

const User = require('./models/user');

const app = express();

// Set default Port
const port = process.env.PORT || 3001;

// JSON Parser 
app.use(express.json());

app.post('/users', (req,res) => {
    const user = new User(req.body);

    // Save to db
    user.save()
        .then( res => {
            res.send(user);
        })
        .catch( err => {
            console.log(err);
        })
});

app.listen(port, () =>{
    console.log(port);
});