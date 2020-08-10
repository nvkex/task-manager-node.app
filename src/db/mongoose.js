const mongoose = require('mongoose');
const validator = require('validator');

// Connection to local mongodb server
mongoose.connect('mongodb://127.0.0.1:27017/task-manager', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
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
