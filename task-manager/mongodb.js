// CRUD create read update delete

const {
    MongoClient,
    ObjectID
} = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionURL, {
    useNewUrlParser: true
}, (error, client) => {
    if (error) {
        return console.log('Unable to connect to database!')
    }

    const db = client.db(databaseName)

    // db.collection('users').findOne({
    //         _id: new ObjectID("5cd3b9a298baa701bcbbd7d0")
    //     },
    //     (error, user) => {
    //         if (error) {
    //             return console.log('Unable to fetch')
    //         }

    //         console.log(user)
    //     })

    // db.collection('users').find({
    //     age: 22
    // }).toArray((error, users) => {
    //     console.log(users)
    // })

    // db.collection('users').insertOne({
    //     name: 'Syauqi',
    //     age: 21
    // }, (error, result) => {
    //     if (error) {
    //         return console.log('Unable to insert user')
    //     }

    //     console.log(result.ops)
    // })

    // db.collection('users').insertMany([{
    //     name: 'Jen',
    //     age: 23
    // }, {
    //     name: 'Joko',
    //     age: 24
    // }], (error, result) => {
    //     if (error) {
    //         return console.log('Unable to insert documents')
    //     }

    //     console.log(result.ops)
    // })

    // db.collection('tasks').findOne({
    //     _id: new ObjectID("5cd390dfec3fbd3d0c83a5ff")
    // }, (error, task) => {
    //     if (error) {
    //         return console.log('Cannot find task!')
    //     }

    //     console.log(task)
    // })

    // db.collection('tasks').find({
    //     completed: false
    // }).toArray((error, tasks) => {
    //     if (error) {
    //         return console.log('Cannot find tasks!')
    //     }

    //     console.log(tasks)
    // })

    // db.collection('users').updateOne({
    //     _id: new ObjectID("5cd38c903009b532ecbfe26f")
    // }, {
    //     $inc: {
    //         age: -1
    //     }
    // }).then((result) => {
    //     console.log(result)
    // }).catch((error) => {
    //     console.log(error)
    // })

    // db.collection('tasks').updateMany({
    //     completed: false
    // }, {
    //     $set: {
    //         completed: true
    //     }
    // }).then((result) => {
    //     console.log(result.modifiedCount)
    // }).catch((error) => {
    //     console.log(error)
    // })

    // db.collection('users').deleteMany({
    //     age: 21
    // }).then((result) => {
    //     console.log(result)
    // }).catch((error) => {
    //     console.log(error)
    // })

    db.collection('tasks').deleteOne({
        description: 'Membeli beras'
    }).then((result) => {
        console.log(result)
    }).catch((error) => {
        console.log(error)
    })
})