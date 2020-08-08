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
        type: String,
        required: true
    },
    age: {
        type: Number,
        validate(value){
            if(value< 0)
                throw new Error('Age must be a positive number');
        }
    },
});

// // Create a new document
// const me = new User({
//     name: 'Sumit',
//     age: 21
// });

// // Save the new document
// me.save()
//     .then((res) => {
//         console.log(res);
//     })
//     .catch( (err) => {
//         console.log(err);
//     });

const Tasks = mongoose.model('Tasks', {
    description: {
        type: String
    },
    completed: {
        type: Boolean
    }
});

const new_task = new Tasks({
    description: "Be cool!",
    completed: true
});

new_task.save()
    .then(res => {
        console.log(res);
    })
    .catch(err => {
        console.log(err);
    });
