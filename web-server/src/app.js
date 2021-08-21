const { response } = require('express')
const express = require('express')

const app = express()

app.get('', (request, response) => {
    response.send([{
        message: 'Hello World!',
        date: 'August 20th, 2021'
    },{
        message: 'This is my Web Server!',
        date: 'August 20th, 2021'
    }])
})

app.get('/help', (request, response) => {
    response.send({
        message: 'Contact us:',
        email: 'larissabianchi@gmail.com',
        phone: '4002-8922'
    })
})

app.get('/about', (request, response) => {
    response.send({
        name: 'Larissa Cardoso Bianchi',
        city: 'Bragança Paulista - SP',
        birth: 'February 16th, 2001'
    })
})

app.get('/credits', (request, response) => {
    response.send('<h1>Server By Larissa Bianchi</h1>')
})

app.listen(3000, () => {
    console.log('Server is up on port 3000.')
})