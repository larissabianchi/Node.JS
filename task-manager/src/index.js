const express = require('express')
require('./db/mongoose')
const User = require('./models/user')
const Task = require('./models/task')
const { request, response } = require('express')

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())

app.post('/users', (request, response) => {
    const user = new User(request.body)

    user.save().then(() => {
        response.status(201).send(user)
    }).catch((e) => {
        response.status(400).send(e)
    })
})

app.get('/users', (request, response) => {
    User.find({}).then((users) => {
        response.send(users)
    }).catch((e) => {
        response.status(500).send(e)
    })
})

app.get('/users/:id', (request, response) => {
    const _id = request.params.id

    User.findById(_id).then((user) => {
        if(!user){
            return response.status(404).send()
        }

        response.send(user)
    }).catch((e) => {
        response.status(500).send(e)
    })
})

app.post('/tasks', (request, response) => {
    const task = new Task(request.body)

    task.save().then(() => {
        response.status(201).send(task)
    }).catch((e) => {
        response.status(400).send(e)
    })
})

app.get('/tasks', (request, response) => {
    Task.find({}).then((tasks) => {
        response.send(tasks)
    }).catch((e) => {
        response.status(500).send(e)
    })
})

app.get('/tasks/:id', (request, response) => {
    const _id = request.params.id

    Task.findById(_id).then((task) => {
        if(!task){
            return response.status(404).send()
        }

        response.send(task)
    }).catch((e) => {
        response.status(500).send(e)
    })
})

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})