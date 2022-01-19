const express = require('express')
const User = require('../models/user')
const router = new express.Router()

router.post('/users', async (request, response) => {
    const user = new User(request.body)

    try {
        await user.save()
        response.status(201).send(user)
    } catch(e) {
        response.status(400).send(e)
    }
})

router.get('/users', async (request, response) => {
    try {
        const users = await User.find({})
        response.send(users) 
    } catch(e) {
        response.status(500).send(e)
    }    
})

router.get('/users/:id', async (request, response) => {    
    try {
        const user = await User.findById(request.params.id)
        if (!user) {
            return response.status(404).send()
        }        

        response.send(user)
    } catch(e) {
        response.status(500).send()
    }
})

router.patch('/users/:id', async (request, response) => {
    const updates = Object.keys(request.body)
    const allowedUpdates = ['name', 'email', 'password', 'age']
    const isValidOperation = updates.every((update) => allowedUpdates.includes(update))

    if (!isValidOperation){
        return response.status(400).send({error: 'Invalid updates!'})
    }

    try{
        const user = await User.findByIdAndUpdate(request.params.id, request.body, {new: true, runValidators: true})
        if (!user) {
            response.status(404).send()
        }

        response.send(user)
    } catch(e) {
        response.status(400).send(e)
    }
})

router.delete('/users/:id', async (request, response) => {
    try {
        const user = await User.findByIdAndDelete(request.params.id)

        if (!user) {
            return response.status(404).send()
        }

        response.send(user)
    } catch(e) {
        response.status(500).send(e)
    }
})

module.exports = router