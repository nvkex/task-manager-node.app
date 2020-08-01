const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

// Local Mongodb Port
const connectionURL = 'mongodb://127.0.0.1:27017';

// Database name
const databaseName = 'task-manager';

MongoClient.connect(
    connectionURL, 
    {useNewUrlParser: true},
    (error, client) => {

        // Handle errors
        if(error){
            return console.log(error);
        }
        console.log('Connected!');

        const db = client.db(databaseName);
        db.collection('users').insertOne({name: 'Jetha Lal', age: 44});
        

    })
