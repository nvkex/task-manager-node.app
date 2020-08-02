const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

// Local Mongodb Port
const connectionURL = 'mongodb://127.0.0.1:27017';

// Database name
const databaseName = 'task-manager';

MongoClient.connect(
    connectionURL,
    { useNewUrlParser: true, useUnifiedTopology:true },
    (error, client) => {

        // Handle errors
        if (error) {
            return console.log(error);
        }
        console.log('Connected!');

        const db = client.db(databaseName);

        // Insert a single document in the collection
        // db.collection('users').insertOne(
        //     {name: 'Jetha Lal', age: 44},
        //     (err, result) => {
        //         console.log(result.ops);
        //     });

        // Insert multiple documents in the colllection
        db.collection('tasks').insertMany(
            [
                { description: 'NodeJS', progress: 70, completed: false },
                { description: 'ReactJS', progress: 60,completed: false },
                { description: 'VueJS',  progress: 30,ompleted: false }
            ],
            (err, result) => {
                console.log(result.ops);
            }
        )


    })
