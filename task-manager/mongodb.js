//CRUD (Create, Read, Update, Delete)

const { MongoClient, ObjectID} = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionURL, { useNewURLParser: true }, (error, client) => {
    if(error){
        return console.log('Unable to connect to database!')
    }

    const db = client.db(databaseName)

    db.collection('tasks').deleteOne({
        description: "Finish the course"
    }).then((result) => {
        console.log(result)
    }).catch((error) => {
        console.log(error)
    })
})