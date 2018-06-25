// const MongoClient = require ('mongodb').MongoClient;
const { MongoClient, ObjectID } = require ('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) {
        return console.log('Unable to connect to mongodb server');
    }
    console.log('Connected to mongoDb server');

    const db = client.db('TodoApp');
    // deleteMany
    /*db.collection('Users').deleteMany({name: 'dani'}).then((result) => {
        console.log(result);
    }, (err) => {
        console.log('Unable to delete todos', err);
    });*/
    //deleteOne
    /*db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) => {
        console.log(result);
    }, (err) => {
        console.log('Unable to delete todos', err);
    });*/
    //findOneAndDelete
    /*db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
        console.log(result);
    }, (err) => {
        console.log('Unable to delete todos', err);
    });*/

    db.collection('Users').findOneAndDelete({_id: new ObjectID("5b2bc36c6cffdeefc4c4ba9a")}).then((result) => {
        console.log(result);
    }, (err) => {
        console.log(JSON.stringify(result, undefined, 2));
    });

    //db.close();
});