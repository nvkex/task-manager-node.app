const mongoose = require('mongoose');
const validator = require('validator');

// Connection to local mongodb server
mongoose.connect('mongodb://127.0.0.1:27017/task-manager', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
});

// Define DB Model
const User = mongoose.model('User', {
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        validate(value){
            // Validate Email with validator package
            if(!validator.isEmail(value))
                throw new Error('Email is invalid');
        }
    },
    password: {
        type: String,
        required: true,
        minlength: 7,
        validate(value){
            // Validate Password
            if(value.trim().toLowerCase().includes('password'))
                throw new Error('Password cannot contain \'password\'');
        }
    },
    age: {
        type: Number,
        validate(value){
            // Reject negative values for age
            if(value< 0)
                throw new Error('Age must be a positive number');
        }
    },
});

// Create a new document
const me = new User({
    name: 'Sumit',
    age: 21,
    password: 'okokokok',
    email: 'email@email.com'
});

// Save the new document
me.save()
    .then((res) => {
        console.log(res);
    })
    .catch( (err) => {
        console.log(err);
    });

const Tasks = mongoose.model('Tasks', {
    description: {
        type: String,
        required: true,
        trim:true
    },
    completed: {
        type: Boolean,
        default: false
    }
});

const new_task = new Tasks({
    description: "Be cool!",
    completed: true
});

// new_task.save()
//     .then(res => {
//         console.log(res);
//     })
//     .catch(err => {
//         console.log(err);
//     });
