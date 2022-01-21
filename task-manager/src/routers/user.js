const express = require('express')
const User = require('../models/user')
const auth = require('../middleware/auth')
const router = new express.Router()

User.createIndexes()

router.post('/users', async (request, response) => {
    const user = new User(request.body)

    try {
        await user.save()

        const token = await user.generateAuthToken()
        response.status(201).send({ user, token })
    } catch(e) {
        response.status(400).send(e)
    }
})

router.post('/users/login', async (request, response) => {
    try {
        const user = await User.findByCredentials(request.body.email, request.body.password)
        const token = await user.generateAuthToken()
        response.send({ user, token})
    } catch(e) {
        response.status(400).send()
    }
})

router.post('/users/logout', auth, async (request, response) => {
    try {
        request.user.tokens = request.user.tokens.filter((token) => {
            return token.token !== request.token
        })
        await request.user.save()

        response.send()
    } catch (e) {
        response.status(500).send(e)
    }
})

router.post('/users/logoutAll', auth, async (request, response) => {
    try {
        request.user.tokens = []
        await request.user.save()

        response.send()
    } catch (e) {
        response.status(500).send(e)
    }
})

router.get('/users/me', auth, async (request, response) => {
    response.send(request.user)  
})

router.patch('/users/me', auth, async (request, response) => {
    const updates = Object.keys(request.body)
    const allowedUpdates = ['name', 'email', 'password', 'age']
    const isValidOperation = updates.every((update) => allowedUpdates.includes(update))

    if (!isValidOperation){
        return response.status(400).send({error: 'Invalid updates!'})
    }

    try{        
        updates.forEach((update) => request.user[update] = request.body[update])
        await request.user.save()
        
        response.send(request.user)
    } catch(e) {
        response.status(400).send(e)
    }
})

router.delete('/users/me', auth, async (request, response) => {
    try {
        await request.user.remove()
        response.send(request.user)
    } catch(e) {
        response.status(500).send(e)
    }
})

module.exports = router