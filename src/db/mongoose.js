const mongoose = require('mongoose');

// Connection to local mongodb server
mongoose.connect('mongodb://127.0.0.1:27017/task-manager', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
});

// Define DB Model
const User = mongoose.model('User', {
    name: {
        type: String
    },
    age: {
        type: Number
    },
});

// Create a new document
const me = new User({
    name: 'Sumit',
    age: 21
});

// Save the new document
me.save()
    .then((res) => {
        console.log(res);
    })
    .catch( (err) => {
        console.log(err);
    });


