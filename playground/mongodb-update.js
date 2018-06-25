// const MongoClient = require ('mongodb').MongoClient;
const { MongoClient, ObjectID } = require ('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) {
        return console.log('Unable to connect to mongodb server');
    }
    console.log('Connected to mongoDb server');

    const db = client.db('TodoApp');
    
    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID('5b2bc38f6cffdeefc4c4baa9')
    }, {
        $set: {
            name: 'Dani'
        },
        $inc: { 
            age: 1
        } 
    }, {
        returnOriginal: false
    }).then((result) => {
        console.log(result);
    }, (err) => {
        console.log(err);
    });

    
    //db.close();
});