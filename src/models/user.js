const mongoose = require('mongoose');
const validator = require('validator');

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

module.exports = User;