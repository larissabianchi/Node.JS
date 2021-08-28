const path = require('path')
const express = require('express')
const { request } = require('http')
const { response } = require('express')

const app = express()
const publicDirectoryPath = path.join(__dirname, '../public')

app.set('view engine','hbs')
app.set('views', path.join(__dirname, '../views'));
app.use(express.static(publicDirectoryPath))

app.get('', (request, response) => {
    response.render('index', {
        title: 'Weather',
        name: 'Larissa Bianchi'
    })
})

app.get('/about', (request, response) => {
    response.render('about', {
        title: 'About',
        caption: 'Developer:',
        name: 'Larissa Cardoso Bianchi',
        city: 'Bragança Paulista - SP',
        birth: 'February 16th, 2001'
    })
})

app.get('/help', (request, response) => {
    response.render('help', {
        title: 'Help',
        caption: 'Contact us:',
        email: 'larissabianchi16@gmail.com',
        phone: '(11)4002-8922'
    })
})

app.get('/weather', (request, response) => {
    response.send('<h1>Weather</h1>')
})

app.listen(3000, () => {
    console.log('Server is up on port 3000.')
})